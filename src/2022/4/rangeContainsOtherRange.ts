import type { SectionRange } from './types';

export const rangeContainsOtherRange = (ranges: [SectionRange, SectionRange]): boolean => {
    const rangeA = ranges[0].split('-').map(Number);
    const rangeB = ranges[1].split('-').map(Number);

    return [
        [0, 1],
        [1, 0],
    ].some(
        ([current, other]) => rangeA[current] <= rangeB[current] && rangeA[other] >= rangeB[other]
    );
};
