export const splitItemsIntoCompartments = (items: string): [string, string] => [
    items.slice(0, items.length / 2),
    items.slice(items.length / 2),
];
