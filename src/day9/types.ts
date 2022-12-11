export enum Direction {
  Right = "R",
  Left = "L",
  Up = "U",
  Down = "D",
}

export type Coordinate = [number, number];

export interface RopePosition {
  headPosition: Coordinate;
  tailPosition: Coordinate;
}

export interface Movement extends RopePosition {
  direction: Direction;
}
