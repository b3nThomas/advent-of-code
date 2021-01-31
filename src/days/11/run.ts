import { getInput } from '../../utils/getInput';
import { log } from '../../utils/log';

type OccupiedSeat = '#';
type EmptySeat = 'L';
type Floor = '.';

type LayoutSectionState = OccupiedSeat | EmptySeat | Floor;
type SeatLayout = LayoutSectionState[][];

const input: SeatLayout = getInput(11)
    .split('\n')
    .filter((row) => row)
    .map((row) => row.split('')) as SeatLayout;

log.info({ input });

const getNumberOfAdjacentOccupiedSeats: number = (currentSeatCoordinates: number[], layout: SeatLayout) => {
    if (currentSeatCoordinates.length !== 2) {
        throw new Error(
            'currentSeat must be represented an array containing the x, y coordinates of the seat. Exiting'
        );
    }
};

// log.info('11-1: %s', input);
// log.info('11-2: %s', <answer>);
