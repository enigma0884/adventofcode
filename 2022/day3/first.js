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

for (const rucksack of rucksacks) {

    const compartmentOne = rucksack.slice(0, rucksack.length / 2).split('');
    const compartmentTwo = rucksack.slice(rucksack.length / 2).split('');

    const commonItem = compartmentOne.find(item => compartmentTwo.includes(item));

    sum += mapper[commonItem];
}

console.log(sum);
