// let score = null  //0
// let score = "33" //33
// let score = "33abc"   //NaN
// let score = undefined  //NaN
// let score = true // 1
let score = "Sai"  //NaN
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33"  => 33
// "33abc" => NaN
// true => 1; false => 0

/* ================================= Boolean opeations====================================== */

let isLoggedIn = "Sai"
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log("boolean number");
console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// "" => false; " " => true
// "sai" => true


/* ================================= String opeations====================================== */
let number = 33
let stringNumber = String(number)
console.log("--------------------String Conversion------------------");
console.log(stringNumber);
console.log(typeof stringNumber);


/* ============================== Operations =============================================== */

let value  =  3
let negValue  = -value
console.log("================================== operations =============================");
console.log(negValue);

/*
console.log(2+2); //additions
console.log(2-2); //substract
console.log(2*2); //multiply
console.log(2**3); //power
console.log(2/2); //divide
console.log(2%3); //modulus
*/

let str1 = 'Hello'
let str2 = " Sai"
 
let str3 = str1 + str2
console.log("String: "+ str3);

/* ============================= Type Conversion =================================*/
console.log("============ typo ======================");
console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32

console.log("=============tricky ==========");
console.log(true); //true
console.log(+true); //1
console.log(+""); //0


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log("game counter ++: "+ gameCounter);
++gameCounter
console.log("++ game counter: "+ gameCounter);

// link to study about postfix or prfix: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment