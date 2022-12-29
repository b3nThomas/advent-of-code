import { getInput } from '../../lib/getInput';
import { log } from '../../lib/log';

const input = getInput(2021, 6).split('\n');

let total1 = 0;
let currentGroup1 = new Set();

input.forEach((row) => {
    if (row === '') {
        total1 += currentGroup1.size;
        currentGroup1 = new Set();
    } else {
        row.split('').forEach((char) => currentGroup1.add(char));
    }
});

log.info('6-1: %s', total1);

let total2 = 0;
let currentGroup2: { groupSize: number; [key: string]: number } = { groupSize: 0 };

input.forEach((row) => {
    if (row === '') {
        let subTotal = 0;
        for (let key in currentGroup2) {
            if (key !== 'groupSize' && currentGroup2[key] === currentGroup2.groupSize) {
                subTotal++;
            }
        }
        total2 += subTotal;
        currentGroup2 = { groupSize: 0 };
    } else {
        currentGroup2.groupSize++;
        row.split('').forEach((char: string) => {
            currentGroup2[char] = currentGroup2[char] ? currentGroup2[char] + 1 : 1;
        });
    }
});

log.info('6-2: %s', total2);
