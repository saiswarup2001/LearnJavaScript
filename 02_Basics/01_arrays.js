//Arrays declerations

const myArray = [0,  1, 2, 3, 4, 5]
const myHero = ["shakiman", "Doremon"]

const myArray1 = new Array(1, 2, 3, 4)
console.log(myArray[2]); //2

//Array Methods

myArray.push(6)
myArray.push(7)
console.log(myArray); //[0, 1, 2, 3, 4, 5, 6, 7]
myArray.pop() //delete the last element
console.log(myArray); //[0, 1, 2, 3, 4, 5, 6]

myArray.unshift(9) //add the element in the front 
console.log(myArray); //[9, 0, 1, 2, 3, 4, 5, 6]
myArray.shift() //remove the first elements
console.log(myArray); //Before shift: [9, 0, 1, 2, 3, 4, 5, 6] --> [ 0, 1, 2, 3, 4, 5, 6]

console.log(myArray.includes(9)); //false
console.log(myArray.indexOf(9)); //if that index not present then it gives -1


//==========================================================================

const newArr = myArray.join()

console.log(myArray)
console.log(typeof newArr);
console.log(newArr);


//========================= Slice and Spice ==============================

console.log("A ", myArray);
const myArr1 = myArray.slice(1, 3)
console.log(myArr1);

console.log("B ", myArray);

const myArr2 = myArray.splice(1, 3)
console.log("c ", myArray);
console.log(myArr2);