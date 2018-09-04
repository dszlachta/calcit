import seq from './seq';

test('seq: numerical', () => {
    const ascending = [...seq(1, 5)];

    expect(ascending.length).toEqual(5);
    expect(ascending[0]).toEqual(1);
    expect(ascending[4]).toEqual(5);

    const descending = [...seq(5, 1)];

    expect(descending.length).toEqual(5);
    expect(descending[0]).toEqual(5);
    expect(descending[4]).toEqual(1);
});

test('seq: selector', () => {
    const idSequenceAscending = [...seq('#id1', '#id5')];

    expect(idSequenceAscending.length).toEqual(5);
    expect(idSequenceAscending[0]).toMatch('#id1');
    expect(idSequenceAscending[4]).toMatch('#id5');
});
