/* This module implements tests for the chord generator.
 * Author: Amen Zwa, Esq.
 * Copyright: sOnit, Inc. */

import {describe, expect, test} from "@jest/globals";
import {C, Chord, R, roots, stringOf} from "../src/Chord";

describe("Chord tests", () => {
  roots().map(r => {
    test(`test ${r} chords`, () => {
      expect(cc[r].length > 0).toBeTruthy();
      cc[r].map(([c, nn]) => { expect(stringOf(Chord(r as R, c as C))).toEqual(`${r} ${c}: ${nn}`); });
    });
  });
});

const cc: Record<string, [string, string][]> = { // chords test data
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
    ["dim7", "Db-E-G-A#"],
    ["hd7", "Db-E-G-B"],
    ["min6", "Db-E-Ab-A#"],
    ["min7", "Db-E-Ab-B"],
    ["mM7", "Db-E-Ab-C"],
    ["Maj6", "Db-F-Ab-A#"],
    ["Dom7", "Db-F-Ab-B"],
    ["Maj7", "Db-F-Ab-C"],
    ["Aug7", "Db-F-A-B"]],
  "D": [
    ["dim7", "D-F-Ab-B"],
    ["hd7", "D-F-Ab-C"],
    ["min6", "D-F-A-B"],
    ["min7", "D-F-A-C"],
    ["mM7", "D-F-A-C#"],
    ["Maj6", "D-F#-A-B"],
    ["Dom7", "D-F#-A-C"],
    ["Maj7", "D-F#-A-C#"],
    ["Aug7", "D-F#-A#-C"]],
  "Eb": [
    ["dim7", "Eb-Gb-A-C"],
    ["hd7", "Eb-Gb-A-Db"],
    ["min6", "Eb-Gb-Bb-C"],
    ["min7", "Eb-Gb-Bb-Db"],
    ["mM7", "Eb-Gb-Bb-D"],
    ["Maj6", "Eb-G-Bb-C"],
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
    ["Aug7", "E-G#-C-D"]],
  "F": [
    ["dim7", "F-Ab-B-D"],
    ["hd7", "F-Ab-B-Eb"],
    ["min6", "F-Ab-C-D"],
    ["min7", "F-Ab-C-Eb"],
    ["mM7", "F-Ab-C-E"],
    ["Maj6", "F-A-C-D"],
    ["Dom7", "F-A-C-Eb"],
    ["Maj7", "F-A-C-E"],
    ["Aug7", "F-A-C#-Eb"]],
  "Gb": [
    ["dim7", "Gb-A-C-D#"],
    ["hd7", "Gb-A-C-E"],
    ["min6", "Gb-A-Db-D#"],
    ["min7", "Gb-A-Db-E"],
    ["mM7", "Gb-A-Db-F"],
    ["Maj6", "Gb-Bb-Db-D#"],
    ["Dom7", "Gb-Bb-Db-E"],
    ["Maj7", "Gb-Bb-Db-F"],
    ["Aug7", "Gb-Bb-D-E"]],
  "G": [
    ["dim7", "G-Bb-Db-E"],
    ["hd7", "G-Bb-Db-F"],
    ["min6", "G-Bb-D-E"],
    ["min7", "G-Bb-D-F"],
    ["mM7", "G-Bb-D-F#"],
    ["Maj6", "G-B-D-E"],
    ["Dom7", "G-B-D-F"],
    ["Maj7", "G-B-D-F#"],
    ["Aug7", "G-B-D#-F"]],
  "Ab": [
    ["dim7", "Ab-B-D-F"],
    ["hd7", "Ab-B-D-Gb"],
    ["min6", "Ab-B-Eb-F"],
    ["min7", "Ab-B-Eb-Gb"],
    ["mM7", "Ab-B-Eb-G"],
    ["Maj6", "Ab-C-Eb-F"],
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
    ["Aug7", "A-C#-F-G"]],
  "Bb": [
    ["dim7", "Bb-Db-E-G"],
    ["hd7", "Bb-Db-E-Ab"],
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
};
