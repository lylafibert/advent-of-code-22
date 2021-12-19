import { foldPaper } from "./foldPaper";
import { dots } from "./puzzleInput";
import { Axis } from "./types";

const testDots = [
  [6, 10],
  [0, 14],
  [9, 10],
  [0, 3],
  [10, 4],
  [4, 11],
  [6, 0],
  [6, 12],
  [4, 1],
  [0, 13],
  [10, 12],
  [3, 4],
  [3, 0],
  [8, 4],
  [1, 10],
  [2, 14],
  [8, 10],
  [9, 0],
];

describe("foldPaper", () => {
  it("returns the dots after folding the paper along a given line", () => {
    expect(foldPaper(testDots, Axis.Y, 7).length).toBe(17);
    expect(foldPaper(dots, Axis.X, 655).length).toBe(655);
  });
});
