import { isTruthy } from '../../utils/isTruthy';
import { SectionRange, SectionRangeSchema } from './types';

export const extractRanges = (input: string): SectionRange[] =>
    input
        .split(',')
        .map((val) => {
            const parsed = SectionRangeSchema.safeParse(val);
            return parsed.success ? parsed.data : null;
        })
        .filter(isTruthy);
