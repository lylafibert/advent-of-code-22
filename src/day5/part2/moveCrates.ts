import { Crates, Instruction } from "../types";

export const moveCrates = (
  crates: Crates,
  instruction: Instruction
): Crates => {
  const { move, from, to } = instruction;
  const newCrates = { ...crates };

  const cratesToMove = [];

  for (let i = 0; i < move; i++) {
    const crate = newCrates[from].pop();
    cratesToMove.unshift(crate);
  }
  newCrates[to].push(...cratesToMove);

  return newCrates;
};
