import { Outcome, Plays } from "../types";

export const getRoundOutcome = (round: [Plays, Plays]): Outcome => {
  const [opponentPlay, myPlay] = round;

  if (myPlay === opponentPlay) return Outcome.Draw;

  if (myPlay === Plays.Rock) {
    return opponentPlay === Plays.Paper ? Outcome.Lose : Outcome.Win;
  }

  if (myPlay === Plays.Paper) {
    return opponentPlay === Plays.Scissors ? Outcome.Lose : Outcome.Win;
  }

  if (myPlay === Plays.Scissors) {
    return opponentPlay === Plays.Rock ? Outcome.Lose : Outcome.Win;
  }
};
