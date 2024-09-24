import {C, Chord, cn, R, rn, stringOf} from "./src/Chord";

rn.map(r => {
  console.log(`\n${r} chords`);
  cn.map(c => console.log(stringOf(Chord(c as C, r as R))));
});
