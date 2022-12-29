import { getInput } from '../../lib/getInput';
import { log } from '../../lib/log';
import { collectCaloriesTotals } from './collectCaloriesTotals';
import { getHighest, getHighestThree } from './getHighestCalories';

const input = getInput(2022, 1).split('\n');

const answer1 = getHighest(collectCaloriesTotals(input));
const answer2 = getHighestThree(collectCaloriesTotals(input));

log.info('1-1: %s', answer1);
log.info('1-2: %s', answer2);
