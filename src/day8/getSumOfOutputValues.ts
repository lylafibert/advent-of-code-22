import { getOutputValue } from "./getOutputValue";

export const getSumOfOutputValues = (signalsData: string[]): number => {
  return signalsData.reduce((sum, signalData) => {
    return sum + getOutputValue(signalData);
  }, 0);
};
