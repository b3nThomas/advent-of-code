import { getInput } from '../../lib/getInput';
import { log } from '../../lib/log';

const input = getInput(2021, 10)
    .split('\n')
    .filter((row) => row)
    .map((n) => parseInt(n, 10))
    .sort((a, b) => a - b);

(() => {
    const adaptors: number[] = JSON.parse(JSON.stringify(input));
    adaptors.unshift(0);

    const differences = {
        one: 0,
        two: 0,
        three: 0,
    };

    for (let i = 0; i < adaptors.length; i++) {
        if (!adaptors[i + 1]) {
            differences.three++;
            break;
        }

        const difference: number = adaptors[i + 1] - adaptors[i];
        switch (difference) {
            case 1:
                differences.one++;
                break;
            case 2:
                differences.two++;
                break;
            case 3:
                differences.three++;
                break;
            default:
                throw new Error('Something has gone quite wrong');
        }
    }

    log.info('10-1: %s', differences.one * differences.three);
})();

(() => {
    const adaptors: number[] = JSON.parse(JSON.stringify(input));
    adaptors.push(adaptors[adaptors.length - 1] + 3);

    /***** Leveraged some code as this was too tough for me: https://observablehq.com/@mpcowan/day-10-adapter-array *****/
    const partitions = [[0, adaptors[0]]];
    let previousValue = adaptors[0];
    for (let i = 1; i < adaptors.length; i++) {
        const val = adaptors[i];
        switch (val - previousValue) {
            case 1:
                partitions[partitions.length - 1].push(val);
                break;
            case 3:
                partitions.push([val]);
                break;
            default:
                throw new Error('Unexpected gap size');
        }
        previousValue = val;
    }

    const permutationsMap: { [key: number]: bigint } = {
        1: 1n,
        2: 1n,
        3: 2n,
        4: 4n,
        5: 7n,
    };

    const answer2 = partitions.reduce((acc, val) => acc * permutationsMap[val.length], 1n);

    /**********/

    log.info('10-2: %s', answer2.toString());
})();
