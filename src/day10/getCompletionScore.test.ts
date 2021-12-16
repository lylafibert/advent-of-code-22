import { getCompletionScore } from "./getCompletionScore";

const testData: [string, number][] = [
  ["}}]])})]", 288957],
  [")}>]})", 5566],
  ["}}>}>))))", 1480781],
  ["]]}}]}]}>", 995444],
  ["])}>", 294],
];

describe("getCompletionScore", () => {
  it("returns the completion score of a line", () => {
    testData.forEach(([completingSequence, score]) => {
      expect(getCompletionScore(completingSequence)).toBe(score);
    });
  });
});
