import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "ReplyAll";

if (WORD.length < 1 || WORD.length > 30) {
  throw new Error("entry must be 1-30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
