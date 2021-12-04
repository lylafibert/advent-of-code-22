export const checkForBingo = (board: number[][]): boolean => {
  let hasBingo = false;

  for (let i = 0; i < board.length && !hasBingo; i++) {
    hasBingo = board.every((row) => row[i] === null);
    if (!hasBingo) {
      const currentRow = board[i];

      const rowSet = new Set(currentRow);
      if (rowSet.size === 1) {
        const [setContent] = rowSet;
        if (setContent === null) hasBingo = true;
      }
    }
  }

  return hasBingo;
};
