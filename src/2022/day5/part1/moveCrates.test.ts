import { moveCrates } from "./moveCrates";
import { Crates } from "../types";

const initialCrates = {
  1: ["Z", "N"],
  2: ["M", "C", "D"],
  3: ["P"],
};

const stepOneCrates = {
  1: ["Z", "N", "D"],
  2: ["M", "C"],
  3: ["P"],
};

const stepTwoCrates: Crates = {
  1: [],
  2: ["M", "C"],
  3: ["P", "D", "N", "Z"],
};

const stepThreeCrates: Crates = {
  1: ["C", "M"],
  2: [],
  3: ["P", "D", "N", "Z"],
};

const stepFourCrates: Crates = {
  1: ["C"],
  2: ["M"],
  3: ["P", "D", "N", "Z"],
};

describe("moveCrates", () => {
  it("returns the crates after a rearrangement instruction has been executed", () => {
    expect(moveCrates(initialCrates, { move: 1, from: 2, to: 1 })).toEqual(
      stepOneCrates
    );

    expect(moveCrates(stepOneCrates, { move: 3, from: 1, to: 3 })).toEqual(
      stepTwoCrates
    );

    expect(moveCrates(stepTwoCrates, { move: 2, from: 2, to: 1 })).toEqual(
      stepThreeCrates
    );

    expect(moveCrates(stepThreeCrates, { move: 1, from: 1, to: 2 })).toEqual(
      stepFourCrates
    );
  });
});
