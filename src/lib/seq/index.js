function toNumericalAsc(start, end, prefix=undefined) {
    return {
        [Symbol.iterator]: function*() {
            let current = start;
            while (current <= end) {
                yield prefix ? `${prefix}${current ++}` : current ++;
            }
        }
    };
}

function toNumericalDesc(start, end, prefix=undefined) {
    return {
        [Symbol.iterator]: function*() {
            let current = start;
            while (current >= end) {
                yield prefix ? `${prefix}${current --}` : current --;
            }
        }
    };
}

function toNumerical(start, end, prefix) {
    if (!start) return 0;

    if (!end) return start;

    return (start < end ? toNumericalAsc : toNumericalDesc)(start, end, prefix);
}

function toSelectors(start, end) {
    const ordinalRegExp = /[\d]+$/;
    const extractOrdinal = (selectorString) => {
        try {
            return selectorString.match(ordinalRegExp)[0];
        } catch (e) {
            throw new Error(`Cannot extract an ordinal number from selector: ${selectorString}`);
        }
    };
    const startOrdinal = extractOrdinal(start);
    const endOrdinal = extractOrdinal(end);
    const rawSelector = start.replace(startOrdinal, '');

    return toNumerical(parseInt(startOrdinal, 10), parseInt(endOrdinal, 10), rawSelector);
}

function decideType(valueString) {
    if (Number.isNaN(parseInt(valueString, 10))) {
        return 'selector';
    }

    return 'numerical';

    //throw new Error('Unknown sequence type. Known types include numerical and selector');
}

//FIXME: currently only supported valueString is number:number, e.g. 1:5
export default function seq(rangeStart, rangeEnd) {
    const rangeType = decideType(rangeStart);

    if (rangeType === 'numerical') {
        return toNumerical(rangeStart, rangeEnd);
    }

    if (rangeType === 'selector') {
        return toSelectors(rangeStart, rangeEnd);
    }
}
