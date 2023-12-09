import { getInput, log, sumNumbers } from '../../lib';

const input = getInput(2023, 4).split('\n');

/* Part 1 ************************************************************************************************************/

type ScratchCardInfo = { cardNumber: number; winningNumbers: number[]; revealedNumbers: number[] };

const cleanNumbersString = (text: string) => text.trim().replace(/\s{2}/g, ' ');

const getCardData = (card: string): ScratchCardInfo => {
    const split = card.split(/:|\|/);

    const cardNumber = Number(split[0].match(/[0-9]+/g)?.[0]) ?? 0;

    const [winningNumbersString, revealedNumbersString] = [split[1], split[2]];

    const [winningNumbers, revealedNumbers] = [winningNumbersString, revealedNumbersString].map(
        (numbersString) => cleanNumbersString(numbersString).split(' ').map(Number)
    );

    return { cardNumber, winningNumbers, revealedNumbers };
};

const getTotalMatchingNumbers = ({ winningNumbers, revealedNumbers }: ScratchCardInfo): number =>
    winningNumbers.reduce((acc, cur) => (acc += revealedNumbers.includes(cur) ? 1 : 0), 0);

const getCardScore = (totalWinningNumbers: number) => 2 ** (totalWinningNumbers - 1);

const cardScores = input
    .map(getCardData)
    .map(getTotalMatchingNumbers)
    .map((matches) => (matches > 0 ? getCardScore(matches) : 0));

const totalScore = sumNumbers(cardScores);

const answer1 = totalScore; // 21213

/* Part 2 ************************************************************************************************************/

const cardCounts = Array.from({ length: input.length }, (_, i) => i + 1).reduce(
    (acc: Record<number, number>, cur) => ({
        ...acc,
        [cur]: 1,
    }),
    {}
);

input.forEach((text) => {
    const cardData = getCardData(text);

    const { cardNumber } = cardData;

    const matches = getTotalMatchingNumbers(cardData);

    if (matches > 0) {
        const noOfCurrentCards = cardCounts[cardNumber];

        for (let i = cardNumber + 1; i <= cardNumber + matches; i++) {
            if (cardCounts[i]) {
                cardCounts[i] += noOfCurrentCards;
            }
        }
    }
});

const totalCards = sumNumbers(Object.values(cardCounts));

const answer2 = totalCards; // 8549735

/* Results ***********************************************************************************************************/

log.info('4-1: %s', answer1);
log.info('4-2: %s', answer2);
