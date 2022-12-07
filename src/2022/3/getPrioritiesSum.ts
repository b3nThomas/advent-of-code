import { aggregateCommonItemPriorities } from './aggregateCommonItemPriorities';
import { findCommonItemFromCompartments, findCommonItemFromGroup } from './findCommonItem';
import { splitItemsIntoCompartments } from './splitItemsIntoCompartments';

export const getPrioritiesSumOfRucksacks = (rucksacks: string[]) =>
    aggregateCommonItemPriorities(
        rucksacks.map((rucksack) =>
            findCommonItemFromCompartments(splitItemsIntoCompartments(rucksack))
        )
    );

export const getPrioritiesSumOfGroups = (rucksacks: string[]) => {
    const GROUP_SIZE = 3;
    const commonItems = [];

    for (let i = 0; i < rucksacks.length; i += GROUP_SIZE) {
        commonItems.push(
            findCommonItemFromGroup(rucksacks.slice(i, i + GROUP_SIZE) as [string, string, string])
        );
    }

    return aggregateCommonItemPriorities(commonItems);
};
