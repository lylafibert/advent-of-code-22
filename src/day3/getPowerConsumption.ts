import { getBitInformation } from "./getBitInformation";

export const getPowerConsumption = (diagnosticReport: string[]): number => {
  const gammaRateBits = [];
  const epsilonRateBits = [];

  const numberLength = diagnosticReport[0].length;

  for (let i = 0; i < numberLength; i++) {
    const { zeroes, ones } = getBitInformation(diagnosticReport, i);
    const mostCommonBit = zeroes > ones ? 0 : 1;
    const leastCommonBit = zeroes > ones ? 1 : 0;
    gammaRateBits.push(mostCommonBit);
    epsilonRateBits.push(leastCommonBit);
  }

  const gammaRate = parseInt(gammaRateBits.join(""), 2);
  const epsilonRate = parseInt(epsilonRateBits.join(""), 2);

  return gammaRate * epsilonRate;
};
