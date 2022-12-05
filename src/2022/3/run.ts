import { getInput } from '../../utils/getInput';
import { log } from '../../utils/log';
import { aggregateCommonItemPriorities } from './aggregateCommonItemPriorities';

const input = getInput(2022, 3).split('\n');

const answer1 = aggregateCommonItemPriorities(input);
const answer2 = 'TODO';

log.info('3-1: %s', answer1);
log.info('3-2: %s', answer2);
