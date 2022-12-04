import { getInput } from '../../utils/getInput';
import { log } from '../../utils/log';

const input = getInput(2021, 1).split('\n');

let number1 = 0;
let number2 = 0;

for (let x of input) {
    if (number1 && number2) {
        break;
    }
    for (let y of input) {
        const n1 = Number(x);
        const n2 = Number(y);
        if (n1 + n2 === 2020) {
            number1 = n1;
            number2 = n2;
            break;
        }
    }
}

log.info('1-1: %s', number1 * number2);

number1 = 0;
number2 = 0;
let number3 = 0;

for (let x of input) {
    if (number1 && number2) {
        break;
    }
    for (let y of input) {
        for (let z of input) {
            const n1 = Number(x);
            const n2 = Number(y);
            const n3 = Number(z);
            if (n1 + n2 + n3 === 2020) {
                number1 = n1;
                number2 = n2;
                number3 = n3;
                break;
            }
        }
    }
}

log.info('1-2: %s', number1 * number2 * number3);
