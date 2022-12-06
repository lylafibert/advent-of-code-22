import { crates, rearrangementProcedure } from "../puzzleInput";
import { getTopCrates } from "./getTopCrates";
import { Crates } from "../types";

const initialCrates = {
  1: ["Z", "N"],
  2: ["M", "C", "D"],
  3: ["P"],
};

const instructions = [
  { move: 1, from: 2, to: 1 },
  { move: 3, from: 1, to: 3 },
  { move: 2, from: 2, to: 1 },
  { move: 1, from: 1, to: 2 },
];

describe("getTopCrates", () => {
  it("returns the top crates after the rearrangement procedure has been executed", () => {
    expect(getTopCrates(initialCrates, instructions)).toEqual("MCD");
  });

  it("gets the puzzleAnswer", () => {
    expect(getTopCrates(crates, rearrangementProcedure)).toEqual("QLFQDBBHM");
  });
});
