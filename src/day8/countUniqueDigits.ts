import { getSignalData } from "./getSignalData";

export const countUniqueDigits = (signals: string[]): number => {
  const uniqueSegmentCounts = [2, 3, 4, 7];

  let uniqueDigitCount = 0;

  signals.forEach((signal) => {
    const { outputs } = getSignalData(signal);
    outputs.forEach((output) => {
      if (uniqueSegmentCounts.includes(output.length)) uniqueDigitCount++;
    });
  });
  return uniqueDigitCount;
};
