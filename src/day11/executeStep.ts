import { getAdjacentPositions, Position } from "../helpers";

interface Result {
  newGrid: number[][];
  flashes: number;
}

export const executeStep = (octopusGrid: number[][]): Result => {
  let flashes = 0;

  const flashingOctopi: number[][] = [];

  const newGrid = octopusGrid.map((row, rowIndex) => {
    return row.map((energy, columnIndex) => {
      const newEnergy = energy + 1;
      if (newEnergy === 10) {
        flashingOctopi.push([rowIndex, columnIndex]);
        flashes++;
      }
      return newEnergy;
    });
  });

  const endRow = octopusGrid.length - 1;
  const endColumn = octopusGrid[0].length - 1;

  while (flashingOctopi.length) {
    const [row, column] = flashingOctopi[0];
    const adjacentPositions: number[][] = getAdjacentPositions({
      position: [row, column],
      endRow,
      endColumn,
      includeDiagonals: true,
    });

    adjacentPositions.forEach((adjacentPosition) => {
      const newValue = newGrid[adjacentPosition[0]][adjacentPosition[1]] + 1;

      newGrid[adjacentPosition[0]][adjacentPosition[1]] = newValue;
      if (newValue === 10) {
        flashingOctopi.push(adjacentPosition);
        flashes++;
      }
    });

    flashingOctopi.shift();
  }

  const finalGrid = newGrid.map((row) =>
    row.map((energy) => (energy > 9 ? 0 : energy))
  );
  return { newGrid: finalGrid, flashes };
};
