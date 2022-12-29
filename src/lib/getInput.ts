import { readFileSync } from 'fs';
import * as path from 'path';

type Year = 2021 | 2022;

export const getInput = (year: Year, day: number) =>
    readFileSync(path.resolve(`src/${year}/${day}/input.txt`), { encoding: 'utf8' });
