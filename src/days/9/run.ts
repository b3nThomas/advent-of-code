import { getInput } from '../../utils/getInput';
import { log } from '../../utils/log';

const input = getInput(9)
    .split('\n')
    .filter((row) => row)
    .map((n) => Number(n));

let answer1;

for (let row = 0; row < input.length; row++) {
    const sample: number[] = JSON.parse(JSON.stringify(input)).splice(row, 26);
    const preamble = sample.splice(0, 25);
    const currentNumber = sample[0];

    const preambleAdditionPossibilities = (() => {
        const possibilities: number[] = [];

        preamble.forEach((p1, i) => {
            preamble.slice(i).forEach((p2) => {
                if (p1 === p2) {
                    return;
                }
                possibilities.push(p1 + p2);
            });
        });

        return possibilities;
    })();

    if (!preambleAdditionPossibilities.includes(currentNumber)) {
        answer1 = currentNumber;
        break;
    }
}

log.info('9-1: %s', answer1);

let contiguousSet: number[] = [];
let breakLoop = false;

for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
        contiguousSet = input.slice(i, j);
        const total = contiguousSet.reduce((a, b) => a + b);
        if (total === answer1) {
            breakLoop = true;
            break;
        }
    }
    if (breakLoop) {
        break;
    }
}

contiguousSet = contiguousSet.sort();
const answer2 = contiguousSet[0] + contiguousSet[contiguousSet.length - 1];

log.info('9-2: %s', answer2);
