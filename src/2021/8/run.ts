import { getInput } from '../../lib/getInput';
import { log } from '../../lib/log';

const input = getInput(2021, 8)
    .split('\n')
    .filter((row) => row);

(() => {
    const executedCommands: number[] = [];
    let currentCommand = 0;
    let accumulator = 0;

    while (!executedCommands.includes(currentCommand)) {
        executedCommands.push(currentCommand);
        const commandSplit = input[currentCommand].split(' ');

        switch (commandSplit[0]) {
            case 'acc':
                accumulator += Number(commandSplit[1]);
                currentCommand++;
                break;
            case 'jmp':
                currentCommand += Number(commandSplit[1]);
                break;
            case 'nop':
                currentCommand++;
                break;
            default:
                throw new Error('Something has gone very wrong...');
        }
    }

    log.info('8-1: %s', accumulator);
})();

(() => {
    let programmeTerminated = false;
    let ruleToSwitch = 0;
    let accumulator = 0;

    while (!programmeTerminated) {
        const inputClone = JSON.parse(JSON.stringify(input));
        const executedCommands: number[] = [];
        let currentCommand = 0;
        accumulator = 0;

        inputClone[ruleToSwitch] = inputClone[ruleToSwitch].includes('nop')
            ? inputClone[ruleToSwitch].replace('nop', 'jmp')
            : inputClone[ruleToSwitch].includes('jmp')
            ? inputClone[ruleToSwitch].replace('jmp', 'nop')
            : inputClone[ruleToSwitch];

        while (
            !executedCommands.includes(currentCommand) &&
            currentCommand <= inputClone.length - 1
        ) {
            executedCommands.push(currentCommand);

            const commandSplit = inputClone[currentCommand].split(' ');

            if (currentCommand === inputClone.length - 1) {
                programmeTerminated = true;
            }

            switch (commandSplit[0]) {
                case 'acc':
                    accumulator += Number(commandSplit[1]);
                    currentCommand++;
                    break;
                case 'jmp':
                    currentCommand += Number(commandSplit[1]);
                    break;
                case 'nop':
                    currentCommand++;
                    break;
                default:
                    throw new Error('Something has gone very wrong...');
            }
        }

        ruleToSwitch++;
    }

    log.info('8-2: %s', accumulator);
})();
