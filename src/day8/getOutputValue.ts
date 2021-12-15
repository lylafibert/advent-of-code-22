import { getDigitConfig } from "./getDigitConfig";
import { getSignalData } from "./getSignalData";

export const getOutputValue = (signalDataString: string): number => {
  const { signals, outputs } = getSignalData(signalDataString);

  const digitConfig = getDigitConfig(signals);

  const outputValueDigits: number[] = [];

  outputs.forEach((outputCode) => {
    const digit = digitConfig.findIndex((code) => {
      if (code.length !== outputCode.length) return false;

      const splitCode = code.split("");

      return splitCode.every((letter) => outputCode.includes(letter));
    });
    outputValueDigits.push(digit);
  });

  return Number(outputValueDigits.join(""));
};
