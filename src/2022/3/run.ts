import { getInput } from '../../lib/getInput';
import { log } from '../../lib/log';
import { getPrioritiesSumOfGroups, getPrioritiesSumOfRucksacks } from './getPrioritiesSum';

const input = getInput(2022, 3).split('\n');

const answer1 = getPrioritiesSumOfRucksacks(input);
const answer2 = getPrioritiesSumOfGroups(input);

log.info('3-1: %s', answer1);
log.info('3-2: %s', answer2);
