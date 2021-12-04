import { playBingo } from "./playBingo";
import { unmarkedBoards, draws } from "./testBoards";
import { bingoBoards, drawNumbers } from "./puzzleInput";

describe("playBingo", () => {
  it("plays bingo and returns the final score", () => {
    expect(playBingo(unmarkedBoards, draws)).toBe(4512);
    expect(playBingo(bingoBoards, drawNumbers)).toBe(16716);
  });
});
