export const getLiteralValue = (binaryString: string): number => {
  const valueBinary = binaryString.slice(6);

  const groupSize = 5;

  const groups = [];

  let hasProcessedFinalGroup = false;

  for (
    let i = 0;
    i < valueBinary.length && !hasProcessedFinalGroup;
    i += groupSize
  ) {
    const leadingBit = valueBinary[i];
    const group = valueBinary.slice(i + 1, i + groupSize);
    groups.push(group);
    if (leadingBit === "0") hasProcessedFinalGroup = true;
  }

  const value = parseInt(groups.join(""), 2);

  return value;
};
