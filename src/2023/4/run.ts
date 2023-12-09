import { getInput, log } from '../../lib';

const input = getInput(2023, 4).split('\n');

/* Part 1 ************************************************************************************************************/

type ScratchCardInfo = { winningNumbers: number[]; revealedNumbers: number[] };

const cleanNumbersString = (text: string) => text.trim().replace(/\s{2}/g, ' ');

const getCardData = (card: string): ScratchCardInfo => {
    const split = card.split(/:|\|/);

    const [winningNumbersString, revealedNumbersString] = [split[1], split[2]];

    const [winningNumbers, revealedNumbers] = [winningNumbersString, revealedNumbersString].map(
        (numbersString) => cleanNumbersString(numbersString).split(' ').map(Number)
    );

    return { winningNumbers, revealedNumbers };
};

const getTotalMatchingNumbers = ({ winningNumbers, revealedNumbers }: ScratchCardInfo): number =>
    winningNumbers.reduce((acc, cur) => (acc += revealedNumbers.includes(cur) ? 1 : 0), 0);

const getCardScore = (totalWinningNumbers: number) => 2 ** (totalWinningNumbers - 1);

const cardScores = input
    .map(getCardData)
    .map(getTotalMatchingNumbers)
    .map((matches) => (matches > 0 ? getCardScore(matches) : 0));

const totalScore = cardScores.reduce((acc, cur) => (acc += cur), 0);

const answer1 = totalScore; // 21213

/* Part 2 ************************************************************************************************************/

const answer2 = 'TODO';

/* Results ***********************************************************************************************************/

log.info('4-1: %s', answer1);
log.info('4-2: %s', answer2);
