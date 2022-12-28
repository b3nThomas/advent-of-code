import { rangeContainsOtherRange } from './rangeContainsOtherRange';

test('returns true when first range is fully contained within the other', () => {
    expect(rangeContainsOtherRange(['2-3', '1-4'])).toEqual(true);
});

test('returns true when second range is fully contained within the other', () => {
    expect(rangeContainsOtherRange(['1-4', '2-4'])).toEqual(true);
});

test('returns false when neither range fully contains the other', () => {
    expect(rangeContainsOtherRange(['1-2', '3-4'])).toEqual(false);
});
