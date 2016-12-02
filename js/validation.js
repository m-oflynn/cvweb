//FUNCTION TO VALIDATE FORM
function validateForm() {
    
    var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|uk|ie)\b$/;
    //VARIABLES TO GET AND STORE USER INPUT
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;  
    
    //IF ALL FIELDS ARE EMPTY
    if(email=="" && name == "" && message == ""){
        //ALERT NO DATA
        alert("No data was entered");
        //RETURN FALSE
        return false;
    }
    //IF EMAIL FIELD IS EMPTY
    if(email == ""){
        //ALERT NO EMAIL ENTERED
        alert("No email was entered");
        //RETURN FALSE
        return false;
    }
    //IF NAME FIELD IS EMPTY   
    if(name == ""){
        alert("Please enter your name");
        return false;
    }
    //IF MESSAGE FIELD IS EMPTY
    if(message == ""){
        alert("Don't forget to enter your message");
        return false;
    }
    //IF EMAIL DOES NOT PASS REGEX TEST
    if(!emailRegex.test(email)){
       alert("This email is not valid");
       return false;
    }
    
    return true;
}