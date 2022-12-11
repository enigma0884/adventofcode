const input = ``;

let pairCounter = 0, arr;
const matcher = /(?<d1>\d+)\-(?<d2>\d+),(?<d3>\d+)\-(?<d4>\d+)/g;

while ((arr = matcher.exec(input)) !== null) {
    const pairs = arr.groups;

    if (Number(pairs.d3) >= Number(pairs.d1) && Number(pairs.d4) <= Number(pairs.d2)) {
        pairCounter++;
    }
    else if (Number(pairs.d3) <= Number(pairs.d1) && Number(pairs.d4) >= Number(pairs.d2)) {
        pairCounter++;
    }
}

console.log(pairCounter);
