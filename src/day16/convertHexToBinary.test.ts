import { convertHexToBinary } from "./convertHexToBinary";

describe("convertHexToBinary", () => {
  it("returns a binary string from the given hexadecimal", () => {
    expect(convertHexToBinary("D2FE28")).toBe("110100101111111000101000");
    expect(convertHexToBinary("38006F45291200")).toBe(
      "00111000000000000110111101000101001010010001001000000000"
    );
  });
});
