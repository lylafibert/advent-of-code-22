import { getAdjacentLocations } from "../getAdjacentLocations";
import { Location } from "../types";

export const getAdjacentBasinLocations = (
  heightMap: number[][],
  location: Location
): Location[] => {
  const allAdjacentLocations = getAdjacentLocations(heightMap, location);
  return allAdjacentLocations.filter(
    ({ height }) => height > location.height && height < 9
  );
};
