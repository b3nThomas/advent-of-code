import { createRange } from './createRange';
import type { SectionRange } from './types';

export const rangeOverlapsOtherRange = (ranges: [SectionRange, SectionRange]): boolean => {
    const rangeA = createRange(ranges[0]);
    const rangeB = createRange(ranges[1]);

    return rangeA.some((val) => rangeB.includes(val));
};
