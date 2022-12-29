import { getInput } from '../../lib/getInput';
import { log } from '../../lib/log';

const input = getInput(2021, 5).split('\n');

const getRow = (rowSequence: string) => {
    const sequence = rowSequence.split('');
    const range = [...Array(128).keys()];
    while (sequence.length) {
        const code = sequence.shift();
        const halfRange = range.length / 2;
        if (code === 'B') {
            range.splice(0, halfRange);
        } else if (code === 'F') {
            range.splice(halfRange, halfRange);
        }
    }

    return range.join();
};

const getColumn = (columnSequence: string) => {
    const sequence = columnSequence.split('');
    const range = [...Array(8).keys()];
    while (sequence.length) {
        const code = sequence.shift();
        const halfRange = range.length / 2;
        if (code === 'R') {
            range.splice(0, halfRange);
        } else if (code === 'L') {
            range.splice(halfRange, halfRange);
        }
    }

    return range.join();
};

const calculateSeatID = (row: number, column: number): number => {
    return row * 8 + column;
};

let highestID = 0;
let allIds: number[] = [];

input.forEach((sequence) => {
    const column = getColumn(sequence.substr(-3));
    const row = getRow(sequence.substr(0, 7));
    const id = calculateSeatID(Number(row), Number(column));
    allIds.push(id);
    if (id > highestID) {
        highestID = id;
    }
});

log.info('5-1: %s', highestID);

allIds = allIds.sort((a, b) => a - b);
let missingId;

allIds.forEach((id, i) => {
    if (allIds[i + 1] - id > 1) {
        missingId = (id + allIds[i + 1]) / 2;
    }
});

log.info('5-2: %s', missingId);
