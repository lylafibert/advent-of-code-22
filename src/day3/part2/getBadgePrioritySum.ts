import { getCommonItem } from "../getCommonItem";
import { getItemPriority } from "../getItemPriority";
import { getGroups } from "./getGroups";

export const getBadgePrioritySum = (elves: string[]): number => {
  const groups = getGroups(elves, 3);

  return groups.reduce((prioritySum, group) => {
    const commonItem = getCommonItem(group);
    const itemPriority = getItemPriority(commonItem);

    return prioritySum + itemPriority;
  }, 0);
};
