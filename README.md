[CipherPair](https://cipherpair.com/)

CipherPair-DevHub

🚀 Welcome to CipherPair-DevHub – a collaborative portfolio platform for developers with a unique, modern twist! This homemade project is a work-in-progress and will evolve into something extraordinary.
Project Overview

This website is designed to highlight the skills and projects of two creative minds, showcasing individual portfolios while combining them into a unified, visually stunning experience.
✨ Features

    Individual Portfolios: Separate sections for showcasing personal achievements, skills, and projects.
    Dynamic Content: Integrated with REST APIs to display real-time updates (e.g., fitness data from Strava).
    Sleek Navigation: Smooth transitions between pages for seamless browsing.
    Responsive Design: Fully optimized for both desktop and mobile screens.
    Collaboration Focus: A shared theme to highlight teamwork and collaboration.

Current Progress

🚧 This project is still under development, but here’s what’s done so far:

    Homepage: A dynamic selection page where users can explore portfolios.
    Portfolio Pages: Separate pages for each developer, showcasing skills, education, and experience.
    Dynamic REST API Integration: Fetches live data (e.g., workout stats from Strava REST API).
    Deployment: Hosted on a VPS server with DigitalOcean and linked to the custom domain cipherpair.com.

Deployment Setup

This project is deployed automatically using GitHub Actions. The deployment process ensures that every change pushed to the main branch is reflected on the live website.
How It Works

    A deploy.yml file is located under .github/workflows in the repository.
    The workflow is triggered on every push to the main branch.
    Steps in the Workflow:
        Check Out Code: Pulls the latest code from the repository.
        SSH Deployment: Uses the appleboy/ssh-action to log into the VPS server securely using an SSH private key stored in GitHub Secrets.
        Build and Restart:
            Navigates to the project directory (/var/www/my-website).
            Pulls the latest changes from GitHub (git pull origin main).
            Installs dependencies (npm install).
            Builds the project for production (npm run build).
            Restarts the app using PM2 for process management.

Hosting Details

    The website is hosted on a VPS server from DigitalOcean.
    The domain name is managed via Cloudflare

Development Environment

This project was developed using Arch Linux. The primary tools and applications used include:

- **JetBrains WebStorm**: For coding and development.
- **GitKraken**: For repository management and updates.
