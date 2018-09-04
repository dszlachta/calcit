import { isNumber } from '../utils';

export default function createSelectorsToValues(document) {
    return (...selectors) => {
        return selectors
            .map(selector => {
                return [...document.querySelectorAll(selector)]
                    .map(element => element.textContent)
                    .map(value => isNumber(value) ? parseFloat(value) : value);
            })
            .reduce((flatteredArray, arrayOfValues) => [...flatteredArray, ...arrayOfValues], []);
    };
}
