import { createRange } from './createRange';
import type { SectionRange } from './types';

export const rangeContainsOtherRange = (ranges: [SectionRange, SectionRange]): boolean => {
    const rangeA = createRange(ranges[0]);
    const rangeB = createRange(ranges[1]);

    return (
        rangeA.every((val) => rangeB.includes(val)) || rangeB.every((val) => rangeA.includes(val))
    );
};
