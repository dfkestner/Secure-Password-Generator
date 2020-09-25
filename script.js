var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword(); 
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
function generatePassword() {
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "0123456789";
    var special = "@%+\/'!#$^?:,)(}{][~-_.";
    var cLower = confirm("Would you like to include lowercase characters in your password?");        
    var cUpper = confirm("Would you like to include uppercase characters in your password?");
    var cNumber = confirm("Would you like to include numbers in your password?");        
    var cSpecial = confirm("Would you like to include special characters in your password?");
        if (cLower === false && cUpper === false && cNumber === false & cSpecial === false) {            
            alert("You must select at least one character type.");
            cLower = confirm("Would you like to include lowercase characters in your password?");
            cUpper = confirm("Would you like to include uppercase characters in your password?");            
            cNumber = confirm("Would you like to include numbers in your password?");
            cSpecial = confirm("Would you like to include special characters in your password?");            
            }
    var length = parseInt(prompt("How long would you like your password to be? (Must be between 8 and 128 characters"));           
        if (length > 128 || length < 8) {
            alert("Password must be between 8 and 128 characters.");            
            length = parseInt(prompt("How long would you like your password to be?"));            
            }
    var characters = "" 
        if (cLower) {
            characters += lower
        }
        if (cUpper) {
            characters += upper
        }
        if (cNumber) {
            characters += number
        }
        if (cSpecial) {
            characters += special
        }
    var password = ""
        for (var i = 0; i < length; i++) {
            password += characters[Math.floor(Math.random() * characters.length)];
        }
        return password;
}
generateBtn.addEventListener("click", writePassword);