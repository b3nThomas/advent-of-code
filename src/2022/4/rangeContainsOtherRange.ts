import { SectionRange } from './types';

export const rangeContainsOtherRange = (ranges: [SectionRange, SectionRange]) => {
    const rangeA = ranges[0].split('-');
    const rangeB = ranges[1].split('-');

    return [
        [0, 1],
        [1, 0],
    ].some(
        ([current, other]) => rangeA[current] <= rangeB[current] && rangeA[other] >= rangeB[other]
    );
};
