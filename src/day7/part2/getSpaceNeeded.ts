const TOTAL_SPACE = 70000000;
const REQUIRED_SPACE = 30000000;

export const getSpaceNeeded = (terminalOutput: string[]): number => {
  const dirSizes: Record<string, number> = {
    "/": 0,
  };

  let path = ["/"];

  terminalOutput.forEach((line) => {
    if (line.startsWith("$")) {
      if (line.startsWith("$ cd")) {
        const arg = line.split("$ cd ")[1];
        if (arg === "..") {
          path.pop();
        } else if (arg === "/") {
          path = ["/"];
        } else {
          const prevPath = path[path.length - 1];
          path.push(`${prevPath}/${arg}`);
        }
      }
    } else {
      if (line.startsWith("dir")) {
      } else {
        const [size] = line.split(" ");
        path.forEach((directory) => {
          if (!dirSizes[directory]) {
            dirSizes[directory] = parseInt(size);
          } else {
            dirSizes[directory] += parseInt(size);
          }
        });
      }
    }
  });

  const sizes = Object.values(dirSizes);

  const sortedSizes = sizes.sort((a, b) => a - b);

  const usedSpace = sortedSizes[sortedSizes.length - 1];
  const unusedSpace = TOTAL_SPACE - usedSpace;
  const requiredExtraSpace = REQUIRED_SPACE - unusedSpace;

  return sortedSizes.find((size) => size >= requiredExtraSpace);
};
