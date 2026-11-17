let demoUsers = [
  ["Kazi Nafisur Rahman Nafis", "nafis@learnmate.demo", "Mathematics"],
  ["Nusrat Jahan Toma", "toma@learnmate.demo", "English"],
  ["Sakib Haque Akanda", "sakib@learnmate.demo", "Programming"],
];
let demoTutors = [
  [
    "Kazi Nafisur Rahman Nafis",
    "nafis@learnmate.demo",
    "Mathematics",
    "Approved",
  ],
  ["Nusrat Jahan Toma", "toma@learnmate.demo", "English", "Pending"],
];
let demoCourses = [
  ["Basic Mathematics", "nafis@learnmate.demo", "Mathematics", "Active"],
  ["English Speaking", "toma@learnmate.demo", "English", "Active"],
];
let demoBookings = [
  [
    "nafis@learnmate.demo",
    "sakib@learnmate.demo",
    "Algebra",
    "2026-11-20",
    "Pending",
  ],
  [
    "toma@learnmate.demo",
    "nusrat@learnmate.demo",
    "Grammar",
    "2026-11-22",
    "Accepted",
  ],
];

function showUsers() {
  let output = "";
  for (let i = 0; i < demoUsers.length; i++) {
    output +=
      "<tr><td>" +
      demoUsers[i][0] +
      "</td><td>" +
      demoUsers[i][1] +
      "</td><td>" +
      demoUsers[i][2] +
      "</td><td><button onclick='deleteUser(" +
      i +
      ")'>Remove (Demo)</button></td></tr>";
  }
  document.getElementById("userRows").innerHTML = output;
}
function deleteUser(i) {
  demoUsers.splice(i, 1);
  showUsers();
}
function showTutors() {
  let output = "";
  for (let i = 0; i < demoTutors.length; i++) {
    output +=
      "<tr><td>" +
      demoTutors[i][0] +
      "</td><td>" +
      demoTutors[i][1] +
      "</td><td>" +
      demoTutors[i][2] +
      "</td><td>" +
      demoTutors[i][3] +
      "</td><td><button onclick='setVerified(" +
      i +
      ")'>Toggle Approval (Demo)</button></td></tr>";
  }
  document.getElementById("tutorRows").innerHTML = output;
}
function setVerified(i) {
  if (demoTutors[i][3] == "Approved") {
    demoTutors[i][3] = "Pending";
  } else {
    demoTutors[i][3] = "Approved";
  }
  showTutors();
}
function showCourses() {
  let output = "";
  for (let i = 0; i < demoCourses.length; i++) {
    output +=
      "<tr><td>" +
      demoCourses[i][0] +
      "</td><td>" +
      demoCourses[i][1] +
      "</td><td>" +
      demoCourses[i][2] +
      "</td><td>" +
      demoCourses[i][3] +
      "</td><td><button onclick='removeCourse(" +
      i +
      ")'>Remove (Demo)</button></td></tr>";
  }
  document.getElementById("courseRows").innerHTML = output;
}
function removeCourse(i) {
  demoCourses.splice(i, 1);
  showCourses();
}
function showBookings() {
  let output = "";
  for (let i = 0; i < demoBookings.length; i++) {
    output +=
      "<tr><td>" +
      demoBookings[i][0] +
      "</td><td>" +
      demoBookings[i][1] +
      "</td><td>" +
      demoBookings[i][2] +
      "</td><td>" +
      demoBookings[i][3] +
      "</td><td>" +
      demoBookings[i][4] +
      "</td><td><button onclick='closeBooking(" +
      i +
      ")'>Close (Demo)</button></td></tr>";
  }
  document.getElementById("bookingRows").innerHTML = output;
}
function closeBooking(i) {
  demoBookings[i][4] = "Closed (Demo)";
  showBookings();
}
function showReports() {
  let output =
    "<tr><td>Sample Students</td><td>" + demoUsers.length + "</td></tr>";
  output += "<tr><td>Sample Tutors</td><td>" + demoTutors.length + "</td></tr>";
  output +=
    "<tr><td>Sample Courses</td><td>" + demoCourses.length + "</td></tr>";
  output +=
    "<tr><td>Sample Bookings</td><td>" + demoBookings.length + "</td></tr>";
  document.getElementById("reportRows").innerHTML = output;
}
window.onload = function () {
  let page = document.body.getAttribute("data-page");
  if (page == "dashboard") {
    document.getElementById("welcomeName").innerHTML = "Demo Admin";
    document.getElementById("userCount").innerHTML =
      "Sample students: " + demoUsers.length;
  } else if (page == "user-management") {
    showUsers();
  } else if (page == "tutor-verification") {
    showTutors();
  } else if (page == "course-management") {
    showCourses();
  } else if (page == "booking-management") {
    showBookings();
  } else if (page == "reports") {
    showReports();
  }
};
