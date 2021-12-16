import { getBasinSize } from "./getBasinSize";

const heightMap = [
  [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
  [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
  [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
  [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
  [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
];
describe("getBasinSize", () => {
  it("returns something", () => {
    expect(
      getBasinSize(heightMap, { height: 1, rowIndex: 0, columnIndex: 1 })
    ).toBe(3);

    expect(
      getBasinSize(heightMap, { height: 0, rowIndex: 0, columnIndex: 9 })
    ).toBe(9);

    expect(
      getBasinSize(heightMap, { height: 5, rowIndex: 2, columnIndex: 2 })
    ).toBe(14);

    expect(
      getBasinSize(heightMap, { height: 5, rowIndex: 4, columnIndex: 6 })
    ).toBe(9);
  });
});
