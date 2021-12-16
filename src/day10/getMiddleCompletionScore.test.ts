import { getMiddleCompletionScore } from "./getMiddleCompletionScore";
import { puzzleInput } from "./puzzleInput";

const subsystem = [
  "[({(<(())[]>[[{[]{<()<>>",
  "[(()[<>])]({[<{<<[]>>(",
  "{([(<{}[<>[]}>{[]{[(<()>",
  "(((({<>}<{<{<>}{[]{[]{}",
  "[[<[([]))<([[{}[[()]]]",
  "[{[{({}]{}}([{[{{{}}([]",
  "{<[[]]>}<{[{[{[]{()[[[]",
  "[<(<(<(<{}))><([]([]()",
  "<{([([[(<>()){}]>(<<{{",
  "<{([{{}}[<[[[<>{}]]]>[]]",
];
describe("getMiddleCompletionScore", () => {
  it("returns the middle completion score", () => {
    expect(getMiddleCompletionScore(subsystem)).toBe(288957);
    expect(getMiddleCompletionScore(puzzleInput)).toBe(4038824534);
  });
});
