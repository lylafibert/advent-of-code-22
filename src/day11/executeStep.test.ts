import { executeStep } from "./executeStep";
import { testData } from "./testData";

describe("executeStep", () => {
  it("returns the energy level of the octupi after one step", () => {
    testData.forEach(({ input, output }) => {
      expect(executeStep(input)).toEqual(output);
    });
  });
});
