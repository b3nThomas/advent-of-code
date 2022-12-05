export const findCommonItem = (compartments: [string, string]) =>
    compartments[0]
        .split('')
        .filter((item) => compartments[1].includes(item))
        .join();
