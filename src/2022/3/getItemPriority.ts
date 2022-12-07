const ITEM_IDS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const PRIORITY_MAP = ITEM_IDS.split('').reduce(
    (map: Record<string, number>, item, i) => ({ ...map, [item]: i + 1 }),
    {}
);

export const getItemPriority = (item: string) => PRIORITY_MAP[item];
