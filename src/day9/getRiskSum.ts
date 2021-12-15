import { getLowPoints } from "./getLowPoints";

export const getRiskSum = (heightMapStrings: string[]): number => {
  const heightMap = heightMapStrings.map((row) => {
    return row.split("").map((digitString) => Number(digitString));
  });

  const lowPoints = getLowPoints(heightMap);
  return lowPoints.reduce((riskSum, lowPoint) => {
    return riskSum + lowPoint + 1;
  }, 0);
};
