
let demoTutors = [
    ["Karim Ahmed", "karim@learnmate.demo", "Mathematics", "500 BDT/hour"],
    ["Nusrat Jahan", "nusrat@learnmate.demo", "English", "450 BDT/hour"],
    ["Rafi Islam", "rafi@learnmate.demo", "Programming", "650 BDT/hour"]
];
let demoBookings = [
    ["karim@learnmate.demo", "Algebra", "2026-11-20", "Pending"],
    ["nusrat@learnmate.demo", "English Grammar", "2026-11-22", "Accepted"]
];
let demoCourses = [
    ["Basic Mathematics", "Mathematics", "Karim Ahmed"],
    ["English Speaking", "English", "Nusrat Jahan"],
    ["HTML for Beginners", "Programming", "Rafi Islam"]
];
let demoProgress = [
    ["Basic Mathematics", 40],
    ["English Speaking", 75]
];

function showTutors() {
    let output = "";
    let select = '<option value="">Select Tutor</option>';
    for (let i = 0; i < demoTutors.length; i++) {
        output += "<div class='card'><h3>" + demoTutors[i][0] + "</h3><p>" + demoTutors[i][2] + "</p><p>" + demoTutors[i][3] + "</p></div>";
        select += '<option value="' + demoTutors[i][1] + '">' + demoTutors[i][0] + '</option>';
    }
    document.getElementById("tutorList").innerHTML = output;
    document.getElementById("tutorEmail").innerHTML = select;
}

function validateBooking() {
    let tutor = document.getElementById("tutorEmail").value;
    let topic = document.getElementById("topic").value;
    let date = document.getElementById("sessionDate").value;
    if (tutor == "") {
        document.getElementById("tutorEmailError").innerHTML = "Please choose a tutor";
    } else {
        document.getElementById("tutorEmailError").innerHTML = "";
    }
    if (topic == "") {
        document.getElementById("topicError").innerHTML = "Please enter a topic";
    } else {
        document.getElementById("topicError").innerHTML = "";
    }
    if (date == "") {
        document.getElementById("sessionDateError").innerHTML = "Please choose a date";
    } else {
        document.getElementById("sessionDateError").innerHTML = "";
    }
    if (tutor != "" && topic != "" && date != "") {
        document.getElementById("resultMessage").innerHTML = "Booking form completed! Demo only; no booking was saved.";
    } else {
        document.getElementById("resultMessage").innerHTML = "Please correct the errors above.";
    }
    return false;
}

function showBookings() {
    let output = "";
    for (let i = 0; i < demoBookings.length; i++) {
        output += "<tr><td>" + demoBookings[i][0] + "</td><td>" + demoBookings[i][1] + "</td><td>" + demoBookings[i][2] + "</td><td>" + demoBookings[i][3] + "</td><td><button onclick='cancelBooking(" + i + ")'>Cancel (Demo)</button></td></tr>";
    }
    document.getElementById("bookingRows").innerHTML = output;
}
function cancelBooking(i) {
    demoBookings[i][3] = "Cancelled (Demo)";
    showBookings();
}

function showCourses() {
    let output = "";
    for (let i = 0; i < demoCourses.length; i++) {
        output += "<div class='card'><h3>" + demoCourses[i][0] + "</h3><p>" + demoCourses[i][1] + " — " + demoCourses[i][2] + "</p><button onclick='enroll(" + i + ")'>Enroll (Demo)</button></div>";
    }
    document.getElementById("courseList").innerHTML = output;
    document.getElementById("enrollList").innerHTML = "Demo: enrollments are not saved.";
}
function enroll(i) {
    document.getElementById("enrollList").innerHTML = "Demo enrollment selected: " + demoCourses[i][0] + ". Not saved.";
}

function showProgress() {
    let output = "";
    for (let i = 0; i < demoProgress.length; i++) {
        output += "<tr><td>" + demoProgress[i][0] + "</td><td>" + demoProgress[i][1] + "%</td><td><button onclick='addProgress(" + i + ")'>+10% (Demo)</button></td></tr>";
    }
    document.getElementById("progressRows").innerHTML = output;
}
function addProgress(i) {
    if (demoProgress[i][1] < 100) {
        demoProgress[i][1] = demoProgress[i][1] + 10;
    }
    showProgress();
}

function validateProfile() {
    let nameOK = validName();
    let detail = document.getElementById("detail").value;
    if (detail == "") {
        document.getElementById("detailError").innerHTML = "Please enter your learning interest";
    } else {
        document.getElementById("detailError").innerHTML = "";
    }
    if (nameOK && detail != "") {
        document.getElementById("resultMessage").innerHTML = "Profile checked! Demo only; changes are not saved.";
    }
    return false;
}

function applyAsTutor() {
    let subject = document.getElementById("teachSubject").value;
    let rate = document.getElementById("teachRate").value;
    if (subject == "") {
        document.getElementById("teachSubjectError").innerHTML = "Please choose a subject";
    } else {
        document.getElementById("teachSubjectError").innerHTML = "";
    }
    if (rate == "" || Number(rate) < 100) {
        document.getElementById("teachRateError").innerHTML = "Enter a rate of at least 100 BDT";
    } else {
        document.getElementById("teachRateError").innerHTML = "";
    }
    if (subject != "" && rate != "" && Number(rate) >= 100) {
        document.getElementById("tutorApplicationStatus").innerHTML = "Demo application valid! No application is saved. Admin approval is also a demo.";
        document.getElementById("switchTutorButton").style.display = "inline-block";
    }
    return false;
}
function showTutorApplication() {
    document.getElementById("tutorApplicationStatus").innerHTML = "Demo: fill out the form to preview becoming a tutor. No account or approval is stored.";
}
function switchToTutor() {
    // Only a visual example. This is not a real role permission check.
    window.location.href = "../tutor/dashboard.html";
    return false;
}

window.onload = function() {
    let page = document.body.getAttribute("data-page");
    if (page == "dashboard") {
        document.getElementById("welcomeName").innerHTML = "Demo Student";
        document.getElementById("bookingCount").innerHTML = "Sample bookings: " + demoBookings.length;
        showTutorApplication();
    } else if (page == "browse-tutors") {
        showTutors();
    } else if (page == "my-bookings") {
        showBookings();
    } else if (page == "my-courses") {
        showCourses();
    } else if (page == "learning-progress") {
        showProgress();
    }
};
