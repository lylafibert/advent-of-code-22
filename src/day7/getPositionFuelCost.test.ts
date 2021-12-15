import { getPositionFuelCost } from "./getPositionFuelCost";

const crabPositions = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

describe("getPositionFuelCost", () => {
  it("returns the cost of fuel for all crabs to align to a given position", () => {
    expect(getPositionFuelCost({ crabPositions, finalPosition: 2 })).toBe(37);
    expect(getPositionFuelCost({ crabPositions, finalPosition: 1 })).toBe(41);
    expect(getPositionFuelCost({ crabPositions, finalPosition: 3 })).toBe(39);
    expect(getPositionFuelCost({ crabPositions, finalPosition: 10 })).toBe(71);
  });
});
