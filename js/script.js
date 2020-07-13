// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

let submitButton = document.getElementById("submit");

let email = document.getElementById("email");

let fullname = document.getElementById("fullname");

let message = document.getElementById("message");

// Declare variable that will 
// store regular expression for email

let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).

function eventhandler(eve){

       
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors
 eve.preventDefault();
    let formContent = {};
    let misprint = [];
    
    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.

if(fullname.value !== ""){
    formContent['fullname'] = fullname.value;
}
    else{
        misprint.push({fullname : "full name is missing."});
    }

    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.


    if(email.value !== ""){
        if(regex.test(email.value)){
            formContent['email'] = email.value;
        }
        else{
            misprint.push({email: "Invalid email"});
        }
    }else{
       misprint.push({email: "Email is missing"});
       }
    

    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.

    if(message.value !== ""){
    formContent['message'] = message.value;
}
    else{
        misprint.push({message: "Message is missing"});
    }


    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.
    
    if(misprint.length > 0){
        console.log(misprint);
    }
    else{
        console.log(formContent);
        document.getElementById("fullname").value = "";
        
         document.getElementById("email").value = "";
        
         document.getElementById("message").value = "";
    }

// Close your function here
}
// Register your form to "click" event.
submitButton.addEventListener("click", eventhandler);