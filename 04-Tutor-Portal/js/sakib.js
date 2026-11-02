function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");

    if (sidebar) {
        sidebar.classList.toggle("show");
    }
}

function searchTable(inputId, tableId) {
    var input = document.getElementById(inputId);
    var table = document.getElementById(tableId);

    if (!input || !table) {
        return;
    }

    input.addEventListener("keyup", function () {
        var searchValue = input.value.toLowerCase();
        var rows = table.getElementsByTagName("tr");

        for (var i = 1; i < rows.length; i++) {
            var rowText = rows[i].innerText.toLowerCase();

            if (rowText.indexOf(searchValue) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    });
}

function handleDemoForm(formId, message) {
    var form = document.getElementById(formId);

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (form.checkValidity()) {
            alert(message);
            form.reset();
        } else {
            form.reportValidity();
        }
    });
}

function showMessage(message) {
    alert(message);
}

function setupTutorPage() {
    var currentPage = window.location.pathname.split("/").pop();
    var links = document.querySelectorAll(".sidebar a");

    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href") === currentPage) {
            links[i].classList.add("active");
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setupTutorPage();
});