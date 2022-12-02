import { Outcome, Plays } from "../types";
import { PLAY_MAP } from "./constants";
import { MyPlays } from "./types";

export const getRoundOutcome = (round: [Plays, MyPlays]): Outcome => {
  const [opponentPlay, mine] = round;

  const myPlay = PLAY_MAP[mine];

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
