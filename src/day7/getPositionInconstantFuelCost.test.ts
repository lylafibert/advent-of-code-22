import { getPositionInconstantFuelCost } from "./getPositionInconstantFuelCost";

const crabPositions = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

describe("getPositionInconstantFuelCost", () => {
  it("returns the cost of fuel for all crabs to align to a given position", () => {
    expect(
      getPositionInconstantFuelCost({ crabPositions, finalPosition: 5 })
    ).toBe(168);
    expect(
      getPositionInconstantFuelCost({ crabPositions, finalPosition: 2 })
    ).toBe(206);
  });
});
