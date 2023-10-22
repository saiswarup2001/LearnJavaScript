/* Numbers */
const score = 100;
console.log(score); //100

const balance = new Number(150)
console.log(balance); //Number 150

console.log(balance.toString().length); //3
console.log(balance.toFixed(1)); //150  // for decimal numbers --> used in e-commerce websites


const otherNum = 123.5599
console.log(otherNum.toPrecision(4)); //123.6

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000


// ++++++++++++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++");
console.log(Math);

const absValue = -10
console.log("Abs: "+Math.abs(absValue)); //Abs: 10

console.log("Round off: "+ Math.round(4.6)); //Round off: 5
console.log("Round off top: "+ Math.ceil(4.2)); //Round off top: 5 --> top value
console.log("Round off low: "+ Math.floor(4.6)); //Round off low: 4 --> low value
console.log("Square root: "+ Math.sqrt(2)); //Square root: 1.4142135623730951
console.log("power function: "+ Math.pow(2, 3)); //power function: 8
console.log("Max Number: "+ Math.max(3, 4, 111, 8, 11)); //Max Number: 111
console.log("Min number: "+ Math.min(3, 4, 111, 8, 11)); //Min number: 3

console.log("================= Random function ==========================");
console.log(Math.random());  //always change
//random in range
console.log(Math.floor(Math.random()*10) +1); //in single digit
console.log(Math.floor(Math.random()*100) +1); //in double digits
console.log(Math.floor(Math.random()*1000) +1); // in triple digits


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // in a specific range
