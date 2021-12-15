import { getAdjacentLocations } from "./getAdjacentLocations";

const heightMap = [
  [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
  [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
  [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
  [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
  [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
];

const testData = [
  {
    adjacentLocations: [9, 9, 9, 2],
    lowPoint: { rowIndex: 0, columnIndex: 1, height: 1 },
  },
  {
    adjacentLocations: [9, 1, 9, 1],
    lowPoint: { rowIndex: 0, columnIndex: 9, height: 0 },
  },
  {
    adjacentLocations: [8, 6, 6, 8],
    lowPoint: { rowIndex: 2, columnIndex: 2, height: 5 },
  },
  {
    adjacentLocations: [6, 9, 6, 6],
    lowPoint: { rowIndex: 4, columnIndex: 6, height: 5 },
  },
];

describe("getAdjacentLocations", () => {
  it("returns the adjacent locations of a given location", () => {
    testData.forEach(({ adjacentLocations, lowPoint }) => {
      expect(getAdjacentLocations(heightMap, lowPoint)).toEqual(
        adjacentLocations
      );
    });
  });
});
