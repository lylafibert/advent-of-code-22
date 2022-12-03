import { getPrioritySum } from "./getPrioritySum";
import { puzzleInput } from "./puzzleInput";

const testInput = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw",
];

describe("getPrioritySum", () => {
  it("returns the sum of priorities for item types that appear in both compartments of the rucksacks", () => {
    expect(getPrioritySum(testInput)).toBe(157);
  });
  it("gets the puzzle answer", () => {
    expect(getPrioritySum(puzzleInput)).toBe(7597);
  });
});
