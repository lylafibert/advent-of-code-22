import { getLineCoordinates } from "./getLineCoordinates";
import { parseInput } from "./parseInput";

export const getOverlappingPoints = (unparsedVentLines: string[]): number => {
  const ventLines = parseInput(unparsedVentLines);

  const lineCoordinates: number[][] = [];

  ventLines.forEach((ventLine) => {
    if (
      ventLine.start.x === ventLine.end.x ||
      ventLine.start.y === ventLine.end.y
    ) {
      lineCoordinates.push(...getLineCoordinates(ventLine));
    }
  });

  const sortedCoordinates = lineCoordinates.sort();

  const overlappingCoordinates = [];

  sortedCoordinates.forEach((coordinate, i) => {
    const previousCoordinate = i > 0 ? sortedCoordinates[i - 1] : [null, null];
    const nextCoordinate =
      i < sortedCoordinates.length - 1
        ? sortedCoordinates[i + 1]
        : [null, null];

    const isSameAsPrevious =
      coordinate[0] === previousCoordinate[0] &&
      coordinate[1] === previousCoordinate[1];
    const isSameAsNext =
      coordinate[0] === nextCoordinate[0] &&
      coordinate[1] === nextCoordinate[1];

    if (isSameAsNext && !isSameAsPrevious)
      overlappingCoordinates.push(coordinate);
  });

  return overlappingCoordinates.length;
};
