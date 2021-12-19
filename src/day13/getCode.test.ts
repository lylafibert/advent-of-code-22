import { getCode } from "./getCode";
import { dots, foldingInstructions } from "./puzzleInput";
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

const testFoldingInstructions: [Axis, number][] = [
  [Axis.Y, 7],
  [Axis.X, 5],
];

const testCode = ["#####", "#...#", "#...#", "#...#", "#####"];

const code = [
  "..##.###..####..##..#..#..##..#..#.###",
  "...#.#..#....#.#..#.#..#.#..#.#..#.#..#",
  "...#.#..#...#..#....#..#.#..#.#..#.#..#",
  "...#.###...#...#....#..#.####.#..#.###",
  "#..#.#....#....#..#.#..#.#..#.#..#.#.#",
  ".##..#....####..##...##..#..#..##..#..#",
];

describe("getCode", () => {
  it("returns the final grid after all folds are complete", () => {
    expect(getCode(testDots, testFoldingInstructions)).toEqual(testCode);
    expect(getCode(dots, foldingInstructions)).toEqual(code);
  });
});
