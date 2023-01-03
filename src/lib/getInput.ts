import { readFileSync } from 'fs';
import { resolve } from 'path';

type Year = 2021 | 2022;

export const getInput = (year: Year, day: number) =>
    readFileSync(resolve(`src/${year}/${day}/input.txt`), { encoding: 'utf8' });
