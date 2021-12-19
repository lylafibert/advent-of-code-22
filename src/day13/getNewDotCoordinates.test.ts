import { getNewDotCoordinates } from "./getNewDotCoordinates";
import { Axis } from "./types";

describe("getNewDotCoordinates", () => {
  it("returns the new dot coordinates after a given y fold", () => {
    expect(getNewDotCoordinates([1, 10], Axis.Y, 7)).toEqual([1, 4]);
    expect(getNewDotCoordinates([2, 14], Axis.Y, 7)).toEqual([2, 0]);
    expect(getNewDotCoordinates([6, 12], Axis.Y, 7)).toEqual([6, 2]);
  });

  it("returns the new dot coordinates after a given x fold", () => {
    expect(getNewDotCoordinates([6, 0], Axis.X, 5)).toEqual([4, 0]);
    expect(getNewDotCoordinates([9, 4], Axis.X, 5)).toEqual([1, 4]);
  });
});
