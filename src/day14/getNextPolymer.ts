export const getNextPolymer = (
  currentPolymer: string,
  rules: Record<string, string>
): string => {
  const newPolymer = currentPolymer
    .split("")
    .reduce((newPolymer, currentElement, i) => {
      const nextElement = currentPolymer[i + 1];
      if (!nextElement) return newPolymer + currentElement;
      const currentPair = currentElement + currentPolymer[i + 1];
      const newElement = rules[currentPair];
      return newPolymer + currentElement + newElement;
    }, "");

  return newPolymer;
};
