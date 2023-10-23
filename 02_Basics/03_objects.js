//singleton --> using constructor
// Object.create


//objects literals
const mySymbol = Symbol("Key1")

const JsUser = {
    name: "Sai",        //keys: valeue pairs
    "full name": "Sai Swarup Patnaik",
    [mySymbol]: "myKey1",
    age: 22,
    location: "Berhampur",
    email: "sai@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);

JsUser.email = "hit@chat.com" //override to object
// Object.freeze(JsUser) //it freez the object
JsUser.email = "hit@chatgpt.com" 
// console.log(JsUser);


// ++++++++++++++++++++++++++++++++++++++++ functions +++++++++++++++++++++++++++++++
JsUser.greeting = function(){
    console.log("Hello Js user.....");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());