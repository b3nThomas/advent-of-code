import { findCommonItem } from './findCommonItem';
import { getItemPriority } from './getItemPriority';
import { splitItemsIntoCompartments } from './splitItemsIntoCompartments';

export const aggregateCommonItemPriorities = (rucksacks: string[]): number =>
    rucksacks.reduce(
        (total, items) =>
            (total += getItemPriority(findCommonItem(splitItemsIntoCompartments(items)))),
        0
    );
