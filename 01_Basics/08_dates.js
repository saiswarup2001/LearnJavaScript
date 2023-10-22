console.log(Date());

let myDate = new Date()
console.log(myDate); //Sun Oct 22 2023 20:15:57 GMT+0530 (India Standard Time)
console.log(myDate.toJSON()); //2023-10-22T14:45:57.682Z
console.log(myDate.toDateString()); //Sun Oct 22 2023
console.log(myDate.toLocaleString()); //22/10/2023, 8:15:57 pm
console.log(typeof myDate); //object

// const myCreated = new Date(2023, 1, 23)
// const myCreated = new Date(2023, 1, 23, 5, 3)
const myCreated = new Date("01-14-2023")
console.log("created Date: "+ myCreated.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreated.getTime());

//convert in seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());

const letOne = newDate.toLocaleString('default',{
                    weekday: "long",
                    hour:"2-digit"
                })

console.log(letOne);

