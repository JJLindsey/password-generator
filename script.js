// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters ="!@#$%^&*()";
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
var passwordLength = alert("Please enter the number of characters for your password between 8 - 28.");

var lowerCase = prompt("Do you want to include lower case letters?");

var upperCase = prompt("Do you want to include upper case letters?");

var numbers = prompt("Do you enat to included numbers in your password?");

var specialCharacters = prompt("Do you want to include special characters?");
//validate user response


//


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

