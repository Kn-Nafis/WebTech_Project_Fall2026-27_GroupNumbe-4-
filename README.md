# LearnMate — Learn Better, Together

> A simple tutoring-management platform front-end with three roles: **Student**, **Tutor** and **Super Admin**.

![HTML5](https://img.shields.io/badge/HTML5-markup-e34f26)
![CSS3](https://img.shields.io/badge/CSS3-styling-1572b6)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-f7df1e)
![Status](https://img.shields.io/badge/status-midterm%20demo-blue)
![Backend](https://img.shields.io/badge/backend-none-lightgrey)

LearnMate is a classroom **front-end demonstration** built for a Web Technologies group project (midterm). It shows how a tutoring platform could look and behave — registration, login, tutor browsing, bookings, courses, progress tracking and admin moderation — using only HTML, CSS and plain JavaScript.

> ⚠️ **Midterm demo only.** There is no database, no backend and no real authentication. All data is hard-coded in the JavaScript files and resets on every page refresh. **Never enter a real password.**

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Demo Walkthrough](#demo-walkthrough)
- [Form Validation Rules](#form-validation-rules)
- [How the Code Works](#how-the-code-works)
- [Sample Data](#sample-data)
- [What This Demo Does *Not* Do](#what-this-demo-does-not-do)
- [Roadmap: Midterm → Final Term](#roadmap-midterm--final-term)

---

## Features

The site has **24 role pages** (8 per role) plus a landing page. Each role has its own registration, login, stylesheet and JavaScript.

### 🎓 Student

| Page | What it demonstrates |
| --- | --- |
| Register / Login | Field validation, demo navigation to the dashboard |
| Dashboard | Welcome message, booking count, "apply as tutor" demo form |
| Browse Tutors | Tutor cards and a booking form with validation |
| My Bookings | Booking table with a demo **Cancel** button |
| My Courses | Course cards with a demo **Enroll** button |
| Learning Progress | Progress table with a demo **+10%** button |
| Profile | Name and learning-interest validation |

### 🧑‍🏫 Tutor

| Page | What it demonstrates |
| --- | --- |
| Register / Login | Field validation, demo navigation to the dashboard |
| Dashboard | Overview with a switch-to-student preview |
| Courses | Course creation form with validation |
| Availability | Weekly time-slot form and list |
| Sessions | Requested sessions with demo **Accept / Reject** buttons |
| Students | Enrolled students and their progress |
| Profile | Profile form validation |

### 🛡️ Super Admin

| Page | What it demonstrates |
| --- | --- |
| Register / Login | Field validation, demo navigation to the dashboard |
| Dashboard | Overview of platform areas |
| Manage Users | User list with a demo **Delete** button |
| Tutor Verification | Pending tutors with a demo **Verify** button |
| Manage Courses | Course list with a demo **Remove** button |
| Manage Bookings | Booking list with a demo **Close** button |
| Reports | Basic summary figures built from the sample arrays |

---

## Tech Stack

- **HTML5** — page structure (one file per page)
- **CSS3** — one stylesheet per role plus a landing-page stylesheet
- **Vanilla JavaScript** — DOM manipulation with `getElementById`, `.value`, `if/else`, `for` loops, arrays and `innerHTML`

No frameworks, no build step, no dependencies, no package manager.

---

## Project Structure

```
LearnMate_Midterm_Frontend/
├── index.html              # Landing page — choose a role
├── index.css               # Landing page styles
├── README.md
├── assets/
│   └── homepage-hero.png
│
├── student/
│   ├── register.html  login.html  dashboard.html  profile.html
│   ├── browse-tutors.html  my-bookings.html  my-courses.html  learning-progress.html
│   ├── css/student.css
│   ├── js/student-validation.js   # registration, login and form validation
│   ├── js/student.js              # sample arrays, display functions, demo buttons
│   └── assets/                    # illustrations
│
├── tutor/
│   ├── register.html  login.html  dashboard.html  profile.html
│   ├── courses.html  availability.html  sessions.html  students.html
│   ├── css/tutor.css
│   ├── js/tutor-validation.js
│   ├── js/tutor.js
│   └── assets/
│
└── admin/
    ├── register.html  login.html  dashboard.html
    ├── user-management.html  tutor-verification.html
    ├── course-management.html  booking-management.html  reports.html
    ├── css/admin.css
    ├── js/admin-validation.js
    ├── js/admin.js
    └── assets/
```

Each role follows the same pattern: **two JavaScript files** — one for validation, one for sample data and page display.

---

## Getting Started

No installation is needed.

1. Download or clone the project.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. Choose **Student**, **Tutor** or **Super Admin** and register or log in.

Optional: serve it locally if you prefer.

```bash
# from the project folder
python -m http.server 8000
# then visit http://localhost:8000
```

---

## Demo Walkthrough

1. Open `index.html` and click **Student Registration**.
2. Submit the empty form to see the validation errors, then fill it in correctly to see the success message (nothing is saved).
3. Go to **Login**, enter any correctly formatted email (e.g. `student@learnmate.demo`) and a password of 6+ characters. You are taken to the dashboard.
4. Visit **Browse Tutors**, pick a tutor, enter a topic and date, and submit the booking form.
5. Open **My Bookings**, click **Cancel (Demo)**, then refresh — the change disappears.
6. On the student dashboard, fill in the **apply as tutor** form and use the switch button to preview the Tutor Dashboard.
7. Repeat for **Tutor** (accept/reject sessions) and **Super Admin** (verify tutors, delete users, close bookings).

---

## Form Validation Rules

| Field | Rule |
| --- | --- |
| Full name | Required, at least **3** characters |
| Email | Required, must contain `@` and `.` |
| Password | Required, at least **6** characters |
| Confirm password | Required, must match the password |
| Dropdown choices | An option must be selected |
| Terms checkbox | Must be ticked on registration |
| Booking form | Tutor, topic and date are all required |
| Tutor application | Subject required, rate of at least **100 BDT** |

Error messages are written next to each field using `innerHTML`.

---

## How the Code Works

- **`validName()`, `validEmail()`, `validPassword()`, `validConfirmPassword()`** — each checks one field, writes an error message and returns `true` or `false`.
- **`validateRegistration()`** — calls every field check, shows a message, and returns `false` so the page does not reload.
- **`validateLogin()`** — checks email and password format only, then redirects to the dashboard. It does not check any account.
- **`showTutors()`, `showBookings()`, `showCourses()`, `showProgress()`** — loop through arrays with a `for` loop and build cards or table rows with `innerHTML`.
- **`window.onload`** — reads the page's `data-page` attribute and calls the matching display function.
- **`logout()`** — returns to the login page. There is no real session.

---

## Sample Data

All records live in arrays at the top of each `role.js` file, for example:

```js
let demoTutors = [
    ["Karim Ahmed", "karim@learnmate.demo", "Mathematics", "500 BDT/hour"],
    ["Nusrat Jahan", "nusrat@learnmate.demo", "English", "450 BDT/hour"],
    ["Rafi Islam", "rafi@learnmate.demo", "Programming", "650 BDT/hour"]
];
```

Edit these arrays to change what the demo displays.

---

## What This Demo Does *Not* Do

- No database (MySQL or otherwise), PHP or server-side code
- No `localStorage`, `sessionStorage`, JSON serialization or API requests
- Registration only **displays a message** — no account is created
- Login only checks the **format** of the email and password
- Buttons (approve, cancel, enroll, close booking…) update the screen only; changes reset on refresh and are **not shared** between pages or roles
- The student → tutor application is not linked to admin approval
- The "switch role" buttons are visual previews, not real permission checks

---

## Roadmap: Midterm → Final Term

- [ ] Backend and database for real accounts and persistent data
- [ ] Secure authentication with hashed passwords and sessions
- [ ] Role-based access control (including real dual student/tutor access)
- [ ] Working booking flow shared between student, tutor and admin
- [ ] Admin approval linked to real tutor applications
- [ ] Real reports built from stored data

---

## Credits

Web Technologies Group Project — LearnMate © 2026. Illustrations are stored in each role's `assets/` folder.
