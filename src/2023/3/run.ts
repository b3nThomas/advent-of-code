import { getInput, log } from '../../lib';

const input = getInput(2023, 3).split('\n');

// For each number
//  Check if surrounding coords contain [^.0-9]
// Sum valid numbers

type NumberData = { value: number; length: number; coords: { y: number; x: number | null } };

const captureLineNumberData = (line: string, yCoord: number): NumberData[] =>
    Array.from(line.matchAll(/[0-9]+/g)).map((match) => ({
        value: Number(match[0]),
        length: match[0].length,
        coords: {
            x: match.index ?? null,
            y: yCoord,
        },
    }));

const schematicNumberData = input.flatMap(captureLineNumberData);

const containsSpecialChar = (text: string) => Boolean(text.match(/[^.0-9]/g));

const isPartNumber = ({ length, coords: { x, y } }: NumberData): boolean => {
    if (x === null) {
        throw new Error('TS failed. Match was found with no index'); // Should never happen
    }
    const [start, end] = [x - 1, x + length];
    const [lineAbove, lineBelow] = [y - 1, y + 1];

    const adjacentChars = `${input[y][start] ?? ''}${input[y][end] ?? ''}`;

    if (containsSpecialChar(adjacentChars)) {
        return true;
    }

    const sliceStart = start < 0 ? 0 : start;
    const remainingChars = [input[lineAbove], input[lineBelow]]
        .map((line) => line?.slice(sliceStart, end + 1) ?? '')
        .join('');

    return containsSpecialChar(remainingChars);
};

const partNumbers = schematicNumberData.filter(isPartNumber);
const partNumbersSum = partNumbers.reduce((acc, { value }) => acc += value, 0);

const answer1 = partNumbersSum; // 553825
const answer2 = 'TODO';

log.info('3-1: %s', answer1);
log.info('3-2: %s', answer2);
