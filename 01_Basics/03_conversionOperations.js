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