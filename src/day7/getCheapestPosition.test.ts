import { puzzleInput } from "./puzzleInput";
import { getCheapestPosition } from "./getCheapestPosition";

const crabPositions = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
describe("getCheapestPosition", () => {
  it("returns the cheapest fuel cost to get the crabs to the same horizontal position", () => {
    expect(getCheapestPosition(crabPositions)).toBe(37);
    expect(getCheapestPosition(puzzleInput)).toBe(345035);
  });
});
