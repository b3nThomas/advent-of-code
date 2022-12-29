import { isTruthy } from '../../utils/isTruthy';
import { type SectionRange, SectionRangeSchema } from './types';

export const extractRanges = (input: string): [SectionRange, SectionRange] => {
    const ranges = input
        .split(',')
        .map((val) => {
            const parsed = SectionRangeSchema.safeParse(val);
            return parsed.success ? parsed.data : null;
        })
        .filter(isTruthy);

    return [ranges[0], ranges[1]];
};
