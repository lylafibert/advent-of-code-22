import { RangePair } from "../types";

export const rangesOverlap = (ranges: RangePair): boolean =>
  hasOverlap(ranges[0], ranges[1]) || hasOverlap(ranges[1], ranges[0]);

const hasOverlap = (
  firstRange: [number, number],
  secondRange: [number, number]
): boolean =>
  firstRange[1] >= secondRange[0] && firstRange[1] <= secondRange[1];
