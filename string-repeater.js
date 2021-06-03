const prompt = require("prompt-sync")();

//USER INPUT
let aString = prompt("Please enter a string");

//LOOPS
while (aString.length < 10) {
    aString = aString + aString;
    console.log(aString)
}