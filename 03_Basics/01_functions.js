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