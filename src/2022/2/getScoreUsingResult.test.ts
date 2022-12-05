import { getScoreUsingResult as getScore } from './getScoreUsingResult';

test.each([
    {
        input: 'A X',
        expected: 3,
        context: 'loss is required against rock',
    },
    {
        input: 'A Y',
        expected: 4,
        context: 'draw is required against rock',
    },
    {
        input: 'A Z',
        expected: 8,
        context: 'win is required against rock',
    },
    {
        input: 'B X',
        expected: 1,
        context: 'loss is required against paper',
    },
    {
        input: 'B Y',
        expected: 5,
        context: 'draw is required against paper',
    },
    {
        input: 'B Z',
        expected: 9,
        context: 'win is required against paper',
    },
    {
        input: 'C X',
        expected: 2,
        context: 'loss is required against scissors',
    },
    {
        input: 'C Y',
        expected: 6,
        context: 'draw is required against scissors',
    },
    {
        input: 'C Z',
        expected: 1,
        context: 'win is required against scissors',
    },
])('returns the expected score when $context', ({ input, expected }) => {
    expect(getScore(input)).toEqual(expected);
});
