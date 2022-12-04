import { rangesOverlap } from "./rangesOverlap";

export const getOverlapNumber = (
  rangePairs: [[number, number], [number, number]][]
): number => {
  return rangePairs.reduce(
    (numberOfOverlaps, rangePair) =>
      rangesOverlap(rangePair) ? numberOfOverlaps + 1 : numberOfOverlaps,
    0
  );
};
