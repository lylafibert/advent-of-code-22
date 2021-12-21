import { getNextDayFish } from "./getNextDayFish";

export const getFishAfterXDays = (
  initialFishAges: number[],
  days: number
): number => {
  let fishAges = initialFishAges;

  for (let i = 0; i < days; i++) {
    fishAges = getNextDayFish(fishAges);
  }
  return fishAges.length;
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
