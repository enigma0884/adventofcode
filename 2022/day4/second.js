const input = ``;

let pairCounter = 0, arr;
const matcher = /(?<d1>\d+)\-(?<d2>\d+),(?<d3>\d+)\-(?<d4>\d+)/g;

while ((arr = matcher.exec(input)) !== null) {
    const pairs = arr.groups;
    const tracker = [];

    for (let i = Number(pairs.d1); i <= Number(pairs.d2); i++) {
        tracker.push(i);
    }

    for (let i = Number(pairs.d3); i <= Number(pairs.d4); i++) {
        if (tracker.includes(i)) {
            pairCounter++;
            break;
        }
    }
}

console.log(pairCounter);
