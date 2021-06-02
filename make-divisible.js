const prompt = require("prompt-sync")();

//  USER INPUT
let num = prompt("Please a enter a number.");
let num2 = prompt("Please a second enter a number.");

//Variables
while (num % num2 !== 0)
num++
console.log(`${num} is divisible by ${num2}`)