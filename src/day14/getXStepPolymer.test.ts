import { getXStepPolymer } from "./getXStepPolymer";
import { step0, testRules } from "./testData";
describe("getXStepPolymer", () => {
  it("returns the polymer after a given number of steps", () => {
    expect(getXStepPolymer(step0, testRules, 5).length).toBe(97);
    expect(getXStepPolymer(step0, testRules, 10).length).toBe(3073);
  });
});
