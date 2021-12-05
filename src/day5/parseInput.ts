interface VentLine {
  from: { x: number; y: number };
  to: { x: number; y: number };
}

export const parseInput = (unparsedVentLines: string[]): VentLine[] => {
  return unparsedVentLines.map((unparsedVentLine) => {
    const [fromXString, middleString, toYString] = unparsedVentLine.split(",");

    const [fromYString, toXString] = middleString.split(" -> ");

    return {
      from: { x: parseInt(fromXString), y: parseInt(fromYString) },
      to: { x: parseInt(toXString), y: parseInt(toYString) },
    };
  });
};
