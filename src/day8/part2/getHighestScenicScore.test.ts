import { puzzleInput } from "../puzzleInput";
import { getHighestScenicScore } from "./getHighestScenicScore";

const treeMap = [
  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 2],
  [6, 5, 3, 3, 2],
  [3, 3, 5, 4, 9],
  [3, 5, 3, 9, 0],
];

describe("getHighestScenicScore", () => {
  it("returns the highest scenic score possible for any tree in the map", () => {
    expect(getHighestScenicScore(treeMap)).toBe(8);
  });
  it("returns the puzzle answer", () => {
    expect(getHighestScenicScore(puzzleInput)).toBe(315495);
  });
});
