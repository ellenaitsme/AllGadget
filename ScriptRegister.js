function validateForm(event){
    var name = document.getElementById("name").value
    var female = document.getElementById("female").checked 
    var male = document.getElementById("male").checked
    var other = document.getElementById("other").checked
    var phonenumber = document.getElementById("phonenumber").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var checkbox = document.getElementById("checkbox").checked

    event.preventDefault()

    if(name == ""){
        alert("Username cannot be empty")
    }
    else if(!female && !male && !other){
        alert("Gender cannot be empty")
    }
    else if(phonenumber.charAt(0) != 0 || (phonenumber.length < 10 ||  phonenumber.length > 12)){
        alert("Phone number must be at least 10-12 digits and start with '0'")
    }
    else if(!email.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com")
    }
    else if(!checkPassword(password)){
        alert("Password must be at least 8 characters and is alphanumeric")
    }
    else if(!checkbox){
        alert("Terms and conditions must be agreed to")
    }
    else{
        alert("You have succesfully registered")
    }

}

function checkPassword(password){
    if(password.length < 8){
        return false
    }

    isAlpha = false
    isNum = false

    for(var i = 0; i < password.length; i++){
        if(isNaN(password[i])){
            isAlpha = true
        }
        else{
            isNum = true
        }

        if(isAlpha && isNum){
            return true
        }
    }

    return false
}