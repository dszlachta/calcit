import { isNumber } from '../utils';

export default function count(...args) {
    return args.filter(isNumber).length;
}
