import {C, Chord, chords, R, roots, stringOf} from "./src/Chord";

roots().map(r => {
  console.log(`\n${r} chords`);
  chords().map(c => console.log(stringOf(Chord(c as C, r as R))));
});
