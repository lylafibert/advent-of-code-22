import { getVersionSum } from "./getVersionSum";

describe("getVersionSum", () => {
  it("returns the sum of the version numbers in all packets of the given hexadecimal", () => {
    expect(getVersionSum("8A004A801A8002F478")).toBe(16);
    expect(getVersionSum("620080001611562C8802118E34")).toBe(12);
    expect(getVersionSum("C0015000016115A2E0802F182340")).toBe(23);
    expect(getVersionSum("A0016C880162017C3686B18A3D4780")).toBe(31);
  });
});
