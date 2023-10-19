// console.log( 2 > 1); //true
// console.log( 2 >= 1); //true
// console.log( 2 < 1); //false
// console.log( 2 <= 1); //false
// console.log( 2 == 1); //false
// console.log( 2 != 1); //true

console.log( "2" > 1); //true
console.log( "02" > 1); //true
//sometime this may give unpredictable output
console.log("==== null ====");
console.log(null > 0); //false
console.log(null >= 0); //true
console.log(null == 0); //false

console.log("==== undefined ====");
console.log(null > 0); //false
console.log(null < 0); //false
console.log(null == 0); //false

 
/* ========== [ == ] or [ === ] ================ */
console.log("== & ===");
console.log("2" == 2); //true
console.log("2" === 2) //false