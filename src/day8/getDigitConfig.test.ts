import { getDigitConfig } from "./getDigitConfig";

describe("getDigitConfig", () => {
  it("returns the signals (digit representations) in order of 0 - 9", () => {
    // const firstResult = getDigitConfig([
    //   "acedgfb",
    //   "cdfbe",
    //   "gcdfa",
    //   "fbcad",
    //   "dab",
    //   "cefabd",
    //   "cdfgeb",
    //   "eafb",
    //   "cagedb",
    //   "ab",
    // ]);

    // expect(firstResult[0]).toEqual("cagedb");
    // expect(firstResult[1]).toEqual("ab");
    // expect(firstResult[4]).toEqual("eafb");
    // expect(firstResult[6]).toEqual("cdfgeb");
    // expect(firstResult[7]).toEqual("dab");
    // expect(firstResult[8]).toEqual("acedgfb");
    // expect(firstResult[9]).toEqual("cefabd");

    // const secondResult = getDigitConfig([
    //   "be",
    //   "cfbegad",
    //   "cbdgef",
    //   "fgaecd",
    //   "cgeb",
    //   "fdcge",
    //   "agebfd",
    //   "fecdb",
    //   "fabcd",
    //   "edb",
    // ]);

    // expect(secondResult[0]).toEqual("agebfd");
    // expect(secondResult[1]).toEqual("be");
    // expect(secondResult[4]).toEqual("cgeb");
    // expect(secondResult[6]).toEqual("fgaecd");
    // expect(secondResult[7]).toEqual("edb");
    // expect(secondResult[8]).toEqual("cfbegad");

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
