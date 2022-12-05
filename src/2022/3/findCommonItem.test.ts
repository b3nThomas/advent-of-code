import { findCommonItem as find } from './findCommonItem';

test('returns the first item that is present in both compartments', () => {
    expect(find(['abcD', 'Defg'])).toEqual('D');
});
