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
    const commonItems = [];

    for (let i = 0; i < rucksacks.length; i += 3) {
        commonItems.push(
            findCommonItemFromGroup(rucksacks.slice(i, i + 3) as [string, string, string])
        );
    }

    return aggregateCommonItemPriorities(commonItems);
};
