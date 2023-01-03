import { log } from '../../lib';

const COLUMN_SIZE = 4;

export const extractCrateMap = (input: readonly string[]): readonly string[][] => {
    const mapEndIndex = input.findIndex((entry) => entry === '');
    const crateMap = input
        .slice(0, mapEndIndex - 1) // -1 trims the stack number row from the map
        .map((line) => {
            const chunks = Math.ceil(line.length / COLUMN_SIZE);
            return Array.from({ length: chunks }, (_, i) =>
                line
                    .slice(i * COLUMN_SIZE, (i + 1) * COLUMN_SIZE)
                    .replace(/[\[\]]/g, '')
                    .trim()
            );
        });

    return crateMap;
};
