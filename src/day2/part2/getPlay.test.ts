import { Outcome, Plays } from "../types";
import { getPlay } from "./getPlay";

describe("getPlay", () => {
  it("win", () => {
    expect(getPlay([Plays.Scissors, Outcome.Win])).toBe(Plays.Rock);
  });
  it("draw", () => {
    expect(getPlay([Plays.Rock, Outcome.Draw])).toBe(Plays.Rock);
    expect(getPlay([Plays.Scissors, Outcome.Draw])).toBe(Plays.Scissors);
    expect(getPlay([Plays.Paper, Outcome.Draw])).toBe(Plays.Paper);
  });
  it("lose", () => {
    expect(getPlay([Plays.Paper, Outcome.Lose])).toBe(Plays.Rock);
  });
});
