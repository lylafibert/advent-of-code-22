import { sortNumbersDescending } from "../../helpers";
import { completeLine } from "./completeLine";
import { getCompletionScore } from "./getCompletionScore";
import { isIncompleteLine } from "./isIncompleteLine";

export const getMiddleCompletionScore = (
  navigationSubsystem: string[]
): number => {
  const completionScores: number[] = [];
  navigationSubsystem.forEach((line) => {
    if (isIncompleteLine(line)) {
      const completingSequence = completeLine(line);
      completionScores.push(getCompletionScore(completingSequence));
    }
  });

  const sortedScores = sortNumbersDescending(completionScores);
  return sortedScores[Math.floor(sortedScores.length / 2)];
};
