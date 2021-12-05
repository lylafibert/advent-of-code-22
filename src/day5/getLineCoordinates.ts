interface VentLine {
  start: { x: number; y: number };
  end: { x: number; y: number };
}

export const getLineCoordinates = ({ start, end }: VentLine): number[][] => {
  const lineCoordinates = [[start.x, start.y]];

  const { direction: xDirection, length: xLength } = getDirectionAndLength(
    start.x,
    end.x
  );
  const { direction: yDirection, length: yLength } = getDirectionAndLength(
    start.y,
    end.y
  );

  const length = xLength || yLength;
  let y = start.y;
  let x = start.x;

  for (let i = 0; i < length; i++) {
    y += yDirection;
    x += xDirection;
    lineCoordinates.push([x, y]);
  }

  return lineCoordinates;
};

interface LineInfo {
  direction: number;
  length: number;
}

const getDirectionAndLength = (start: number, end: number): LineInfo => {
  const difference = end - start;
  const direction = Math.sign(difference);
  const length = Math.abs(difference);
  return { direction, length };
};
