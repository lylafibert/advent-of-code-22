import { getTopThreeTotal } from "./getTopThreeTotal";
import { puzzleInput } from "./puzzleInput";

const testInput = [
  [1000, 2000, 3000],
  [4000],
  [5000, 6000],
  [7000, 8000, 9000],
  [10000],
];

describe("getTopThreeTotal", () => {
  it("returns sum of the three largest array sums", () => {
    expect(getTopThreeTotal(testInput)).toBe(45000);
  });
  it("gets the puzzle answer", () => {
    expect(getTopThreeTotal(puzzleInput)).toBe(199628);
  });
});
