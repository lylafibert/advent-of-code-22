import {
  isVisibleFromAbove,
  isVisibleFromBelow,
  isVisibleFromLeft,
  isVisibleFromRight,
} from "./getTreeVisibility";

export const countVisibleTrees = (treeMap: number[][]) => {
  const rowCount = treeMap.length;
  const columnCount = treeMap[0].length;
  const outerTrees = rowCount * 2 + (columnCount - 2) * 2;

  let visibleTreeCount = outerTrees;

  for (let rowIndex = 1; rowIndex < rowCount - 1; rowIndex++) {
    for (let columnIndex = 1; columnIndex < columnCount - 1; columnIndex++) {
      const treeData = { treeMap, row: rowIndex, column: columnIndex };
      if (
        isVisibleFromAbove(treeData) ||
        isVisibleFromBelow(treeData) ||
        isVisibleFromLeft(treeData) ||
        isVisibleFromRight(treeData)
      )
        visibleTreeCount++;
    }
  }
  return visibleTreeCount;
};
