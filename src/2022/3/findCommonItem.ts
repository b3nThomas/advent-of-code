export const findCommonItemFromCompartments = (compartments: [string, string]) =>
    [...new Set(compartments[0].split('').filter((item) => compartments[1].includes(item)))].join();

export const findCommonItemFromGroup = (rucksacks: [string, string, string]) =>
    [
        ...new Set(
            rucksacks[0]
                .split('')
                .filter((item) => rucksacks[1].includes(item) && rucksacks[2].includes(item))
        ),
    ].join();
