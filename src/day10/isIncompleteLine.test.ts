import { isIncompleteLine } from "./isIncompleteLine";

const validLines: string[] = [
  "()",
  "[]",
  "([])",
  "{()()()}",
  "<([{}])>",
  "[<>({}){}[([])<>]]",
  "(((((((((())))))))))",
];

const corruptedLines: string[] = [
  "(]",
  "{()()()>",
  "(((()))}",
  "<([]){()}[{}])",
  "{([(<{}[<>[]}>{[]{[(<()>",
  "[[<[([]))<([[{}[[()]]]",
  "[{[{({}]{}}([{[{{{}}([]",
  "[<(<(<(<{}))><([]([]()",
  "<{([([[(<>()){}]>(<<{{",
];

const incompleteLines: string[] = [
  "[({(<(())[]>[[{[]{<()<>>",
  "[({(<(())[]>[[{[]{<()<>>",
  "[(()[<>])]({[<{<<[]>>(",
  "(((({<>}<{<{<>}{[]{[]{}",
  "{<[[]]>}<{[{[{[]{()[[[]",
  "<{([{{}}[<[[[<>{}]]]>[]]",
];

describe("isIncompleteLine", () => {
  it("returns true if a line is incomplete", () => {
    incompleteLines.forEach((incompleteLine) => {
      expect(isIncompleteLine(incompleteLine)).toBe(true);
    });
  });

  it("returns false if a line is corrupted", () => {
    corruptedLines.forEach((corruptedLine) => {
      expect(isIncompleteLine(corruptedLine)).toBe(false);
    });
  });

  it("returns false if a line is valid", () => {
    validLines.forEach((validLine) => {
      expect(isIncompleteLine(validLine)).toBe(false);
    });
  });
});
