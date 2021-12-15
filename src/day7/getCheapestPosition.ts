import { getPositionConstantFuelCost } from "./getPositionConstantFuelCost";

export const getCheapestPosition = (crabPositions: number[]): number => {
  const highestPosition = Math.max(...crabPositions);
  const lowestPosition = Math.min(...crabPositions);

  let cheapestFuelCost: number;

  for (let i = lowestPosition; i <= highestPosition; i++) {
    const fuelCost = getPositionConstantFuelCost({
      crabPositions,
      finalPosition: i,
    });
    if (isNaN(cheapestFuelCost) || fuelCost < cheapestFuelCost) {
      cheapestFuelCost = fuelCost;
    }
  }
  return cheapestFuelCost;
};
