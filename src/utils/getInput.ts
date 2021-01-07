import { readFileSync } from 'fs';
import * as path from 'path';

export const getInput = (day: number) => {
    return readFileSync(path.resolve(`src/days/${day}/input.txt`), { encoding: 'utf8' });
};
