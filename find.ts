/* This module implements a TUI for the chord finder.
 * Author: Amen Zwa, Esq.
 * Copyright: sOnit, Inc. */

import {prompt, setDefaultOptions} from "readline-sync";
import {C, Chord, R, stringOf} from "./src/Chord";

loop();

function loop(): void {
  function help(): void {
    log(`\
commands:\n\
  r  - select the chord root note\n\
  ----\n\
  h  - help (this message)\n\
  ^c - quit (also q)`);
  }
  clear();
  help();
  let quit = false;
  while (!quit) {
    setDefaultOptions({prompt: "\nchord> "});
    const cmd = prompt();
    switch (cmd) {
    case "r":
      rootMenu();
      break;
    case "h":
      help();
      break;
    case "q":
      quit = true;
      clear();
      break;
    default:
      if (cmd !== "") log(`ERROR - unknown command ${cmd}; type 'h' for help`);
      break;
    }
  }
}

function rootMenu(): void {
  function help(): void {
    log(`\
select a root note for a chord:\n\
  C Db D Eb E F Gb G Ab A Bb B\n\
  ----\n\
  h  - help (this message)\n\
  b  - back\n\
  ^c - quit`);
  }
  clear();
  help();
  let back = false;
  while (!back) {
    setDefaultOptions({prompt: "\nchord.root> "});
    const sub = prompt();
    switch (sub) {
    case "C":
    case "Db":
    case "D":
    case "Eb":
    case "E":
    case "F":
    case "Gb":
    case "G":
    case "Ab":
    case "A":
    case "Bb":
    case"B":
      chordMenu(sub as R);
      break;
    case "h":
      help();
      break;
    case "b":
      back = true;
      clear();
      break;
    default:
      if (sub !== "") log(`ERROR - unknown subcommand ${sub}; type 'h' for help`);
      break;
    }
  }
}

function chordMenu(r: R): void {
  function help(): void {
    log(`\
select a chord type for the root note ${r}:\n\
  dim7 hd7\n\
  min6 min7 mM7\n\
  Maj6 Dom7 Maj7 Aug7\n\
  ----\n\
  h  - help (this message)\n\
  b  - back\n\
  ^c - quit`);
  }
  clear();
  help();
  let back = false;
  while (!back) {
    setDefaultOptions({prompt: "\nchord.type> "});
    const sub = prompt();
    switch (sub) {
    case "dim7":
    case "hd7":
    case "min6":
    case "min7":
    case "mM7":
    case "Maj6":
    case "Dom7":
    case "Maj7":
    case "Aug7":
      const c = sub as C;
      log(`  ${stringOf(Chord(r, c))}\n`);
      break;
    case "h":
      help();
      break;
    case "b":
      back = true;
      clear();
      break;
    default:
      if (sub !== "") log(`ERROR - unknown subcommand ${sub}; type 'h' for help`);
      break;
    }
  }
}

function clear(): void { console.clear(); }
function log(msg: string): void { console.log(msg); }
