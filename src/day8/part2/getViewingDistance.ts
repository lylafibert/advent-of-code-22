interface Args {
  treeMap: number[][];
  row: number;
  column: number;
  treeHeight: number;
}

export const getUpperViewingDistance = ({
  treeMap,
  row,
  column,
  treeHeight,
}: Args): number => {
  let isBlocked = false;
  let viewingDistance = 0;

  for (let rowIndex = row - 1; rowIndex >= 0 && !isBlocked; rowIndex--) {
    if (treeMap[rowIndex][column] >= treeHeight) isBlocked = true;
    viewingDistance++;
  }
  return viewingDistance;
};

export const getLowerViewingDistance = ({
  treeMap,
  row,
  column,
  treeHeight,
}: Args): number => {
  let isBlocked = false;
  let viewingDistance = 0;

  for (
    let rowIndex = row + 1;
    rowIndex < treeMap.length && !isBlocked;
    rowIndex++
  ) {
    if (treeMap[rowIndex][column] >= treeHeight) isBlocked = true;
    viewingDistance++;
  }
  return viewingDistance;
};

export const getLeftViewingDistance = ({
  treeMap,
  row,
  column,
  treeHeight,
}: Args): number => {
  let isBlocked = false;
  let viewingDistance = 0;

  for (
    let columnIndex = column - 1;
    columnIndex >= 0 && !isBlocked;
    columnIndex--
  ) {
    if (treeMap[row][columnIndex] >= treeHeight) isBlocked = true;
    viewingDistance++;
  }
  return viewingDistance;
};

export const getRightViewingDistance = ({
  treeMap,
  row,
  column,
  treeHeight,
}: Args): number => {
  let isBlocked = false;
  let viewingDistance = 0;

  for (
    let columnIndex = column + 1;
    columnIndex < treeMap[0].length && !isBlocked;
    columnIndex++
  ) {
    if (treeMap[row][columnIndex] >= treeHeight) isBlocked = true;
    viewingDistance++;
  }
  return viewingDistance;
};
