import { getPacketData } from "./getPacketData";

describe("getPacketData", () => {
  it("returns the packetData", () => {
    expect(getPacketData("110100101111111000101000")).toEqual({
      version: 6,
      typeId: 4,
      value: 2021,
    });
    expect(
      getPacketData("00111000000000000110111101000101001010010001001000000000")
    ).toEqual({
      version: 1,
      typeId: 6,
      lengthTypeId: 0,
    });
  });
});
