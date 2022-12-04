const input = "";
let myScore = 0;

const scoreDefaults = {
    'X': 1,
    'Y': 2,
    'Z': 3
};

const strategy = {
    'C': 'Y',
    'B': 'X',
    'A': 'Z'
};

const converter = {
    'A': 'X',
    'B': 'Y',
    'C': 'Z'
};

for (let i = 0; i < input.length; i += 4) {

    const elfChoice = input[i];
    const myChoice = input[i + 2];

    if (myChoice === 'Y') myScore += (scoreDefaults[converter[elfChoice]]) + 3;
    else if (myChoice === 'X') myScore += scoreDefaults[strategy[elfChoice]];
    else {

        if (elfChoice === 'A') myScore += (2 + 6);
        else if (elfChoice === 'B') myScore += (3 + 6);
        else myScore += (1 + 6);
    }
}

console.log(myScore);
