// LearnMate MIDTERM DEMO: This project does not save any information.
// Validation uses the same basic DOM methods as the course slides.

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

function validChoice(id, errorId) {
    let choice = document.getElementById(id).value;
    let Error = document.getElementById(errorId);
    if (choice == "") {
        Error.innerHTML = "* Please select an option";
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
    // Demo only: there is no stored login session.
    window.location.href = "login.html";
}

// Registration form — checks each field, then shows a demo message.
function validateRegistration() {
    let nameOK = validName();
    let emailOK = validEmail();
    let passwordOK = validPassword();
    let confirmOK = validConfirmPassword();
    let termsOK = validTerms();
    let choiceOK = validChoice("subject", "subjectError");
    let rate = document.getElementById("rate").value;
    let rateOK = true;
    if (rate == "" || Number(rate) < 100) {
        document.getElementById("rateError").innerHTML = "Enter a rate of at least 100 BDT";
        rateOK = false;
    } else {
        document.getElementById("rateError").innerHTML = "";
    }
    if (nameOK && emailOK && passwordOK && confirmOK && termsOK && choiceOK && rateOK) {
        document.getElementById("resultMessage").innerHTML = "Registration form is valid! DEMO ONLY: no account was saved.";
    } else {
        document.getElementById("resultMessage").innerHTML = "Please correct the errors above.";
    }
    return false; // Do not submit or refresh this demo page.
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
