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
  it("returns false if there is no Bingo", () => {
    expect(checkForBingo(unmarkedBoards[0])).toEqual(false);
    expect(checkForBingo(unmarkedBoards[1])).toEqual(false);
    expect(checkForBingo(unmarkedBoards[2])).toEqual(false);
    expect(checkForBingo(firstMarkBoards[0])).toEqual(false);
    expect(checkForBingo(firstMarkBoards[1])).toEqual(false);
    expect(checkForBingo(firstMarkBoards[2])).toEqual(false);
    expect(checkForBingo(secondMarkBoards[0])).toEqual(false);
    expect(checkForBingo(secondMarkBoards[1])).toEqual(false);
    expect(checkForBingo(secondMarkBoards[2])).toEqual(false);
  });
  it("returns true there is a horizontal Bingo", () => {
    expect(
      checkForBingo([
        [null, null, null, null, null],
        [10, 16, 15, null, 19],
        [18, 8, null, 26, 20],
        [22, null, 13, 6, null],
        [null, null, 12, 3, null],
      ])
    ).toBe(true);
  });
  it("returns true if there is a vertical Bingo", () => {
    expect(
      checkForBingo([
        [22, 13, 17, 11, null],
        [8, 2, 23, 4, null],
        [21, 9, 14, 16, null],
        [6, 10, 3, 18, null],
        [1, 12, 20, 15, null],
      ])
    ).toBe(true);
  });
});
