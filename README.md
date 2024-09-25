# chord
The modern music notation is the result of many millennia of evolution. Having been invented by intelligent humans for the exclusive use of intelligent humans, the notation is full of shorthands, variations, duplications, and oddities. Jazz chord notation, used by working musicians, has accumulated many such inconsistencies, through the ages. This makes implementing a jazz chord generator an interesting programming task.

The most bewildering aspect of music notation is not the rules, per se, for there are only a few of them, but the existence of many variations and exceptions to those few rules. When faced with such inconsistencies in programming, often the simplest thing to do is to manually encode both the rules and the exceptions as textual data. This approach is error prone, tiresome, uninspiring and, frankly, it is cheating. Instead, we implement here a simple generator for common jazz chords in the fewest possible lines of code by finding a set of consistent interior patterns that underlie those exterior inconsistencies.

The main goal of this project, though, is to demonstrate how the solution code is synthesised from a detailed analysis of the problem domain and the user requirements—the lifecycle of software, if you will. By confining ourselves to a narrow, codified domain of music notation, we are able to focus our full attention on programming, without getting mired down by the complexities and the vagaries of the problem domain.

This project is a work-in-progress. At present, it implements only a simple chord generator. In due course, it will expand to include other music notations such as scales, modes, keys, progressions, and so on. But the focus shall remain on the interesting aspects of programming the music notation.

# USAGE

To use the code, begin by cloning the Git repository from a Unix console, like the macOS Terminal.

```sh
$ git clone https://github.com/amenzwa/chord.git
$ cd chord
$ npm install
```

I assume that you have the Node environment installed. If not, follow the [installation instructions](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) published on the Node.js site. If you use macOS and the [Homebrew](https://brew.sh) package manager, type in the command `brew install node` at the console.

To list all the chords for all 12 root nodes, run this command.

```sh
$ npm run build
$ npm run list
```

And to run the chord finder TUI, run this command.

```sh
$ npm run find
```

Upon startup, `find` shows the main menu which, at present, contains only the `r` command that selects the root note of the chord being searched. Other commands will appear here, as this project expands in functionality.

By typing in `r` at the `chord> ` prompt, we enter the `chord.root` screen. Here, we select the root note of the chord we are searching by typing in one of the following: `C`, `Db`, `D`, `Eb`, `E`, `F`, `Gb`, `G`, `Ab`, `A`, `Bb`, or `B`.

After we have selected the root note, say `A`, we arrive at the `chord.type` screen, and see the chord selection menu. The following chords are supported, currently: `dim7` diminished 7th, `hd7` half-diminished 7th, `min6` minor 6th, `min7` minor 7th, `mM7` minor-Major 7th, `Maj6` Major 6th, `Dom7` Dominant 7th, `Maj7` Major 7th, and `Aug7` Augmented 7th.

When we type in `Aug7` at the prompt, we see the 1st, 3rd, 5th, and 7th ntoes of the `A Aug7` chord we seek: `A-C#-F-G`.

Typing `b` at the prompt now would pop back to the `chord.root` screen and, from there, typing another `b` would put us back on the main `chord` screen. At any point, typing `^c` would quit the application and return to the console.
