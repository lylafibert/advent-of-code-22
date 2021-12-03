import { getRating } from "./getRating";

describe("getRating", () => {
  it("returns the oxygen generator rating", () => {
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
    expect(getRating(diagnosticReport, "oxygen")).toBe(23);
  });
  it("returns the C02 scrubber rating", () => {
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
    expect(getRating(diagnosticReport, "CO2")).toBe(10);
  });
});
