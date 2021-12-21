import { getLiteralValue } from "./getLiteralValue";

describe("getLiteralValue", () => {
  it("returns the literal value of the packet", () => {
    expect(getLiteralValue("110100101111111000101000")).toBe(2021);
  });
});
