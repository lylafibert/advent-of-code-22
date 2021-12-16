const scoreMap: Record<string, number> = {
  ")": 1,
  "]": 2,
  "}": 3,
  ">": 4,
};

export const getCompletionScore = (completingSequence: string): number =>
  completingSequence.split("").reduce((totalScore, currentBracket) => {
    return totalScore * 5 + scoreMap[currentBracket];
  }, 0);
