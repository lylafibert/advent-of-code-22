export const getNumberOfIncreasedDepths = (depths: number[]): number => {
  let numberOfIncreasedDepths = 0;
  for (let i = 1; i < depths.length; i++) {
    const currentDepth = depths[i];
    const previousDepth = depths[i - 1];
    if (currentDepth > previousDepth) numberOfIncreasedDepths++;
  }
  return numberOfIncreasedDepths;
};
