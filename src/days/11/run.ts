import { getInput } from '../../utils/getInput';
import { log } from '../../utils/log';

const input = getInput(11)
    .split('\n')
    .filter((row) => row);

log.info('11-1: %s', input);

// log.info('11-2: %s', <answer>);
