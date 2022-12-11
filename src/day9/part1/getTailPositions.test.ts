import { puzzleInput } from "../puzzleInput";
import { getTailPositions } from "./getTailPositions";

const ropeMotions: [string, number][] = [
  ["R", 4],
  ["U", 4],
  ["L", 3],
  ["D", 1],
  ["R", 4],
  ["D", 1],
  ["L", 5],
  ["R", 2],
];

describe("getTailPositions", () => {
  it("returns the number of unique tail positions", () => {
    expect(getTailPositions(ropeMotions)).toBe(13);
    expect(getTailPositions(puzzleInput)).toBe(6486);
  });
});
