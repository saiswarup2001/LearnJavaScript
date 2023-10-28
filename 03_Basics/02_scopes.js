// let a = 10
// const b = 20
// var c = 30

{} // this brace is known as scope --> used in loops
//var c = 300
let a = 300 //Global scope

//Local Scope
if(true){
    let a = 10
    const b = 20
    // var c = 30
    console.log(a);
} 
//the variable decleared inside the scope cannot be access outside of it.


console.log(a);
// console.log(b);
// console.log(c);