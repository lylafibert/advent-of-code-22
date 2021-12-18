import { getSyncFlashStep } from "./getSyncFlashStep";
import { puzzleInput } from "./puzzleInput";
import { step0 } from "./testData";

describe("getSyncFlashStep", () => {
  it("returns something", () => {
    expect(getSyncFlashStep(step0)).toBe(195);
    expect(getSyncFlashStep(puzzleInput)).toBe(212);
  });
});
