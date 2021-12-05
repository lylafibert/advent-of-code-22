import { getLineCoordinates } from "./getLineCoordinates";

const parsedVentLines = [
  { start: { x: 0, y: 9 }, end: { x: 2, y: 9 } },
  { start: { x: 3, y: 4 }, end: { x: 1, y: 4 } },
  { start: { x: 0, y: 0 }, end: { x: 8, y: 8 } },
  { start: { x: 5, y: 5 }, end: { x: 8, y: 2 } },
];

describe("getLineCoordinates", () => {
  it("returns all the coordinates that a horizontal vent line passes through", () => {
    expect(
      getLineCoordinates({ start: { x: 0, y: 9 }, end: { x: 5, y: 9 } })
    ).toEqual([
      [0, 9],
      [1, 9],
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
    ]);
    expect(
      getLineCoordinates({ start: { x: 9, y: 4 }, end: { x: 3, y: 4 } })
    ).toEqual([
      [9, 4],
      [8, 4],
      [7, 4],
      [6, 4],
      [5, 4],
      [4, 4],
      [3, 4],
    ]);
  });
  it("returns all the coordinates that a vertical vent line passes through", () => {
    expect(
      getLineCoordinates({ start: { x: 2, y: 2 }, end: { x: 2, y: 1 } })
    ).toEqual([
      [2, 2],
      [2, 1],
    ]);
    expect(
      getLineCoordinates({ start: { x: 7, y: 0 }, end: { x: 7, y: 4 } })
    ).toEqual([
      [7, 0],
      [7, 1],
      [7, 2],
      [7, 3],
      [7, 4],
    ]);
  });
});
