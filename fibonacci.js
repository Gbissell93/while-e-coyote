const prompt = require("prompt-sync")();

//USER INPUT
const input = Number(prompt(`please enter a number`));
let num1 = 0;
let num2 = 1
let sum = 0;
let count = 0;

 while (input !== count) {
    count++
    sum = num1+num2;
    num1 = num2;
    num2 = sum;
    console.log(sum)
 }