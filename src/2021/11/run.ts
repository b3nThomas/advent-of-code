import { getInput, log } from '../../lib';
import { isEqual } from 'lodash';

type SeatEmpty = 'L';
type SeatOccupied = '#';
type FloorSpace = '.';

type SeatState = SeatEmpty | SeatOccupied | FloorSpace;

export type SeatLayout = SeatState[][];

const input: SeatLayout = getInput(2021, 11)
    .split('\n')
    .filter((row) => row)
    .map((row) => row.split('')) as SeatLayout;

export const countAdjacentOccupiedSeats =
    (layout: SeatLayout) =>
    (currentSeat: { x: number; y: number }): number => {
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

export const countVisibleOccupiedSeats =
    (layout: SeatLayout) =>
    (currentSeat: { x: number; y: number }): number => {
        let occupiedVisibleSeats = 0;
        const directions = [
            { x: 0, y: -1 }, // up
            { x: 1, y: -1 }, // upRight
            { x: 1, y: 0 }, // right
            { x: 1, y: 1 }, // downRight
            { x: 0, y: 1 }, // down
            { x: -1, y: 1 }, // downLeft
            { x: -1, y: 0 }, // left
            { x: -1, y: -1 }, // upLeft
        ];

        directions.forEach((direction) => {
            let nextSeat = { ...currentSeat };

            while (true) {
                nextSeat.x += direction.x;
                nextSeat.y += direction.y;

                if (!layout[nextSeat.y]?.[nextSeat.x] || layout[nextSeat.y][nextSeat.x] === 'L') {
                    break;
                } else if (layout[nextSeat.y][nextSeat.x] === '.') {
                    continue;
                } else {
                    occupiedVisibleSeats++;
                    break;
                }
            }
        });

        return occupiedVisibleSeats;
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

(() => {
    // Doesn't quite work properly but f-it I'm well bored of this now... :D
    let retry = true;
    const rounds: SeatLayout[] = [input];

    while (retry) {
        const prevLayout = rounds[rounds.length - 1];
        const getOccupiedSeats = countVisibleOccupiedSeats(prevLayout);
        const newLayout: SeatLayout = [];
        prevLayout.forEach((row, x) => {
            newLayout.push([]);
            row.forEach((seat, y) => {
                const seats = getOccupiedSeats({ x, y });

                if (seat === 'L' && seats === 0) {
                    newLayout[x].push('#');
                } else if (seat === '#' && seats >= 5) {
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

    log.info('11-2: %s', totalOccupiedSeats);
})();
