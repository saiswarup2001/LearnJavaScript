// const tinderUser = new Object(); //singleton
const tinderUser = {}

tinderUser.id = '123abc',
tinderUser.name ="sai"
tinderUser.isLogIn = false

const regularUser = {
    email: "sai@gmail.com",  //object k andar object --> nested objects
    fullname: {
        userfullname: {
            firstname: "sai swarup",
            lastname: "patnaik"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname?.userfullname.firstname); //optional chaining



const ob1 = {1: "a", 2: "b"}
const ob2 = {3: "a", 4: "b"}

// const ob3 = {ob1, ob2}
// const ob3 = Object.assign({}, ob1, ob2)

const ob3 = {...ob1, ...ob2} //using spread operation
//console.log(ob3);

//database trick

const userOne = [
    {
        id: 1,
        email: "sai@gmail.com"
    },
    {
        id: 1,
        email: "sai@gmail.com"
    },
    {
        id: 1,
        email: "sai@gmail.com"
    }
]

userOne[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogIn'));