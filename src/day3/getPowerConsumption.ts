export const getPowerConsumption = (diagnosticReport: string[]): number => {
  const gammaRateBits = [];
  const epsilonRateBits = [];

  const numberLength = diagnosticReport[0].length;

  for (let i = 0; i < numberLength; i++) {
    let zeroes = 0;
    let ones = 0;
    diagnosticReport.forEach((binaryNumber) => {
      if (binaryNumber[i] === "0") {
        zeroes++;
      } else {
        ones++;
      }
    });
    const mostCommonBit = zeroes > ones ? 0 : 1;
    const leastCommonBit = zeroes > ones ? 1 : 0;
    gammaRateBits.push(mostCommonBit);
    epsilonRateBits.push(leastCommonBit);
  }

  const gammaRate = parseInt(gammaRateBits.join(""), 2);
  const epsilonRate = parseInt(epsilonRateBits.join(""), 2);

  return gammaRate * epsilonRate;
};
