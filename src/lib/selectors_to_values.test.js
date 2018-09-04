import { JSDOM } from 'jsdom';

import createSelectorsToValues from './selectors_to_values';

let document = null;

beforeEach(() => {
    document = (new JSDOM(`<span id="first">10</span><span id="second">text</span><span id="third">20</span>`)).window.document;
});

test('function: selectorsToValues', () => {
    const selectorsToValues = createSelectorsToValues(document);

    expect(selectorsToValues(['#first'])).toEqual([10]);
    expect(typeof selectorsToValues(['#second'])[0]).toEqual('string');
    expect(selectorsToValues(['span'])).toEqual([10, 'text', 20]);
});
