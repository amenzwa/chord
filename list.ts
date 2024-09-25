/* This module lists the chords for all 12 notes.
 * Author: Amen Zwa, Esq.
 * Copyright: sOnit, Inc. */

import {C, Chord, chords, R, roots, stringOf} from "./src/Chord";

roots().map(r => {
  console.log(`\n${r} chords`);
  chords().map(c => console.log(stringOf(Chord(c as C, r as R))));
});
