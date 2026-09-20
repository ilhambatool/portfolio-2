# Ilham Batool — Personal Portfolio

A responsive personal portfolio website showcasing my skills, projects, and contact information — built from scratch with vanilla HTML, CSS, and JavaScript, featuring a fully functional light/dark theme switch.

**Live Demo:** (https://ilhambatool.github.io/tsg-webdev-p01-IlhamBatool/)


## Description

This is a single-page portfolio site designed to introduce me as a Software Engineering student, highlight my technical skills with visual progress indicators, showcase my past projects, and provide an easy way for visitors to get in touch. The site is fully responsive across mobile, tablet, and desktop breakpoints, and includes a persistent dark/light mode toggle powered by CSS custom properties and vanilla JavaScript.

## Features

- **Fixed navigation bar** with smooth-scroll links to Home, About, Skills, Projects, and Contact
- **Hero section** with name, tagline, illustration, and a call-to-action button
- **About section** with a short bio and a downloadable CV button
- **Skills section** — 6 skills (HTML, CSS, JavaScript, React, C++, SQL) shown with icons and animated progress bars
- **Projects section** — grid of project cards, each with an image, title, description, and live demo / GitHub links
- **Contact section** — styled contact form (name, email, subject, message) plus direct email, GitHub, and LinkedIn links
- **Footer** with copyright notice and social icons
- **Fully responsive design** — tested and working at 360px, 768px, and 1440px widths with no horizontal scrolling
- **Light/Dark mode toggle** — click the icon in the navbar to switch themes; your preference is remembered on return visits (`localStorage`) and defaults to your system preference on first visit
- **CSS hover effects** on nav links, project links, buttons, and skill cards
- **Mobile-friendly navbar** that wraps into a stacked layout on very small screens

## Technologies Used

- **HTML5** — semantic page structure
- **CSS3** — Flexbox, CSS Grid, custom properties (variables) for theming, media queries for responsiveness
- **JavaScript (Vanilla)** — dark/light mode toggle logic with `localStorage` persistence and system-preference detection
- **SVG icons** — inline, hand-colored icons (SOURCE:https://remixicon.com/)

## Screenshots
Desktop view:
<img width="586" height="332" alt="image" src="https://github.com/user-attachments/assets/b64e22ac-822b-472e-ac58-687d4eb1af31" />


Tablet view:
<img width="380" height="321" alt="image" src="https://github.com/user-attachments/assets/fa906fa1-18c2-4123-80fd-a10e93de3f5e" />

Mobile view:
<img width="243" height="316" alt="image" src="https://github.com/user-attachments/assets/a802fffa-52b4-4153-a2bc-0f70dca971bd" />


## Live Link

🔗 https://ilhambatool.github.io/tsg-webdev-p01-IlhamBatool/

## Setup / Installation

No build tools or dependencies are required — this is a static site.

1. **Clone the repository**
   ```bash
   git clone https://github.com/ilhambatool/tsg-webdev-p01-ilham.git
   ```
2. **Navigate into the project folder**
   ```bash
   cd tsg-webdev-p01-ilham
   ```
3. **Open the site**
   - Simplest: double-click `index.html` to open it directly in your browser, **or**
   - Recommended: use a local dev server (e.g. the VS Code "Live Server" extension) so relative paths and any future fetch requests behave correctly.
4. **File structure**
   ```
   ├── index.html
   ├── style.css
   ├── script.js
   ├── assests/        # images, icons, CV


## Author

**Ilham Batool**
- GitHub: [@ilhambatool](https://github.com/ilhambatool)
- LinkedIn: [ilham-batool](https://www.linkedin.com/in/ilham-batool/)
- Email: batoolilham@gmail.com
