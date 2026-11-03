console.log("JS Connected");

/* General settings form */
function collect_settings() {
  let Name = validatePlatformName();
  let Email = validateSupportEmail();
  let Message = document.getElementById("SettingsMessage");

  if (Name == true && Email == true) {
    Message.textContent = " Settings are valid. No changes have been saved.";
  }
   else {
    Message.textContent = "Please correct the errors above.";
  }

  return false;
}

function validatePlatformName() {
  let Name = document.getElementById("platformName").value.trim();
  let Error = document.getElementById("PlatformNameError");

  if (Name == "") {
    Error.textContent = "Please enter the platform name.";
    return false;
  } 
  else {
    Error.textContent = "";
    return true;
  }
}

function validateSupportEmail() {
  let Email = document.getElementById("supportEmail").value.trim();
  let Error = document.getElementById("SupportEmailError");
  let RegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (Email == "") {
    Error.textContent = "Please enter the support email.";
    return false;
  } 
  else if (!RegularExpression.test(Email)) {
    Error.textContent = "Please enter a valid email address.";
    return false;
  } 
  else {
    Error.textContent = "";
    return true;
  }
}

/* Password form */
function collect_password() {
  let Current = validateCurrentPassword();
  let New = validateNewPassword();
  let Confirm = validateConfirmPassword();
  let Message = document.getElementById("PasswordMessage");

  if (Current == true && New == true && Confirm == true) {
    Message.textContent =
      "Demo: Password fields are valid. The password has not been changed.";
  } 
  else {
    Message.textContent = "Please correct the errors above.";
  }

  return false;
}

function validateCurrentPassword() {
  let Password = document.getElementById("currentPassword").value;
  let Error = document.getElementById("CurrentPasswordError");

  if (Password == "") {
    Error.textContent = "Please enter your current password.";
    return false;
  } 
  else {
    Error.textContent = "";
    return true;
  }
}

function validateNewPassword() {
  let Password = document.getElementById("newPassword").value;
  let Error = document.getElementById("NewPasswordError");

  if (Password == "") {
    Error.textContent = "Please enter a new password.";
    return false;
  } 
  else {
    Error.textContent = "";
    return true;
  }
}

function validateConfirmPassword() {
  let Password = document.getElementById("newPassword").value;
  let Confirm = document.getElementById("confirmPassword").value;
  let Error = document.getElementById("ConfirmPasswordError");

  if (Confirm == "") {
    Error.textContent = "Please confirm your new password.";
    return false;
  } 
  else if (Password !== Confirm) {
    Error.textContent = "New password and confirm password must match.";
    return false;
  }
   else {
    Error.textContent = "";
    return true;
  }
}

/* Other existing demo forms */
function submitDemoForm(event) {
  event.preventDefault();

  let Message = this.querySelector(".message");

  if (Message) {
    Message.textContent = "Demo: Form submitted. No changes have been saved.";
  }
}

let Forms = document.querySelectorAll(".demo-form");

for (let i = 0; i < Forms.length; i++) {
  Forms[i].addEventListener("submit", submitDemoForm);
}

/* Existing demo action buttons */
function showDemoAction() {
  let Action = this.getAttribute("data-action");
  alert("Demo action: " + Action);
}

let Buttons = document.querySelectorAll("[data-action]");

for (let i = 0; i < Buttons.length; i++) {
  Buttons[i].addEventListener("click", showDemoAction);
}

/* Search filter */
function searchTable() {
  let Search = this.value.toLowerCase();
  let Rows = document.querySelectorAll("table tbody tr");

  for (let i = 0; i < Rows.length; i++) {
    let Text = Rows[i].textContent.toLowerCase();

    if (Text.indexOf(Search) !== -1) {
      Rows[i].style.display = "";
    } 
    else {
      Rows[i].style.display = "none";
    }
  }
}

let SearchBoxes = document.querySelectorAll(".search-box");

for (let i = 0; i < SearchBoxes.length; i++) {
  SearchBoxes[i].addEventListener("input", searchTable);
}
