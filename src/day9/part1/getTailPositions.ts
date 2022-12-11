import { Coordinate, Direction } from "../types";
import { moveRope } from "./moveRope";

export const getTailPositions = (ropeMotions: [string, number][]) => {
  let head: Coordinate = [0, 0];
  let tail: Coordinate = [0, 0];

  const tailPositions: string[] = [];

  ropeMotions.forEach((motion) => {
    const [direction, repeat] = motion;
    for (let i = 0; i < repeat; i++) {
      const { tailPosition, headPosition } = moveRope({
        headPosition: head,
        tailPosition: tail,
        direction: direction as Direction,
      });
      head = headPosition;
      tail = tailPosition;

      const tailString = `${tailPosition}`;
      if (!tailPositions.includes(tailString)) tailPositions.push(tailString);
    }
  });
  return tailPositions.length;
};
