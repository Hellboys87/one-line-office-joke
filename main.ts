// One-Line Office Joke: 24-Hour Sprint (make.fun)
//
// The joke: after hunting for any gap in a packed calendar, the one free
// slot turns out to be lunch — and HR has already claimed it, labelled
// "(optional)", as if eating were just another meeting you could politely
// decline. Anyone who has lived in back-to-back meetings recognises the
// sting: the one free slot isn't free at all.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, one sentence, setup then punchline.
const JOKE =
  "I finally found a free slot on my calendar — it's lunch, and HR already booked it as 'Lunch (optional)'.";

// Output goes where the grader looks, or /output when unset.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate wants 1-200 characters, real text, and a single line.
function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Joke must be 1-200 characters, got ${text.length}.`);
  }
  if (text.trim().length === 0) {
    throw new Error("Joke must not be only whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Joke must be a single line with no line breaks.");
  }
}

validate(JOKE);
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${JOKE.length}-character joke to ${join(outputDir, "entry.txt")}`);
