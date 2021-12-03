import { getNumberOfIncreasedDepths } from "./getNumberOfIncreasedDepths";
import { puzzleInput } from "./puzzleInput";

describe("getNumberOfIncreasedDepths", () => {
  it("returns the number of times a depth measurement increases", () => {
    const depths = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(getNumberOfIncreasedDepths(depths)).toBe(7);
    expect(getNumberOfIncreasedDepths(puzzleInput)).toBe(1477);
  });
});
