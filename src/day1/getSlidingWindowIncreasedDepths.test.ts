import { getSlidingWindowIncreasedDepths } from "./getSlidingWindowIncreasedDepths";
import { puzzleInput } from "./puzzleInput";

describe("getSlidingWindowIncreasedDepths", () => {
  it("returns the number of times the sum of measurements in this sliding window increases from the previous sum", () => {
    const depths = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(getSlidingWindowIncreasedDepths(depths)).toBe(5);
    expect(getSlidingWindowIncreasedDepths(puzzleInput)).toBe(1523);
  });
});
