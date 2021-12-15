import { getInconstantFuelCostForCrab } from "./getInconstantFuelCostForCrab";

describe("getInconstantFuelCostForCrab", () => {
  it("returns the fuel cost for a crab to reach a given position from its current position", () => {
    expect(getInconstantFuelCostForCrab(16, 5)).toBe(66);
    expect(getInconstantFuelCostForCrab(1, 5)).toBe(10);
    expect(getInconstantFuelCostForCrab(2, 5)).toBe(6);
    expect(getInconstantFuelCostForCrab(0, 5)).toBe(15);
    expect(getInconstantFuelCostForCrab(4, 5)).toBe(1);
    expect(getInconstantFuelCostForCrab(2, 5)).toBe(6);
    expect(getInconstantFuelCostForCrab(7, 5)).toBe(3);
    expect(getInconstantFuelCostForCrab(14, 5)).toBe(45);
  });
});
