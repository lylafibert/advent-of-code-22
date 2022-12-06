import { puzzleInput } from "./puzzleInput";
import { getMarker } from "./getMarker";

describe("getMarker", () => {
  it("returns the number of characters before the start of packet marker", () => {
    expect(getMarker("mjqjpqmgbljsphdztnvjfqwrcgsmlb", 4)).toBe(7);
    expect(getMarker("bvwbjplbgvbhsrlpgdmjqwftvncz", 4)).toBe(5);
    expect(getMarker("nppdvjthqldpwncqszvftbrmjlhg", 4)).toBe(6);
    expect(getMarker("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 4)).toBe(10);
    expect(getMarker("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 4)).toBe(11);

    expect(getMarker("mjqjpqmgbljsphdztnvjfqwrcgsmlb", 14)).toBe(19);
    expect(getMarker("bvwbjplbgvbhsrlpgdmjqwftvncz", 14)).toBe(23);
    expect(getMarker("nppdvjthqldpwncqszvftbrmjlhg", 14)).toBe(23);
    expect(getMarker("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 14)).toBe(29);
    expect(getMarker("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 14)).toBe(26);
  });

  it("gets the puzzle answer", () => {
    expect(getMarker(puzzleInput, 4)).toBe(1356);
    expect(getMarker(puzzleInput, 14)).toBe(2564);
  });
});
