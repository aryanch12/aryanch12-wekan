# aryanch12-wekan

**A customized fork of [Wekan](https://github.com/wekan/wekan)** focusing on enhanced password reset handling, homepage rendering fixes, and overall code optimization. This repository addresses critical bugs, improves user feedback, refactors core modules for maintainability, and includes additional unit tests and documentation updates.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Architecture](#architecture)  
- [Features & Fixes](#features--fixes)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Clone the Repository](#clone-the-repository)  
  - [Install Dependencies](#install-dependencies)  
  - [Configuration](#configuration)  
  - [Running the Application](#running-the-application)  
  - [Running Tests](#running-tests)  
  - [Building for Production](#building-for-production)  
- [Development Workflow](#development-workflow)  
- [Contributing](#contributing)  
- [Troubleshooting](#troubleshooting)  
- [License](#license)  
- [Contact](#contact)  

---

## Project Overview

This repository is a tailored fork of the popular open-source Kanban board project **Wekan**. The fork addresses several key issues:

- Fixes password reset email and token validation bugs  
- Resolves homepage rendering and component loading problems  
- Eliminates file clashing and module import errors  
- Refactors critical components for improved maintainability  
- Implements enhanced backend validation and error handling  
- Introduces unit tests for core functionalities  
- Ensures cross-browser and device compatibility

This fork is ideal for teams needing a stable, bug-fixed version of Wekan with better security around password resets and smoother user interface experience.

---

## Architecture

- **Frontend:** React.js with Redux for state management  
- **Backend:** Node.js with Express.js  
- **Database:** MongoDB for data persistence  
- **Authentication:** JWT tokens for secure sessions  
- **Email Service:** Configurable SMTP service for password resets  
- **Testing:** Jest and React Testing Library for unit and integration tests  

---

## Features & Fixes

- Fixed critical bug in password reset email functionality and token validation  
- Improved handling of reset token expiration for enhanced security  
- Enhanced user feedback and error messages during password reset failures  
- Fixed homepage rendering issues caused by improper component imports and state bugs  
- Resolved file clashing and module import errors causing build failures  
- Refactored password reset and homepage modules for better code structure and readability  
- Updated backend validation logic to prevent unauthorized password resets  
- Added comprehensive unit tests for password reset flows and homepage rendering  
- Verified consistent behavior across major browsers and device form factors  
- Updated documentation to accurately reflect new workflows and fixes  

---

## Getting Started

### Prerequisites

- **Node.js** (v16+) - [Download](https://nodejs.org/en/download/)  
- **MongoDB** (Community or Atlas) - [Download](https://www.mongodb.com/try/download/community) or use [Atlas cloud](https://www.mongodb.com/cloud/atlas)  
- **Git** - [Download](https://git-scm.com/downloads)  
- An SMTP email provider account for sending reset emails (e.g., Gmail, SendGrid)

---

### Clone the Repository

```bash
Install Dependencies
bash
Copy
Edit
# Backend dependencies
cd server
npm install

# Frontend dependencies
cd ../client
npm install
Configuration
Create a .env file in the server directory with the following variables:

env
Copy
Edit
MONGO_URL=mongodb://localhost:27017/wekan
PORT=3001
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password-or-app-password
JWT_SECRET=your-secure-jwt-secret
Replace values with your actual credentials.

Use environment variable management best practices for production.

Running the Application
bash
Copy
Edit
# Start backend server
cd server
npm start

# In a new terminal, start frontend
cd ../client
npm start
Frontend will run on http://localhost:3000

Backend API will run on http://localhost:3001

Running Tests
bash
Copy
Edit
# Backend tests
cd server
npm test

# Frontend tests
cd ../client
npm test
Building for Production
bash
Copy
Edit
cd client
npm run build
Serve the build folder contents with a static server or deploy using your preferred platform.

Development Workflow
Use feature branches named descriptively, e.g. fix-password-reset

Write clear, detailed commit messages referencing related issues

Run tests before committing

Submit pull requests for review with screenshots or test results if applicable

Follow code style conventions (ESLint and Prettier configured)

Contributing
Contributions are welcome! Please:

Fork the repository

Create your feature branch (git checkout -b feature-name)

Commit your changes (git commit -m "feat: add feature")

Push to your branch (git push origin feature-name)

Open a Pull Request

Check issues for tasks and bugs.
<img width="1424" alt="Screenshot 2025-05-27 at 9 46 51 AM" src="https://github.com/user-attachments/assets/20c57c49-3d8a-403b-8743-19ba7d604f65" />
<img width="1158" alt="Screenshot 2025-05-27 at 9 58 49 AM" src="https://github.com/user-attachments/assets/c081d845-c0e8-4261-b50b-1a707e262df1" />
<img width="666" alt="Screenshot 2025-05-27 at 10 03 09 AM" src="https://github.com/user-attachments/assets/2db2824e-8f32-48f1-bd6a-045a7ace6c37" />

Troubleshooting
MongoDB connection errors: Verify your MONGO_URL in .env and MongoDB server status

Email not sending: Confirm SMTP credentials and enable less secure app access if using Gmail

Port conflicts: Ensure ports 3000 (frontend) and 3001 (backend) are free or adjust accordingly

Build failures: Delete node_modules and run npm install again

License
Specify your license here (e.g., MIT License). See LICENSE file.
