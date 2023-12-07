import { assert } from 'console';
import { getInput, log } from '../../lib';
import { number } from 'zod';

const input = getInput(2023, 1).split('\n');

const digitsOnly = (text: string): string => text.replace(/[^0-9]/g, '');

const firstLastDigits = (digits: number[]): [number, number] => [
    digits[0],
    digits[digits.length - 1],
];

const concatDigits = (digits: [number, number]) => Number(digits.join(''));

const getCalibrationValue = (text: string) => {
    const digits = digitsOnly(text).split('').map(Number);
    // console.log(digits); // eslint-disable-line
    // const firstLast = firstLastDigits(digits);
    // console.log(firstLast); // eslint-disable-line
    // const concat = concatDigits(firstLast);
    // console.log(); // eslint-disable-line
    return concatDigits(firstLastDigits(digits));
};

const calibrationValuesTotal = (calibrationSheet: string[]) =>
    calibrationSheet.reduce((acc, cur) => acc + getCalibrationValue(cur), 0);

const answer1 = calibrationValuesTotal(input);

const wordToDigitMap: Record<string, number> = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

const numberWordsToDigits = (originalText: string): string => {
    const regex = new RegExp(`${Object.keys(wordToDigitMap).join('|')}`, 'g');

    const getMatches = (text: string) => Array.from(text.matchAll(regex))

    let replacedText = originalText;

    let matches = getMatches(originalText);

    while (matches.length) {
        replacedText = replacedText.replace(regex, (match) => {
            const firstCharacter = match.charAt(0);
    
            // Concatenate the first character, the new character, and the rest of the string
            const modifiedString = `${firstCharacter}${wordToDigitMap[match]}${match.slice(2)}`;
            
            return modifiedString;
        });

        matches = getMatches(replacedText)
    }

    return replacedText;
};

const answer2 = calibrationValuesTotal(input.map(numberWordsToDigits));

log.info('1-1: %s', answer1);
log.info('1-2: %s', answer2);
