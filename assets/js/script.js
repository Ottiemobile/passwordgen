// Assignment code here


var numStr = "0123456789";
var numArray = numStr.split("");
var uppStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppArray = uppStr.split("");
var lowStr = "abcdefghijklmnopqrstuvwxyz";
var lowArray = lowStr.split("");
var speStr = '!@#$%^&*()"?><\\|{}[]?/\'=+-_';
var speArray = speStr.split("");


var randPassFunArr = []
var passFinal = []


//this is the main function to generate the passwoord
function generatePassword() {


  var confirmNum;
  var confirmLow;
  var confirmUpp;
  var confirmSpe;

  var passwordText =document.querySelector("#password");
  if (passwordText != null){
    passwordText.value = "";
    passFinal = [];
    randPassFunArr = [];
  }


  function data(){
  //this will ask for the length


  //this will ask the user if he/she wants numbers
  confirmNum = confirm("Would you like numbers?");
  if (confirmNum === true) {
    randPassFunArr.push(confirmNum);
    console.log("numbers = ", confirmNum);
  }

  //this will ask the user if he/she wants lowercase letters
  confirmLow = confirm("Would you like lowercase letters?");
  if (confirmLow === true) {
    randPassFunArr.push(confirmLow);
    console.log("lower = ", confirmLow);
  }

  //this will ask the user if he/she wants uppercase letters
  confirmUpp = confirm("Would you like uppercase letters?");
  if (confirmUpp === true) {
    randPassFunArr.push(confirmUpp);
    console.log("upper = ", confirmUpp);

  }

  //this will ask the user if he/she wants special characters
  confirmSpe = confirm("would you like special characters?");
  if (confirmSpe === true) {
    randPassFunArr.push(confirmSpe);
    console.log("special = ", confirmSpe);
  }
 


  
}
var passLength = window.prompt("From a length of 8 to 128, how many characters are you wanting in your password?");
console.log("Char Amount =", passLength);
if (isNaN(length)==true || passLength < 8 || passLength > 128){
  alert("Error: please input an appropriate number from 8 through 128");
  generatePassword();
} 
else {
  data();
} 

if (confirmNum === false && confirmLow == false && confirmUpp === false && confirmSpe === false){
  alert("Error: please select at least one type of character for your password.")
  generatePassword();
}


  


   while (passFinal.length < passLength){
   // use this variable to if number is true, get random number from number array and concat to passFinal
      if (randPassFunArr[0] === true && passFinal.length < passLength) {
        passFinal.push(numArray[Math.floor(Math.random() * 10)]);
        console.log(passFinal);
      }


  // repeat for lower
    if (randPassFunArr[1] === true && passFinal.length < passLength) {
        passFinal.push(lowArray[Math.floor(Math.random() * 26)]);
        console.log(passFinal);
      }


  // repeat for upper
      if (randPassFunArr[2] === true && passFinal.length < passLength) {
        passFinal.push(uppArray[Math.floor(Math.random() * 26)]);
        console.log(passFinal);
      }

  // repeat for special
      if (randPassFunArr[3] === true && passFinal.length < passLength) {
        passFinal.push(speArray[Math.floor(Math.random() * 27)]);
        console.log(passFinal.join(""));
  }
  // apply the remaining characters to the password's length to passFinal 
//   return passFinal
  }


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("test");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = passFinal.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
