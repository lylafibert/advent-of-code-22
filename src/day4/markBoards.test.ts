import { markBoards } from "./markBoards";
import {
  finalMarkBoards,
  firstMarkBoards,
  penultimateMarkBoards,
  secondMarkBoards,
  unmarkedBoards,
} from "./testBoards";

describe("markBoards", () => {
  it("marks the given number null on the boards and checks for bingo", () => {
    expect(markBoards(unmarkedBoards, 7)).toEqual(firstMarkBoards);
    expect(markBoards(firstMarkBoards, 4)).toEqual(secondMarkBoards);
    expect(markBoards(penultimateMarkBoards, 24)).toEqual(finalMarkBoards);
  });
});
