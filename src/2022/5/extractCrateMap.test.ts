import { extractCrateMap } from './extractCrateMap';

const input = [
    '                        [R] [J] [W]',
    '            [R] [N]     [T] [T] [C]',
    '[R]         [P] [G]     [J] [P] [T]',
    '[F] [W] [B] [L] [P] [D] [L] [N] [G]',
    ' 1   2   3   4   5   6   7   8   9 ',
    '',
    'move 2 from 2 to 8',
    'move 2 from 1 to 6',
];

test('extracts the puzzle inputs crate map into a multidimensional array', () => {
    expect(extractCrateMap(input)).toEqual([
        ['', '', '', '', '', '', 'R', 'J', 'W'],
        ['', '', '', 'R', 'N', '', 'T', 'T', 'C'],
        ['R', '', '', 'P', 'G', '', 'J', 'P', 'T'],
        ['F', 'W', 'B', 'L', 'P', 'D', 'L', 'N', 'G'],
    ]);
});
