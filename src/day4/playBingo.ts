import { checkForBingo } from "./checkForBingo";
import { markBoards } from "./markBoards";

export const playBingo = (
  boards: number[][][],
  drawNumbers: number[]
): number => {
  let winningBoard;
  let drawNumber;
  let currentBoardsState = boards;

  for (let i = 0; i < drawNumbers.length && !winningBoard; i++) {
    drawNumber = drawNumbers[i];
    const markedBoards = markBoards(currentBoardsState, drawNumber);
    currentBoardsState = markedBoards;
    winningBoard = checkForBingo(currentBoardsState);
  }
  const flattenedWinningBoard = winningBoard.flat();
  const winningBoardSum = flattenedWinningBoard.reduce(
    (acc, currentNumber) => acc + currentNumber
  );
  return winningBoardSum * drawNumber;
};
