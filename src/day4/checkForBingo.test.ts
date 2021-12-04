import { checkForBingo } from "./checkForBingo";
import {
  unmarkedBoards,
  firstMarkBoards,
  secondMarkBoards,
  penultimateMarkBoards,
  finalMarkBoards,
} from "./testBoards";

const verticalBingo = [
  [
    [22, 13, 17, 11, null],
    [8, 2, 23, 4, null],
    [21, 9, 14, 16, null],
    [6, 10, 3, 18, null],
    [1, 12, 20, 15, null],
  ],
  [
    [3, 15, 0, 2, 22],
    [9, 18, 13, 17, 5],
    [19, 8, 7, 25, 23],
    [20, 11, 10, 24, 4],
    [14, 21, 16, 12, 6],
  ],
  [
    [14, 21, 17, 24, 4],
    [10, 16, 15, 9, 19],
    [18, 8, 23, 26, 20],
    [22, 11, 13, 6, 5],
    [2, 0, 12, 3, 7],
  ],
];

describe("checkForBingo", () => {
  it("returns null if there is no Bingo", () => {
    expect(checkForBingo(unmarkedBoards)).toEqual(null);
    expect(checkForBingo(firstMarkBoards)).toEqual(null);
    expect(checkForBingo(secondMarkBoards)).toEqual(null);
    expect(checkForBingo(penultimateMarkBoards)).toEqual(null);
  });
  it("returns the winning board if there is a horizontal Bingo", () => {
    expect(checkForBingo(finalMarkBoards)).toEqual([
      [null, null, null, null, null],
      [10, 16, 15, null, 19],
      [18, 8, null, 26, 20],
      [22, null, 13, 6, null],
      [null, null, 12, 3, null],
    ]);
  });
  it("returns the winning board if there is a vertical Bingo", () => {
    expect(checkForBingo(verticalBingo)).toEqual([
      [22, 13, 17, 11, null],
      [8, 2, 23, 4, null],
      [21, 9, 14, 16, null],
      [6, 10, 3, 18, null],
      [1, 12, 20, 15, null],
    ]);
  });
});
