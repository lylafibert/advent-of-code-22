import { OUTCOME_SCORES, SHAPE_SCORES } from "../constants";
import { Plays } from "../types";
import { PLAY_MAP } from "./constants";
import { getRoundOutcome } from "./getRoundOutcome";
import { MyPlays } from "./types";

export const getRoundScore = (round: [Plays, MyPlays]): number => {
  const myPlay = PLAY_MAP[round[1]];
  const outcome = getRoundOutcome(round);

  const shapeScore = SHAPE_SCORES[myPlay];
  const outcomeScore = OUTCOME_SCORES[outcome];

  return shapeScore + outcomeScore;
};
