# chord
The modern music notation is the result of many millennia of evolution. Having been invented by humans for the exclusive use of humans, the notation is full of shorthands, variations, duplications, and other oddities. Jazz chord notation in particular has accumulated many inconsistencies, through the ages. This makes implementing a jazz chord generator an interesting programming task.

The most bewildering aspect of music notation is not the usage rules themselves, but the existence of many variations and exceptions to those few rules. When faced with such inconsistencies in programming, often the simplest thing to do is to manually encode both the rules and the exceptions as textual data. This approach is error prone, tiresome, uninspiring. Instead, we implement here a jazz chord generator in the fewest possible lines of code by finding a small set of consistent internal patterns that underlie the myriad outward inconsistencies.

The main goal of this project, though, is to demonstrate how the solution code is synthesised from a detailed analysis of the problem domain and the definition of a set of user needs—the practice of software development. By confining ourselves to music notation, which is a codified problem domain, we are able to focus our full attention on programming, without getting mired in the complexities and the vagaries of the problem domain.

This project is a work-in-progress. At present, it implements only a simple chord generator for the most commonly used jazz chords. In due course, it will expand to include other musical concepts such as inversions, progressions, scales, modes, keys, and so on. But the focus shall remain always on discovering interesting programming challenges.

# USAGE

Clone the Git repository and build the project using a Unix terminal, for example, the macOS Terminal.

```sh
$ cd ~/Documents
$ git clone https://github.com/amenzwa/chord.git
$ cd chord
$ npm install
$ npm run build
```

I assume that you have the Node environment installed. If not, follow the [installation instructions](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) published on the Node.js site. If you use macOS and the [Homebrew](https://brew.sh) package manager, type in the command `brew install node` at the terminal prompt.

To list the chords for all 12 root nodes from C through B, type in this command.

```sh
$ npm run list
```

And to run the chord finder TUI, type in this command.

```sh
$ npm run find
```

Upon startup, `find` shows the main ***chord*** screen menu which, at present, contains only the `r` command that allows us to select the root note of the chord we are seeking. Other commands will appear here, as this project expands in functionality. Type in `r` at the `chord> ` prompt.

We now enter the ***chord.root*** screen. Here, we select the root note of the chord we are searching by typing in one of the following: `C`, `Db`, `D`, `Eb`, `E`, `F`, `Gb`, `G`, `Ab`, `A`, `Bb`, or `B`. To select A as the root note, we type in `A` at the `chord.root> ` prompt.

This takes us to the ***chord.type*** screen, where we are presented with the chord type menu. The following chords are currently supported:

- `dim7` diminished 7th
- `hd7` half-diminished 7th
- `min6` minor 6th
- `min7` minor 7th
- `mM7` minor-Major 7th
- `Maj6` Major 6th
- `Dom7` Dominant 7th
- `Maj7` Major 7th
- `Aug7` Augmented 7th

When we type in `Aug7` at the `chord.type> ` prompt, we see on the screen the 1st, 3rd, 5th, and 7th notes of the A Aug7 chord, which are A-C♯-F-G.

```
  A Aug7: A-C#-F-G
```

Typing in `b` at the `chord.type> ` prompt would exit the ***chord.type*** screen and revert back to the ***chord.root*** screen. From there, typing in another `b` would return to the main ***chord*** screen. At any prompt, typing in `^c` would terminate the application.

# IMPLEMENTATION

The initial version of this application is implemented in [TypeScript](https://www.typescriptlang.org/) on [Node](https://nodejs.org/en) as a TUI application. Later, we will progress to a desktop GUI application, say using [NodeGui](https://docs.nodegui.org/) JavaScript framework, which is based on the venerable [Qt](https://www.qt.io/product/framework) multi-platform C++ GUI framework. Since the TUI is far simpler to implement than the GUI, the TUI can serve as an exploratory medium to try out different user interaction ideas, before expending the effort to implement the GUI.

Note that despite using TypeScript, our priority is not expressing complicated types, but expressing music notations succinctly in code. And given the constrained nature of the problem domain, we can afford to forgo some type safety, for instance, by representing notes and intervals with strings, instead of defining precise types therefor.

The central concepts in constructing a chord are the root note and the intervals. A triad comprises three notes and two intervals between them. A typical jazz chord consists of four notes and three intervals between them. Fortunately for us programmers, music notation has been codified, long before the advent of computing. So, we may thoroughly analyse the relevant music notation rules and all their gloriously quirky exceptions—as we did above—then implement the code that best represents our understanding thereof.

Let us examine the module `./src/Chord.ts`. First, we need to define the type for all 12 root notes of a chord. In TypeScript, we can define the [coproduct](https://en.wikipedia.org/wiki/Coproduct) type `R` as follows.

```typescript
type R = "C" | "Db" | "D" | ... | "A" | "Bb" | "B"
```

But we also need the names of these notes in half-steps, which we will use later to generate test data, user interface menus, and so on. So, we define a list of note names as follows.

Musicians prefer to use flat (♭), not sharp (♯), for notational convenience. For instance, the D♯ Major scale comprises D♯, E♯, F♯♯, G♯, A♯, B♯, C♯♯, whereas the enharmonic E♭ Major scale comprises E♭, F, G, A♭, B♭, C, D. Notating, on paper, the D♯ key is like juggling with seven fine-honed [Bowie knives](https://en.wikipedia.org/wiki/Bowie_knife), but notating the tonally (practically) identical E♭ key involves dulling out just three notes, E, A, and B. The notational preference for ♭ over ♯ is clear. So, we use D♭ not C♯, E♭ not D♯, and so on.

```typescript
const rr = ["C", "Db", "D", ..., "A", "Bb", "B"] // chord root note names
```

This idiom of defining a type and the identically named strings is common enough in TypeScript programming that the language provides a shortcut that allows us programmers to "extract" the type from a list enumerating the strings. That is, we may extract the type `R` from the string list `rr`, thusly.

```typescript
type R = (typeof rr)[number] // type R = "C" | "Db" | ...
```

Likewise, we define the 12 interval names and their corresponding coproduct type like this.

```typescript
const ii = [ // interval names (inferred type is string[])
  "P1=d2", // Perfect 1st (unison) = diminished 2nd
  "m2=A1", // minor 2nd = Augmented 1st
  "M2=d3", // Major 2nd = diminished 3rd
  "m3=A2", // minor 3rd = Augmented 2nd
  "M3=d4", // Major 3rd = diminished 4th
  "P4=A3", // Perfect 4th = Augmented 3rd
  "A4=d5", // Augmented 4th = diminished 5th (tritone)
  "P5=d6", // Perfect 5th = diminished 6th
  "m6=A5", // minor 6th = Augmented 5th
  "M6=d7", // Major 6th = diminished 7th
  "m7=A6", // minor 7th = Augmented 6th
  "M7=d8"] // Major 7th = diminished Perfect 8th (octave)
type I = (typeof ii)[number] // type I = "P1=d2" | "m2=A1" | ...
```

With the root note type `R` and the interval type `I` in hand, we may now describe the common jazz chords as a hash map, called the `Record` in TypeScript.

```typescript
const ci: Record<C, I[]> = { // chord intervals
  "dim7": ["P1=d2", "m3=A2", "A4=d5", "M6=d7"],
  "hd7": ["P1=d2", "m3=A2", "A4=d5", "m7=A6"],
  "min6": ["P1=d2", "m3=A2", "P5=d6", "M6=d7"],
  "min7": ["P1=d2", "m3=A2", "P5=d6", "m7=A6"],
  "mM7": ["P1=d2", "m3=A2", "P5=d6", "M7=d8"],
  "Maj6": ["P1=d2", "M3=d4", "P5=d6", "M6=d7"],
  "Dom7": ["P1=d2", "M3=d4", "P5=d6", "m7=A6"],
  "Maj7": ["P1=d2", "M3=d4", "P5=d6", "M7=d8"],
  "Aug7": ["P1=d2", "M3=d4", "m6=A5", "m7=A6"],
};
```

We can read the elements of `ci` as follows: the `Maj7` Major 7th chord is constructed out of the intervals `P1=d2` Perfect 1st, `M3=d4` Major 3rd, `P5=d6` Perfect 5th, and `M7=d8` Major 7th. Hence, the `C Maj7` C Major 7th chord comprises C (P1), E (M3), G (P5), and B (M7). In other words, the four-element interval list *value* associated with the chord type *key* of the *hash* `ci` defines the 1st, 3rd, 5th, and 7th notes of that chord type.

Our next task is to define and construct a chord. We do this by defining the `Chord` type and the `Chord` constructor function in the `Chord.ts` module.

```typescript
export type Chord = { name: string, notes: string[] }
export function Chord(kind: C, root: R): Chord {
  function nameOf(): string { return `${root.split("=")[0]} ${kind}`; }
  function notesOf(): string[] {
    function note(interval: string, index: number): string {
      const r: number = rr.indexOf(root);
      const i: number = (r + ii.indexOf(interval)) % 12;
      const d: string = ww[(ww.indexOf(root[0]) + 2 * index) % 7];
      const [b, x] = hh[i].split("=");
      return b[0] === d ? b : x;
    }
    return ci[kind].map((interval, index) => note(interval, index));
  }
  return {name: nameOf(), notes: notesOf()};
}
```

To construct a value of type `Chord`, we invoke the constructor function `Chord()` like this.

```typescript
const AAug7 = Chord(Aug7, A) // chord type = Aug7, root note = A
```

Above, the `Chord()` constructor function takes the chord type `Aug7` of type `C` and the root note name `A` of type `R`, and constructs a value of type `Chord`. The `name` field of the type is assigned the value `A Aug7`, the value returned by the inner function `nameOf()`—that is straightforward enough. But the wiggly bits are in the definition of the inner function `notesOf()`, which generates the component notes of the chord under construction.

The `notesOf()` inner function itself contains the `note()` inner function, which does all the work of computing the note name for the interval of the $n$th note of the chord. Each call to `note()` passes the interval name and the zero-based interval index. For example, the index of P1 = 0, M3 = 1, P5 = 2, and M7 = 3. For the A Aug7 chord, P1 = A, M3 = C♯, m6 = F, and m7 = G. This arrangement of notes is computed by the `note()` function by converting the chord's root note name into an index value `r` and the chord's interval name into a mod-12 group index value `i`. The expression `rr.indexOf(root)` converts the root note name into its corresponding index: C = 0, D♭ = 1, D = 2, ..., B = 11. The expression `(r + ii.indexOf(interval)) % 12` converts the interval name into its corresponding mod-12 index: P1 = 0, m2 = 1, M2 = 2, ..., M7 = 11. The `%` operator ensures that the interval index value always stays in the range $[0, 11]$.

As an example, we shall compute the Major 3rd note of the root note A is computed as follows:

- The index `r` of A is `rr.indexOf("A") = 9`
- The index `i` of the M3 interval of A is `(9 + 4) % 12 = 1`
- The M3 note of A is `hh[1] = "Db=C#"`
- The express `[b, x] = hh[i].split("=")` results in `b = "Db"` and `x = "C#"`

We now need to decide the M3 of A is whether D♭ or C♯. These two notes are enharmonic, so on a musical instrument, they are played as the same note. But theoretically, they are distinct: the Major 3rd of A is C. So, the correct M3 note for the A Aug7 chord is C♯, not D♭.

Let us see how this choice is computed by the expression `ww[(ww.indexOf(root[0]) + 2 * index) % 7]`. In our current example, `root[0] = "A"` and `index = 1`:

- The subexpression evaluates to `ww.indexOf("A") = 5`
- The degree index value is `(5 + 2 * 1) % 7 = 0`
- The degree name is `ww[0] = "C"`
- The condition `b[0] === d` evaluates to `"D" === "C" = false`
- The return value is `x = "C#"`

Hence, the Major 3rd note of the root note A is C♯.
