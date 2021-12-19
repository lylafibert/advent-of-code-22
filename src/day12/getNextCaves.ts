export const getNextCaves = (
  caveSystem: string[][],
  currentCave: string
): string[] => {
  return caveSystem.reduce((nextCaves, connection) => {
    if (connection.includes(currentCave)) {
      const connectedCave = connection.find((cave) => cave !== currentCave);
      if (connectedCave !== "start") return [...nextCaves, connectedCave];
    }

    return nextCaves;
  }, []);
};
