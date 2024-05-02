//object in js stored in the form of key value pair
//object in js is not a collection
//object in js is not a array

const person = {
    name : "jhone",
    age : 22,

    //methods
    walk() {},
    talk() {}
}

person.talk();
person.name = 'Kong';

//access the object methods
const targetValue = person.name;
person[targetValue.valueOf] = 'Jhon';
