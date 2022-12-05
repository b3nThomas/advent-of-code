import { findCommonItem as find } from './findCommonItem';

test('returns the first item that is present in both compartments', () => {
    expect(find(['abcD', 'Deg'])).toEqual('D');
});

test('handles multiple matches', () => {
    expect(find(['abcDD', 'DDeg'])).toEqual('D');
});
