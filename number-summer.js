const prompt = require("prompt-sync")();

//USER INPUT
const intro = prompt("please press done when finished")
let sum = 0;
 
let add = true;

while (add == true) {
    sum++;
    const retry = prompt(`sum is ${sum}. go again?`);
    if (retry == "done") {
    add = false;
    console.log(`The sum is ${sum}.`)
    }
}

