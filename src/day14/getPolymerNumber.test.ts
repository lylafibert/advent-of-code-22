import { getPolymerNumber } from "./getPolymerNumber";
import { polymerTemplate, rules } from "./puzzleInput";
import { step0, testRules } from "./testData";

describe("getPolymerNumber", () => {
  it("returns the quantity of the most common element minus the quantity of the least common element of a polymer after x steps", () => {
    expect(getPolymerNumber(step0, testRules, 10)).toBe(1588);
    expect(getPolymerNumber(polymerTemplate, rules, 10)).toBe(3048);
  });
});
