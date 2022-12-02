import { Plays } from "../types";
import { getRoundScore } from "./getRoundScore";
import { MyPlays } from "./types";

describe("getRoundScore", () => {
  it("win", () => {
    expect(getRoundScore([Plays.Rock, MyPlays.Paper])).toBe(8);
  });
  it("draw", () => {
    expect(getRoundScore([Plays.Paper, MyPlays.Rock])).toBe(1);
  });
  it("lose", () => {
    expect(getRoundScore([Plays.Scissors, MyPlays.Scissors])).toBe(6);
  });
});
