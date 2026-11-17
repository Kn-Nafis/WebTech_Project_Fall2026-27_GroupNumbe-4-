// TUTOR PORTAL: all information below is SAMPLE DATA (not saved).
let demoAvailability = [["Monday", "10:00", "12:00"], ["Wednesday", "15:00", "17:00"]];
let demoCourses = [["Basic Mathematics", "Mathematics", "Introduction to algebra"], ["HTML Basics", "Programming", "Learn basic HTML tags"]];
let demoSessions = [["student1@learnmate.demo", "Algebra", "2026-11-20", "Pending"], ["student2@learnmate.demo", "HTML", "2026-11-22", "Pending"]];
let demoStudents = [["student1@learnmate.demo", "Basic Mathematics", "40%"], ["student2@learnmate.demo", "HTML Basics", "60%"]];

function validateAvailability() {
    let day = document.getElementById("day").value;
    let start = document.getElementById("startTime").value;
    let end = document.getElementById("endTime").value;
    if (day == "") {
        document.getElementById("dayError").innerHTML = "Please select a day";
    } else { document.getElementById("dayError").innerHTML = ""; }
    if (start == "") {
        document.getElementById("startTimeError").innerHTML = "Please enter start time";
    } else { document.getElementById("startTimeError").innerHTML = ""; }
    if (end == "" || end <= start) {
        document.getElementById("endTimeError").innerHTML = "End time must be after start time";
    } else { document.getElementById("endTimeError").innerHTML = ""; }
    if (day != "" && start != "" && end > start) {
        document.getElementById("resultMessage").innerHTML = "Availability checked! Demo only; not saved.";
    }
    return false;
}
function showAvailability() {
    let output = "";
    for (let i = 0; i < demoAvailability.length; i++) {
        output += "<tr><td>" + demoAvailability[i][0] + "</td><td>" + demoAvailability[i][1] + "</td><td>" + demoAvailability[i][2] + "</td></tr>";
    }
    document.getElementById("availabilityRows").innerHTML = output;
}
function validateCourse() {
    let title = document.getElementById("courseTitle").value;
    let subject = document.getElementById("courseSubject").value;
    let description = document.getElementById("courseDescription").value;
    if (title == "") {
        document.getElementById("courseTitleError").innerHTML = "Please enter course title";
    } else { document.getElementById("courseTitleError").innerHTML = ""; }
    if (subject == "") {
        document.getElementById("courseSubjectError").innerHTML = "Please select subject";
    } else { document.getElementById("courseSubjectError").innerHTML = ""; }
    if (description == "") {
        document.getElementById("courseDescriptionError").innerHTML = "Please enter description";
    } else { document.getElementById("courseDescriptionError").innerHTML = ""; }
    if (title != "" && subject != "" && description != "") {
        document.getElementById("resultMessage").innerHTML = "Course form valid! Demo only; course is not saved.";
    }
    return false;
}
function showCourses() {
    let output = "";
    for (let i = 0; i < demoCourses.length; i++) {
        output += "<tr><td>" + demoCourses[i][0] + "</td><td>" + demoCourses[i][1] + "</td><td>" + demoCourses[i][2] + "</td></tr>";
    }
    document.getElementById("courseRows").innerHTML = output;
}
function showSessions() {
    let output = "";
    for (let i = 0; i < demoSessions.length; i++) {
        output += "<tr><td>" + demoSessions[i][0] + "</td><td>" + demoSessions[i][1] + "</td><td>" + demoSessions[i][2] + "</td><td>" + demoSessions[i][3] + "</td><td><button onclick='changeStatus(" + i + ", 1)'>Accept</button> <button onclick='changeStatus(" + i + ", 2)'>Reject</button></td></tr>";
    }
    document.getElementById("sessionRows").innerHTML = output;
}
function changeStatus(i, status) {
    if (status == 1) {
        demoSessions[i][3] = "Accepted (Demo)";
    } else {
        demoSessions[i][3] = "Rejected (Demo)";
    }
    showSessions();
}
function showStudents() {
    let output = "";
    for (let i = 0; i < demoStudents.length; i++) {
        output += "<tr><td>" + demoStudents[i][0] + "</td><td>" + demoStudents[i][1] + "</td><td>" + demoStudents[i][2] + "</td></tr>";
    }
    document.getElementById("studentsRows").innerHTML = output;
}
function validateProfile() {
    let nameOK = validName();
    let detail = document.getElementById("detail").value;
    if (detail == "") {
        document.getElementById("detailError").innerHTML = "Please enter your subject";
    } else { document.getElementById("detailError").innerHTML = ""; }
    if (nameOK && detail != "") {
        document.getElementById("resultMessage").innerHTML = "Profile checked! Demo only; not saved.";
    }
    return false;
}
function showStudentSwitch() {
    // A simple role-switch demonstration, not a permission system.
    document.getElementById("studentSwitchBox").style.display = "block";
}
function switchToStudent() {
    window.location.href = "../student/dashboard.html";
    return false;
}
window.onload = function() {
    let page = document.body.getAttribute("data-page");
    if (page == "dashboard") {
        document.getElementById("welcomeName").innerHTML = "Demo Tutor";
        showStudentSwitch();
    } else if (page == "availability") {
        showAvailability();
    } else if (page == "courses") {
        showCourses();
    } else if (page == "sessions") {
        showSessions();
    } else if (page == "students") {
        showStudents();
    }
};
