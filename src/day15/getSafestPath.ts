import { getAdjacentPositions } from "../helpers";

export const getSafestPath = (riskMap: number[][]): number => {
  const paths = [];
  const startingPosition = [0, 0];

  const visited = [startingPosition];

  const adjacentPositions = getAdjacentPositions({
    position: startingPosition,
    endRow: riskMap.length - 1,
    endColumn: riskMap[0].length - 1,
    includeDiagonals: false,
  });

  // console.log({ nextPossibilities });

  return 5;
};
