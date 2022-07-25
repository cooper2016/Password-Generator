// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function to return a random number
function randomNum(x,y){
  return Math.floor(Math.random()*(y-x)+x)
}

// Return a random item from list
function randomFromList(list){
  return list[randomNum(0, list.length)]
} 

function generatePassword(){
  var length = prompt("How many characters would you like in your password?");

  //Convert length string to number
  length = Number(length);

  //Check to see if length is 
  if(length < 8 || length > 128 ){
    alert("Password must be between 8 and 128");
    return "";
  }

  //Check to see if input is a number

  if(isNaN(length)){
    alert("Not a Number");
    return "";
  } 


  //Ask for character types
  var uppers = confirm("Would you like uppercase letters in your password?");
  var lowers = confirm("Would you like lowercase letter in your password?");
  var nums = confirm("Would you like numbers in your password?");
  var spec = confirm("Would you like special characters in your password?");

  //Check to make sure they have selected one char type
  if(uppers == false && lowers == false && nums == false && spec == false){
    return "";
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
  if (spec) {
    userChoice.push(special);
  }

  //Generate Password

  var genPassword = "";

  for (var i = 0; i < length; i++){
    var ranPassword = randomFromList(userChoice);
    var ranCharacter = randomFromList(ranPassword);
    genPassword += ranCharacter;
  }
  
  

  //Returns our password

  return genPassword;

 
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


