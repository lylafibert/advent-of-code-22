export const getTopThreeTotal = (elfFood: number[][]): number => {
  const sums = elfFood.map((foodList) =>
    foodList.reduce((total, currentValue) => total + currentValue, 0)
  );

  const sortedFoodSum = sums.sort((a, b) => b - a);

  const [first, second, third] = sortedFoodSum;

  return first + second + third;
};
