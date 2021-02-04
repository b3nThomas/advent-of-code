import { getInput } from '../../utils/getInput';
import { isEqual } from 'lodash';
import { log } from '../../utils/log';

type SeatEmpty = 'L';
type SeatOccupied = '#';
type FloorSpace = '.';

type SeatState = SeatEmpty | SeatOccupied | FloorSpace;

export type SeatLayout = SeatState[][];

const input: SeatLayout = getInput(11)
    .split('\n')
    .filter((row) => row)
    .map((row) => row.split('')) as SeatLayout;

export const countAdjacentOccupiedSeats = (layout: SeatLayout) => (currentSeat: {
    x: number;
    y: number;
}): number => {
    const { x, y } = currentSeat;
    let occupiedSeats = 0;

    [x - 1, x, x + 1].forEach((row) => {
        [y - 1, y, y + 1].forEach((column) => {
            if (row === x && column === y) {
                return;
            }

            if (layout[row]?.[column] === '#') {
                occupiedSeats++;
            }
        });
    });

    return occupiedSeats;
};

(() => {
    let retry = true;
    const rounds: SeatLayout[] = [input];

    while (retry) {
        const prevLayout = rounds[rounds.length - 1];
        const getOccupiedSeats = countAdjacentOccupiedSeats(prevLayout);
        const newLayout: SeatLayout = [];
        prevLayout.forEach((row, x) => {
            newLayout.push([]);
            row.forEach((seat, y) => {
                const seats = getOccupiedSeats({ x, y });
                if (seat === 'L' && seats === 0) {
                    newLayout[x].push('#');
                } else if (seat === '#' && seats >= 4) {
                    newLayout[x].push('L');
                } else {
                    newLayout[x].push(seat);
                }
            });
        });

        if (isEqual(prevLayout, newLayout)) {
            retry = false;
        }

        rounds.push(newLayout);
    }

    let totalOccupiedSeats = 0;
    rounds[rounds.length - 1].forEach((row) => {
        totalOccupiedSeats += row.filter((seat) => seat === '#').length;
    });

    log.info('11-1: %s', totalOccupiedSeats);
})();

// log.info('11-2: %s', <answer>);
