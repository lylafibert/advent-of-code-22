import { foldPaper } from "./foldPaper";
import { Axis } from "./types";

export const getCode = (
  dots: number[][],
  foldingInstructions: [Axis, number][]
): string[] => {
  let codeDots = [...dots];
  foldingInstructions.forEach(([axis, foldLine]) => {
    codeDots = foldPaper(codeDots, axis, foldLine);
  });

  const code: string[][] = [];
  codeDots.forEach(([x, y]) => {
    const row = code[y];
    if (!row) code[y] = [];
    code[y][x] = "#";
  });

  return code.map((row) => {
    const newRow = [...row];

    for (let i = 0; i < row.length; i++) {
      const currentCell = row[i];
      if (!currentCell) newRow[i] = ".";
    }
    return newRow.join("");
  });
};
