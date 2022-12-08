import {
  getUpperViewingDistance,
  getLowerViewingDistance,
  getLeftViewingDistance,
  getRightViewingDistance,
} from "./getViewingDistance";

const treeMap = [
  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 2],
  [6, 5, 3, 3, 2],
  [3, 3, 5, 4, 9],
  [3, 5, 3, 9, 0],
];

describe("getUpperViewingDistance", () => {
  it("returns the viewing distance above", () => {
    expect(
      getUpperViewingDistance({ treeMap, row: 1, column: 2, treeHeight: 5 })
    ).toBe(1);
    expect(
      getUpperViewingDistance({ treeMap, row: 3, column: 2, treeHeight: 5 })
    ).toBe(2);
    expect(
      getUpperViewingDistance({ treeMap, row: 0, column: 2, treeHeight: 3 })
    ).toBe(0);
  });
});

describe("getLowerViewingDistance", () => {
  it("returns the viewing distance below", () => {
    expect(
      getLowerViewingDistance({ treeMap, row: 1, column: 2, treeHeight: 5 })
    ).toBe(2);
    expect(
      getLowerViewingDistance({ treeMap, row: 3, column: 2, treeHeight: 5 })
    ).toBe(1);
  });
});

describe("getLeftViewingDistance", () => {
  it("returns the viewing distance to the left", () => {
    expect(
      getLeftViewingDistance({ treeMap, row: 1, column: 2, treeHeight: 5 })
    ).toBe(1);
    expect(
      getLeftViewingDistance({ treeMap, row: 3, column: 2, treeHeight: 5 })
    ).toBe(2);
  });
});

describe("getRightViewingDistance", () => {
  it("returns the viewing distance to the right", () => {
    expect(
      getRightViewingDistance({ treeMap, row: 1, column: 2, treeHeight: 5 })
    ).toBe(2);
    expect(
      getRightViewingDistance({ treeMap, row: 3, column: 2, treeHeight: 5 })
    ).toBe(2);
  });
});
