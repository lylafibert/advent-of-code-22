import { getInconstantFuelCostForCrab } from "./getInconstantFuelCostForCrab";

interface Props {
  crabPositions: number[];
  finalPosition: number;
}

export const getPositionInconstantFuelCost = ({
  crabPositions,
  finalPosition,
}: Props): number => {
  let fuelCost = 0;

  crabPositions.forEach((position) => {
    fuelCost += getInconstantFuelCostForCrab(position, finalPosition);
  });
  return fuelCost;
};
