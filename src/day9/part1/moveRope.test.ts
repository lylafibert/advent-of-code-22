import { Direction } from "../types";
import { moveRope } from "./moveRope";

describe("moveRope", () => {
  it("returns the new head and tail positions", () => {
    expect(
      moveRope({
        headPosition: [2, 1],
        tailPosition: [1, 1],
        direction: Direction.Right,
      })
    ).toEqual({ headPosition: [3, 1], tailPosition: [2, 1] });

    expect(
      moveRope({
        headPosition: [1, 2],
        tailPosition: [1, 3],
        direction: Direction.Down,
      })
    ).toEqual({ headPosition: [1, 1], tailPosition: [1, 2] });

    expect(
      moveRope({
        headPosition: [2, 2],
        tailPosition: [1, 1],
        direction: Direction.Up,
      })
    ).toEqual({ headPosition: [2, 3], tailPosition: [2, 2] });

    expect(
      moveRope({
        headPosition: [2, 2],
        tailPosition: [1, 1],
        direction: Direction.Right,
      })
    ).toEqual({ headPosition: [3, 2], tailPosition: [2, 2] });

    expect(
      moveRope({
        headPosition: [0, 0],
        tailPosition: [0, 0],
        direction: Direction.Right,
      })
    ).toEqual({ headPosition: [1, 0], tailPosition: [0, 0] });

    expect(
      moveRope({
        headPosition: [1, 0],
        tailPosition: [0, 0],
        direction: Direction.Right,
      })
    ).toEqual({ headPosition: [2, 0], tailPosition: [1, 0] });

    expect(
      moveRope({
        headPosition: [2, 0],
        tailPosition: [1, 0],
        direction: Direction.Right,
      })
    ).toEqual({ headPosition: [3, 0], tailPosition: [2, 0] });

    expect(
      moveRope({
        headPosition: [3, 0],
        tailPosition: [2, 0],
        direction: Direction.Right,
      })
    ).toEqual({ headPosition: [4, 0], tailPosition: [3, 0] });

    expect(
      moveRope({
        headPosition: [4, 0],
        tailPosition: [3, 0],
        direction: Direction.Up,
      })
    ).toEqual({ headPosition: [4, 1], tailPosition: [3, 0] });

    expect(
      moveRope({
        headPosition: [4, 1],
        tailPosition: [3, 0],
        direction: Direction.Up,
      })
    ).toEqual({ headPosition: [4, 2], tailPosition: [4, 1] });

    expect(
      moveRope({
        headPosition: [4, 2],
        tailPosition: [4, 1],
        direction: Direction.Up,
      })
    ).toEqual({ headPosition: [4, 3], tailPosition: [4, 2] });

    expect(
      moveRope({
        headPosition: [4, 3],
        tailPosition: [4, 2],
        direction: Direction.Up,
      })
    ).toEqual({ headPosition: [4, 4], tailPosition: [4, 3] });

    expect(
      moveRope({
        headPosition: [4, 4],
        tailPosition: [4, 3],
        direction: Direction.Left,
      })
    ).toEqual({ headPosition: [3, 4], tailPosition: [4, 3] });

    expect(
      moveRope({
        headPosition: [3, 4],
        tailPosition: [4, 3],
        direction: Direction.Left,
      })
    ).toEqual({ headPosition: [2, 4], tailPosition: [3, 4] });

    expect(
      moveRope({
        headPosition: [2, 4],
        tailPosition: [3, 4],
        direction: Direction.Left,
      })
    ).toEqual({ headPosition: [1, 4], tailPosition: [2, 4] });

    expect(
      moveRope({
        headPosition: [1, 4],
        tailPosition: [2, 4],
        direction: Direction.Down,
      })
    ).toEqual({ headPosition: [1, 3], tailPosition: [2, 4] });

    expect(
      moveRope({
        headPosition: [1, 4],
        tailPosition: [2, 4],
        direction: Direction.Down,
      })
    ).toEqual({ headPosition: [1, 3], tailPosition: [2, 4] });
  });
});
