const accountId = 144553
let accountEmail = "prasanna@gmail.com"
var accountPw= "1213"
/*prefer not to use var because of issue in block scope and functional scope
*/
accountCity = "kathmandu"

// accountId = 21212 not allowed

accountEmail = "sas@jf.com"
accountPw= "21"
accountCity= "pkr"
let accountState;
console.log(accountId);
console.table([accountEmail, accountId, accountPw, accountState , accountCity])

