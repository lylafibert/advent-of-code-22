import { getRating } from "./getRating";

export const getLifeSupportRating = (diagnosticReport: string[]): number => {
  const oxygenGeneratorRating = getRating(diagnosticReport, "oxygen");
  const CO2ScrubberRating = getRating(diagnosticReport, "CO2");

  return oxygenGeneratorRating * CO2ScrubberRating;
};
