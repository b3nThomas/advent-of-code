import { splitItemsIntoCompartments as split } from './splitItemsIntoCompartments';

test.each([
    {
        input: 'Aa',
        expected: ['A', 'a'],
        context: '2 items',
    },
    {
        input: 'AaBb',
        expected: ['Aa', 'Bb'],
        context: '4 items',
    },
])('splits array of items in half when given $context', ({ input, expected }) => {
    expect(split(input)).toEqual(expected);
});
