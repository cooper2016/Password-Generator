// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var length = prompt("How many characters would you like in your password?");

  //Convert length string to number
  length = Number(length);

  //Ask for character types
  var uppers = confirm("Would you like uppercase letters in your password?");
  var lowers = confirm("Would you like lowercase letter in your password?");
  var nums = confirm("Would you like numbers in your password?");
  var spec = confirm("Would you like special characters in your password?");

  //Check to make sure they have selected one char type
  if(uppers == false && lowers == false && nums == false && spec == false){
    return;
  } 

  //Arrays of character types
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

  //Array of users choices
  var userChoice = [];

  if (lowers){
    userChoice.push(lowerCase);
  }

  if (uppers){
    userChoice.push(upperCase);
  }
  if (nums){
    userChoice.push(numbers);
  }
  if (special) {
    userChoice.push(special);
  }






}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


