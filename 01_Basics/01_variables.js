const accountId  = 144553
let accountEmail = "Saiswarup1407@gmail.com"
var accountPass = "123456"
accountCity = "Berhampur" //its possible but its a bad code
let accountState; // if you declear something but not initilized it then it gives undefined as output

// accountId = 2  // not allowed
accountEmail = "hcs@gmail.com"
accountPass = "454545"
accountCity = "bengaluru"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPass, accountCity, accountState])