import * as lib from './lib';

console.log('>>>', lib);

const customScope = {
    seq: lib.seq,
    selectorsToValues: lib.createSelectorsToValues(document)
};

export function addFunction(functionName, fn) {
    customScope[functionName] = fn;
}

export function evaluate(expression) {
    return lib.scopedEval(expression, customScope);
}
