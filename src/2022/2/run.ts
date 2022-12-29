import { getInput } from '../../lib/getInput';
import { log } from '../../lib/log';
import { getTotalScore } from './getTotalScore';
import { getScoreUsingMove } from './getScoreUsingMove';
import { getScoreUsingResult } from './getScoreUsingResult';

const input = getInput(2022, 2)
    .split('\n')
    .filter((line) => !!line);

const answer1 = getTotalScore(getScoreUsingMove, input);
const answer2 = getTotalScore(getScoreUsingResult, input);

log.info('2-1: %s', answer1);
log.info('2-2: %s', answer2);
