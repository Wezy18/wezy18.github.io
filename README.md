# Portfolio Website - Rebecca Corder

This repository contains the source code for my personal portfolio website, created to showcase my technical skills, projects, and design approach.

The site is designed to be clean, responsive, and approachable, with interactive elements that reflect both my technical background and my interest in thoughtful, user-focused experiences.

## About the Project
This portfolio serves as a central hub for:
- Highlighting the programming languages, tools, and concepts I’ve learned
- Showcasing selected projects with links to source code
- Providing quick access to my professional profiles (GitHub, LinkedIn, Handshake, etc.)

The landing section features a typewriter-style code animation to introduce me in a playful but professional way, while the rest of the site focuses on clarity, accessibility, and responsiveness.

## Features
- **Fully responsive design** using CSS Grid and Flexbox
- **Animated typewriter effect** to simulate code on a laptop screen
- **Project cards** with hover interactions and GitHub links
- **Smooth scrolling navigation** between sections
- **Accessible markup** with alt text and ARIA labels
- Clean, modern visual design focused on readability

## Built With
- HTML5
- CSS3 (Grid, Flexbox, media queries)
- JavaScript
- jQuery
- Typewriter Effect (via CDN)
- Google Fonts (Open Sans)

## Project Structure
```
project-root/
├── index.html
├── styles/
│   └── homestyle.css
├── scripts/
│   └── scripts.js
├── images/
│   ├── white-bird-silhouette-hi.png
│   ├── logos/
│   └── samples/
└── README.md
```

## How to Run Locally
Because this project uses relative file paths, it should be served from a local web server.

### Option 1: VS Code Live Server
1. Open the project folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**

### Option 2: Python HTTP Server
From the project root directory:
```bash
python -m http.server
```
Then open:

```arduino
http://localhost:8000
```
## Customization
- Skills section: Edit the lists under “My Skills” in index.html
- Projects: Update project cards and background images in index.html and homestyle.css
- Typewriter animation: Modify the text in scripts/scripts.js
- Branding: Swap logos, colors, or fonts to fit your personal style

## Purpose & Career Focus
This portfolio was built as part of my preparation for software engineering and web development internships. It reflects:

- My growing experience across front-end and general software development
- My attention to structure, readability, and user experience
- My ability to design, build, and iterate on a complete web project
