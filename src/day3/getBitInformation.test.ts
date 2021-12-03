import { getBitInformation } from "./getBitInformation";

describe("getBitInformation", () => {
  it("returns the number of zeroes and ones for a certain position", () => {
    const diagnosticReport = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];
    expect(getBitInformation(diagnosticReport, 0)).toEqual({
      zeroes: 5,
      ones: 7,
    });
    expect(getBitInformation(diagnosticReport, 1)).toEqual({
      zeroes: 7,
      ones: 5,
    });
    expect(getBitInformation(diagnosticReport, 2)).toEqual({
      zeroes: 4,
      ones: 8,
    });
    expect(getBitInformation(diagnosticReport, 3)).toEqual({
      zeroes: 5,
      ones: 7,
    });
    expect(getBitInformation(diagnosticReport, 4)).toEqual({
      zeroes: 7,
      ones: 5,
    });
  });
});
