const input = ``;

const calories = input.split("\n");
let calorieCount = 0;
const arr = [];

for (const calorie of calories) {
    if (calorie !== '') {
        calorieCount += Number(calorie);
    }
    else {
        arr.push(calorieCount);
        calorieCount = 0;
    }
}

arr.sort((a, b) => b - a);
let sum = arr[0];

for (let i = 1; i < 3; i++) {
    sum += arr[i];
}

console.log(sum);
