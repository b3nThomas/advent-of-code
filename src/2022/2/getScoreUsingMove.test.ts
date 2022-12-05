import { getScoreUsingMove as getScore } from './getScoreUsingMove';

// Rock - 1, Paper - 2, Scissors - 3
// Win - 6, Draw - 3, Loss - 0

// Rock = A or X
// Paper = B or Y
// Scissors = C or Z
test.each([
    {
        input: 'C X',
        expected: 7,
        context: 'win with rock',
    },
    {
        input: 'A X',
        expected: 4,
        context: 'draw with rock',
    },
    {
        input: 'B X',
        expected: 1,
        context: 'loss with rock',
    },
    {
        input: 'A Y',
        expected: 8,
        context: 'win with paper',
    },
    {
        input: 'B Y',
        expected: 5,
        context: 'draw with paper',
    },
    {
        input: 'C Y',
        expected: 2,
        context: 'loss with paper',
    },
    {
        input: 'B Z',
        expected: 9,
        context: 'win with scissors',
    },
    {
        input: 'C Z',
        expected: 6,
        context: 'draw with scissors',
    },
    {
        input: 'A Z',
        expected: 3,
        context: 'loss with scissors',
    },
])('returns the expected score for a $context', ({ input, expected }) => {
    expect(getScore(input)).toEqual(expected);
});
