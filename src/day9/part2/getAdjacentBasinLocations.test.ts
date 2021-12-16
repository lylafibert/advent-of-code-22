import { getAdjacentLocations } from "../getAdjacentLocations";
import { getAdjacentBasinLocations } from "./getAdjacentBasinLocations";

const heightMap = [
  [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
  [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
  [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
  [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
  [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
];

const testData = [
  {
    location: {
      height: 1,
      rowIndex: 0,
      columnIndex: 1,
    },
    expectedResult: [{ height: 2, rowIndex: 0, columnIndex: 0 }],
  },
  {
    location: {
      height: 2,
      rowIndex: 0,
      columnIndex: 0,
    },
    expectedResult: [{ height: 3, rowIndex: 1, columnIndex: 0 }],
  },
  {
    location: {
      height: 0,
      rowIndex: 0,
      columnIndex: 9,
    },
    expectedResult: [
      { height: 1, rowIndex: 1, columnIndex: 9 },
      { height: 1, rowIndex: 0, columnIndex: 8 },
    ],
  },
  {
    location: {
      height: 5,
      rowIndex: 2,
      columnIndex: 2,
    },
    expectedResult: [
      { height: 8, rowIndex: 1, columnIndex: 2 },
      { height: 6, rowIndex: 2, columnIndex: 3 },
      { height: 6, rowIndex: 3, columnIndex: 2 },
      { height: 8, rowIndex: 2, columnIndex: 1 },
    ],
  },
  {
    location: {
      height: 7,
      rowIndex: 4,
      columnIndex: 8,
    },
    expectedResult: [
      { height: 8, rowIndex: 3, columnIndex: 8 },
      { height: 8, rowIndex: 4, columnIndex: 9 },
    ],
  },
];

describe("getAdjacentBasinLocations", () => {
  it("returns the adjacent basin locations", () => {
    testData.forEach(({ location, expectedResult }) => {
      expect(getAdjacentBasinLocations(heightMap, location)).toEqual(
        expectedResult
      );
    });
  });
});
