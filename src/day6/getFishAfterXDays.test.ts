import { puzzleInput } from "./puzzleInput";
import { getFishAfterXDays } from "./getFishAfterXDays";

const day0 = [3, 4, 3, 1, 2];

let testFishDay80: number[];
describe("getFishAfterXDays", () => {
  it("returns the number of fish after 80 days", () => {
    expect(getFishAfterXDays(day0, 80)).toBe(5934);
    expect(getFishAfterXDays(puzzleInput, 80)).toBe(385391);
  });

  it.skip("returns the number of fish after 256 days", () => {
    expect(getFishAfterXDays(testFishDay80, 176)).toBe(26984457539);
    // expect(getFishAfterXDays(puzzleInput, 256)).toBe(385391);
  });
});
