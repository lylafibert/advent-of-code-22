const bracketMap: Record<string, string> = {
  ")": "(",
  "]": "[",
  "}": "{",
  ">": "<",
  "(": ")",
  "[": "]",
  "{": "}",
  "<": ">",
};

const OPENING_BRACKETS = ["(", "[", "{", "<"];

export const completeLine = (incompleteLine: string): string => {
  const brackets = incompleteLine.split("");
  const openBrackets: string[] = [];

  brackets.forEach((bracket) => {
    if (OPENING_BRACKETS.includes(bracket)) {
      openBrackets.push(bracket);
    } else {
      openBrackets.pop();
    }
  });

  return openBrackets
    .reverse()
    .map((openBracket) => bracketMap[openBracket])
    .join("");
};
