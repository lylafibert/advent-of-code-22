export const sortNumbersDescending = (numbers: number[]): number[] =>
  numbers.sort((a, b) => b - a);
export interface Position {
  column: number;
  row: number;
}

interface PositionData {
  position: number[];
  endRow: number;
  endColumn: number;
  includeDiagonals: boolean;
}

export const getAdjacentPositions = ({
  position: [row, column],
  endRow,
  endColumn,
  includeDiagonals = true,
}: PositionData): number[][] => {
  const isFirstColumn = column === 0;
  const isLastColumn = column === endColumn;
  const isFirstRow = row === 0;
  const isLastRow = row === endRow;

  const adjacentPositions: number[][] = [];

  // east
  if (!isLastColumn) adjacentPositions.push([row, column + 1]);

  // west
  if (!isFirstColumn) adjacentPositions.push([row, column - 1]);

  if (!isFirstRow) {
    // north
    adjacentPositions.push([row - 1, column]);
    if (includeDiagonals) {
      // northEast
      if (!isLastColumn) adjacentPositions.push([row - 1, column + 1]);

      // northWest
      if (!isFirstColumn) adjacentPositions.push([row - 1, column - 1]);
    }
  }

  if (!isLastRow) {
    // south
    adjacentPositions.push([row + 1, column]);

    if (includeDiagonals) {
      // southEast
      if (!isLastColumn) adjacentPositions.push([row + 1, column + 1]);
      // southWest
      if (!isFirstColumn) adjacentPositions.push([row + 1, column - 1]);
    }
  }

  return adjacentPositions;
};
