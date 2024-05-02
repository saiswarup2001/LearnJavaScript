let snacks = "Samosha";

function getFood(food){
    if(food){
        snacks = "alu chop";
        return snacks;
    }
    return snacks;
}
console.log(getFood(false));//undefined

//===========================================================================
var snack1 = "Samosha";

function getFood1(food){
    if(food){
        snack1 = "alu chop";
        return snacks;
    }
    return snack1;
}
console.log(getFood1(false));//samosha



//============================================================================

var num = 1

function getNum(d){
    if(d){
        num = 10;
        return num;
    }
    return num;
}
console.log(getNum(false))//1

//============================================================================

const num1 = 1

function getNum1(d){
    if(d){
        num1 = 10;
        return num1;
    }
    return num1;
}
console.log(getNum1(false))//1

//==========================================================================
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

console.log(getFood(false)); // undefined

//========================================================

//work with some example
// var -> function scope
console.log();
function getVar(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log("i ="+ i);
}

getVar()
console.log()

// let -> block scope
function getFor(){
    for(let i=0; i<5; i++){
        console.log(i);
    }
    //console.log("i ="+ i); // i is not defined
}

getFor()
console.log();

// const -> block scope
const x = 10;

function getConst(){
    // x = 20;
    console.log(x); //Assignment to constant variable. it cannot be changed
}

getConst()