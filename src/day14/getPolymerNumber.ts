import { getXStepPolymer } from "./getXStepPolymer";

export const getPolymerNumber = (
  polymerTemplate: string,
  rules: Record<string, string>,
  steps: number
): number => {
  const polymer = getXStepPolymer(polymerTemplate, rules, steps);

  const elements = polymer.split("");

  const elementOccurences: Record<string, number> = elements.reduce(
    (elementOccurences, currentElement) => {
      elementOccurences[currentElement] =
        (elementOccurences[currentElement] || 0) + 1;
      return elementOccurences;
    },
    {} as Record<string, number>
  );

  const max = Object.keys(elementOccurences).reduce(
    (mostCommon, currentElement) =>
      elementOccurences[mostCommon] > elementOccurences[currentElement]
        ? mostCommon
        : currentElement
  );

  const min = Object.keys(elementOccurences).reduce(
    (mostCommon, currentElement) =>
      elementOccurences[mostCommon] < elementOccurences[currentElement]
        ? mostCommon
        : currentElement
  );

  return elementOccurences[max] - elementOccurences[min];
};
