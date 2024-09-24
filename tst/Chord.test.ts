import {describe, expect, test} from "@jest/globals";
import {C, Chord, R, rr, stringOf} from "../src/Chord";

describe("Chord tests", () => {
  rr.map(r => {
    test(`test ${r} chords`, () => {
      expect(cc[r].length > 0).toBeTruthy();
      cc[r].map(([c, nn]) => { expect(stringOf(Chord(c as C, r as R))).toEqual(`${r} ${c}: ${nn}`); });
    });
  });
});

const cc: Readonly<Record<string, [string, string][]>> = Object.freeze({ // chords
  "C": [
    ["dim7", "C-Eb-Gb-A"],
    ["hd7", "C-Eb-Gb-Bb"],
    ["min6", "C-Eb-G-A"],
    ["min7", "C-Eb-G-Bb"],
    ["Maj6", "C-E-G-A"],
    ["mM7", "C-Eb-G-B"],
    ["Dom7", "C-E-G-Bb"],
    ["Maj7", "C-E-G-B"],
    ["Aug7", "C-E-G#-Bb"]],
  "Db": [
    ["dim7", "Db-Fb-G-A#"],
    ["hd7", "Db-Fb-G-Cb"],
    ["min6", "Db-Fb-Ab-A#"],
    ["min7", "Db-Fb-Ab-Cb"],
    ["mM7", "Db-Fb-Ab-C"],
    ["Maj6", "Db-F-Ab-A#"],
    ["Dom7", "Db-F-Ab-Cb"],
    ["Maj7", "Db-F-Ab-C"],
    ["Aug7", "Db-F-A-Cb"]],
  "D": [
    ["dim7", "D-F-Ab-Cb"],
    ["hd7", "D-F-Ab-C"],
    ["min6", "D-F-A-Cb"],
    ["min7", "D-F-A-C"],
    ["mM7", "D-F-A-C#"],
    ["Maj6", "D-F#-A-Cb"],
    ["Dom7", "D-F#-A-C"],
    ["Maj7", "D-F#-A-C#"],
    ["Aug7", "D-F#-A#-C"]],
  "Eb": [
    ["dim7", "Eb-Gb-A-B#"],
    ["hd7", "Eb-Gb-A-Db"],
    ["min6", "Eb-Gb-Bb-B#"],
    ["min7", "Eb-Gb-Bb-Db"],
    ["mM7", "Eb-Gb-Bb-D"],
    ["Maj6", "Eb-G-Bb-B#"],
    ["Dom7", "Eb-G-Bb-Db"],
    ["Maj7", "Eb-G-Bb-D"],
    ["Aug7", "Eb-G-B-Db"]],
  "E": [
    ["dim7", "E-G-Bb-Db"],
    ["hd7", "E-G-Bb-D"],
    ["min6", "E-G-B-Db"],
    ["mM7", "E-G-B-D#"],
    ["min7", "E-G-B-D"],
    ["Maj6", "E-G#-B-Db"],
    ["Dom7", "E-G#-B-D"],
    ["Maj7", "E-G#-B-D#"],
    ["Aug7", "E-G#-B#-D"]],
  "F": [
    ["dim7", "F-Ab-Cb-D"],
    ["hd7", "F-Ab-Cb-Eb"],
    ["min6", "F-Ab-C-D"],
    ["min7", "F-Ab-C-Eb"],
    ["mM7", "F-Ab-C-E"],
    ["Maj6", "F-A-C-D"],
    ["Dom7", "F-A-C-Eb"],
    ["Maj7", "F-A-C-E"],
    ["Aug7", "F-A-C#-Eb"]],
  "Gb": [
    ["dim7", "Gb-A-B#-D#"],
    ["hd7", "Gb-A-B#-Fb"],
    ["min6", "Gb-A-Db-D#"],
    ["min7", "Gb-A-Db-Fb"],
    ["mM7", "Gb-A-Db-F"],
    ["Maj6", "Gb-Bb-Db-D#"],
    ["Dom7", "Gb-Bb-Db-Fb"],
    ["Maj7", "Gb-Bb-Db-F"],
    ["Aug7", "Gb-Bb-D-Fb"]],
  "G": [
    ["dim7", "G-Bb-Db-Fb"],
    ["hd7", "G-Bb-Db-F"],
    ["min6", "G-Bb-D-Fb"],
    ["min7", "G-Bb-D-F"],
    ["mM7", "G-Bb-D-F#"],
    ["Maj6", "G-B-D-Fb"],
    ["Dom7", "G-B-D-F"],
    ["Maj7", "G-B-D-F#"],
    ["Aug7", "G-B-D#-F"]],
  "Ab": [
    ["dim7", "Ab-Cb-D-E#"],
    ["hd7", "Ab-Cb-D-Gb"],
    ["min6", "Ab-Cb-Eb-E#"],
    ["min7", "Ab-Cb-Eb-Gb"],
    ["mM7", "Ab-Cb-Eb-G"],
    ["Maj6", "Ab-C-Eb-E#"],
    ["Dom7", "Ab-C-Eb-Gb"],
    ["Maj7", "Ab-C-Eb-G"],
    ["Aug7", "Ab-C-E-Gb"]],
  "A": [
    ["dim7", "A-C-Eb-Gb"],
    ["hd7", "A-C-Eb-G"],
    ["min6", "A-C-E-Gb"],
    ["min7", "A-C-E-G"],
    ["mM7", "A-C-E-G#"],
    ["Maj6", "A-C#-E-Gb"],
    ["Dom7", "A-C#-E-G"],
    ["Maj7", "A-C#-E-G#"],
    ["Aug7", "A-C#-E#-G"]],
  "Bb": [
    ["dim7", "Bb-Db-Fb-G"],
    ["hd7", "Bb-Db-Fb-Ab"],
    ["min6", "Bb-Db-F-G"],
    ["min7", "Bb-Db-F-Ab"],
    ["mM7", "Bb-Db-F-A"],
    ["Maj6", "Bb-D-F-G"],
    ["Dom7", "Bb-D-F-Ab"],
    ["Maj7", "Bb-D-F-A"],
    ["Aug7", "Bb-D-F#-Ab"]],
  "B": [
    ["dim7", "B-D-F-Ab"],
    ["hd7", "B-D-F-A"],
    ["min6", "B-D-F#-Ab"],
    ["min7", "B-D-F#-A"],
    ["mM7", "B-D-F#-A#"],
    ["Maj6", "B-D#-F#-Ab"],
    ["Dom7", "B-D#-F#-A"],
    ["Maj7", "B-D#-F#-A#"],
    ["Aug7", "B-D#-G-A"]],
});
