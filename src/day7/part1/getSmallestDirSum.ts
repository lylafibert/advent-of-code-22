export const getSmallestDirSum = (terminalOutput: string[]): number => {
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

  const sizes = Object.values(dirSizes).filter((size) => size <= 100000);

  const dirSum = sizes.reduce((sum, curr) => sum + curr, 0);
  return dirSum;
};
