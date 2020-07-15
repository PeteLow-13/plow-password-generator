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
     //user selects length
     var characterAmount = prompt("How many characters would you like(8-128)?");
        //if no length selected prompted again
        while (characterAmount < 8 || characterAmount > 128){
            characterAmount = prompt("Reminder: the number of characters must be between 8-128");
        }

        console.log(characterAmount)
        //user choses character types for array 
     var collection = [];
        while ( collection.length <= 0){
          confirm("You must chose at least 1 character type");
         

        
        var hasUpperCase = confirm("Would you like upper case letter(s)?");
         console.log(hasUpperCase)

        var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            if (hasUpperCase == true){
                collection.push(...upperCase);
            }
        
        var hasLowerCase = confirm("Would you like lower case letter(s)?");
        console.log(hasLowerCase)

        var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            if (hasLowerCase == true){
                collection.push(...lowerCase);
            }

        var hasNumber = confirm("Would you like number(s)");
        console.log(hasNumber) 
        
        var number =["1","2","3","4","5","6","7","8","9","0"];
            if (hasNumber == true){
                collection.push(...number);
            }

        var hasSpecialChar = confirm("Would you like special character(s)");
        console.log(hasSpecialChar)

        var specialChar = ["!","@","#","$","%","^","&","*","(",")","_","+"];
            if (hasSpecialChar == true){
                collection.push(...specialChar);
            }
        
        }
        console.log(collection)
        // while ( collection.length <= 0){
        //     confirm("You must chose at least 1 character type");
            

        //    }
        
    
        // while ( collection < 0 ){
        //     collection = prompt("You must chose at least 1 character type");
        // }
        
        let password = "";

         for(var i = 0; i < characterAmount; i++){
            password = password + collection[Math.floor(Math.random() * Math.floor(collection.length))];

        }
        
        
        
        console.log(password)
    
        document.querySelector("#pwdDisplay").value = password;
 
       
        var copyButton = document.querySelector("#copy")
        copyButton.addEventListener("click", copyPwd);

        
        function copyPwd() {
            
            var pwdDisplay = document.getElementById("pwdDisplay");
            pwdDisplay.select();

            document.execCommand("copy");
            alert("Copied the password: " + pwdDisplay.value); 
            
            
        }
        
    }     
    