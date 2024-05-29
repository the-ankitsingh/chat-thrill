# <span style="color: #2c3e50;">💬 Chat~Thrill</span>

**<span style="color: #2980b9;">Developed by Ankit Singh</span>**

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## <span style="color: #2c3e50;" id="introduction">📖 Introduction</span>

<span style="font-size: 1.2em;">Chat~Thrill is a real-time chat application that enables users to communicate with each other instantly. It leverages the power of modern web technologies to provide a seamless and interactive chatting experience.</span>

## <span style="color: #2c3e50;" id="features">✨ Features</span>

<ul style="font-size: 1.1em;">
  <li>💬 Real-Time Messaging: Instant messaging with real-time updates using Socket.io.</li>
  <li>🔒 User Authentication: Secure user authentication with JWT (JSON Web Tokens).</li>
  <li>👥 Private and Group Chats: Create private and group chat rooms.</li>
  <li>📱 Responsive Design: Fully responsive design to ensure a great experience on both desktop and mobile devices.</li>
  <li>📎 Media Sharing: Share images and files with other users.</li>
  <li>🔔 Message Notifications: Receive notifications for new messages.</li>
</ul>

## <span style="color: #2c3e50;" id="technologies-used">🛠️ Technologies Used</span>

<span style="font-size: 1.1em;">
  <strong>Frontend:</strong>
  <ul>
    <li>⚛️ React.js</li>
    <li>🗂️ Redux for state management</li>
    <li>🎨 CSS for styling</li>
    <li>📡 Socket.io-client for real-time communication</li>
  </ul>
  <strong>Backend:</strong>
  <ul>
    <li>🟢 Node.js</li>
    <li>🚀 Express.js</li>
    <li>🍃 MongoDB with Mongoose for database</li>
    <li>📡 Socket.io for real-time communication</li>
    <li>🔑 JWT for authentication</li>
  </ul>
  <strong>Deployment:</strong>
  <ul>
    <li>🌐 Heroku for backend</li>
    <li>🌀 Netlify for frontend</li>
  </ul>
</span>

## <span style="color: #2c3e50;" id="installation">⚙️ Installation</span>

To run this application locally, follow these steps:

### Prerequisites

<ul style="font-size: 1.1em;">
  <li>📦 Node.js and npm installed</li>
  <li>🍃 MongoDB instance running</li>
</ul>

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/the-ankitsingh/chatVerse.git
    cd chatVerse/backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

    ```bash
    PORT=5000
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd ../frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
