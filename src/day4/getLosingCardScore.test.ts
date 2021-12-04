import { getLosingCardScore } from "./getLosingCardScore";
import { unmarkedBoards, draws } from "./testBoards";
import { bingoBoards, drawNumbers } from "./puzzleInput";

describe("getLosingCardScore", () => {
  it("returns the score of the last card to get bingo", () => {
    expect(getLosingCardScore(unmarkedBoards, draws)).toBe(1924);
    expect(getLosingCardScore(bingoBoards, drawNumbers)).toBe(4880);
  });
});
