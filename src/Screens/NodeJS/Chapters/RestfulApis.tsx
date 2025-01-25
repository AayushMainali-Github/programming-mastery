import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const RestfulApis = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">RESTful APIs with Express</div>
        <div className="description">
          RESTful APIs are a common standard for building web services that use HTTP to perform CRUD (Create, Read, Update, Delete) operations. In this chapter, we’ll design and
          build RESTful APIs using Express.js.
        </div>

        <div className="subHeader">What is a RESTful API?</div>
        <div className="description">
          REST (Representational State Transfer) is an architectural style for designing web services. A RESTful API exposes resources via URLs and interacts with them using
          standard HTTP methods:
        </div>
        <ul className="list">
          <li>
            <b>GET:</b> Retrieve data (e.g., fetch a list of users).
          </li>
          <li>
            <b>POST:</b> Create new resources (e.g., add a new user).
          </li>
          <li>
            <b>PUT:</b> Update existing resources (e.g., modify a user's details).
          </li>
          <li>
            <b>DELETE:</b> Remove resources (e.g., delete a user).
          </li>
        </ul>

        <div className="subHeader">Setting Up the Project</div>
        <div className="description">Initialize a new project and install Express:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm init -y
npm install express`}</Code>
        <div className="description">
          Create a new file called <b>app.js</b> and set up your Express application:
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON requests

const PORT = 3000;
app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}/\`);
});`}</Code>

        <div className="subHeader">Defining RESTful Routes</div>
        <div className="description">Let’s define routes for a simple "Users" resource:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET a single user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// POST: Create a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT: Update an existing user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  res.json(user);
});

// DELETE: Remove a user
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  users.splice(userIndex, 1);
  res.status(204).send(); // No content
});`}</Code>

        <div className="subHeader">Testing the API</div>
        <div className="description">Use tools like Postman, cURL, or your browser (for GET requests) to test your API:</div>
        <ul className="list">
          <li>
            <b>GET /users:</b> Fetch all users.
          </li>
          <li>
            <b>GET /users/1:</b> Fetch user with ID 1.
          </li>
          <li>
            <b>POST /users:</b> Add a new user (send JSON in the request body).
          </li>
          <li>
            <b>PUT /users/1:</b> Update the user with ID 1.
          </li>
          <li>
            <b>DELETE /users/1:</b> Delete the user with ID 1.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Organize your routes into separate files or controllers for better maintainability.</li>
          <li>Use middleware to validate request data before processing it.</li>
          <li>Handle errors gracefully and return meaningful HTTP status codes.</li>
          <li>Use tools like Swagger or Postman to document your API.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>RESTful APIs use standard HTTP methods to perform CRUD operations.</li>
          <li>Express makes it simple to define routes and handle requests.</li>
          <li>Middleware like `express.json()` helps parse request bodies for POST and PUT operations.</li>
        </ul>

        <Bottom back="/nodejs/middleware-in-express" next="/nodejs/working-with-databases" />
      </div>
    </div>
  );
};

export default RestfulApis;
