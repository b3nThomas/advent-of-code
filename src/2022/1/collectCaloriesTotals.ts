import { CaloriesTotals } from './types';

export const collectCaloriesTotals = (input: string[]): CaloriesTotals => {
    let currentElf = 0;

    return input.reduce((acc: CaloriesTotals, item) => {
        if (item === '') {
            // Empty item signifies a new Elf
            currentElf++;
            return acc;
        }

        const calories = Number(item);

        if (Number.isNaN(calories)) {
            throw new Error('Only numbered strings should be present. Please check your input');
        }

        if (!acc[currentElf]) {
            // Create entry for current Elf if it doesn't exist yet
            acc = [...acc, 0];
        }

        acc[currentElf] += calories;

        return acc;
    }, []);
};
