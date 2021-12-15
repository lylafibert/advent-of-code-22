import { getSignalData } from "./getSignalData";

describe("getSignalData", () => {
  it("returns the signals and outputs from the given notes string", () => {
    expect(
      getSignalData(
        "be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe"
      )
    ).toEqual({
      signals: [
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
      ],
      outputs: ["fdgacbe", "cefdb", "cefbgd", "gcbe"],
    });

    expect(
      getSignalData(
        "edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc"
      )
    ).toEqual({
      signals: [
        "edbfga",
        "begcd",
        "cbg",
        "gc",
        "gcadebf",
        "fbgde",
        "acbgfd",
        "abcde",
        "gfcbed",
        "gfec",
      ],
      outputs: ["fcgedb", "cgb", "dgebacf", "gc"],
    });
  });
});
