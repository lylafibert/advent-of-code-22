import { rangesFullyOverlap } from "./rangesFullyOverlap";

describe("rangesFullyOverlap", () => {
  it("returns true if one range contains the other range", () => {
    expect(
      rangesFullyOverlap([
        [2, 8],
        [3, 7],
      ])
    ).toBe(true);

    expect(
      rangesFullyOverlap([
        [6, 6],
        [4, 6],
      ])
    ).toBe(true);
  });
  it("returns false if neither ranges contain the other", () => {
    expect(
      rangesFullyOverlap([
        [2, 4],
        [6, 6],
      ])
    ).toBe(false);

    expect(
      rangesFullyOverlap([
        [2, 3],
        [4, 5],
      ])
    ).toBe(false);
  });
});
