export const getSlidingWindowIncreasedDepths = (depths: number[]): number => {
  let numberOfIncreasedDepths = 0;
  let previousSum: number;
  for (let i = 0; i < depths.length - 2; i++) {
    const currentSum = depths[i] + depths[i + 1] + depths[i + 2];

    if (i != 0) {
      if (currentSum > previousSum) numberOfIncreasedDepths++;
    }
    previousSum = currentSum;
  }

  return numberOfIncreasedDepths;
};
