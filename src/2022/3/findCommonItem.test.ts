import {
    findCommonItemFromCompartments as compartmentFind,
    findCommonItemFromGroup as groupFind,
} from './findCommonItem';

describe('findCommonItemFromCompartments', () => {
    test('returns the first item that is present in both compartments', () => {
        expect(compartmentFind(['abcD', 'Deg'])).toEqual('D');
    });

    test('handles multiple matches', () => {
        expect(compartmentFind(['abcDD', 'DDeg'])).toEqual('D');
    });
});

describe('findCommonItemFromGroup', () => {
    test('returns the first item that is present in all rucksack', () => {
        expect(groupFind(['abcD', 'Defg', 'cDef'])).toEqual('D');
    });

    test('handles multiple matches', () => {
        expect(groupFind(['abcDD', 'DDeg', 'cDcD'])).toEqual('D');
    });
});
