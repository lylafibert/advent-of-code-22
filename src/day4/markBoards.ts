export const markBoards = (
  boards: number[][][],
  drawNumber: number
): number[][][] => {
  return boards.map((board) => {
    return board.map((row) => {
      return row.map((number) => (number === drawNumber ? null : number));
    });
  });
};
