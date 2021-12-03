import { getBitInformation } from "./getBitInformation";

export const getRating = (
  diagnosticReport: string[],
  ratingType: string
): number => {
  let filteredReport = [...diagnosticReport];
  for (
    let i = 0;
    i < diagnosticReport[0].length && filteredReport.length > 1;
    i++
  ) {
    const { zeroes, ones } = getBitInformation(filteredReport, i);
    filteredReport = filteredReport.filter((binaryNumber) => {
      if (
        (zeroes > ones && ratingType === "oxygen") ||
        (!(zeroes > ones) && ratingType === "CO2")
      ) {
        return binaryNumber[i] === "0";
      } else {
        return binaryNumber[i] === "1";
      }
    });
  }

  return parseInt(filteredReport[0], 2);
};
