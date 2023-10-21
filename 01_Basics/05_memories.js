// Stack memory (use Primitive datatype) and Heap Memory (Non-Primitive Data types)
// when Stack memo is used it gives a copy of the decleared variable.
// when Heap memory is used its gives the reference of the original value.

let myName = "Study_Ssp"
let anotherName  =  myName //Study_Ssp
anotherName = "CodeWithSai"


console.log(myName); //Study_Ssp
console.log(anotherName); //CodeWithSai


let userOne = {
    email: "user@gmail.com",
    upi: "upi@ybl"
}

let userTwo = userOne //reference create horaha hai userOne ka jisko point kar raha userTwo ok --> userOne or UserTwo dono ek hi values ko point kr rahe
    /*  
        let userTwo = {
            email: "user@gmail.com",
            upi: "upi@ybl"
        }
    */

userTwo.email = "Sai@gmail.com" //hum jab userTwo me change kar rahe wo userOne me bhi reflect horaha hoga ok

console.log(userOne.email); //user@gmail.com but after changing the value in userTwo --> Sai@gmail.com
console.log(userTwo.email); //Sai@gmail.com