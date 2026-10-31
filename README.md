# LearnMate – Online Learning & Tutoring Platform

## 1. Project Overview

**LearnMate** is an online learning and tutoring platform designed to connect students with tutors. Students can explore tutors, manage their bookings, attend learning sessions, and track their learning progress. Tutors can manage their profiles, availability, courses, students, and earnings. Administrators can manage and monitor the platform.

This project is developed as a frontend web application using HTML, CSS, and JavaScript.

## 2. Project Objectives

- Create an easy-to-use online learning platform.
- Allow students to explore tutors and manage bookings.
- Provide tutors with tools to manage their teaching activities.
- Provide administrators with a dashboard to manage the platform.
- Build responsive and user-friendly interfaces.
- Practice HTML, CSS, JavaScript, DOM manipulation, and form validation.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive layouts |
| JavaScript | Frontend functionality and DOM manipulation |
| Font Awesome (if used) | Icons |
| Image Assets | Website illustrations and visuals |

## 4. Main Features

### Public Website & Authentication
- Public homepage
- Login page
- Registration page
- Forgot password page
- Reset password page

### Student Portal
- Student dashboard
- Browse tutors
- Tutor profile
- My bookings
- My sessions
- My courses
- Messages
- My reviews
- Student profile
- Learning progress
- Study materials
- Calendar
- Certificates
- Settings

### Super Admin Portal
- Admin dashboard
- Admin profile
- Edit profile
- User management
- User details
- Tutor verification
- Tutor details
- Course management
- Category management
- Booking management
- Session management
- Payment management
- Transaction history
- Review management
- Report management
- Notification management
- Support management
- Settings

### Tutor Portal
- Tutor dashboard
- Tutor profile
- Availability management
- Booking requests
- Sessions
- Courses
- Students
- Earnings
- Reviews
- Teaching materials
- Messages
- Settings

## 5. Project Folder Structure

```text
LearnMate/
│
├── asset/
├── index.html
├── index.css
├── index.js
├── README.md
│
├── 01-Public-Auth/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── forgot-password.html
│   ├── reset-password.html
│   ├── asset/
│   ├── css/
│   │   └── toma.css
│   └── js/
│       └── toma.js
│
├── 02-Student-Portal/
│   ├── index.html
│   ├── dashboard.html
│   ├── browse-tutors.html
│   ├── tutor-profile.html
│   ├── my-bookings.html
│   ├── my-sessions.html
│   ├── my-courses.html
│   ├── messages.html
│   ├── my-reviews.html
│   ├── profile.html
│   ├── learning-progress.html
│   ├── study-materials.html
│   ├── calendar.html
│   ├── certificates.html
│   ├── settings.html
│   ├── asset/
│   ├── css/
│   │   └── toma.css
│   └── js/
│       └── toma.js
│
├── 03-Super-Admin/
│   ├── dashboard.html
│   ├── profile.html
│   ├── edit-profile.html
│   ├── user-management.html
│   ├── user-details.html
│   ├── tutor-verification.html
│   ├── tutor-details.html
│   ├── course-management.html
│   ├── category-management.html
│   ├── booking-management.html
│   ├── session-management.html
│   ├── payment-management.html
│   ├── transaction-history.html
│   ├── review-management.html
│   ├── report-management.html
│   ├── notification-management.html
│   ├── support-management.html
│   ├── settings.html
│   ├── asset/
│   ├── css/
│   │   └── admin.css
│   └── js/
│       └── admin.js
│
└── 04-Tutor-Portal/
    ├── index.html
    ├── dashboard.html
    ├── profile.html
    ├── availability.html
    ├── booking-requests.html
    ├── sessions.html
    ├── courses.html
    ├── students.html
    ├── earnings.html
    ├── reviews.html
    ├── teaching-materials.html
    ├── messages.html
    ├── settings.html
    ├── asset/
    ├── css/
    │   └── sakib.css
    └── js/
        └── sakib.js
```

## 6. Design Theme

LearnMate uses a consistent color palette throughout its interfaces.

| Color | Hex Code | Usage |
|---|---|---|
| Lime | `#EAFC24` | Highlights and accents |
| Purple | `#4A3AFF` | Buttons and primary elements |
| Dark | `#131318` | Sidebar and text |
| White | `#FFFFFF` | Cards and backgrounds |

## 7. Team Members & Responsibilities

| Team Member | Responsibilities |
|---|---|
| Nafis | Super Admin Portal |
| Toma | Public Website, Authentication & Student Portal |
| Sakib | Tutor Portal & Main Homepage |

Each team member maintains separate CSS and JavaScript files for their assigned sections.

## 8. How to Run the Project

1. Download or clone the project repository.
2. Open the `LearnMate` project folder.
3. Open `index.html` in a web browser.
4. Use the homepage navigation to explore the different sections.
5. Open the individual portal HTML files directly if needed.

**Recommended:** Use the Visual Studio Code Live Server extension to run the project locally.

## 9. Frontend Functionality

The project uses JavaScript for frontend interactions, including:

- Form validation
- Search and filtering
- Navigation between pages
- Interactive buttons
- Demo booking and session actions
- Basic user interface interactions

## 10. Project Limitations

This version is a frontend-only demonstration.

- No backend server is connected.
- No real database is configured.
- Authentication is not connected to a real user system.
- Booking, payment, and other management actions are demo interactions.
- Data is not guaranteed to persist after refreshing or closing the browser.

## 11. Future Improvements

- Develop a backend using a suitable server-side technology.
- Integrate a database for users, tutors, courses, and bookings.
- Implement secure user authentication.
- Add real-time messaging.
- Integrate an online payment gateway.
- Implement real booking and scheduling functionality.
- Add notifications and email services.

## 12. Conclusion

LearnMate aims to provide a convenient digital environment for students, tutors, and administrators. The project demonstrates the development of a multi-page web application using HTML, CSS, and JavaScript, with separate portals for different user roles.

---

**Project Name:** LearnMate  
**Project Type:** Online Learning & Tutoring Platform  
**Development Stage:** Frontend Development  
**Technologies:** HTML, CSS, JavaScript