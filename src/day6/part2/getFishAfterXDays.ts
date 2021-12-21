import { getNextDayFish } from "./getNextDayFish";

export const getFishAfterXDays = (
  initialFish: number[],
  days: number
): number => {
  let fishAges = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  initialFish.forEach((fishAge) => {
    fishAges[fishAge]++;
  });

  for (let i = 0; i < days; i++) {
    fishAges = getNextDayFish(fishAges);
  }
  return fishAges.reduce((fishSum, numOfFishAtCurrentAge) => {
    return fishSum + numOfFishAtCurrentAge;
  }, 0);
};

// export const getFishAfterXDays = (
//   initialFishAges: number[],
//   days: number
// ): number => {
//   let fishAges = initialFishAges;

//   for (let i = 0; i < days; i++) {
//     fishAges = getNextDayFish(fishAges);
//   }
//   return fishAges.length;
// };
