import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AuthAndAuthz = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Authentication and Authorization</div>
        <div className="description">
          Authentication and authorization are critical for securing web applications. Authentication verifies a user's identity, while authorization determines what actions they
          can perform. In this chapter, we’ll implement JWT-based authentication and role-based access control.
        </div>

        <div className="subHeader">What is JWT?</div>
        <div className="description">
          JSON Web Tokens (JWT) are a compact, URL-safe way of transmitting data between parties. They are commonly used for authentication and securely passing user information.
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm install jsonwebtoken`}</Code>

        <div className="subHeader">Setting Up JWT Authentication</div>
        <div className="description">Follow these steps to implement JWT authentication:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

// Secret key for signing tokens
const SECRET_KEY = 'your-secret-key';

// Login route: Generate JWT for valid users
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Mock user validation
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username, role: 'admin' }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ token });
  }

  res.status(401).json({ message: 'Invalid credentials' });
});

// Protected route: Verify JWT
app.get('/protected', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token required' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    res.json({ message: 'Access granted', user });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`}</Code>

        <div className="subHeader">Role-Based Access Control (RBAC)</div>
        <div className="description">RBAC restricts access based on user roles. For example, an admin might have more permissions than a regular user.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Middleware for role-based access control
const authorize = (roles) => (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token required' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    if (!roles.includes(user.role)) return res.status(403).json({ message: 'Access denied' });
    next();
  });
};

// Protected admin route
app.get('/admin', authorize(['admin']), (req, res) => {
  res.json({ message: 'Welcome, admin!' });
});

// Protected user route
app.get('/user', authorize(['user', 'admin']), (req, res) => {
  res.json({ message: 'Welcome, user!' });
});`}</Code>

        <div className="subHeader">Testing Authentication and Authorization</div>
        <div className="description">Use tools like Postman or cURL to test your implementation:</div>
        <ul className="list">
          <li>
            <b>POST /login:</b> Send a username and password to get a token.
          </li>
          <li>
            <b>GET /protected:</b> Access a protected route by including the token in the Authorization header.
          </li>
          <li>
            <b>GET /admin:</b> Access an admin-only route with an admin token.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Store secrets securely using environment variables (e.g., with the `dotenv` library).</li>
          <li>Set a reasonable expiration time for JWTs to reduce security risks.</li>
          <li>Use HTTPS to secure token transmission over the network.</li>
          <li>Always verify the token signature and handle errors properly.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Authentication verifies a user's identity, while authorization controls access based on roles or permissions.</li>
          <li>JWTs are a secure and efficient way to manage authentication in web applications.</li>
          <li>Role-based access control ensures that users can only access resources they are authorized for.</li>
        </ul>

        <Bottom back="/nodejs/working-with-databases" next="/nodejs/real-time-communication-with-socketio" />
      </div>
    </div>
  );
};

export default AuthAndAuthz;
