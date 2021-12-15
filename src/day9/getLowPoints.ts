import { getAdjacentLocations } from "./getAdjacentLocations";
import { Location } from "./types";

export const getLowPoints = (heightMap: number[][]): Location[] => {
  const lowPoints: Location[] = [];

  heightMap.forEach((row, rowIndex) => {
    row.forEach((height, columnIndex) => {
      const adjacentLocations = getAdjacentLocations(heightMap, {
        rowIndex,
        columnIndex,
        height,
      });
      if (
        adjacentLocations.every((locationHeight) => locationHeight > height)
      ) {
        lowPoints.push({ height, rowIndex, columnIndex });
      }
    });
  });
  return lowPoints;
};
