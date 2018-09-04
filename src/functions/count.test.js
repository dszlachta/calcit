import count from './count';

test('function: count', () => {
    expect(count(1, 1, 1)).toEqual(3);
    expect(count(1, 'a', 1)).toEqual(2);
});
