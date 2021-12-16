import { completeLine } from "./completeLine";

const testData = [
  ["[({(<(())[]>[[{[]{<()<>>", "}}]])})]"],
  ["[({(<(())[]>[[{[]{<()<>>", "}}]])})]"],
  ["[(()[<>])]({[<{<<[]>>(", ")}>]})"],
  ["(((({<>}<{<{<>}{[]{[]{}", "}}>}>))))"],
  ["{<[[]]>}<{[{[{[]{()[[[]", "]]}}]}]}>"],
  ["<{([{{}}[<[[[<>{}]]]>[]]", "])}>"],
];

describe("completeLine", () => {
  it("returns the sequence of closing characters that complete all open chunks in the line", () => {
    testData.forEach(([incompleteLine, completingSequence]) => {
      expect(completeLine(incompleteLine)).toEqual(completingSequence);
    });
  });
});
