import { getBadgePrioritySum } from "./getBadgePrioritySum";
import { puzzleInput } from "../puzzleInput";

const testInput = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw",
];

describe("getBadgePrioritySum", () => {
  it("returns the sum of priorities for item types that appear in both compartments of the rucksacks", () => {
    expect(getBadgePrioritySum(testInput)).toBe(70);
  });
  it("gets the puzzle answer", () => {
    expect(getBadgePrioritySum(puzzleInput)).toBe(2607);
  });
});
