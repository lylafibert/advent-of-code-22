import { Axis } from "./types";

export const getNewDotCoordinates = (
  currentDot: number[],
  foldAxis: Axis,
  foldLine: number
): number[] => {
  const axisIndex = foldAxis === Axis.X ? 0 : 1;

  const distanceFromFoldLine = currentDot[axisIndex] - foldLine;
  const newDot = [...currentDot];
  newDot[axisIndex] = foldLine - distanceFromFoldLine;
  return newDot;
};
