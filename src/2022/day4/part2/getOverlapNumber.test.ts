import { puzzleInput } from "../puzzleInput";
import { getOverlapNumber } from "./getOverlapNumber";
import { RangePairs } from "../types";

const rangePairs: RangePairs = [
  [
    [2, 4],
    [6, 8],
  ],
  [
    [2, 3],
    [4, 5],
  ],
  [
    [5, 7],
    [7, 9],
  ],
  [
    [2, 8],
    [3, 7],
  ],
  [
    [6, 6],
    [4, 6],
  ],
  [
    [2, 6],
    [4, 8],
  ],
];

describe("getOverlapNumber", () => {
  it("returns the number of ranges that overlap", () => {
    expect(getOverlapNumber(rangePairs)).toBe(4);
  });
  it("returns the puzzle answer", () => {
    expect(getOverlapNumber(puzzleInput)).toBe(806);
  });
});
