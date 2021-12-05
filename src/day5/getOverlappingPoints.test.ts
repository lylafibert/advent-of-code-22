import { getOverlappingPoints } from "./getOverlappingPoints";
import { puzzleInput } from "./puzzleInput";

const ventLines = [
  "0,9 -> 5,9",
  "8,0 -> 0,8",
  "9,4 -> 3,4",
  "2,2 -> 2,1",
  "7,0 -> 7,4",
  "6,4 -> 2,0",
  "0,9 -> 2,9",
  "3,4 -> 1,4",
  "0,0 -> 8,8",
  "5,5 -> 8,2",
];

describe("getOverlappingPoints", () => {
  it("returns the number of coordinates with at least two overlapping lines", () => {
    expect(getOverlappingPoints(ventLines)).toBe(5);
    expect(getOverlappingPoints(puzzleInput)).toBe(5576);
  });
});
