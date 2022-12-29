import { getInput, log } from '../../lib';
import { getTotalOverlaps } from './getTotalOverlaps';
import { rangeContainsOtherRange } from './rangeContainsOtherRange';
import { rangeOverlapsOtherRange } from './rangeOverlapsOtherRange';

const input = getInput(2022, 4).split('\n');

const answer1 = getTotalOverlaps(rangeContainsOtherRange, input);
const answer2 = getTotalOverlaps(rangeOverlapsOtherRange, input);

log.info('4-1: %s', answer1);
log.info('4-2: %s', answer2);
