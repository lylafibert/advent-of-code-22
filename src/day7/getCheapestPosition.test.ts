import { puzzleInput } from "./puzzleInput";
import { getCheapestPosition } from "./getCheapestPosition";
import { getPositionConstantFuelCost } from "./getPositionConstantFuelCost";
import { getPositionInconstantFuelCost } from "./getPositionInconstantFuelCost";

const crabPositions = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
describe("getCheapestPosition", () => {
  it("returns the cheapest constant fuel cost to get the crabs to the same horizontal position", () => {
    expect(
      getCheapestPosition(crabPositions, getPositionConstantFuelCost)
    ).toBe(37);
    expect(getCheapestPosition(puzzleInput, getPositionConstantFuelCost)).toBe(
      345035
    );
  });
  it("returns the cheapest inconstant fuel cost to get the crabs to the same horizontal position", () => {
    expect(
      getCheapestPosition(crabPositions, getPositionInconstantFuelCost)
    ).toBe(168);
    expect(
      getCheapestPosition(puzzleInput, getPositionInconstantFuelCost)
    ).toBe(97038163);
  });
});
