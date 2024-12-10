const { evaluateSheet } = require('./evaluator');

test('Evaluates sheet with formulas correctly', () => {
    const input = [
        ['A', 'B', 'C'],
        ['5', '3', '=5+A1'],
        ['7', '8', '=A2+B2'],
        ['9', '=4+5', '=C2+B3']
    ];
    const expected = [
        ['A', 'B', 'C'],
        ['5', '3', '10'],
        ['7', '8', '15'],
        ['9', '9', '24']
    ];

    expect(evaluateSheet(input)).toEqual(expected);
});
