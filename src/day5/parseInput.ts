interface VentLine {
  start: { x: number; y: number };
  end: { x: number; y: number };
}

export const parseInput = (unparsedVentLines: string[]): VentLine[] => {
  return unparsedVentLines.map((unparsedVentLine) => {
    const [startXString, middleString, endYString] =
      unparsedVentLine.split(",");

    const [startYString, endXString] = middleString.split(" -> ");

    return {
      start: { x: parseInt(startXString), y: parseInt(startYString) },
      end: { x: parseInt(endXString), y: parseInt(endYString) },
    };
  });
};
