import { countAdjacentOccupiedSeats, SeatLayout } from './run';

describe('countAdjacentOccupiedSeats', () => {
    test('should return 0 when all adjacent sections are empty seats', () => {
        const layout: SeatLayout = [
            ['L', 'L', 'L'],
            ['L', '.', 'L'],
            ['L', 'L', 'L'],
        ];

        expect(countAdjacentOccupiedSeats(layout)({ x: 1, y: 1 })).toEqual(0);
    });

    test('should return 0 when all adjacent sections are floor space', () => {
        const layout: SeatLayout = [
            ['.', '.', '.'],
            ['.', 'L', '.'],
            ['.', '.', '.'],
        ];

        expect(countAdjacentOccupiedSeats(layout)({ x: 1, y: 1 })).toEqual(0);
    });

    test('should return 8 when all adjacent seats are occupied', () => {
        const layout: SeatLayout = [
            ['#', '#', '#'],
            ['#', '.', '#'],
            ['#', '#', '#'],
        ];

        expect(countAdjacentOccupiedSeats(layout)({ x: 1, y: 1 })).toEqual(8);
    });

    test.each([
        [{ x: 0, y: 0 }, 3],
        [{ x: 1, y: 0 }, 5],
        [{ x: 2, y: 0 }, 3],
        [{ x: 0, y: 1 }, 5],
        [{ x: 1, y: 1 }, 8],
        [{ x: 2, y: 1 }, 5],
        [{ x: 0, y: 2 }, 3],
        [{ x: 1, y: 2 }, 5],
        [{ x: 2, y: 2 }, 3],
    ])(
        'should return the correct number of occupied seats for scenario %#',
        (currentSeat, expected) => {
            const layout: SeatLayout = [
                ['#', '#', '#'],
                ['#', '#', '#'],
                ['#', '#', '#'],
            ];
            expect(countAdjacentOccupiedSeats(layout)(currentSeat)).toEqual(expected);
        }
    );
});
