interface Props {
  crabPositions: number[];
  finalPosition: number;
}

export const getPositionConstantFuelCost = ({
  crabPositions,
  finalPosition,
}: Props): number => {
  let fuelCost = 0;

  crabPositions.forEach((position) => {
    fuelCost += Math.abs(position - finalPosition);
  });
  return fuelCost;
};
