import { checkForBingo } from "./checkForBingo";
import { markBoards } from "./markBoards";

export const getLosingCardScore = (
  boards: number[][][],
  draws: number[]
): number => {
  let drawNumber;
  let losingBoards = [...boards];
  let currentBoard;

  for (
    let drawIndex = 0;
    drawIndex < draws.length && losingBoards.length > 0;
    drawIndex++
  ) {
    drawNumber = draws[drawIndex];
    const markedBoards = markBoards(losingBoards, drawNumber);
    losingBoards = markedBoards;
    for (let i = 0; i < losingBoards.length && losingBoards.length > 0; i++) {
      currentBoard = losingBoards[i];
      if (checkForBingo(currentBoard)) losingBoards.splice(i, 1);
    }
  }
  const flattenedLosingBoard = currentBoard.flat();
  const losingBoardSum = flattenedLosingBoard.reduce(
    (acc, currentNumber) => acc + currentNumber
  );
  return losingBoardSum * drawNumber;
};
