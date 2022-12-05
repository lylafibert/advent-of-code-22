import { OUTCOME_SCORES, SHAPE_SCORES } from "../constants";
import { Plays } from "../types";
import { getRoundOutcome } from "./getRoundOutcome";

export const getRoundScore = (round: [Plays, Plays]): number => {
  const myPlay = round[1];
  const outcome = getRoundOutcome(round);

  const shapeScore = SHAPE_SCORES[myPlay];
  const outcomeScore = OUTCOME_SCORES[outcome];

  return shapeScore + outcomeScore;
};
