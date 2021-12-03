import { getSubmarinePositionWithAim } from "./getSubmarinePositionWithAim";
import { puzzleInput } from "./puzzleInput";

describe("getSubmarinePositionWithAim", () => {
  it("executes the instructions and returns the submarine position", () => {
    const directions = [
      "forward 5",
      "down 5",
      "forward 8",
      "up 3",
      "down 8",
      "forward 2",
    ];
    expect(getSubmarinePositionWithAim(directions)).toBe(900);
    expect(getSubmarinePositionWithAim(puzzleInput)).toBe(1942068080);
  });
});
