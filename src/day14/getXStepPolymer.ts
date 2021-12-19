import { getNextPolymer } from "./getNextPolymer";

export const getXStepPolymer = (
  polymerTemplate: string,
  rules: Record<string, string>,
  steps: number
): string => {
  let polymer = polymerTemplate;
  for (let i = 0; i < steps; i++) {
    polymer = getNextPolymer(polymer, rules);
  }
  return polymer;
};
