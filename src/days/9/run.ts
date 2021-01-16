import { getInput } from '../../utils/getInput';
import { log } from '../../utils/log';

const input = getInput(9)
    .split('\n')
    .filter((row) => row)
    .map((n) => Number(n));

log.info('9-1: %s', input);
// log.info('9-2: %s', <answer>);
