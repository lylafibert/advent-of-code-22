import { getLowPoints } from "./getLowPoints";
import { puzzleInput } from "./puzzleInput";

const heightMap = [
  [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
  [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
  [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
  [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
  [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
];

describe("getLowPoints", () => {
  it("returns a list of the low points from a given height map", () => {
    expect(getLowPoints(heightMap)).toEqual([1, 0, 5, 5]);
  });
});
