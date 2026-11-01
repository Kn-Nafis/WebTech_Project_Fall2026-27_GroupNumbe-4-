
var loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        var email = document.getElementById("loginEmail").value;
        var password = document.getElementById("loginPassword").value;
        var message = document.getElementById("loginMessage");

        if (email === "" || password === "") {
            message.innerHTML = "Please fill in all fields.";
        } else {
            message.innerHTML =
                "Demo login submitted. Real authentication is not connected.";
        }

    });

}


var registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        var name = document.getElementById("fullName").value;
        var email = document.getElementById("registerEmail").value;
        var role = document.getElementById("registerRole").value;
        var password = document.getElementById("registerPassword").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        var message = document.getElementById("registerMessage");

        if (name === "" || email === "" || role === "" ||
            password === "" || confirmPassword === "") {

            message.innerHTML = "Please complete all fields.";
            return;
        }

        if (password.length < 6) {
            message.innerHTML = "Password must contain at least 6 characters.";
            return;
        }

        if (password !== confirmPassword) {
            message.innerHTML = "Passwords do not match.";
            return;
        }

        message.innerHTML =
            "Registration submitted. Real account creation is not connected.";

    });

}


var forgotForm = document.getElementById("forgotForm");

if (forgotForm) {

    forgotForm.addEventListener("submit", function(event) {

        event.preventDefault();

        var email = document.getElementById("forgotEmail").value;
        var message = document.getElementById("forgotMessage");

        if (email === "") {
            message.innerHTML = "Please enter your email address.";
        } else {
            message.innerHTML =
                "Recovery demo submitted. No email has been sent.";
        }

    });

}


var resetForm = document.getElementById("resetForm");

if (resetForm) {

    resetForm.addEventListener("submit", function(event) {

        event.preventDefault();

        var password = document.getElementById("newPassword").value;
        var confirmPassword = document.getElementById("repeatPassword").value;
        var message = document.getElementById("resetMessage");

        if (password.length < 6) {
            message.innerHTML =
                "Password must contain at least 6 characters.";
            return;
        }

        if (password !== confirmPassword) {
            message.innerHTML = "Passwords do not match.";
            return;
        }

        message.innerHTML =
            "Password reset demo submitted. No password was changed.";

    });

}
