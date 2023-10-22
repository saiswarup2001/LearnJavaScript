// decleration of string
console.log("=============== decleration of string ===========");
const myName = 'Sai Swarup' /* or "Sai Swarup" */
console.log(myName); //Sai Swarup

const SecondMethod = new String("Sai Swarup")
console.log(SecondMethod); //[String: 'Sai Swarup']


console.log("===============Replaced Method===========");

const url = "https://sai.youtube/sai%20Swarup" //%20 --> -
const newUrl = url.replace('%20', '-')

console.log("Url: "+url);
console.log("New Url: "+newUrl);

console.log("===============Trim Method===========");
const carName = '    Swift Desire  '
console.log("Before Trim: "+ carName);
console.log("After trim: "+ carName.trim());
console.log("After Start trim: "+ carName.trimStart());
console.log("After End trim: "+ carName.trimEnd());

console.log("=============== String InteraPolations ===========");
const name = "Sai Swarup"
let score = 80
console.log("My Name is "+ name +" my score is "+ score); // it somehow not used in the industries so the way is
console.log(`My Name is ${name} my score is ${score}`);

console.log("=============== Other Methods ===========");
const myYoutube = 'Sai_ssp'
console.log("UpperCase: "+ myYoutube.toUpperCase());
console.log("LowerCase: "+ myYoutube.toLowerCase());
console.log("Split: "+ myYoutube.split('_'));
console.log("Match: "+ myYoutube.match('S'));
