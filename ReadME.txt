Logistics AI Website - Project Setup & Hosting Guide

Welcome to the Logistics AI Website project. This is a React-based web application using Next.js and Tailwind CSS for development and styling. This document provides a step-by-step guide to help a new developer understand how to install, run, and host this project using a hosting service like Vercel, Netlify, or GitHub Pages.

1. Prerequisites

Make sure you have the following installed on your system:

Node.js (v16 or newer): Download Node.js

Yarn (preferred) or npm

Git: Download Git

2. Clone the Project

git clone https://github.com/Keasanda/Logistics-ai-website.git
cd Logistics-ai-website

3. Install Dependencies

Using Yarn (recommended):

yarn install

Or using npm:

npm install

4. Run the Project Locally

Start the development server:

yarn dev

Or using npm:

npm run dev

Navigate to http://localhost:3000 in your browser.

5. Project Scripts

yarn dev - Runs the development server

yarn build - Builds the application for production

yarn start - Starts the production server

yarn deploy - Deploys the project to GitHub Pages

6. Build for Production

Before deploying to any hosting service, build the project:

yarn build

This will create an optimized production build in the .next and out directories.

7. Hosting the Project

Option A: Vercel (Recommended for Next.js)

Go to https://vercel.com

Sign up or log in using your GitHub account

Click "Import Project" and choose this GitHub repository

Set the framework to Next.js (auto-detected)

Click Deploy

Vercel will automatically handle builds and deployments on every git push.

Option B: Netlify (Static Export Required)

Export the project as a static site:

yarn build && yarn export

This creates an out directory.

Go to https://netlify.com

Sign in and click "Add New Site" > Import from GitHub

Set build command as:

yarn build && yarn export

Set the publish directory to:

out

Click Deploy Site

Option C: GitHub Pages (Already Configured)

Make sure the homepage field in package.json is correctly set:

"homepage": "https://<your-github-username>.github.io/<repo-name>"

Run the deployment command:

yarn deploy

This builds and publishes the out/ folder to the gh-pages branch, making the site live at the GitHub Pages URL.

8. Tailwind CSS Setup (Already Configured)

Tailwind CSS is fully set up using PostCSS.

Tailwind directives are in the global CSS file:

@tailwind base;

@tailwind components;

@tailwind utilities;

Configuration files:

tailwind.config.js

postcss.config.js

9. Directory Structure Overview

Logistics-ai-website/
├── public/             # Static assets
├── src/
│   └── app/            # Next.js app pages
├── styles/             # Tailwind/global styles
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS plugins
├── out/                # Static build output for GitHub Pages
└── package.json        # Scripts and dependencies

10. Contact

If you need help or support, please reach out to the previous developer via GitHub or email.