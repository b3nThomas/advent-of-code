import { getInput } from '../../utils/getInput';
import { log } from '../../utils/log';
import { getTotalScore } from './getTotalScore';
import { getScoreUsingMove } from './getScoreUsingMove';

const input = getInput(2022, 2)
    .split('\n')
    .filter((line) => !!line);

const answer1 = getTotalScore(getScoreUsingMove, input);

log.info('2-1: %s', answer1);
log.info('2-2: %s', '<answer>');
