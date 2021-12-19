import { getNextPolymer } from "./getNextPolymer";
import { step0, testRules } from "./testData";

const step1 = "NCNBCHB";
const step2 = "NBCCNBBBCBHCB";
const step3 = "NBBBCNCCNBBNBNBBCHBHHBCHB";
const step4 = "NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB";

describe("getNextPolymer", () => {
  it("returns the next polymer after executing the pairing rules", () => {
    expect(getNextPolymer(step0, testRules)).toBe(step1);
    expect(getNextPolymer(step1, testRules)).toBe(step2);
    expect(getNextPolymer(step3, testRules)).toBe(step4);
  });
});
