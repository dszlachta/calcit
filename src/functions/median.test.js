import median from './median';

test('function: median', () => {
    const oddSet = [3, 1, 3, 7, 6, 8, 9];
    const evenSet = [3, 2, 1, 5, 4, 9, 8, 6];

    expect(median(...oddSet)).toEqual(6);
    expect(median(...evenSet)).toEqual(4.5);
});
