import { getLowPoints } from "./getLowPoints";

export const getRiskSum = (heightMapStrings: string[]): number => {
  const heightMap = heightMapStrings.map((row) => {
    return row.split("").map((digitString) => Number(digitString));
  });

  const lowPoints = getLowPoints(heightMap);
  return lowPoints.reduce((riskSum, { height }) => {
    return riskSum + height + 1;
  }, 0);
};
