import { getTotalScore } from "./getTotalScore";
import { puzzleInput } from "../puzzleInput";
import { Outcome, Plays } from "../types";

const tournament = [
  ["A", "Y"],
  ["B", "X"],
  ["C", "Z"],
] as [Plays, Outcome][];

describe("getTotalScore", () => {
  it("gets the total score of the tournament", () => {
    expect(getTotalScore(tournament)).toBe(12);
  });
  it("gets the puzzle answr", () => {
    expect(getTotalScore(puzzleInput as [Plays, Outcome][])).toBe(12526);
  });
});
