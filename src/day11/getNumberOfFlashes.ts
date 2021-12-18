import { executeStep } from "./executeStep";

export const getNumberOfFlashes = (
  initialGrid: number[][],
  steps: number
): number => {
  let totalFlashes = 0;
  let currentGrid = initialGrid;
  for (let i = 0; i < steps; i++) {
    const { newGrid, flashes } = executeStep(currentGrid);
    totalFlashes += flashes;
    currentGrid = newGrid;
  }
  return totalFlashes;
};
