interface VentLine {
  start: { x: number; y: number };
  end: { x: number; y: number };
}

export const getLineCoordinates = ({ start, end }: VentLine): number[][] => {
  const lineCoordinates = [[start.x, start.y]];

  if (start.x === end.x) {
    const { direction, length } = getDirectionAndLength(start.y, end.y);

    let y = start.y;
    for (let i = 0; i < length; i++) {
      y += direction;
      lineCoordinates.push([start.x, y]);
    }
  } else {
    const { direction, length } = getDirectionAndLength(start.x, end.x);

    let x = start.x;
    for (let i = 0; i < length; i++) {
      x += direction;
      lineCoordinates.push([x, start.y]);
    }
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
