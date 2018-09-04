import * as lib from '../lib';

function createHTMLContents(componentElement, shadowRoot, initialValue='') {
    const outputElement = document.createElement('span');

    outputElement.classList.add('calcit-output');
    outputElement.textContents = initialValue;

    shadowRoot.appendChild(outputElement);
}

function setText(element, text) {
    const span = element.shadowRoot.querySelector('span.calcit-output'); //FIXME

    span.textContent = text;
}

export default class Formula extends HTMLElement {
    constructor() {
        super();

        // TODO: calc initial value
        console.log('tc', this.textContents);
        const shadow = this.attachShadow({mode: 'open'});
        createHTMLContents(this, shadow);
    }

    connectedCallback() {
        const formula = this.textContent.trim();

        const result = lib.scopedEval(formula, {});
        console.log('formula', formula);
        console.log('result', result);
        setText(this, result);
    }
};

export function registerComponents() {
    window.customElements.define('ct-formula', Formula);
}

(() => registerComponents())();
