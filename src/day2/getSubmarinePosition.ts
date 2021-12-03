export const getSubmarinePosition = (instructions: string[]): number => {
  let horizontalPosition = 0;
  let verticalPosition = 0;

  instructions.forEach((instruction) => {
    const [direction, unitString] = instruction.split(" ");
    const units = parseInt(unitString);

    if (direction === "up") {
      verticalPosition -= units;
    } else if (direction === "down") {
      verticalPosition += units;
    } else {
      horizontalPosition += units;
    }
  });
  return horizontalPosition * verticalPosition;
};
