import { getSubmarinePosition } from "./getSubmarinePosition";
import { puzzleInput } from "./puzzleInput";

describe("getSubmarinePosition", () => {
  it("executes the instructions and returns the submarine position", () => {
    const directions = [
      "forward 5",
      "down 5",
      "forward 8",
      "up 3",
      "down 8",
      "forward 2",
    ];
    expect(getSubmarinePosition(directions)).toBe(150);
    expect(getSubmarinePosition(puzzleInput)).toBe(2039912);
  });
});
