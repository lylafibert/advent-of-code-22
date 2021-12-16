import { Location } from "./types";

export const getAdjacentLocations = (
  heightMap: number[][],
  { rowIndex, columnIndex }: Location
): Location[] => {
  const northRow = heightMap[rowIndex - 1];
  const southRow = heightMap[rowIndex + 1];

  const north = northRow ? northRow[columnIndex] : 9;
  const south = southRow ? southRow[columnIndex] : 9;

  const east = isNaN(heightMap[rowIndex][columnIndex + 1])
    ? 9
    : heightMap[rowIndex][columnIndex + 1];
  const west = isNaN(heightMap[rowIndex][columnIndex - 1])
    ? 9
    : heightMap[rowIndex][columnIndex - 1];

  return [
    { height: north, rowIndex: rowIndex - 1, columnIndex },
    { height: east, rowIndex, columnIndex: columnIndex + 1 },
    { height: south, rowIndex: rowIndex + 1, columnIndex },
    { height: west, rowIndex, columnIndex: columnIndex - 1 },
  ];
};
