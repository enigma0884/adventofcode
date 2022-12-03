const input = ``;

const calories = input.split("\n");
let calorieCount = 0, highest = 0;

for (const calorie of calories) {
    if (calorie !== '') {
        calorieCount += Number(calorie);
    }
    else {
        if (calorieCount > highest) {
            highest = calorieCount;
        }
        calorieCount = 0;
    }
}

console.log(calorieCount);
