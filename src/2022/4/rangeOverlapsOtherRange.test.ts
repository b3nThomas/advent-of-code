import { rangeOverlapsOtherRange } from './rangeOverlapsOtherRange';

test('returns true when ranges overlap in any way', () => {
    expect(rangeOverlapsOtherRange(['1-2', '2-4'])).toEqual(true);
});

test('returns false when ranges do not overlap in any way', () => {
    expect(rangeOverlapsOtherRange(['1-2', '3-4'])).toEqual(false);
});
