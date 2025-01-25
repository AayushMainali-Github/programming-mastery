import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const FullStackIntegration = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Building a Full-Stack Application</div>
        <div className="description">
          Full-stack applications combine a backend (e.g., Node.js) with a frontend framework (e.g., React or Angular). This chapter demonstrates how to integrate Node.js with
          React to build a complete application.
        </div>

        <div className="subHeader">1. Setting Up the Backend (Node.js)</div>
        <div className="description">Start by creating a REST API with Node.js and Express:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Initialize a Node.js project
mkdir fullstack-app && cd fullstack-app
npm init -y

# Install dependencies
npm install express cors`}</Code>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Mock data
const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false },
  { id: 2, title: 'Build a Full-Stack App', completed: false },
];

// Routes
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = { id: tasks.length + 1, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(\`Backend running on http://localhost:\${PORT}/\`);
});`}</Code>

        <div className="subHeader">2. Setting Up the Frontend (React)</div>
        <div className="description">Create a React application and set up a basic frontend:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Create a React app
npx create-react-app client
cd client

# Install Axios for API requests
npm install axios`}</Code>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  // Add a new task
  const addTask = () => {
    axios.post('http://localhost:5000/tasks', { title: newTask, completed: false })
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error('Error adding task:', error));
    setNewTask('');
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} {task.completed ? '✅' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;`}</Code>

        <div className="subHeader">3. Running the Application</div>
        <div className="description">Start both the backend and frontend servers:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Start the backend server
node server.js

# Start the React development server
cd client
npm start`}</Code>
        <div className="description">
          Open <b>http://localhost:3000</b> in your browser. You can now view, add, and manage tasks in real-time, with data served by the Node.js backend.
        </div>

        <div className="subHeader">4. Deploying the Full-Stack Application</div>
        <div className="description">
          Use Heroku, AWS, or other platforms to deploy the full-stack application. For deployment, build the React frontend and serve it from the Node.js backend:
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Build the React app
cd client
npm run build`}</Code>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Serve React build files from Node.js backend
const path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use environment variables to manage API URLs and sensitive data.</li>
          <li>Structure the backend and frontend into separate folders for better organization.</li>
          <li>Implement authentication and role-based access control for secure operations.</li>
          <li>Optimize API calls with caching and debounce mechanisms to improve performance.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Full-stack applications integrate a backend (Node.js) with a frontend (React or Angular).</li>
          <li>APIs serve data from the backend to the frontend for a dynamic user experience.</li>
          <li>Tools like Axios simplify HTTP requests between the frontend and backend.</li>
          <li>Deployment involves building the frontend and serving it from the backend.</li>
        </ul>

        <Bottom back="/nodejs/introduction-to-graphql" next="/nodejs/advanced-topics" />
      </div>
    </div>
  );
};

export default FullStackIntegration;
