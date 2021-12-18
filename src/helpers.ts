export const sortNumbersDescending = (numbers: number[]): number[] =>
  numbers.sort((a, b) => b - a);
export interface Position {
  column: number;
  row: number;
}

interface PositionData {
  position: Position;
  endRow: number;
  endColumn: number;
}

export const getAdjacentPositions = ({
  position: { row, column },
  endRow,
  endColumn,
}: PositionData): Position[] => {
  const isFirstColumn = column === 0;
  const isLastColumn = column === endColumn;
  const isFirstRow = row === 0;
  const isLastRow = row === endRow;

  const adjacentPositions: Position[] = [];

  // east
  if (!isLastColumn) adjacentPositions.push({ row, column: column + 1 });

  // west
  if (!isFirstColumn) adjacentPositions.push({ row, column: column - 1 });

  if (!isFirstRow) {
    // north
    adjacentPositions.push({ row: row - 1, column });
    // northEast
    if (!isLastColumn)
      adjacentPositions.push({
        row: row - 1,
        column: column + 1,
      });

    // northWest
    if (!isFirstColumn)
      adjacentPositions.push({
        row: row - 1,
        column: column - 1,
      });
  }

  if (!isLastRow) {
    // south
    adjacentPositions.push({ row: row + 1, column });
    // southEast
    if (!isLastColumn)
      adjacentPositions.push({
        row: row + 1,
        column: column + 1,
      });
    // southWest
    if (!isFirstColumn)
      adjacentPositions.push({
        row: row + 1,
        column: column - 1,
      });
  }

  return adjacentPositions;
};
