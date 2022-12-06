import { getLargestSum } from "./getLargestSum";
import { puzzleInput } from "./puzzleInput";

const testInput = [
  [1000, 2000, 3000],
  [4000],
  [5000, 6000],
  [7000, 8000, 9000],
  [10000],
];

describe("getLargestSum", () => {
  it("returns the largest array sum", () => {
    expect(getLargestSum(testInput)).toBe(24000);
  });
  it("gets the puzzle answer", () => {
    expect(getLargestSum(puzzleInput)).toBe(67633);
  });
});
