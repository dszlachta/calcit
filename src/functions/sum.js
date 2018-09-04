export default function sum(...args) {
    return args
        .reduce((sum, current) => sum + current, 0);
}
