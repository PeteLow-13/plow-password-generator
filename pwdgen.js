// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page




var passwordButton = document.querySelector("#generate")
    passwordButton.addEventListener("click", generatePwd);


 function generatePwd(){
     var characterAmount = prompt("How many characters would you like(8-128)?");
        console.log(characterAmount)


        var hasUpperCase = confirm("Would you like upper case letter(s)?");
        console.log(hasUpperCase)

        var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        console.log(upperCase)
        
        var hasLowerCase = confirm("Would you like lower case letter(s)?");
        console.log(hasLowerCase)

        var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        console.log(lowerCase)

        var hasNumber = confirm("Would you like number(s)");
        console.log(hasNumber) 
        
        var number =["1","2","3","4","5","6","7","8","9","0"];
        console.log(number)

        var hasSpecialChar = confirm("Would you like special character(s)");
        console.log(hasSpecialChar)

        var specialChar = ["!","@","#","$","%","^","&","*","(",")","_","+"];
        console.log(specialChar)


        var collection = [];
        if (hasUpperCase == true){
            collection.push(...upperCase);
            console.log(collection)
        }
        if (hasLowerCase == true){
            collection.push(...lowerCase);
            console.log(collection)
        }
        if (hasNumber == true){
            collection.push(...number);
            console.log(collection)
        }
        if (hasSpecialChar == true){
            collection.push(...specialChar);
            console.log(collection)
        }
        
        var password = ""

        for(var i = 0; i < characterAmount; i++){
                 //password = password + collection.charAt(Math.floor(Math.random()* Math.floor(characterAmount -1)));
                password = password + (Math.floor(Math.random() * (characterAmount -1)));
            }
                 
        
        console.log(password)


        document.querySelector("#pwdDisplay").value = password;
        console.log(password)

        // var pwdDisplay = password  
        // document.querySelector()

    }

  
    // for(var i = 0; i <= complexity; i++){
    //     password = password + values.charAt(Math.floor(Math.random()* Math.floor(values.length -1)));
    // }
    // //add pwd to display
    // document.getelementById("pwdDisplay").value=password;




