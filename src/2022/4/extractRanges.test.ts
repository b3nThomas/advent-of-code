import { extractRanges } from './extractRanges';

test('returns an empty array when no ranges are found', () => {
    expect(extractRanges('Oh,Hai,There!')).toEqual([]);
});

test('returns an array of SectionRange entries', () => {
    expect(extractRanges('0-1,2-3')).toEqual(['0-1', '2-3']);
});
