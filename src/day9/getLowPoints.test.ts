import { getLowPoints } from "./getLowPoints";
import { puzzleInput } from "./puzzleInput";

const heightMap = [
  "2199943210",
  "3987894921",
  "9856789892",
  "8767896789",
  "9899965678",
];

describe("getLowPoints", () => {
  it("returns a list of the low points from a given height map", () => {
    expect(getLowPoints(heightMap)).toEqual(15);
    expect(getLowPoints(puzzleInput)).toEqual(439);
  });
});
