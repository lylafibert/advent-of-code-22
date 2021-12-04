export const checkForBingo = (boards: number[][][]): null | number[][] => {
  let hasBingo = false;
  let winningBoard = null;
  for (let i = 0; i < boards.length && !hasBingo; i++) {
    const currentBoard = boards[i];
    for (let i = 0; i < currentBoard.length && !hasBingo; i++) {
      hasBingo = currentBoard.every((row) => row[i] === null);
      if (!hasBingo) {
        const currentRow = currentBoard[i];

        const rowSet = new Set(currentRow);
        if (rowSet.size === 1) {
          const [setContent] = rowSet;
          if (setContent === null) hasBingo = true;
        }
      }
    }
    if (hasBingo) winningBoard = currentBoard;
  }
  return winningBoard;
};
