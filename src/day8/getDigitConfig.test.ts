import { getDigitConfig } from "./getDigitConfig";

describe("getDigitConfig", () => {
  it("returns the signals (digit representations) in order of 0 - 9", () => {
    expect(
      getDigitConfig([
        "acedgfb",
        "cdfbe",
        "gcdfa",
        "fbcad",
        "dab",
        "cefabd",
        "cdfgeb",
        "eafb",
        "cagedb",
        "ab",
      ])
    ).toEqual([
      "cagedb",
      "ab",
      "gcdfa",
      "fbcad",
      "eafb",
      "cdfbe",
      "cdfgeb",
      "dab",
      "acedgfb",
      "cefabd",
    ]);

    expect(
      getDigitConfig([
        "be",
        "cfbegad",
        "cbdgef",
        "fgaecd",
        "cgeb",
        "fdcge",
        "agebfd",
        "fecdb",
        "fabcd",
        "edb",
      ])
    ).toEqual([
      "agebfd",
      "be",
      "fabcd",
      "fecdb",
      "cgeb",
      "fdcge",
      "fgaecd",
      "edb",
      "cfbegad",
      "cbdgef",
    ]);
  });
});
