import { getInput } from '../../utils/getInput';
import { log } from '../../utils/log';

const input = getInput(2).split('\n');
let validPasswords = 0;

for (const x of input) {
    if (!x) {
        break;
    }

    const split = x.split(' ');

    const lowHigh = split[0].split('-');
    const lowestOccurrences = Number(lowHigh[0]);
    const highestOccurrences = Number(lowHigh[1]);

    const letter = split[1].replace(':', '');
    const password = split[2];

    let occurrences = 0;
    password.split('').forEach((l) => {
        if (l === letter) {
            occurrences++;
        }
    });

    if (occurrences >= lowestOccurrences && occurrences <= highestOccurrences) {
        validPasswords++;
    }
}

log.info('2-1: %s', validPasswords);

validPasswords = 0;

for (const x of input) {
    if (!x) {
        continue;
    }

    const split = x.split(' ');

    const positions = split[0].split('-');
    const pos1 = Number(positions[0]) - 1;
    const pos2 = Number(positions[1]) - 1;

    const letter = split[1].replace(':', '');
    const password = split[2];

    if (
        (password[pos1] === letter && password[pos2] !== letter) ||
        (password[pos1] !== letter && password[pos2] === letter)
    ) {
        validPasswords++;
    }
}

log.info('2-2: %s', validPasswords);
