import { rangesFullyOverlap } from "./rangesFullyOverlap";

export const getFullOverlapNumber = (
  rangePairs: [[number, number], [number, number]][]
): number => {
  return rangePairs.reduce(
    (numberOfOverlaps, rangePair) =>
      rangesFullyOverlap(rangePair) ? numberOfOverlaps + 1 : numberOfOverlaps,
    0
  );
};
