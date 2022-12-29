type Truthy<T> = T extends false | '' | 0 | null | undefined ? never : T;

export const isTruthy = <T>(val: T): val is Truthy<T> => !!val;
