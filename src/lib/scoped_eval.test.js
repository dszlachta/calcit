import scopedEval from './scoped_eval';

test('scopedEval', () => {
    const expression = 'sum(1, 1)';
    const evaluated = scopedEval(expression);

    expect(evaluated).toEqual(2);

    const customExpression = 'identity(5)';
    const customEvaluated = scopedEval(customExpression, { identity: value => value });

    expect(customEvaluated).toEqual(5);
});
