function oddOrEven(num) {
 return num%2 === 0 ? "Even!" : "Odd!"
}

function evenlyDivisible(num1, num2) {
 return num1%num2 === 0 ? "Evenly divisible!" : "Not evenly divisible!"
}

function checkPasswords(password) {
 return password === 'gR3@tsecurity'  ? "Success!" : "Failure!"
}
  

// let pwd1 = getInput(1)
// let pwd2 = getInput(2)  
function newPasswordsMatch(str1, str2) {
  return str1 === str2  ? "Success!" : "Failure!"
}

function theBaseballPlayoffsHaveBegunAndItsAGoodThingBecauseColinIsReallyStartingToReachForTernaryExamplesButDoesKnowBaseball(num1, num2) {
 return num2 >= num1 ? "Safe!" : "Out!"
}

function electoralCollege(num) {
 return num < 270 ? "Blue!" : "Red!"
}

module.exports = {
  oddOrEven,
  evenlyDivisible,
  checkPasswords,
  newPasswordsMatch,
  theBaseballPlayoffsHaveBegunAndItsAGoodThingBecauseColinIsReallyStartingToReachForTernaryExamplesButDoesKnowBaseball,
  electoralCollege,
}