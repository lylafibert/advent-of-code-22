import { Outcome, Plays } from "./types";

export const OUTCOME_SCORES = {
  [Outcome.Win]: 6,
  [Outcome.Draw]: 3,
  [Outcome.Lose]: 0,
};

export const OUTCOME_MAP = {
  [Outcome.Win]: 6,
  [Outcome.Draw]: 3,
  [Outcome.Lose]: 0,
};

export const SHAPE_SCORES = {
  [Plays.Rock]: 1,
  [Plays.Paper]: 2,
  [Plays.Scissors]: 3,
};
