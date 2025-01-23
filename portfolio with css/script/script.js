function validateForm(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('messageError').innerHTML = "";

    if(name == ""){
        document.getElementById('nameError').innerHTML = "* Name is required";
        return false;
    }
    if(email == ""){
        document.getElementById('emailError').innerHTML = "* Email is required";
        return false;
    }
    if(message == ""){
        document.getElementById('messageError').innerHTML = "* Message is required";
        return false;
    }
    if(message.length < 10){
        document.getElementById('messageError').innerHTML = "* Message must be at least 10 characters";
        return false;
    }
  return true;
   
}

function sideBarOpen(){
    document.querySelector('.side-nav-links').style.display = "flex";
}
function sideBarClose(){
    document.querySelector('.side-nav-links').style.display = "none";
}