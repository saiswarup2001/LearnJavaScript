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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nested Scope

function one(){
    const userName = "Sai"

    function two(){
        const website = 'Youtube'
        console.log(userName);
    }
    //console.log(website);

    two()
}
// one()

if(true){
    const username = "sai"
    if(username === "sai"){
        const web = " Youtube"
        //console.log(username + web);
    }
    //console.log(web);
}
//console.log(username);


//+++++++++++++++++++ interesting =++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1;
}

//hoisting
//console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}

