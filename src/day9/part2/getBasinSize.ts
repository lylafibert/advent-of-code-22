import { Location } from "../types";
import { getAdjacentBasinLocations } from "./getAdjacentBasinLocations";

export const getBasinSize = (
  heightMap: number[][],
  lowPoint: Location
): number => {
  const basinLocations = [lowPoint];

  const getNextLocations = (currentLocation: Location): void => {
    const nextBasinLocations = getAdjacentBasinLocations(
      heightMap,
      currentLocation
    );
    const newLocations = nextBasinLocations.filter(
      ({ rowIndex, columnIndex }) => {
        const sameElement = basinLocations.find(
          (basinLocation) =>
            rowIndex === basinLocation.rowIndex &&
            columnIndex === basinLocation.columnIndex
        );

        return !sameElement;
      }
    );
    basinLocations.push(...newLocations);
    if (newLocations.length > 0) {
      newLocations.forEach((location) => {
        getNextLocations(location);
      });
    }
  };

  getNextLocations(lowPoint);

  return basinLocations.length;
};
