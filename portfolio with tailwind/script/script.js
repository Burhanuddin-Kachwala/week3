function validateForm(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    document.getElementById('nameError').style.color = "red";
    document.getElementById('emailError').style.color = "red";
    document.getElementById('messageError').style.color = "red";

    if(name == ""){
        
       document.getElementById('nameError').innerHTML = "* Name is required";
       return false;
    }
    
    if(email == ""){
        console.log("Email is required");
        document.getElementById('emailError').innerHTML = "* Email is required";
        return false;
    }
    if (message == ""){
        document.getElementById('messageError').innerHTML = "* Message is required";
        return false;
    }
}