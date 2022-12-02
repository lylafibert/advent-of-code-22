import { Outcome, Plays } from "../types";

export const getPlay = (round: [Plays, Outcome]): Plays => {
  const [opponentPlay, desiredOutcome] = round;

  if (desiredOutcome === Outcome.Draw) return opponentPlay;

  if (opponentPlay === Plays.Rock)
    return desiredOutcome === Outcome.Win ? Plays.Paper : Plays.Scissors;

  if (opponentPlay === Plays.Scissors)
    return desiredOutcome === Outcome.Win ? Plays.Rock : Plays.Paper;

  if (opponentPlay === Plays.Paper)
    return desiredOutcome === Outcome.Win ? Plays.Scissors : Plays.Rock;
};
