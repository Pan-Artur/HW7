console.log("Task 1");

const threeNumbers = [9, 2, 11];
threeNumbers[1] = 10;
console.log(threeNumbers);

console.log("Task 2");

const threeStrings = ["Leonardo", "Michelangelo", "Raphael"];
threeStrings[3] = "Donatello";
console.log(threeStrings);

console.log("Task 3");

const sumNumbers = [11, 23, 43, 1, 500, 78, 39];
const sumNumber = sumNumbers[0];
let sum = 0;

for (let sumNumber of sumNumbers) {
    sum += sumNumber;
}

console.log(sum);

console.log("Task 4");

const fiveNumbers = [14, 38, 43, 29, 8];

for (let i = 0; i <= fiveNumbers.length - 1; i += 1) {
    console.log(fiveNumbers[i]);
}

console.log("Task 5");

const fiveStrings = ["Arnold", "Jack", "Anatoliy", "Artur", "Eduard"];

for (let i = 0; i <= fiveStrings.length - 1; i += 1) {
    if (fiveStrings[i].length <= 5) {
        continue;
    } else {
        console.log(fiveStrings[i])
    }
}

console.log("Task 6");

let tenNumbers = [5, 24, 37, 8, 70, 59, 78, 6];
let biggestNumber = tenNumbers[0];

for (const number of tenNumbers) {
    if (biggestNumber < number) {
        biggestNumber = number;
    }
}

console.log(biggestNumber);

console.log("Task 7");

for (const number2 of tenNumbers) {
    if (number2 % 2 === 0) {
        console.log(number2);
    } else {
        continue;
    }
}






