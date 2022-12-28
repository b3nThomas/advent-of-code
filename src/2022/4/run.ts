import { log } from '../../utils/log';
import { getInput } from '../../utils/getInput';
import { getTotalOverlaps } from './getTotalOverlaps';

const input = getInput(2022, 4).split('\n');

const answer1 = getTotalOverlaps(input);
const answer2 = 'TODO';

log.info('4-1: %s', answer1);
log.info('4-2: %s', answer2);
