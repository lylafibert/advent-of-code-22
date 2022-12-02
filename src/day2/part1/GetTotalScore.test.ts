import { getTotalScore } from "./getTotalScore";
import { puzzleInput } from "../puzzleInput";
import { MyPlays } from "./types";
import { Plays } from "../types";

const tournament = [
  ["A", "Y"],
  ["B", "X"],
  ["C", "Z"],
] as [Plays, MyPlays][];

describe("getTotalScore", () => {
  it("gets the total score of the tournament", () => {
    expect(getTotalScore(tournament)).toBe(15);
  });
  it("gets the puzzle answr", () => {
    expect(getTotalScore(puzzleInput as [Plays, MyPlays][])).toBe(10994);
  });
});
