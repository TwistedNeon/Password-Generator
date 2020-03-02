//Special Character Variables
var sCharsEvent = document.getElementById("state1").addEventListener("click",stateCheck1);
var sCharsCheck = document.getElementById("state1").checked;
var sCharsArray = ["!","@","#","$","%","&","_","-","*"];

//--------------------------------------------------------------------------------------------------------------------------

//Number Variables
var numbersEvent = document.getElementById("state2").addEventListener("click",stateCheck2);
var numbersCheck = document.getElementById("state2").checked;
var randomNum;

//----------------------------------------------------------------------------------------------------------------------------------------

//Lowercase Alphabet Variables
var lowerCaseEvent = document.getElementById("state3").addEventListener("click",stateCheck3);
var lowerCaseCheck = document.getElementById("state3").checked;
var alphabetLowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//------------------------------------------------------------------------------------------------------------

//Uppercase Alphabet Variables
var upperCaseEvent = document.getElementById("state4").addEventListener("click",stateCheck4);
var upperCaseCheck = document.getElementById("state4").checked;
var alphabetUpperArray = [];
//Make alphabet in Upper Case Letters
for(var i = 0; i < alphabetLowerArray.length; i++){
    alphabetUpperArray[i] = alphabetLowerArray[i].toUpperCase();
}

//--------------------------------------------------------------------------------------------------------------

//Variable for desired password length
var passwordCheck = document.getElementById("passNum").addEventListener("input",setPasswordLength);
var passwordLength;
//Set Password Length
function setPasswordLength(){
    passwordLength = document.getElementById("passNum").value;
}

//---------------------------------------------------------------------------------------------------------------------------

//Generate Password Button
var generatePasswordButton = document.getElementById("genPassBut").addEventListener("click",generatePassword);

//----------------------------------------------------------------------------------------------------------------------------------

//Set state of special chars
function stateCheck1(){
    if(sCharsCheck == true){
        // alert("yay");
        sCharsCheck = false;
    }
    else{
        // alert("yay");
        sCharsCheck = true;
    }
}

//Set state of number values
function stateCheck2(){
    if(numbersCheck == true){
        // alert("yay");
        numbersCheck = false;
    }
    else{
        // alert("yay");
        numbersCheck = true;
    }
}

//Set state of lower case letters
function stateCheck3(){
    if(lowerCaseCheck == true){
        // alert("yay");
        lowerCaseCheck = false;
    }
    else{
        // alert("yay");
        lowerCaseCheck = true;
    }
}

//Set state of upper case letters
function stateCheck4(){
    if(upperCaseCheck == true){
        // alert("yay");
        upperCaseCheck = false;
    }
    else{
        // alert("yay");
        upperCaseCheck = true;
    }
}

//Checks each indivdual state of sliders to generate password
function generatePassword(){
    //New password
    var newPassword = [];

    if(sCharsCheck == true && numbersCheck == true && lowerCaseCheck == true && upperCaseCheck == true){
        for(var i = 0; i < passwordLength; i++){
            randomNum = Math.round(Math.random() * 3);
            if(randomNum == 0){
                newPassword.push(sCharsArray[Math.round(Math.random() * (sCharsArray.length - 1))]);
            }
            if(randomNum == 1){
                newPassword.push(Math.round(Math.random() * 9));
            }
            if(randomNum == 2){
                newPassword.push(alphabetLowerArray[Math.round(Math.random() * (alphabetLowerArray.length - 1))]);
            }
            if(randomNum == 3){
                newPassword.push(alphabetUpperArray[Math.round(Math.random() * (alphabetUpperArray.length - 1))]);
            }
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == true && numbersCheck == false && lowerCaseCheck == true && upperCaseCheck == true){
        for(var i = 0; i < passwordLength; i++){
            randomNum = Math.round(Math.random() * 2);
            if(randomNum == 0){
                newPassword.push(sCharsArray[Math.round(Math.random() * (sCharsArray.length - 1))]);
            }
            if(randomNum == 1){
                newPassword.push(alphabetLowerArray[Math.round(Math.random() * (alphabetLowerArray.length - 1))]);
            }
            if(randomNum == 2){
                newPassword.push(alphabetUpperArray[Math.round(Math.random() * (alphabetUpperArray.length - 1))]);
            }
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == true && numbersCheck == true && lowerCaseCheck == false && upperCaseCheck == true){
        for(var i = 0; i < passwordLength; i++){
            randomNum = Math.round(Math.random() * 2);
            if(randomNum == 0){
                newPassword.push(sCharsArray[Math.round(Math.random() * (sCharsArray.length - 1))]);
            }
            if(randomNum == 1){
                newPassword.push(Math.round(Math.random() * 9));
            }
            if(randomNum == 2){
                newPassword.push(alphabetUpperArray[Math.round(Math.random() * (alphabetUpperArray.length - 1))]);
            }
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == true && numbersCheck == true && lowerCaseCheck == true && upperCaseCheck == false){
        for(var i = 0; i < passwordLength; i++){
            randomNum = Math.round(Math.random() * 2);
            if(randomNum == 0){
                newPassword.push(sCharsArray[Math.round(Math.random() * (sCharsArray.length - 1))]);
            }
            if(randomNum == 1){
                newPassword.push(Math.round(Math.random() * 9));
            }
            if(randomNum == 2){
                newPassword.push(alphabetLowerArray[Math.round(Math.random() * (alphabetLowerArray.length - 1))]);
            }
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == false && numbersCheck == true && lowerCaseCheck == true && upperCaseCheck == true){
        for(var i = 0; i < passwordLength; i++){
            randomNum = Math.round(Math.random() * 2);
            if(randomNum == 0){
                newPassword.push(Math.round(Math.random() * 9));
            }
            if(randomNum == 1){
                newPassword.push(alphabetLowerArray[Math.round(Math.random() * (alphabetLowerArray.length - 1))]);
            }
            if(randomNum == 2){
                newPassword.push(alphabetUpperArray[Math.round(Math.random() * (alphabetUpperArray.length - 1))]);
            }
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == false && numbersCheck == false && lowerCaseCheck == true && upperCaseCheck == true){
        for(var i = 0; i < passwordLength; i++){
            randomNum = Math.round(Math.random() * 1);
            if(randomNum == 0){
                newPassword.push(alphabetLowerArray[Math.round(Math.random() * (alphabetLowerArray.length - 1))]);
            }
            if(randomNum == 1){
                newPassword.push(alphabetUpperArray[Math.round(Math.random() * (alphabetUpperArray.length - 1))]);
            }
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == false && numbersCheck == true && lowerCaseCheck == false && upperCaseCheck == true){
        for(var i = 0; i < passwordLength; i++){
            randomNum = Math.round(Math.random() * 1);
            if(randomNum == 0){
                newPassword.push(Math.round(Math.random() * 9));
            }
            if(randomNum == 1){
                newPassword.push(alphabetUpperArray[Math.round(Math.random() * (alphabetUpperArray.length - 1))]);
            }
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == false && numbersCheck == true && lowerCaseCheck == true && upperCaseCheck == false){
        for(var i = 0; i < passwordLength; i++){
            randomNum = Math.round(Math.random() * 1);
            if(randomNum == 0){
                newPassword.push(Math.round(Math.random() * 9));
            }
            if(randomNum == 1){
                newPassword.push(alphabetLowerArray[Math.round(Math.random() * (alphabetLowerArray.length - 1))]);
            }
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == true && numbersCheck == false && lowerCaseCheck == false && upperCaseCheck == true){
        for(var i = 0; i < passwordLength; i++){
            randomNum = Math.round(Math.random() * 1);
            if(randomNum == 0){
                newPassword.push(sCharsArray[Math.round(Math.random() * (sCharsArray.length - 1))]);
            }
            if(randomNum == 1){
                newPassword.push(alphabetUpperArray[Math.round(Math.random() * (alphabetUpperArray.length - 1))]);
            }
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == true && numbersCheck == false && lowerCaseCheck == true && upperCaseCheck == false){
        for(var i = 0; i < passwordLength; i++){
            randomNum = Math.round(Math.random() * 1);
            if(randomNum == 0){
                newPassword.push(sCharsArray[Math.round(Math.random() * (sCharsArray.length - 1))]);
            }
            if(randomNum == 1){
                newPassword.push(alphabetLowerArray[Math.round(Math.random() * (alphabetLowerArray.length - 1))]);
            }
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }
    
    if(sCharsCheck == true && numbersCheck == false && lowerCaseCheck == false && upperCaseCheck == true){
        for(var i = 0; i < passwordLength; i++){
            randomNum = Math.round(Math.random() * 1);
            if(randomNum == 0){
                newPassword.push(sCharsArray[Math.round(Math.random() * (sCharsArray.length - 1))]);
            }
            if(randomNum == 1){
                newPassword.push(alphabetUpperArray[Math.round(Math.random() * (alphabetUpperArray.length - 1))]);
            }
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == true && numbersCheck == true && lowerCaseCheck == false && upperCaseCheck == false){
        for(var i = 0; i < passwordLength; i++){
            randomNum = Math.round(Math.random() * 1);
            if(randomNum == 0){
                newPassword.push(sCharsArray[Math.round(Math.random() * (sCharsArray.length - 1))]);
            }
            if(randomNum == 1){
                newPassword.push(Math.round(Math.random() * 9));
            }
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == true && numbersCheck == false && lowerCaseCheck == false && upperCaseCheck == false){
        for(var i = 0; i < passwordLength; i++){
            newPassword.push(sCharsArray[Math.round(Math.random() * (sCharsArray.length - 1))]);
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == false && numbersCheck == true && lowerCaseCheck == false && upperCaseCheck == false){
        for(var i = 0; i < passwordLength; i++){
            newPassword.push(Math.round(Math.random() * 9));
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == false && numbersCheck == false && lowerCaseCheck == true && upperCaseCheck == false){
        for(var i = 0; i < passwordLength; i++){
            newPassword.push(alphabetLowerArray[Math.round(Math.random() * (alphabetLowerArray.length - 1))]);
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == false && numbersCheck == false && lowerCaseCheck == false && upperCaseCheck == true){
        for(var i = 0; i < passwordLength; i++){
            newPassword.push(alphabetUpperArray[Math.round(Math.random() * (alphabetUpperArray.length - 1))]);
        }
        newPassword = newPassword.join("");
        document.getElementById("showPassword").innerHTML = newPassword;
    }

    if(sCharsCheck == false && numbersCheck == false && lowerCaseCheck == false && upperCaseCheck == false){
        document.getElementById("showPassword").innerHTML = "Cannot generate password because you have not selected parameters for generation!";
    }
}
