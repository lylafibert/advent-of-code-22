import { getNumberOfFlashes } from "./getNumberOfFlashes";
import { puzzleInput } from "./puzzleInput";
import { step0 } from "./testData";

describe("getNumberOfFlashes", () => {
  it("returns the number of flashes after a given number of steps", () => {
    expect(getNumberOfFlashes(step0, 100)).toBe(1656);
    expect(getNumberOfFlashes(step0, 10)).toBe(204);
    expect(getNumberOfFlashes(puzzleInput, 100)).toBe(1755);
  });
});
