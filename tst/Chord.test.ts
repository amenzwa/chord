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
    ["Aug7", "C-E-G#-Bb"],
    ["Maj7", "C-E-G-B"],
    ["Dom7", "C-E-G-Bb"],
    ["Maj6", "C-E-G-A"],
    ["mM7", "C-Eb-G-B"],
    ["min7", "C-Eb-G-Bb"],
    ["min6", "C-Eb-G-A"],
    ["hd7", "C-Eb-Gb-Bb"],
    ["dim7", "C-Eb-Gb-A"]],
  "Db": [
    ["Aug7", "Db-F-A-Cb"],
    ["Maj7", "Db-F-Ab-C"],
    ["Dom7", "Db-F-Ab-Cb"],
    ["Maj6", "Db-F-Ab-A#"],
    ["mM7", "Db-Fb-Ab-C"],
    ["min7", "Db-Fb-Ab-Cb"],
    ["min6", "Db-Fb-Ab-A#"],
    ["hd7", "Db-Fb-G-Cb"],
    ["dim7", "Db-Fb-G-A#"]],
  "D": [
    ["Aug7", "D-F#-A#-C"],
    ["Maj7", "D-F#-A-C#"],
    ["Dom7", "D-F#-A-C"],
    ["Maj6", "D-F#-A-Cb"],
    ["mM7", "D-F-A-C#"],
    ["min7", "D-F-A-C"],
    ["min6", "D-F-A-Cb"],
    ["hd7", "D-F-Ab-C"],
    ["dim7", "D-F-Ab-Cb"]],
  "Eb": [
    ["Aug7", "Eb-G-B-Db"],
    ["Maj7", "Eb-G-Bb-D"],
    ["Dom7", "Eb-G-Bb-Db"],
    ["Maj6", "Eb-G-Bb-B#"],
    ["mM7", "Eb-Gb-Bb-D"],
    ["min7", "Eb-Gb-Bb-Db"],
    ["min6", "Eb-Gb-Bb-B#"],
    ["hd7", "Eb-Gb-A-Db"],
    ["dim7", "Eb-Gb-A-B#"]],
  "E": [
    ["Aug7", "E-G#-B#-D"],
    ["Maj7", "E-G#-B-D#"],
    ["Dom7", "E-G#-B-D"],
    ["Maj6", "E-G#-B-Db"],
    ["mM7", "E-G-B-D#"],
    ["min7", "E-G-B-D"],
    ["min6", "E-G-B-Db"],
    ["hd7", "E-G-Bb-D"],
    ["dim7", "E-G-Bb-Db"]],
  "F": [
    ["Aug7", "F-A-C#-Eb"],
    ["Maj7", "F-A-C-E"],
    ["Dom7", "F-A-C-Eb"],
    ["Maj6", "F-A-C-D"],
    ["mM7", "F-Ab-C-E"],
    ["min7", "F-Ab-C-Eb"],
    ["min6", "F-Ab-C-D"],
    ["hd7", "F-Ab-Cb-Eb"],
    ["dim7", "F-Ab-Cb-D"]],
  "Gb": [
    ["Aug7", "Gb-Bb-D-Fb"],
    ["Maj7", "Gb-Bb-Db-F"],
    ["Dom7", "Gb-Bb-Db-Fb"],
    ["Maj6", "Gb-Bb-Db-D#"],
    ["mM7", "Gb-A-Db-F"],
    ["min7", "Gb-A-Db-Fb"],
    ["min6", "Gb-A-Db-D#"],
    ["hd7", "Gb-A-B#-Fb"],
    ["dim7", "Gb-A-B#-D#"]],
  "G": [
    ["Aug7", "G-B-D#-F"],
    ["Maj7", "G-B-D-F#"],
    ["Dom7", "G-B-D-F"],
    ["Maj6", "G-B-D-Fb"],
    ["mM7", "G-Bb-D-F#"],
    ["min7", "G-Bb-D-F"],
    ["min6", "G-Bb-D-Fb"],
    ["hd7", "G-Bb-Db-F"],
    ["dim7", "G-Bb-Db-Fb"]],
  "Ab": [
    ["Aug7", "Ab-C-E-Gb"],
    ["Maj7", "Ab-C-Eb-G"],
    ["Dom7", "Ab-C-Eb-Gb"],
    ["Maj6", "Ab-C-Eb-E#"],
    ["mM7", "Ab-Cb-Eb-G"],
    ["min7", "Ab-Cb-Eb-Gb"],
    ["min6", "Ab-Cb-Eb-E#"],
    ["hd7", "Ab-Cb-D-Gb"],
    ["dim7", "Ab-Cb-D-E#"]],
  "A": [
    ["Aug7", "A-C#-E#-G"],
    ["Maj7", "A-C#-E-G#"],
    ["Dom7", "A-C#-E-G"],
    ["Maj6", "A-C#-E-Gb"],
    ["mM7", "A-C-E-G#"],
    ["min7", "A-C-E-G"],
    ["min6", "A-C-E-Gb"],
    ["hd7", "A-C-Eb-G"],
    ["dim7", "A-C-Eb-Gb"]],
  "Bb": [
    ["Aug7", "Bb-D-F#-Ab"],
    ["Maj7", "Bb-D-F-A"],
    ["Dom7", "Bb-D-F-Ab"],
    ["Maj6", "Bb-D-F-G"],
    ["mM7", "Bb-Db-F-A"],
    ["min7", "Bb-Db-F-Ab"],
    ["min6", "Bb-Db-F-G"],
    ["hd7", "Bb-Db-Fb-Ab"],
    ["dim7", "Bb-Db-Fb-G"]],
  "B": [
    ["Aug7", "B-D#-G-A"],
    ["Maj7", "B-D#-F#-A#"],
    ["Dom7", "B-D#-F#-A"],
    ["Maj6", "B-D#-F#-Ab"],
    ["mM7", "B-D-F#-A#"],
    ["min7", "B-D-F#-A"],
    ["min6", "B-D-F#-Ab"],
    ["hd7", "B-D-F-A"],
    ["dim7", "B-D-F-Ab"]],
});
