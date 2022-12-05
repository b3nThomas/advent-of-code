export const findCommonItem = (compartments: [string, string]) =>
    [...new Set(compartments[0].split('').filter((item) => compartments[1].includes(item)))].join();
