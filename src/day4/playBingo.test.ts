import { playBingo } from "./playBingo";
import { unmarkedBoards } from "./testBoards";
import { bingoBoards, drawNumbers } from "./puzzleInput";

const draws = [
  7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
  20, 8, 19, 3, 26, 1,
];

describe("playBingo", () => {
  it("plays bingo and returns the final score", () => {
    expect(playBingo(unmarkedBoards, draws)).toBe(4512);
    expect(playBingo(bingoBoards, drawNumbers)).toBe(16716);
  });
});
