import { getItemPriority } from './getItemPriority';

test.each([
    { input: 'a', expected: 1 },
    { input: 'b', expected: 2 },
    { input: 'y', expected: 25 },
    { input: 'z', expected: 26 },
    { input: 'A', expected: 27 },
    { input: 'B', expected: 28 },
    { input: 'Y', expected: 51 },
    { input: 'Z', expected: 52 },
])('returns the expected priority for item $input', ({ input, expected }) => {
    expect(getItemPriority(input)).toEqual(expected);
});
