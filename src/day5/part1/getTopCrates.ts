import { moveCrates } from "./moveCrates";
import { Crates, Instruction, RearrangementProcedure } from "./types";

export const getTopCrates = (
  initialCrates: Crates,
  rearrangementProcedure: RearrangementProcedure
): string => {
  const crates = rearrangementProcedure.reduce((crates, instruction) => {
    return moveCrates(crates, instruction);
  }, initialCrates);

  const crateStacks = Object.values(crates);

  return crateStacks.reduce((topCrates, stack) => {
    return topCrates + stack.pop();
  }, "");
};
