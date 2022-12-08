import {
  getLeftViewingDistance,
  getLowerViewingDistance,
  getRightViewingDistance,
  getUpperViewingDistance,
} from "./getViewingDistance";

export const getHighestScenicScore = (treeMap: number[][]) => {
  const rowCount = treeMap.length;
  const columnCount = treeMap[0].length;

  let highestScenicScore = 0;

  for (let rowIndex = 1; rowIndex < rowCount - 1; rowIndex++) {
    for (let columnIndex = 1; columnIndex < columnCount - 1; columnIndex++) {
      const treeHeight = treeMap[rowIndex][columnIndex];
      const treeData = {
        treeMap,
        row: rowIndex,
        column: columnIndex,
        treeHeight,
      };
      const scenicScore =
        getUpperViewingDistance(treeData) *
        getLowerViewingDistance(treeData) *
        getLeftViewingDistance(treeData) *
        getRightViewingDistance(treeData);

      if (scenicScore > highestScenicScore) highestScenicScore = scenicScore;
    }
  }
  return highestScenicScore;
};
