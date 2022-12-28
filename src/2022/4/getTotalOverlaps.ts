import { isTruthy } from '../../utils/isTruthy';
import { extractRanges } from './extractRanges';
import { rangeContainsOtherRange } from './rangeContainsOtherRange';

export const getTotalOverlaps = (input: string[]): number =>
    input.map((val) => rangeContainsOtherRange(extractRanges(val))).filter(isTruthy).length;
