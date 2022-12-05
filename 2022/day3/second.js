const input = ``;

const rucksacks = input.split('\n');

const mapper = {};
let lCounter = 1, uCounter = 27, sum = 0;

for (let i = 97; i <= 122; i++) {
    mapper[String.fromCharCode(i)] = lCounter;
    mapper[String.fromCharCode(i - 32)] = uCounter;
    lCounter++;
    uCounter++;
}

for (let i = 0; i < rucksacks.length; i += 3) {
    const sack1 = rucksacks[i].split('');
    const sack2 = rucksacks[i + 1].split('');
    const sack3 = rucksacks[i + 2].split('');

    const commonItem = sack1.find(item => sack2.includes(item) && sack3.includes(item));

    sum += mapper[commonItem];
}

console.log(sum);
