const input = "";
let myScore = 0;

const scoreDefaults = {
    'X': 1,
    'Y': 2,
    'Z': 3
};

const strategy = {
    'X': 'C',
    'Z': 'B',
    'Y': 'A'
};

const converter = {
    'X': 'A',
    'Y': 'B',
    'Z': 'C'
};

for (let i = 0; i < input.length; i += 4) {

    const elfChoice = input[i];
    const myChoice = input[i + 2];

    myScore += scoreDefaults[myChoice];
    if (converter[myChoice] === elfChoice) myScore += 3;

    else if (strategy[myChoice] === elfChoice) myScore += 6;
}

console.log(myScore);
