// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters =["!", "@", "#", "$", "%", "^", "&", "*","(", ")"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = [1,2,3,4,5,6,7,8,9];

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//prompts for user input

function generatePassword() {

  var generatedPassword = "";

  var passwordLength = prompt("Please enter the number of characters for your password between 8 - 128.");

  // use while() to validate length
while (passwordLength <= 7 || passwordLength >=129) {
  alert("Password must be between 8 - 128 characters.");
  var passwordLength = prompt("Please enter the number of characters for your password between 8 - 128.")
}

  var includesLowCase = confirm("Do you want to include lower case letters?");
  
  var includesUpCase = confirm("Do you want to include upper case letters?");
  
  var includesNum = confirm("Do you want to included numbers in your password?");
  
  var includeSpChar = confirm("Do you want to include special characters?");

  //////////

  var selectedPool = [];

  // evaluate your input

  if(includeSpChar) {
    selectedPool = selectedPool.concat(specialCharacters)
  }

  if(includesNum) {
    selectedPool = selectedPool.concat(numChar)
  }

  if (includesUpCase) {
    selectedPool = selectedPool.concat(includesUpCase)
  }

  if (includesLowCase) {
    selectedPool = selectedPool.concat(includesLowCase)
  }


  console.log(selectedPool)

  // check which characters you would want to include on the character pool


  // use for loop to generate a password by getting random characters from the generated pool

  for (var index = 0; index < parseInt(passwordLength); index++) {
    generatedPassword += selectedPool[Math.floor(Math.random()*selectedPool.length)]
  }

  return generatedPassword;
}

//validate user response


//random generate function


// function myVoidFunction() {
//   console.log("Hello")
// }

// function myReturnFunction() {
//   return "Hello"
// }

// function anotherFunction() {
//   var word = myReturnFunction();

//   console.log(word)
// }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

