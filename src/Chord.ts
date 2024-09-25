/* This module creates common jazz chords for all 12 notes.
 * Author: Amen Zwa, Esq.
 * Copyright: sOnit, Inc. */

export type I = (typeof ii)[number]; // intervals
export type R = (typeof rr)[number]; // root note of chords
export type C = (typeof cc)[number]; // chords
export type Chord = { name: string, notes: string[] } // chord

export function Chord(kind: C, root: R): Chord {
  function nameOf(): string { return `${root.split("=")[0]} ${kind}`; }
  function notesOf(): string[] {
    function note(interval: string, index: number): string { // note at the interval
      const r: number = rr.indexOf(root); // root note index
      const d: string = ww[(ww.indexOf(root[0]) + 2 * index) % 7]; // mod 7 group; degree index = 2 * interval index
      const i: number = (r + ii.indexOf(interval)) % 12; // mod 12 group; interval index
      const [b, x] = hh[i].split("=");
      return b[0] === d ? b : x; // select flat b or sharp x
    }
    return ci[kind].map((i, x) => note(i, x));
  }
  return {name: nameOf(), notes: notesOf()};
}
export function stringOf(c: Chord): string { return `${c.name}: ${c.notes.join("-")}`; }

export function roots(): Readonly<string[]> { return rr; }
export function chords(): Readonly<string[]> { return cc; }

const rr = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"] as const; // root note names
const cc = ["dim7", "hd7", "min6", "min7", "mM7", "Maj6", "Dom7", "Maj7", "Aug7"] as const; // chord names
const ww = ["C", "D", "E", "F", "G", "A", "B"]; // whole-step note names
const hh = ["C=C", "Db=C#", "D=D", "Eb=D#", "E=E", "F=F", "Gb=F#", "G=G", "Ab=G#", "A=A", "Bb=A#", "B=B"]; // half-step note names
const ii = ["P1=d2", "m2=A1", "M2=d3", "m3=A2", "M3=d4", "P4=A3", "A4=d5", "P5=d6", "m6=A5", "M6=d7", "m7=A6", "M7=d8"]; // interval names
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
