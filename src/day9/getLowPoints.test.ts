import { getLowPoints } from "./getLowPoints";

const heightMap = [
  [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
  [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
  [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
  [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
  [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
];

describe("getLowPoints", () => {
  it("returns a list of the low points from a given height map", () => {
    expect(getLowPoints(heightMap)).toEqual([
      { height: 1, rowIndex: 0, columnIndex: 1 },
      { height: 0, rowIndex: 0, columnIndex: 9 },
      { height: 5, rowIndex: 2, columnIndex: 2 },
      { height: 5, rowIndex: 4, columnIndex: 6 },
    ]);
  });
});
