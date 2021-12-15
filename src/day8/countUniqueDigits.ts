import { getOutputValues } from "./getOutputValues";

export const countUniqueDigits = (signals: string[]): number => {
  const uniqueSegmentCounts = [2, 3, 4, 7];
  const outputs = getOutputValues(signals);
  let uniqueDigitCount = 0;

  outputs.forEach((output) => {
    if (uniqueSegmentCounts.includes(output.length)) uniqueDigitCount++;
  });
  return uniqueDigitCount;
};
