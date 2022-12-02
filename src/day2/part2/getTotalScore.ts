import { Outcome, Plays } from "../types";
import { getPlay } from "./getPlay";
import { getRoundScore } from "./getRoundScore";

export const getTotalScore = (tournament: [Plays, Outcome][]): number => {
  return tournament.reduce((totalScore, currentRound) => {
    const myPlay = getPlay(currentRound);
    return totalScore + getRoundScore([currentRound[0], myPlay]);
  }, 0);
};
