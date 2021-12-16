import { getLineErrorScore } from "./getLineErrorScore";

export const getTotalErrorScore = (navigationSubsystem: string[]): number =>
  navigationSubsystem.reduce((errorScore, currentLine) => {
    return errorScore + getLineErrorScore(currentLine);
  }, 0);
