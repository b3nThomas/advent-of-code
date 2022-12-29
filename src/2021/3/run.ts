import { getInput } from '../../lib/getInput';
import { log } from '../../lib/log';

const input = getInput(2021, 3).split('\n');

const repeatLength = input[0].length;
const slopeLength = input.length;

const calculateCollisions = (incrementX: number, incrementY: number) => {
    const position = {
        x: 0,
        y: 0,
    };

    let collisions = 0;

    while (position.y < slopeLength) {
        if (input[position.y][position.x % repeatLength] === '#') {
            collisions++;
        }

        position.x += incrementX;
        position.y += incrementY;
    }

    return collisions;
};

log.info('3-1: %s', calculateCollisions(3, 1));

const slope1 = calculateCollisions(1, 1);
const slope2 = calculateCollisions(3, 1);
const slope3 = calculateCollisions(5, 1);
const slope4 = calculateCollisions(7, 1);
const slope5 = calculateCollisions(1, 2);

log.info('3-2: %s', slope1 * slope2 * slope3 * slope4 * slope5);
