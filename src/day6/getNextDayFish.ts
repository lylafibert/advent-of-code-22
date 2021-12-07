export const getNextDayFish = (fishAges: number[]): number[] => {
  const newFish: number[] = [];

  const existingFish = fishAges.map((fish) => {
    if (fish === 0) {
      newFish.push(8);
      return 6;
    }
    return fish - 1;
  });

  return [...existingFish, ...newFish];
};
