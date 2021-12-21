import { getNextDayFish } from "./getNextDayFish";

const day0 = [3, 4, 3, 1, 2];
const day1 = [2, 3, 2, 0, 1];
const day2 = [1, 2, 1, 6, 0, 8];
const day3 = [0, 1, 0, 5, 6, 7, 8];
const day4 = [6, 0, 6, 4, 5, 6, 7, 8, 8];
const day5 = [5, 6, 5, 3, 4, 5, 6, 7, 7, 8];
const day6 = [4, 5, 4, 2, 3, 4, 5, 6, 6, 7];
const day7 = [3, 4, 3, 1, 2, 3, 4, 5, 5, 6];
const day8 = [2, 3, 2, 0, 1, 2, 3, 4, 4, 5];
const day9 = [1, 2, 1, 6, 0, 1, 2, 3, 3, 4, 8];
const day10 = [0, 1, 0, 5, 6, 0, 1, 2, 2, 3, 7, 8];
const day11 = [6, 0, 6, 4, 5, 6, 0, 1, 1, 2, 6, 7, 8, 8, 8];
const day12 = [5, 6, 5, 3, 4, 5, 6, 0, 0, 1, 5, 6, 7, 7, 7, 8, 8];
const day13 = [4, 5, 4, 2, 3, 4, 5, 6, 6, 0, 4, 5, 6, 6, 6, 7, 7, 8, 8];
const day14 = [3, 4, 3, 1, 2, 3, 4, 5, 5, 6, 3, 4, 5, 5, 5, 6, 6, 7, 7, 8];
const day15 = [2, 3, 2, 0, 1, 2, 3, 4, 4, 5, 2, 3, 4, 4, 4, 5, 5, 6, 6, 7];
const day16 = [1, 2, 1, 6, 0, 1, 2, 3, 3, 4, 1, 2, 3, 3, 3, 4, 4, 5, 5, 6, 8];
const day17 = [
  0, 1, 0, 5, 6, 0, 1, 2, 2, 3, 0, 1, 2, 2, 2, 3, 3, 4, 4, 5, 7, 8,
];
const day18 = [
  6, 0, 6, 4, 5, 6, 0, 1, 1, 2, 6, 0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 7, 8, 8, 8, 8,
];
describe("getNextDayFish", () => {
  it("returns the list of fish ages for the next day", () => {
    expect(getNextDayFish(day0)).toEqual(day1);
    expect(getNextDayFish(day1)).toEqual(day2);
    expect(getNextDayFish(day2)).toEqual(day3);
    expect(getNextDayFish(day3)).toEqual(day4);
    expect(getNextDayFish(day4)).toEqual(day5);
    expect(getNextDayFish(day5)).toEqual(day6);
    expect(getNextDayFish(day6)).toEqual(day7);
    expect(getNextDayFish(day7)).toEqual(day8);
    expect(getNextDayFish(day8)).toEqual(day9);
    expect(getNextDayFish(day9)).toEqual(day10);
    expect(getNextDayFish(day10)).toEqual(day11);
    expect(getNextDayFish(day11)).toEqual(day12);
    expect(getNextDayFish(day12)).toEqual(day13);
    expect(getNextDayFish(day13)).toEqual(day14);
    expect(getNextDayFish(day14)).toEqual(day15);
    expect(getNextDayFish(day15)).toEqual(day16);
    expect(getNextDayFish(day16)).toEqual(day17);
    expect(getNextDayFish(day17)).toEqual(day18);
  });
});
