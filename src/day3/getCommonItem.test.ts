import { getCommonItem } from "./getCommonItem";

describe("getCommonItem", () => {
  it("returns the item that is in both compartments", () => {
    expect(
      getCommonItem({
        firstCompartment: "vJrwpWtwJgWr",
        secondCompartment: "hcsFMMfFFhFp",
      })
    ).toBe("p");
    expect(
      getCommonItem({
        firstCompartment: "jqHRNqRjqzjGDLGL",
        secondCompartment: "rsFMfFZSrLrFZsSL",
      })
    ).toBe("L");
    expect(
      getCommonItem({
        firstCompartment: "PmmdzqPrV",
        secondCompartment: "vPwwTWBwg",
      })
    ).toBe("P");
  });
});
