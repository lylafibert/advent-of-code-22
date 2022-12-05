import { Crates, Instruction } from "./types";

export const moveCrates = (
  crates: Crates,
  instruction: Instruction
): Crates => {
  const { move, from, to } = instruction;
  const newCrates = { ...crates };

  for (let i = 0; i < move; i++) {
    const crate = newCrates[from].pop();
    newCrates[to].push(crate);
  }

  return newCrates;
};
