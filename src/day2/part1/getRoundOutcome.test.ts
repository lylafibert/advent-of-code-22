import { Outcome, Plays } from "../types";
import { getRoundOutcome } from "./getRoundOutcome";
import { MyPlays } from "./types";

describe("getRoundOutcome", () => {
  it("win", () => {
    expect(getRoundOutcome([Plays.Rock, MyPlays.Paper])).toBe(Outcome.Win);
    expect(getRoundOutcome([Plays.Scissors, MyPlays.Rock])).toBe(Outcome.Win);
    expect(getRoundOutcome([Plays.Paper, MyPlays.Scissors])).toBe(Outcome.Win);
  });
  it("lose", () => {
    expect(getRoundOutcome([Plays.Paper, MyPlays.Rock])).toBe(Outcome.Lose);
    expect(getRoundOutcome([Plays.Rock, MyPlays.Scissors])).toBe(Outcome.Lose);
    expect(getRoundOutcome([Plays.Scissors, MyPlays.Paper])).toBe(Outcome.Lose);
  });

  it("draw", () => {
    expect(getRoundOutcome([Plays.Rock, MyPlays.Rock])).toBe(Outcome.Draw);
    expect(getRoundOutcome([Plays.Paper, MyPlays.Paper])).toBe(Outcome.Draw);
    expect(getRoundOutcome([Plays.Scissors, MyPlays.Scissors])).toBe(
      Outcome.Draw
    );
  });
});
