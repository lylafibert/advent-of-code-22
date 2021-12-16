const bracketMap: Record<string, string> = {
  ")": "(",
  "]": "[",
  "}": "{",
  ">": "<",
};

export const isIncompleteLine = (line: string): boolean => {
  let isCorrupted = false;
  const openBrackets = [];

  const brackets = line.split("");

  for (let i = 0; i < brackets.length && !isCorrupted; i++) {
    const currentBracket = brackets[i];
    const OPENING_BRACKETS = ["(", "[", "{", "<"];

    if (OPENING_BRACKETS.includes(currentBracket)) {
      openBrackets.push(currentBracket);
    } else {
      const matchingOpenBracket = bracketMap[currentBracket];
      const currentOpenBracket = openBrackets[openBrackets.length - 1];

      if (currentOpenBracket === matchingOpenBracket) {
        openBrackets.pop();
      } else {
        isCorrupted = true;
      }
    }
  }

  return !isCorrupted && !!openBrackets.length;
};
