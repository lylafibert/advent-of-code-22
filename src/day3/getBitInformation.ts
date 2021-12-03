interface BitInformation {
  zeroes: number;
  ones: number;
}
export const getBitInformation = (
  diagnosticReport: string[],
  index: number
): BitInformation => {
  let zeroes = 0;
  let ones = 0;
  diagnosticReport.forEach((binaryNumber) => {
    if (binaryNumber[index] === "0") {
      zeroes++;
    } else {
      ones++;
    }
  });
  return { zeroes, ones };
};
