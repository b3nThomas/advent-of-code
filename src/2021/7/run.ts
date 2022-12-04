import { getInput } from '../../utils/getInput';
import { log } from '../../utils/log';

const input = getInput(2021, 7).split('\n');

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
            if (bagRule === 'no other bags') {
                return;
            }
            const bagSplit = bagRule.split(' ');
            const count = Number(bagSplit.shift());
            innerBagRules[bagSplit.join(' ').replace(/ bag(s)?/, '')] = count;
        });
    outerBagRules[outerBagColour] = innerBagRules;
});

const bagsThatCanEventuallyStoreAtLeastOneGoldBag = new Set();

const getOuterBagsThatContainAtLeastOneInnerBag = (innerBagColour: string): void => {
    for (let outerBagColour in outerBagRules) {
        if (outerBagRules[outerBagColour][innerBagColour]) {
            bagsThatCanEventuallyStoreAtLeastOneGoldBag.add(outerBagColour);
            getOuterBagsThatContainAtLeastOneInnerBag(outerBagColour);
        }
    }
};

getOuterBagsThatContainAtLeastOneInnerBag('shiny gold');

log.info('7-1: %s', bagsThatCanEventuallyStoreAtLeastOneGoldBag.size);

let totalBagsInsideMyOneShinyGoldBag = 0;

const getTotalInnerBagsForTheGivenBag = (bagColour: string) => {
    for (let innerBag in outerBagRules[bagColour]) {
        totalBagsInsideMyOneShinyGoldBag += outerBagRules[bagColour][innerBag];
        for (let i = 0; i < outerBagRules[bagColour][innerBag]; i++) {
            getTotalInnerBagsForTheGivenBag(innerBag);
        }
    }
};

getTotalInnerBagsForTheGivenBag('shiny gold');

log.info('7-2: %s', totalBagsInsideMyOneShinyGoldBag);
