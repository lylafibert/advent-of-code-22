export const getGroups = (elves: string[], groupSize: number): string[][] => {
  const groups = [];
  for (let i = 0; i < elves.length; i += groupSize) {
    const group = elves.slice(i, i + groupSize);
    groups.push(group);
  }
  return groups;
};
