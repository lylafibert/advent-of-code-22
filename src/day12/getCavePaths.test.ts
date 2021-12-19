import { getCavePaths } from "./getCavePaths";
import { testSystem1 } from "./testData";

describe("getCavePaths", () => {
  it("returns the number of possibe paths through the caves", () => {
    expect(getCavePaths(testSystem1)).toBe(10);
  });
});
