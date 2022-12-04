import { RangePair } from "../types";

export const rangesFullyOverlap = (ranges: RangePair): boolean =>
  rangeContainsOther(ranges[0], ranges[1]) ||
  rangeContainsOther(ranges[1], ranges[0]);

const rangeContainsOther = (
  firstRange: [number, number],
  secondRange: [number, number]
): boolean =>
  firstRange[0] >= secondRange[0] && firstRange[1] <= secondRange[1];
