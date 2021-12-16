import { getTotalErrorScore } from "./getTotalErrorScore";
import { puzzleInput } from "../puzzleInput";

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

describe("getTotalErrorScore", () => {
  it("returns the total error score of the navigation subsystem", () => {
    expect(getTotalErrorScore(subsystem)).toBe(26397);
    expect(getTotalErrorScore(puzzleInput)).toBe(268845);
  });
});
