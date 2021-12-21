export const getNextDayFish = (fishAges: number[]): number[] => {
  const nextDayFish = [...fishAges];

  const procreatingFish = nextDayFish.shift();
  nextDayFish[6] += procreatingFish;
  nextDayFish[8] = procreatingFish;

  return nextDayFish;
};
