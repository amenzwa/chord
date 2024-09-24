export type R = "C" | "Db" | "D" | "Eb" | "E" | "F" | "Gb" | "G" | "Ab" | "A" | "Bb" | "B" // root notes of chords
export const rr: Readonly<R[]> = Object.freeze(["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]); // root note indices

export type C = "dim7" | "hd7" | "min6" | "min7" | "mM7" | "Maj6" | "Dom7" | "Maj7" | "Aug7" // chords
export type Chord = Readonly<{ name: string, notes: string[] }>
export function Chord(kind: C, root: R): Chord {
  function nameOf(): string { return `${root.split("=")[0]} ${kind}`; }
  function notesOf(): string[] {
    function note(interval: string, index: number): string {
      const r: number = rr.indexOf(root); // root note index
      const d: string = uu[(uu.indexOf(root[0]) + 2 * index) % 7]; // mod 7 group; degree index = 2 * interval index
      const i: number = (r + ii.indexOf(interval)) % 12; // mod 12 group; interval index
      const [b, x] = nn[i].split("=");
      return b[0] === d ? b : x; // select flat or sharp
    }
    return cc[kind].map((i, x) => note(i, x));
  }
  return {name: nameOf(), notes: notesOf()};
}
export function stringOf(c: Chord): string { return `${c.name}: ${c.notes.join("-")}`; }

const cc = Object.freeze({ // chord intervals
  "dim7": ["P1=d2", "m3=A2", "A4=d5", "M6=d7"],
  "hd7": ["P1=d2", "m3=A2", "A4=d5", "m7=A6"],
  "min6": ["P1=d2", "m3=A2", "P5=d6", "M6=d7"],
  "min7": ["P1=d2", "m3=A2", "P5=d6", "m7=A6"],
  "mM7": ["P1=d2", "m3=A2", "P5=d6", "M7=d8"],
  "Maj6": ["P1=d2", "M3=d4", "P5=d6", "M6=d7"],
  "Dom7": ["P1=d2", "M3=d4", "P5=d6", "m7=A6"],
  "Maj7": ["P1=d2", "M3=d4", "P5=d6", "M7=d8"],
  "Aug7": ["P1=d2", "M3=d4", "m6=A5", "m7=A6"],
});
const uu: Readonly<string[]> = Object.freeze(["C", "D", "E", "F", "G", "A", "B"]); // natural note indices
const nn: Readonly<string[]> = Object.freeze(["C=B#", "Db=C#", "D=D", "Eb=D#", "Fb=E", "F=E#", "Gb=F#", "G=G", "Ab=G#", "A=A", "Bb=A#", "Cb=B"]); // note indices
const ii: Readonly<string[]> = Object.freeze(["P1=d2", "m2=A1", "M2=d3", "m3=A2", "M3=d4", "P4=A3", "A4=d5", "P5=d6", "m6=A5", "M6=d7", "m7=A6", "M7=d8"]); // interval indices
