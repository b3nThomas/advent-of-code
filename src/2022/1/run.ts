import { getInput } from '../../utils/getInput';
import { log } from '../../utils/log';
import collectCalories from './collectCaloriesTotals';
import { getHighest, getHighestThree } from './getHighestCalories';

const input = getInput(2022, 1).split('\n');

const answer1 = getHighest(collectCalories(input));
const answer2 = getHighestThree(collectCalories(input));

log.info('1-1: %s', answer1);
log.info('1-2: %s', answer2);
