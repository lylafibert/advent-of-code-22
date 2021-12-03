export const getSubmarinePositionWithAim = (instructions: string[]): number => {
  let horizontalPosition = 0;
  let verticalPosition = 0;
  let aim = 0;

  instructions.forEach((instruction) => {
    const [direction, unitString] = instruction.split(" ");
    const units = parseInt(unitString);

    if (direction === "up") {
      aim -= units;
    } else if (direction === "down") {
      aim += units;
    } else {
      horizontalPosition += units;
      verticalPosition += aim * units;
    }
  });
  return horizontalPosition * verticalPosition;
};
