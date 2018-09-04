export function isNumber(someValue) {
    return !isNaN(parseFloat(someValue)) && isFinite(someValue);
}
