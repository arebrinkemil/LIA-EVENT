# LIA EVENT PLATFORM

This MERN stack application is designed to provide companies with essential information about upcoming events and allows them to create descriptive posts about their involvement. Developed collaboratively by Emil Årebrink and Anton Bernhardsson Yttring as part of a group project, this platform bridges the gap between companies and event participants.

## Developed by
- [Emil Årebrink](https://github.com/arebrinkemil)
- [Anton Bernhardsson Yttring](https://github.com/AntonBeYt)

## Design
The user interface was designed by students from the design class, focusing on ease of use and aesthetic appeal to both companies and attendees.

## Features
- **User Authentication:** Allows users to sign up and log in to access their accounts.
- **Post Creation:** Users can create posts to describe their company.
- **Event Details:** Provides detailed information about an upcoming event.

## Tech Stack
- **MongoDB:** A document-based open source database.
- **Express.js:** A web application framework for Node.js.
- **React:** A JavaScript library for building user interfaces.
- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.

## Project Structure
- `backend/`: Contains the Express.js application.
- `frontend/`: Contains the React application.

## Setup Instructions

### Prerequisites
- Ensure you have Node.js and npm (Node Package Manager) installed on your machine.

### Installation
1. Clone the repository:
git clone https://github.com/arebrinkemil/LIA-EVENT.git
cd <your-repository>

2. Install dependencies for both frontend and backend:
cd backend
npm install
cd ../frontend
npm install


### Configuration
- Copy the `.env.example` file to `.env` in the backend folder:
cp .env.example .env
- Add the necessary tokens and variables in the `.env` file.

### Running the Application
- To start the backend server:
cd backend
npm start # or use nodemon start

- To run the frontend:
cd ../frontend
npm run dev


