import { getCommonItem } from "./getCommonItem";

describe("getCommonItem", () => {
  it("returns the item that is in both compartments", () => {
    expect(getCommonItem(["vJrwpWtwJgWr", "hcsFMMfFFhFp"])).toBe("p");
    expect(getCommonItem(["jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL"])).toBe("L");
    expect(getCommonItem(["PmmdzqPrV", "vPwwTWBwg"])).toBe("P");
    expect(
      getCommonItem([
        "vJrwpWtwJgWrhcsFMMfFFhFp",
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
        "PmmdzqPrVvPwwTWBwg",
      ])
    ).toBe("r");
    expect(
      getCommonItem([
        "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
        "ttgJtRGJQctTZtZT",
        "CrZsJsPPZsGzwwsLwLmpwMDw",
      ])
    ).toBe("Z");
  });
});
