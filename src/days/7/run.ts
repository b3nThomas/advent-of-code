import { getInput } from '../../utils/getInput';
import { log } from '../../utils/log';

const input = getInput(7).split('\n');

type InnerBagRules = { [innerBagColour: string]: number };
type OuterBagRules = { [outerBagColour: string]: InnerBagRules };

const outerBagRules: OuterBagRules = {};

input.forEach((rule) => {
    if (rule === '') {
        return;
    }
    const ruleSplit = rule.split(' bags contain ');
    const outerBagColour = ruleSplit[0];
    const innerBagRules: InnerBagRules = {};
    ruleSplit[1]
        .replace('.', '')
        .split(', ')
        .forEach((bagRule) => {
            const bagSplit = bagRule.split(' ');
            const count = Number(bagSplit.shift());
            innerBagRules[bagSplit.join(' ').replace(/ bag(s)?/, '')] = count;
        });
    outerBagRules[outerBagColour] = innerBagRules;
});

const colourBagsThatCanDirectlyContainAtLeastOneGoldBag = [];

for (let outerBagColour in outerBagRules) {
    if (outerBagRules[outerBagColour]['shiny gold']) {
        colourBagsThatCanDirectlyContainAtLeastOneGoldBag.push(outerBagColour);
    }
}

log.info({ colourBagsThatCanDirectlyContainAtLeastOneGoldBag });

// Need to potentially use recursion here...
// Walk through each parent, get and store the colour etc etc.


// log.info('7-1: %s', <answer>);
// log.info('7-2: %s', <answer>);
