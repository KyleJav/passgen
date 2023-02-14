// Assignment Code
var generateBtn = document.querySelector("#generate");

// Special characters for the function created
const specialCharacters = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts that come up after you click generate password
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters for you new password. Their must be more than 12 but no more than 128.");

  var numbers = confirm("Are there numbers in your password?");

  var lowerCases = confirm("Are there lowercase letters in your password?");

  var upperCases = confirm("Are there uppercase letters in your password?");

  var special = confirm("Are there any special characters in your password?");

  // Minimum count for numbers, LowerCases, UpperCases & SpecialCharacters in the pawssword.
  var minimumCount = 0;


  // Empty minimums for Numbers, LowerCases, UpperCases & SpecialCharactersin the password.

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  **// Generation function**
  var functionArray = [
    function getNumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    function getLowerCases() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    function getUpperCases() {
      return +String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    function getSpecialCharacters() {
      return specialCharacters(Math.floor(Math.random() * specialCharacters.length));
    }

  ];

  // Checks to make sure user selected ok for all and uses empty minimums from above
  if (numbers === true) {
    minimumNumbers = functionArray[0];
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray[1];
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray[2];
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray[3];
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += functionArray[randomNumberPicked]();

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;
  
  return randomPasswordGenerated;
}