var menuItems = [
    ["Dashboard", "dashboard.html"],
    ["Profile", "profile.html"],
    ["Edit Profile", "edit-profile.html"],
    ["User Management", "user-management.html"],
    ["User Details", "user-details.html"],
    ["Tutor Verification", "tutor-verification.html"],
    ["Tutor Details", "tutor-details.html"],
    ["Course Management", "course-management.html"],
    ["Category Management", "category-management.html"],
    ["Booking Management", "booking-management.html"],
    ["Session Management", "session-management.html"],
    ["Payment Management", "payment-management.html"],
    ["Transaction History", "transaction-history.html"],
    ["Review Management", "review-management.html"],
    ["Report Management", "report-management.html"],
    ["Notification Management", "notification-management.html"],
    ["Support Management", "support-management.html"],
    ["Settings", "settings.html"]
];

var currentPage = window.location.pathname.split("/").pop();

var sidebar = document.getElementById("sidebar");

if (sidebar) {
    var sidebarHTML = '<div class="logo">LearnMate</div>';
    sidebarHTML += '<p>Administration</p>';

    for (var i = 0; i < menuItems.length; i++) {
        var activeClass = "";

        if (menuItems[i][1] === currentPage) {
            activeClass = "active";
        }

        sidebarHTML += '<a class="' + activeClass + '" href="' +
            menuItems[i][1] + '">' + menuItems[i][0] + '</a>';
    }

    sidebar.innerHTML = sidebarHTML;
}

var topbar = document.getElementById("topbar");

if (topbar) {
    topbar.innerHTML =
        '<h2>Super Admin Panel</h2><span>Administrator</span>';
}

/* Search table rows */
var searchInputs = document.querySelectorAll(".search-box");

for (var s = 0; s < searchInputs.length; s++) {
    searchInputs[s].addEventListener("input", function () {
        var searchText = this.value.toLowerCase();
        var table = document.querySelector("table");

        if (table) {
            var rows = table.querySelectorAll("tbody tr");

            for (var r = 0; r < rows.length; r++) {
                var rowText = rows[r].innerText.toLowerCase();

                if (rowText.indexOf(searchText) > -1) {
                    rows[r].style.display = "";
                } else {
                    rows[r].style.display = "none";
                }
            }
        }
    });
}

/* Demo form submission */
var forms = document.querySelectorAll(".demo-form");

for (var f = 0; f < forms.length; f++) {
    forms[f].addEventListener("submit", function (event) {
        event.preventDefault();

        var message = this.querySelector(".message");

        if (message) {
            message.innerText = "Demo: Your changes have been submitted successfully.";
        }
    });
}

/* Demo action buttons */
var actionButtons = document.querySelectorAll("[data-action]");

for (var b = 0; b < actionButtons.length; b++) {
    actionButtons[b].addEventListener("click", function () {
        var action = this.getAttribute("data-action");

        alert("Demo action: " + action);
    });
}