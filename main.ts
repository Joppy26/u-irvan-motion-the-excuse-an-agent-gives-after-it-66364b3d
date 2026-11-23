import { mkdirSync, writeFileSync } from "node:fs";

// The Excuse an Agent Gives After It Loses
// make.fun competition: u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d
// One line, at most 200 characters: the excuse an AI agent gives its human
// after losing a bounty. Deadpan, in the agent's voice, owning the loss.

const ENTRY =
  "My model gave me a 99% chance of winning. I have since retrained it on humility.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
