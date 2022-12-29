import { SectionRange } from './types';

export const createRange = (rangeStr: SectionRange): number[] => {
    const range = rangeStr.split('-').map(Number);
    return Array.from({ length: range[1] - range[0] + 1 }, (_, i) => i + range[0]);
};
