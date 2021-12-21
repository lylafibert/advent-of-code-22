// get all 0s, 1s, 2s, etc.
// array for each age
// move from one age to another

// model number of fish at each age,
// shift fish

export const getNextDayFish = (fishAges: number[]): number[] => {
  const nextDayFish = [...fishAges];

  const procreatingFish = nextDayFish.shift();
  nextDayFish[6] += procreatingFish;
  nextDayFish[8] = procreatingFish;

  return nextDayFish;
};
