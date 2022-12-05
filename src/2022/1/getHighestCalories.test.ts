import { getHighest, getHighestThree } from './getHighestCalories';
import { CaloriesTotals } from './types';

test('returns the highest TotalCalories', () => {
    const input: CaloriesTotals = [2, 4, 6, 2, 5, 7];
    expect(getHighest(input)).toEqual(7);
});

test('returns the highest three TotalCalories', () => {
    const input: CaloriesTotals = [2, 4, 6, 2, 5, 7];
    expect(getHighestThree(input)).toEqual(18);
});
