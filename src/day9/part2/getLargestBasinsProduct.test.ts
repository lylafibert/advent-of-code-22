import { puzzleInput } from "../puzzleInput";
import { getLargestBasinsProduct } from "./getLargestBasinsProduct";

const heightMap = [
  "2199943210",
  "3987894921",
  "9856789892",
  "8767896789",
  "9899965678",
];
describe("getLargestBasinsProduct", () => {
  it("returns the product of the 3 largest basins in a given heightmap", () => {
    expect(getLargestBasinsProduct(heightMap)).toBe(1134);
    expect(getLargestBasinsProduct(puzzleInput)).toBe(900900);
  });
});
