// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  let results = "";

  //define length by using prompt. parseInt to turn string response into integer
  let length = parseInt(prompt("How many characters would you like your password to be? Please input a number between 8 and 128."))
    while((length < 8) || (length > 128) || (Number.isNaN(length)==true)){
      alert("You did not provide a proper value. Please input a number between 8 and 128.")
      length = parseInt(prompt("How many characters would you like your password to be? Please input a number between 8 and 128."))
    } //While the conditions length < 8, length > 128, or input is not a number are true, force user to make new input.

    let lowerCase = confirm("Would you like your password to contain lowercase letters?");
    let upperCase = confirm("Would you like your password to contain uppercase letters?");
    let numbers = confirm("Would you like your password to contain numbers?");
    let specialChar = confirm("would you like your password to contain special characters?");

    // If all prompts are answered negatively then the password cannot be generated, inform user and prompt again.
    while(lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
      alert("You must include at least one criteria in your password.")
      let lowerCase = confirm("Would you like your password to contain lowercase letters?");
      let upperCase = confirm("Would you like your password to contain uppercase letters?");
      let numbers = confirm("Would you like your password to contain numbers?");
      let specialChar = confirm("would you like your password to contain special characters?");
    }

    //arrays assigned by the prompts with corresponding content.
    let possibleChar=[];
    let lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let upperArray = lowerArray.map(function(x){ return x.toUpperCase(); })
    let numArray = ['0','1','2','3','4','5','6','7','8','9']
    let specArray = [ '!','#','$','%','&','()','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~']

    //if the lower case letter option was chosen, then the lowerCase array becomes a possibleChar
  if(lowerCase === true){
    possibleChar.push(lowerArray)
  }

  if(upperCase === true){
    possibleChar.push(upperArray)
  }

  if(numbers === true){
    possibleChar.push(numArray)
  }

  if(specialChar === true) {
    possibleChar.push(specArray)
  }

  for(var i=0;i<length;i++){
    var charSet = possibleChar[Math.floor(Math.random()*possibleChar.length)]
    var char = charSet[Math.floor(Math.random()*charSet.length)]
    result += char;
  }

  return result
  };

//Write password to #password input
function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

