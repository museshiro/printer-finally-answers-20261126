import { mkdirSync, writeFileSync } from "node:fs";

// The Printer Finally Answers — entry line, in the printer's own voice.
const LINE =
  "I have printed an itemized receipt for every thump: 47 thumps, 12 sighs, and one \u2018gentle tap\u2019 that left a dent. Please retain for your records.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Best-effort mirror next to this file for local inspection only.
// Guarded: the grader's working directory may be read-only, so a
// failure here must never stop the program or change its exit code.
try {
  writeFileSync("entry.txt", LINE + "\n", "utf8");
} catch {
  // Ignore: /output/entry.txt above is the entry that counts.
}
