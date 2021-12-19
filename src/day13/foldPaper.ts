import { getNewDotCoordinates } from "./getNewDotCoordinates";
import { Axis } from "./types";

export const foldPaper = (
  dots: number[][],
  foldAxis: Axis,
  foldCoordinate: number
): number => {
  const axisIndex = foldAxis === Axis.X ? 0 : 1;
  const { firstHalf, foldingHalf } = dots.reduce(
    ({ firstHalf, foldingHalf }, currentDot) => {
      if (currentDot[axisIndex] < foldCoordinate) {
        return { firstHalf: [...firstHalf, currentDot], foldingHalf };
      } else {
        return { firstHalf, foldingHalf: [...foldingHalf, currentDot] };
      }
    },
    { firstHalf: [], foldingHalf: [] }
  );

  foldingHalf.forEach((dot) => {
    const newDot = getNewDotCoordinates(dot, foldAxis, foldCoordinate);
    const dotExistsAlready = !!firstHalf.find(
      (dot) => dot[0] === newDot[0] && dot[1] === newDot[1]
    );
    if (!dotExistsAlready) firstHalf.push(newDot);
  });
  return firstHalf.length;
};
