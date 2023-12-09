import { getInput, log } from '../../lib';

const input = getInput(2023, 3).split('\n');

type SchematicEntryData<T extends number | string> = {
    value: T;
    length: number;
    coords: { y: number; x: number | null };
};

type NumberData = SchematicEntryData<number>;

const captureLineNumberData = (line: string, yCoord: number): NumberData[] =>
    Array.from(line.matchAll(/[0-9]+/g)).map((match) => ({
        value: Number(match[0]),
        length: match[0].length,
        coords: {
            x: match.index ?? null,
            y: yCoord,
        },
    }));

const schematicNumberData = input.flatMap((line, i) => captureLineNumberData(line, i));

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
const partNumbersSum = partNumbers.reduce((acc, { value }) => (acc += value), 0);

const answer1 = partNumbersSum; // 553825

type GearData = SchematicEntryData<string>;

const captureLineGearsData = (line: string, yCoord: number): GearData[] =>
    Array.from(line.matchAll(/\*/g)).map((match) => ({
        value: match[0],
        length: match[0].length,
        coords: {
            x: match.index ?? null,
            y: yCoord,
        },
    }));

const containsNumberChar = (text: string) => Boolean(text.match(/[0-9]/g));

const resolveNumberValue = (line: string, indexToMatch: number): number => {
    const matches = Array.from(line.matchAll(/[0-9]+/g));
    const matchesData = matches.map((match) => ({
        value: Number(match[0]),
        startIndex: match.index ?? 0,
        endIndex: (match.index ?? 0) + match[0].length - 1,
    }));

    const targetNumber = matchesData.find(
        ({ startIndex, endIndex }) => indexToMatch >= startIndex && indexToMatch <= endIndex
    );

    return targetNumber?.value ?? 0;
};

const calculateGearRatio = ({ coords: { x, y } }: GearData): number => {
    if (x === null) {
        throw new Error('TS failed. Match was found with no index'); // Should never happen
    }

    const ratios = new Set<number>();

    const [left, right] = [x - 1, x + 1];
    const [lineAbove, lineBelow] = [y - 1, y + 1];

    [lineAbove, y, lineBelow].forEach((line) => {
        [left, x, right].forEach((column) => {
            if (containsNumberChar(input[line][column])) {
                ratios.add(resolveNumberValue(input[line], column));
            }
        })
    });

    const filteredRatios = Array.from(ratios).filter((val) => val > 0);

    if (filteredRatios.length !== 2) {
        return 0;
    }

    return filteredRatios[0] * filteredRatios[1];
};

const schematicGearsData = input.flatMap(captureLineGearsData);
const gearRatios = schematicGearsData.map(calculateGearRatio);
const gearRatiosSum = gearRatios.reduce((acc, cur) => acc += cur, 0);

const answer2 = gearRatiosSum; // 93994191

log.info('3-1: %s', answer1);
log.info('3-2: %s', answer2);
