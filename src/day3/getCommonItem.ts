export const getCommonItem = (rucksacks: string[]): string => {
  const firstRucksack = rucksacks.shift();
  return firstRucksack
    .split("")
    .find((item) => rucksacks.every((rucksack) => rucksack.includes(item)));
};
