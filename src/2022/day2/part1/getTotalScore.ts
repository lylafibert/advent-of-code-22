import { Plays } from "../types";
import { getRoundScore } from "./getRoundScore";
import { MyPlays } from "./types";

export const getTotalScore = (tournament: [Plays, MyPlays][]): number => {
  return tournament.reduce((totalScore, currentRound) => {
    return totalScore + getRoundScore(currentRound);
  }, 0);
};
