import { getPositionConstantFuelCost } from "./getPositionConstantFuelCost";

interface PositionInfo {
  crabPositions: number[];
  finalPosition: number;
}

export const getCheapestPosition = (
  crabPositions: number[],
  getPositionFuelCost: (positionInfo: PositionInfo) => number
): number => {
  const highestPosition = Math.max(...crabPositions);
  const lowestPosition = Math.min(...crabPositions);

  let cheapestFuelCost: number;

  for (let i = lowestPosition; i <= highestPosition; i++) {
    const fuelCost = getPositionFuelCost({
      crabPositions,
      finalPosition: i,
    });
    if (isNaN(cheapestFuelCost) || fuelCost < cheapestFuelCost) {
      cheapestFuelCost = fuelCost;
    }
  }
  return cheapestFuelCost;
};
