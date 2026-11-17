function validName() {
    let name = document.getElementById("fullName").value;
    let Error = document.getElementById("fullNameError");
    if (name == "") {
        Error.innerHTML = "* Please enter your name";
        return false;
    } else if (name.length < 3) {
        Error.innerHTML = "Name must have at least 3 characters";
        return false;
    } else {
        Error.innerHTML = "";
        return true;
    }
}

function validEmail() {
    let email = document.getElementById("email").value;
    let Error = document.getElementById("emailError");
    if (email == "") {
        Error.innerHTML = "* Please enter your email";
        return false;
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        Error.innerHTML = "Please enter a valid email address";
        return false;
    } else {
        Error.innerHTML = "";
        return true;
    }
}

function validPassword() {
    let password = document.getElementById("password").value;
    let Error = document.getElementById("passwordError");
    if (password == "") {
        Error.innerHTML = "* Please enter your password";
        return false;
    } else if (password.length < 6) {
        Error.innerHTML = "Password must have at least 6 characters";
        return false;
    } else {
        Error.innerHTML = "";
        return true;
    }
}

function validConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let Error = document.getElementById("confirmPasswordError");
    if (confirm == "") {
        Error.innerHTML = "* Please confirm your password";
        return false;
    } else if (password != confirm) {
        Error.innerHTML = "Passwords do not match";
        return false;
    } else {
        Error.innerHTML = "";
        return true;
    }
}



function validTerms() {
    let agree = document.getElementById("terms").checked;
    let Error = document.getElementById("termsError");
    if (agree == false) {
        Error.innerHTML = "* Please agree to the terms";
        return false;
    } else {
        Error.innerHTML = "";
        return true;
    }
}

function logout() {
    
    window.location.href = "login.html";
}


function validateRegistration() {
    let nameOK = validName();
    let emailOK = validEmail();
    let passwordOK = validPassword();
    let confirmOK = validConfirmPassword();
    let termsOK = validTerms();
    let code = document.getElementById("accessCode").value;
    let codeOK = true;
    if (code != "LMADMIN2026") {
        document.getElementById("accessCodeError").innerHTML = "Incorrect demo access code";
        codeOK = false;
    } else {
        document.getElementById("accessCodeError").innerHTML = "";
    }
    if (nameOK && emailOK && passwordOK && confirmOK && termsOK && codeOK) {
        document.getElementById("resultMessage").innerHTML = "Registration form is valid!no account was saved.";
    } else {
        document.getElementById("resultMessage").innerHTML = "Please correct the errors above.";
    }
    return false; 
}

function validateLogin() {
    let emailOK = validEmail();
    let passwordOK = validPassword();
    if (emailOK && passwordOK) {
        document.getElementById("resultMessage").innerHTML = "Demo login successful. Opening dashboard...";
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("resultMessage").innerHTML = "Please correct the errors above.";
    }
    return false;
}
