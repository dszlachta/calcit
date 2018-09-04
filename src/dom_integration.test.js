import { JSDOM } from 'jsdom';

import createSelectorsToValues from './lib/selectors_to_values';
import sum from './functions/sum';

let document = null;

beforeEach(() => {
    document = (new JSDOM(`
      <table><tr id="tr1"><td>100</td><td class="text">text</td><td>200</td></tr><tr id="tr2"><td>5</td><td>5</td></tr></table>
    `)).window.document;
});

test('function: selectorsToValues', () => {
    const selectorsToValues = createSelectorsToValues(document);

    expect(sum(...selectorsToValues('#tr2 td'))).toEqual(10);
    expect(sum(...selectorsToValues('td:not(.text)'))).toEqual(310);
});
