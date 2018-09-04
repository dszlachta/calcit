import average from './average';

export default function median(...args) {
    const sortedArgs = args.sort();
    const { length } = sortedArgs;
    const pickIndex = ((length + 1) / 2) - 1;

    if (length % 2 !== 0) {
        return sortedArgs[pickIndex];
    }

    return average(
        sortedArgs[Math.floor(pickIndex)],
        sortedArgs[Math.ceil(pickIndex)]
    );
}
