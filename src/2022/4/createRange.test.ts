import { createRange } from './createRange';

test('returns an array of numbers in the given range', () => {
    expect(createRange('3-7')).toEqual([3, 4, 5, 6, 7]);
});
