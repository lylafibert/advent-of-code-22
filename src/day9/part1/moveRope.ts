import { Coordinate, Direction, Movement, RopePosition } from "../types";

export const moveRope = ({
  headPosition,
  tailPosition,
  direction,
}: Movement): RopePosition => {
  let newHeadPosition: Coordinate = [...headPosition];
  let newTailPosition: Coordinate = [...tailPosition];

  switch (direction) {
    case Direction.Up:
      newHeadPosition[1]++;

      if (newHeadPosition[1] - tailPosition[1] > 1) {
        if (tailPosition[0] === newHeadPosition[0]) {
          newTailPosition[1]++;
        } else {
          newTailPosition = [newHeadPosition[0], newHeadPosition[1] - 1];
        }
      }

      break;
    case Direction.Down:
      newHeadPosition[1]--;

      if (tailPosition[1] - newHeadPosition[1] > 1) {
        if (tailPosition[0] === newHeadPosition[0]) {
          newTailPosition[1]--;
        } else {
          newTailPosition = [newHeadPosition[0], newHeadPosition[1] + 1];
        }
      }

      break;
    case Direction.Left:
      newHeadPosition[0]--;

      if (tailPosition[0] - newHeadPosition[0] > 1) {
        if (tailPosition[0] === newHeadPosition[0]) {
          newTailPosition[0]--;
        } else {
          newTailPosition = [newHeadPosition[0] + 1, newHeadPosition[1]];
        }
      }
      break;
    default:
      newHeadPosition[0]++;
      if (newHeadPosition[0] - tailPosition[0] > 1) {
        if (tailPosition[1] === newHeadPosition[1]) {
          newTailPosition[0]++;
        } else {
          newTailPosition = [newHeadPosition[0] - 1, newHeadPosition[1]];
        }
      }
  }

  return { headPosition: newHeadPosition, tailPosition: newTailPosition };
};
