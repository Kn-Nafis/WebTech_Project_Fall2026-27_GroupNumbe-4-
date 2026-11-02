document.addEventListener("DOMContentLoaded", function () {
 
    var loginForm = document.getElementById("loginForm");
 
    if (loginForm) {
 
        loginForm.addEventListener("submit", function (event) {
 
            event.preventDefault();
 
            var email = document.getElementById("loginEmail").value.trim().toLowerCase();
            var password = document.getElementById("loginPassword").value;
            var message = document.getElementById("loginMessage");
 
            var accounts = [
                {
                    email: "student@gmail.com",
                    password: "12345678",
                    role: "student",
                    destination: "../02-Student-Portal/index.html"
                },
 
                {
                    email: "teacher@gmail.com",
                    password: "12345678",
                    role: "teacher",
                    destination: "../04-Tutor-Portal/index.html"
                },
 
                {
                    email: "admin@gmail.com",
                    password: "12345678",
                    role: "admin",
                    destination: "../03-Super-Admin/dashboard.html"
                }
            ];
 
            var loggedInUser = null;
 
            for (var i = 0; i < accounts.length; i++) {
 
                if (
                    email === accounts[i].email &&
                    password === accounts[i].password
                ) {
                    loggedInUser = accounts[i];
                    break;
                }
 
            }
 
            if (loggedInUser !== null) {
 
                var userData = {
                    email: loggedInUser.email,
                    role: loggedInUser.role
                };
 
                sessionStorage.setItem(
                    "learnmateUser",
                    JSON.stringify(userData)
                );
 
                message.style.color = "green";
                message.textContent = "Login successful! Redirecting...";
 
                window.location.href = loggedInUser.destination;
 
            } else {
 
                message.style.color = "red";
                message.textContent = "Invalid email or password!";
 
            }
 
        });
 
    }
 
});