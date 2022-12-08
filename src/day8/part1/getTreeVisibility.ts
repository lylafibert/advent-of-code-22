export const isVisibleFromAbove = ({
  treeMap,
  row,
  column,
}: {
  treeMap: number[][];
  row: number;
  column: number;
}): boolean => {
  const treeHeight = treeMap[row][column];
  let isVisibleFromAbove = true;

  for (
    let rowIndex = row - 1;
    rowIndex >= 0 && isVisibleFromAbove;
    rowIndex--
  ) {
    if (treeMap[rowIndex][column] >= treeHeight) isVisibleFromAbove = false;
  }
  return isVisibleFromAbove;
};

export const isVisibleFromBelow = ({
  treeMap,
  row,
  column,
}: {
  treeMap: number[][];
  row: number;
  column: number;
}): boolean => {
  const treeHeight = treeMap[row][column];
  let isVisibleFromBelow = true;

  for (
    let rowIndex = row + 1;
    rowIndex < treeMap.length && isVisibleFromBelow;
    rowIndex++
  ) {
    if (treeMap[rowIndex][column] >= treeHeight) isVisibleFromBelow = false;
  }
  return isVisibleFromBelow;
};

export const isVisibleFromLeft = ({
  treeMap,
  row,
  column,
}: {
  treeMap: number[][];
  row: number;
  column: number;
}): boolean => {
  const treeHeight = treeMap[row][column];
  let isVisibleFromLeft = true;

  for (
    let columnIndex = column - 1;
    columnIndex >= 0 && isVisibleFromLeft;
    columnIndex--
  ) {
    if (treeMap[row][columnIndex] >= treeHeight) isVisibleFromLeft = false;
  }
  return isVisibleFromLeft;
};

export const isVisibleFromRight = ({
  treeMap,
  row,
  column,
}: {
  treeMap: number[][];
  row: number;
  column: number;
}): boolean => {
  const treeHeight = treeMap[row][column];
  let isVisibleFromRight = true;

  for (
    let columnIndex = column + 1;
    columnIndex < treeMap[0].length && isVisibleFromRight;
    columnIndex++
  ) {
    if (treeMap[row][columnIndex] >= treeHeight) isVisibleFromRight = false;
  }
  return isVisibleFromRight;
};
