const prompt = require("prompt-sync")();

//USER INPUT
const intro = prompt("please press 'done' when finished")

// LOOP CONDITIONAL VARIABLES
let count = 0;
 
let add = true;

let sum = 0;

//LOOP START
while (add == true) {
    count++
    const retry = prompt(`Count is ${count}. Would you like to go again?`)
    sum = sum + count;
 //LOOP CONDITIONAL
    if (retry == "done") {
    add = false;
    console.log(`The sum is ${sum}.`)
    }

   
    
}

