import { z } from 'zod';

export const SectionRangeSchema = z.custom<`${number}-${number}`>(
    (val) => typeof val === 'string' && /^\d+-\d+$/.test(val)
);

export type SectionRange = z.infer<typeof SectionRangeSchema>;

export type ContainsOverlaps = (ranges: [SectionRange, SectionRange]) => boolean;
