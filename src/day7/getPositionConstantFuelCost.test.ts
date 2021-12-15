import { getPositionConstantFuelCost } from "./getPositionConstantFuelCost";

const crabPositions = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

describe("getPositionConstantFuelCost", () => {
  it("returns the cost of fuel for all crabs to align to a given position", () => {
    expect(
      getPositionConstantFuelCost({ crabPositions, finalPosition: 2 })
    ).toBe(37);
    expect(
      getPositionConstantFuelCost({ crabPositions, finalPosition: 1 })
    ).toBe(41);
    expect(
      getPositionConstantFuelCost({ crabPositions, finalPosition: 3 })
    ).toBe(39);
    expect(
      getPositionConstantFuelCost({ crabPositions, finalPosition: 10 })
    ).toBe(71);
  });
});
