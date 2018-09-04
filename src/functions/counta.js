export default function counta(...args) {
    return args.filter(value => value !== undefined && value !== null).length;
}
