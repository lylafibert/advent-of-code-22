import { getLineErrorScore } from "./getLineErrorScore";

const validLines: [string, number][] = [
  ["()", 0],
  ["[]", 0],
  ["([])", 0],
  ["{()()()}", 0],
  ["<([{}])>", 0],
  ["[<>({}){}[([])<>]]", 0],
  ["(((((((((())))))))))", 0],
];

const corruptedLines: [string, number][] = [
  ["(]", 57],
  ["{()()()>", 25137],
  ["(((()))}", 1197],
  ["<([]){()}[{}])", 3],
  ["{([(<{}[<>[]}>{[]{[(<()>", 1197],
  ["[[<[([]))<([[{}[[()]]]", 3],
  ["[{[{({}]{}}([{[{{{}}([]", 57],
  ["[<(<(<(<{}))><([]([]()", 3],
  ["<{([([[(<>()){}]>(<<{{", 25137],
];

describe("getLineErrorScore", () => {
  it("returns true if a line is valid", () => {
    validLines.forEach(([validLine, points]) => {
      expect(getLineErrorScore(validLine)).toBe(points);
    });
  });

  it("returns false if a line is corrupted", () => {
    corruptedLines.forEach(([corruptedLine, points]) => {
      expect(getLineErrorScore(corruptedLine)).toBe(points);
    });
  });
});
