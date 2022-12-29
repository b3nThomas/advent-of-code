import { isTruthy } from '../../utils/isTruthy';
import { extractRanges } from './extractRanges';
import type { ContainsOverlaps } from './types';

export const getTotalOverlaps = (containsOverlaps: ContainsOverlaps, input: string[]): number =>
    input.map((val) => containsOverlaps(extractRanges(val))).filter(isTruthy).length;
