import counta from './counta';

test('function: counta', () => {
    expect(counta(1, 'a', false, true, {}, undefined, null)).toEqual(5);
});
