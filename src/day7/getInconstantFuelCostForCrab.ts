export const getInconstantFuelCostForCrab = (
  crabPosition: number,
  targetPosition: number
): number => {
  if (crabPosition === targetPosition) return 0;

  const direction = Math.sign(targetPosition - crabPosition);

  let burnRate = 1;
  let fuelCost = 0;

  for (let i = crabPosition; i !== targetPosition; i += direction) {
    fuelCost += burnRate;
    burnRate++;
  }

  return fuelCost;
};
