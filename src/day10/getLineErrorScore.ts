interface Bracket {
  matchingOpenBracket: String;
  points: number;
}

const bracketMap: Record<string, Bracket> = {
  ")": { matchingOpenBracket: "(", points: 3 },
  "]": { matchingOpenBracket: "[", points: 57 },
  "}": { matchingOpenBracket: "{", points: 1197 },
  ">": { matchingOpenBracket: "<", points: 25137 },
};

export const getLineErrorScore = (line: string): number => {
  let errorPoints = 0;
  const openBrackets = [];

  const brackets = line.split("");

  for (let i = 0; i < brackets.length && !errorPoints; i++) {
    const currentBracket = brackets[i];
    const OPENING_BRACKETS = ["(", "[", "{", "<"];

    if (OPENING_BRACKETS.includes(currentBracket)) {
      openBrackets.push(currentBracket);
    } else {
      const { matchingOpenBracket, points } = bracketMap[currentBracket];
      const currentOpenBracket = openBrackets[openBrackets.length - 1];

      if (currentOpenBracket === matchingOpenBracket) {
        openBrackets.pop();
      } else {
        errorPoints = points;
      }
    }
  }

  return errorPoints;
};
