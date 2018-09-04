import functions from '../functions';

function getNamesAndFunctions(objectMap) {
    return [
        Object.keys(objectMap),
        Object.values(objectMap)
    ];
}

const [ scopeFunctionNames, scopeFunctions] = getNamesAndFunctions(functions);

export default function scopedEval(expressionAsString, customScope={}) {
    const [ customScopeFunctionNames, customScopeFunctions ] = getNamesAndFunctions(customScope);

    const evaluated = Function.apply(null, [...scopeFunctionNames, ...customScopeFunctionNames, `return ${expressionAsString}`]);

    return evaluated.apply(null, [...scopeFunctions, ...customScopeFunctions]);
}
