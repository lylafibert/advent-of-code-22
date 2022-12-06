import { getItemPriority } from "./getItemPriority";

describe("getItemPriority", () => {
  it("returns the item priority number for a lowercase letter", () => {
    expect(getItemPriority("a")).toBe(1);
    expect(getItemPriority("p")).toBe(16);
    expect(getItemPriority("v")).toBe(22);
    expect(getItemPriority("t")).toBe(20);
    expect(getItemPriority("s")).toBe(19);
  });
  it("returns the item priority number for an uppercase letter", () => {
    expect(getItemPriority("L")).toBe(38);
    expect(getItemPriority("P")).toBe(42);
    expect(getItemPriority("A")).toBe(27);
    expect(getItemPriority("Z")).toBe(52);
  });
});
