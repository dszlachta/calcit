import sum from './sum';

export default function average(...args) {
    return sum(...args) / args.length;
}
