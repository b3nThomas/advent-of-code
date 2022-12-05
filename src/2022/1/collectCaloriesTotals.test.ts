import { collectCaloriesTotals as collect } from './collectCaloriesTotals';

test('throws if given a non-number string', () => {
    const input = ['Elf'];
    expect(() => collect(input)).toThrowError(
        'Only numbered strings should be present. Please check your input'
    );
});

test('returns the expected total for one elf', () => {
    const input = ['1', '1'];
    expect(collect(input)).toEqual([2]);
});

test('returns the expected total for multiple elves', () => {
    const input = ['1', '1', '', '2', '2'];
    expect(collect(input)).toEqual([2, 4]);
});
