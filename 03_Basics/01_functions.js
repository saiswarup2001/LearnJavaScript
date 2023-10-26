// ++++++++++++++++++++++++ Functions ++++++++++++++++++++++++++++++++

function sayHello(){
    //function defination
    console.log("H");
    console.log("I");
    console.log("I");
    console.log("T");
    console.log("S");
    console.log("S");
}

//sayHello() //function call

function add(number1, number2){ //at defination (a,b) --< parameters

    // console.log(number1 + number2);

    // let result = number1 + number2
    // return result

    return number1+number2
}

const res = add(5, 10) //during call its(a, b) is known as arguments
console.log("Result is: ", res);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++

function userLoginMessage(username = "sam"){ //default value
    if(username === undefined){
        console.log("Please enter username");
        return
    }
    return`${username} just logged in`
}
// console.log(userLoginMessage());
console.log(userLoginMessage("Sai"));

// const message = userLoginMessage("Sai")
// console.log(message);

//+++++++++++++++++++++ shopping cards +++++++++++++++++++++++++++++

function calculateCardPrices(...num1){
    return num1
}

console.log(calculateCardPrices(200, 400, 500, 200, 1000));

//+++++++++++++++++++++++ functions with objects ++++++++++++++++++++++++++++++++++
const user = {
    username: "sai",
    price: 199
}

function handelObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handelObject(user)
handelObject({
    username: "sai",
    price: 399
})

//++++++++++++++++++++++++++++++++++ array object in function +++++++++++++++++++++++++++++

const myArr = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([100, 200, 300, 400]));