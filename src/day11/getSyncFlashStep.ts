import { executeStep } from "./executeStep";

export const getSyncFlashStep = (initialGrid: number[][]): number => {
  let syncFlashStep: number = null;
  let currentGrid = initialGrid;
  for (let i = 1; !syncFlashStep; i++) {
    const { newGrid, flashes } = executeStep(currentGrid);
    currentGrid = newGrid;

    if (flashes === 100) syncFlashStep = i;
  }
  return syncFlashStep;
};
