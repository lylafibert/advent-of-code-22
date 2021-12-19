import { getNextCaves } from "./getNextCaves";
import { testSystem1 } from "./testData";

describe("getNextCaves", () => {
  it("returns all possible next caves to move to", () => {
    expect(getNextCaves(testSystem1, "start")).toEqual(["A", "b"]);
    expect(getNextCaves(testSystem1, "A")).toEqual(["c", "b", "end"]);
    expect(getNextCaves(testSystem1, "d")).toEqual(["b"]);
  });
});
