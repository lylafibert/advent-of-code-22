import { sortNumbersDescending } from "../../helpers";
import { getLowPoints } from "../getLowPoints";
import { getBasinSize } from "./getBasinSize";

export const getLargestBasinsProduct = (heightMapStrings: string[]): number => {
  const heightMap = heightMapStrings.map((row) => {
    return row.split("").map((digitString) => Number(digitString));
  });

  const lowPoints = getLowPoints(heightMap);

  const basinSizes = lowPoints.map((lowPoint) =>
    getBasinSize(heightMap, lowPoint)
  );
  const sortedBasinSizes = sortNumbersDescending(basinSizes);

  const [one, two, three] = sortedBasinSizes;

  return one * two * three;
};
