import { getCommonItem } from "../getCommonItem";
import { getItemPriority } from "../getItemPriority";

export const getPrioritySum = (rucksacks: string[]): number => {
  return rucksacks.reduce((prioritySum, rucksack) => {
    const itemsInCompartment = rucksack.length / 2;
    const firstCompartment = rucksack.slice(0, itemsInCompartment);
    const secondCompartment = rucksack.slice(
      itemsInCompartment,
      rucksack.length
    );

    const commonItem = getCommonItem([firstCompartment, secondCompartment]);
    const itemPriority = getItemPriority(commonItem);

    return prioritySum + itemPriority;
  }, 0);
};
