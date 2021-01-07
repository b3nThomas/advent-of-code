import * as z from 'zod';
import { getInput } from '../../utils/getInput';
import { log } from '../../utils/log';

const input = getInput(4)
    .split('\n\n')
    .map((line) => line.replace(/\n/g, ' ').split(' '));

const hasValidFields = (lineItems: string[], recquierFields: string[]): boolean => {
    let result = true;
    lineItems = lineItems.map((item) => item.split(':')[0]);
    requiredFields.forEach((field) => {
        if (!lineItems.includes(field)) {
            result = false;
        }
    });
    return result;
};

const requiredFields = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt'];
let validPassportCount = input.filter((passport) => hasValidFields(passport, requiredFields))
    .length;

log.info('4-1: %s', validPassportCount);

const passportSchema = z.object({
    byr: z.number().positive().min(1920).max(2002),
    iyr: z.number().positive().min(2010).max(2020),
    eyr: z.number().positive().min(2020).max(2030),
    hgt: z
        .string()
        .regex(/(cm|in)$/, 'hgt (Height) must end with cm or in')
        .refine(
            (str) => {
                if (str.endsWith('cm')) {
                    const num = Number(str.split('cm')[0]);
                    if (![NaN, 0].includes(num) && num >= 150 && num <= 193) {
                        return true;
                    }
                } else if (str.endsWith('in')) {
                    const num = Number(str.split('in')[0]);
                    if (![NaN, 0].includes(num) && num >= 59 && num <= 76) {
                        return true;
                    }
                }
                return false;
            },
            {
                message:
                    'hgt (Height) must be a number followed by either cm or in: (cm) the number must be at least 150 and at most 193 (in) the number must be at least 59 and at most 76',
            }
        ),
    hcl: z
        .string()
        .regex(
            /^#[0-9a-f]{6}$/,
            'hcl (Hair Color) must be a # followed by exactly six characters 0-9 or a-f'
        ),
    ecl: z.enum(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']),
    pid: z
        .string()
        .regex(
            /^[0-9]{9}$/,
            'pid (Passport ID) must be a nine-digit number, including leading zeroes'
        ),
    // cid (Country ID) - ignored, missing or not.
});

validPassportCount = 0;

input.forEach((passportFields) => {
    const passport: any = {};
    passportFields.forEach((field) => {
        if (!field || field.includes('cid')) {
            return;
        }
        const split = field.split(':');
        const key = split[0];
        const value = split[1];
        passport[key] = ['byr', 'iyr', 'eyr'].includes(key) ? Number(value) : value;
    });
    const result = passportSchema.safeParse(passport);
    if (result.success) {
        validPassportCount++;
    } else {
        log.warn({ passport, error: result.error.errors }, '>>> FAILURE');
    }
});

log.info('4-2: %s', validPassportCount);
