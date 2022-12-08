import {
  isVisibleFromAbove,
  isVisibleFromBelow,
  isVisibleFromLeft,
  isVisibleFromRight,
} from "./getTreeVisibility";

const treeMap = [
  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 2],
  [6, 5, 3, 3, 2],
  [3, 3, 5, 4, 9],
  [3, 5, 3, 9, 0],
];

describe("isVisibleFromAbove", () => {
  it("returns true all trees above are shorter", () => {
    expect(isVisibleFromAbove({ treeMap, row: 1, column: 2 })).toBe(true);
    expect(isVisibleFromAbove({ treeMap, row: 3, column: 4 })).toBe(true);
    expect(isVisibleFromAbove({ treeMap, row: 1, column: 1 })).toBe(true);
  });
  it("returns false if one or more trees above are taller", () => {
    expect(isVisibleFromAbove({ treeMap, row: 2, column: 2 })).toBe(false);
    expect(isVisibleFromAbove({ treeMap, row: 1, column: 3 })).toBe(false);
    expect(isVisibleFromAbove({ treeMap, row: 3, column: 2 })).toBe(false);
  });
});

describe("isVisibleFromBelow", () => {
  it("returns true all trees below are shorter", () => {
    expect(isVisibleFromBelow({ treeMap, row: 3, column: 4 })).toBe(true);
    expect(isVisibleFromBelow({ treeMap, row: 3, column: 2 })).toBe(true);
  });
  it("returns false if one or more trees below are taller", () => {
    expect(isVisibleFromBelow({ treeMap, row: 1, column: 2 })).toBe(false);
    expect(isVisibleFromBelow({ treeMap, row: 1, column: 1 })).toBe(false);
    expect(isVisibleFromBelow({ treeMap, row: 2, column: 2 })).toBe(false);
    expect(isVisibleFromBelow({ treeMap, row: 1, column: 3 })).toBe(false);
  });
});

describe("isVisibleFromLeft", () => {
  it("returns true all trees to the left are shorter", () => {
    expect(isVisibleFromLeft({ treeMap, row: 1, column: 1 })).toBe(true);
    expect(isVisibleFromLeft({ treeMap, row: 3, column: 4 })).toBe(true);
    expect(isVisibleFromLeft({ treeMap, row: 3, column: 2 })).toBe(true);
  });
  it("returns false if one or more trees to the left are taller", () => {
    expect(isVisibleFromLeft({ treeMap, row: 1, column: 2 })).toBe(false);
    expect(isVisibleFromLeft({ treeMap, row: 2, column: 2 })).toBe(false);
    expect(isVisibleFromLeft({ treeMap, row: 1, column: 3 })).toBe(false);
  });
});

describe("isVisibleFromRight", () => {
  it("returns true all trees to the right are shorter", () => {
    expect(isVisibleFromRight({ treeMap, row: 3, column: 4 })).toBe(true);
    expect(isVisibleFromRight({ treeMap, row: 1, column: 2 })).toBe(true);
    expect(isVisibleFromRight({ treeMap, row: 2, column: 3 })).toBe(true);
  });
  it("returns false if one or more trees to the right are taller", () => {
    expect(isVisibleFromRight({ treeMap, row: 3, column: 2 })).toBe(false);
    expect(isVisibleFromRight({ treeMap, row: 1, column: 1 })).toBe(false);
    expect(isVisibleFromRight({ treeMap, row: 2, column: 2 })).toBe(false);
    expect(isVisibleFromRight({ treeMap, row: 1, column: 3 })).toBe(false);
  });
});
