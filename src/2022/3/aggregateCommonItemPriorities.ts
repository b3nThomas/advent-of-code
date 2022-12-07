import { getItemPriority } from './getItemPriority';

export const aggregateCommonItemPriorities = (commonItems: string[]): number =>
    commonItems.reduce((total, item) => (total += getItemPriority(item)), 0);
