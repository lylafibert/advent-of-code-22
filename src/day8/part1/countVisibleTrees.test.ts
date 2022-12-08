import { puzzleInput } from "../puzzleInput";
import { countVisibleTrees } from "./countVisibleTrees";

const treeMap = [
  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 2],
  [6, 5, 3, 3, 2],
  [3, 3, 5, 4, 9],
  [3, 5, 3, 9, 0],
];

describe("countVisibleTrees", () => {
  it("returns the number of trees that are visible from the forest edge", () => {
    expect(countVisibleTrees(treeMap)).toBe(21);
  });
  it("returns the puzzle answer", () => {
    expect(countVisibleTrees(puzzleInput)).toBe(1812);
  });
});
