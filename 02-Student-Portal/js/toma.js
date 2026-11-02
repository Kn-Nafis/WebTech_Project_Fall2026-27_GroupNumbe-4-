
console.log("LearnMate Student Portal loaded.");


// SEARCH TABLE ROWS AND CARDS

var searchInputs = document.querySelectorAll(".student-search");

for (var i = 0; i < searchInputs.length; i++) {

    searchInputs[i].addEventListener("input", function() {

        var searchText = this.value.toLowerCase();
        var target = this.getAttribute("data-target");
        var items = document.querySelectorAll(target);

        for (var j = 0; j < items.length; j++) {

            var itemText = items[j].innerText.toLowerCase();

            if (itemText.includes(searchText)) {
                items[j].style.display = "";
            } else {
                items[j].style.display = "none";
            }

        }

    });

}


// DEMO FORM SUBMISSION

var studentForms = document.querySelectorAll(".student-demo-form");

for (var i = 0; i < studentForms.length; i++) {

    studentForms[i].addEventListener("submit", function(event) {

        event.preventDefault();

        var message = this.querySelector(".form-message");

        if (message) {
            message.innerHTML =
                "Your form was submitted in this frontend demo. No server data was saved.";
        }

        this.reset();

    });

}


// BOOKING BUTTONS

var bookingButtons = document.querySelectorAll(".booking-demo-button");

for (var i = 0; i < bookingButtons.length; i++) {

    bookingButtons[i].addEventListener("click", function() {

        alert("This is a booking demonstration. A backend is required to confirm a real booking.");

    });

}


// CANCEL BUTTONS

var cancelButtons = document.querySelectorAll(".cancel-demo-button");

for (var i = 0; i < cancelButtons.length; i++) {

    cancelButtons[i].addEventListener("click", function() {

        var confirmCancel = confirm("Do you want to cancel this demo item?");

        if (confirmCancel) {

            var row = this.closest("tr");

            if (row) {
                row.remove();
            }

        }

    });

}


// REVIEW FORM

var reviewForm = document.getElementById("reviewForm");

if (reviewForm) {

    reviewForm.addEventListener("submit", function(event) {

        event.preventDefault();

        var review = document.getElementById("reviewText").value;
        var rating = document.getElementById("reviewRating").value;
        var message = document.getElementById("reviewMessage");

        if (review === "" || rating === "") {
            message.innerHTML = "Please complete the review.";
            return;
        }

        message.innerHTML =
            "Your review was submitted in this frontend demonstration.";

        this.reset();

    });

}


// PROFILE FORM

var profileForm = document.getElementById("profileForm");

if (profileForm) {

    profileForm.addEventListener("submit", function(event) {

        event.preventDefault();

        var message = document.getElementById("profileMessage");

        message.innerHTML =
            "Profile changes demonstrated successfully. They are not saved to a server.";

    });

}


// SETTINGS FORM

var settingsForm = document.getElementById("settingsForm");

if (settingsForm) {

    settingsForm.addEventListener("submit", function(event) {

        event.preventDefault();

        var message = document.getElementById("settingsMessage");

        message.innerHTML =
            "Settings submitted in frontend demo. No permanent changes were saved.";

    });

}


// MESSAGE FORM

var messageForm = document.getElementById("messageForm");

if (messageForm) {

    messageForm.addEventListener("submit", function(event) {

        event.preventDefault();

        var text = document.getElementById("messageText").value;
        var messageList = document.getElementById("messageList");

        if (text.trim() === "") {
            return;
        }

        var newMessage = document.createElement("div");

        newMessage.className = "message-item";
        newMessage.innerHTML = "<strong>You</strong><p></p>";

        newMessage.querySelector("p").textContent = text;

        messageList.appendChild(newMessage);

        this.reset();

    });

}


// FILTER BY SELECT

var studentFilters = document.querySelectorAll(".student-filter");

for (var i = 0; i < studentFilters.length; i++) {

    studentFilters[i].addEventListener("change", function() {

        var target = this.getAttribute("data-target");
        var value = this.value.toLowerCase();
        var items = document.querySelectorAll(target);

        for (var j = 0; j < items.length; j++) {

            var itemStatus = items[j].getAttribute("data-status");

            if (value === "all" || itemStatus === value) {
                items[j].style.display = "";
            } else {
                items[j].style.display = "none";
            }

        }

    });

}
