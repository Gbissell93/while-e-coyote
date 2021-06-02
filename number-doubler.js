const prompt = require("prompt-sync")();

//USER INPUT
let num = Number(prompt("Please enter a number. "))
//LOOP VARIABLES 
// let i = 0;
// let product = num + i;
//LOOPS
while (num <= 100) {
    num = num * 2;
    console.log(num)
}