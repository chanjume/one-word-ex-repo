// One Word From Your Ex — write the one word your ex would use to describe
// you to /output/entry.txt.
//
// The word: Rebound. Not the soft, wistful "Almost" and not the generic
// "Unfinished" — the word that stings because it is specific and true: to
// your ex you were the rebound, the person who arrived right after the
// real one left and never quite became the real one yourself. Funny in the
// wince-inducing way, painfully honest, and fresh — it names a role, a
// whole failed relationship, in a single word. One word, 7 characters, no
// explanation, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Rebound";

if (WORD.length < 1 || WORD.length > 24) {
  throw new Error(`entry must be 1-24 characters, got ${WORD.length}`);
}
if (WORD.split(/\s+/).filter(Boolean).length !== 1) {
  throw new Error("entry must be exactly one word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf-8");
console.log(`Wrote ${WORD.length} chars to /output/entry.txt: ${WORD}`);
