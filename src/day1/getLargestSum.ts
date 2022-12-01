export const getLargestSum = (elfFood: number[][]): number => {
  return elfFood.reduce((largestSum, foodList) => {
    const foodSum = foodList.reduce(
      (total, currentValue) => total + currentValue,
      0
    );
    return foodSum > largestSum ? foodSum : largestSum;
  }, 0);
};
