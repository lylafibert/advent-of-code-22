import { rangesOverlap } from "./rangesOverlap";

describe("rangesOverlap", () => {
  it("returns true if one range contains the other range", () => {
    expect(
      rangesOverlap([
        [2, 8],
        [3, 7],
      ])
    ).toBe(true);

    expect(
      rangesOverlap([
        [6, 6],
        [4, 6],
      ])
    ).toBe(true);
  });
  it("returns true if the ranges partially overlap", () => {
    expect(
      rangesOverlap([
        [5, 7],
        [7, 9],
      ])
    ).toBe(true);

    expect(
      rangesOverlap([
        [2, 6],
        [4, 8],
      ])
    ).toBe(true);
  });
  it("returns false if the ranges do not overlap at all", () => {
    expect(
      rangesOverlap([
        [2, 4],
        [6, 6],
      ])
    ).toBe(false);

    expect(
      rangesOverlap([
        [2, 3],
        [4, 5],
      ])
    ).toBe(false);
  });
});
