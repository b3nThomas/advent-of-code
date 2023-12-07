import { getInput, log } from '../../lib';

const input = getInput(2023, 2).split('\n');

type CubeColor = 'red' | 'blue' | 'green';

const highestValueColor = (color: CubeColor, text: string): number => {
    const pattern = new RegExp(`(\\d+)\\s+${color}`, 'g');
    const matches = text.match(pattern);

    return Math.max(...(matches || []).map((match) => parseInt(match)));
};

const games = input.map((line, i) => ({
    id: i + 1,
    red: highestValueColor('red', line),
    blue: highestValueColor('blue', line),
    green: highestValueColor('green', line),
}));

const validGames = games.filter(({ red, blue, green }) => red <= 12 && blue <=14 && green <= 13);
const validGameIdsTotal = validGames.reduce((acc, cur) => acc += cur.id, 0);

const answer1 = validGameIdsTotal;
const answer2 = 'TODO';

log.info('2-1: %s', answer1);
log.info('2-2: %s', answer2);
