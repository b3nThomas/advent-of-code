import { CaloriesTotals } from './types';

export const getHighest = (totals: CaloriesTotals): number =>
    [...totals].sort((a, b) => (a < b ? 1 : -1))[0];

export const getHighestThree = (totals: CaloriesTotals): number =>
    [...totals]
        .sort((a, b) => (a < b ? 1 : -1))
        .slice(0, 3)
        .reduce((acc, curr) => acc + curr, 0);
