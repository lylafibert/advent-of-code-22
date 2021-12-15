const uniqueLengthToDigitMap: Record<number, number> = {
  2: 1,
  4: 4,
  3: 7,
  7: 8,
};

export const getDigitConfig = (signals: string[]): string[] => {
  const digits: string[] = [];

  const remainingSignals = signals.filter((signal) => {
    const signalLength = signal.length;
    const uniqueLengthDigit = uniqueLengthToDigitMap[signalLength];
    if (uniqueLengthDigit) {
      digits[uniqueLengthDigit] = signal;
      return false;
    }
    return true;
  });

  const rightSideLetters = digits[1].split("");

  const middleNumberPossibilities = digits[4]
    .split("")
    .filter((letter) => !rightSideLetters.includes(letter));

  remainingSignals.forEach((signal) => {
    const hasBothRightSideLetters =
      signal.includes(rightSideLetters[0]) &&
      signal.includes(rightSideLetters[1]);

    const hasMiddleAndTopLeftLetters =
      signal.includes(middleNumberPossibilities[0]) &&
      signal.includes(middleNumberPossibilities[1]);

    const { length } = signal;
    if (length == 6) {
      if (!hasMiddleAndTopLeftLetters) {
        digits[0] = signal;
      } else if (hasBothRightSideLetters) {
        digits[9] = signal;
      } else {
        digits[6] = signal;
      }
    } else {
      if (hasBothRightSideLetters) {
        digits[3] = signal;
      } else if (hasMiddleAndTopLeftLetters) {
        digits[5] = signal;
      } else {
        digits[2] = signal;
      }
    }
  });

  return digits;
};
