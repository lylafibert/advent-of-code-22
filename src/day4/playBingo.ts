import { checkForBingo } from "./checkForBingo";
import { markBoards } from "./markBoards";

export const playBingo = (
  boards: number[][][],
  drawNumbers: number[]
): number => {
  let winningBoard;
  let drawNumber;
  let currentBoardsState = boards;

  for (
    let drawIndex = 0;
    drawIndex < drawNumbers.length && !winningBoard;
    drawIndex++
  ) {
    drawNumber = drawNumbers[drawIndex];
    const markedBoards = markBoards(currentBoardsState, drawNumber);
    currentBoardsState = markedBoards;
    for (let i = 0; i < currentBoardsState.length && !winningBoard; i++) {
      const currentBoard = currentBoardsState[i];
      if (checkForBingo(currentBoard)) winningBoard = currentBoard;
    }
  }
  const flattenedWinningBoard = winningBoard.flat();
  const winningBoardSum = flattenedWinningBoard.reduce(
    (acc, currentNumber) => acc + currentNumber
  );
  return winningBoardSum * drawNumber;
};
