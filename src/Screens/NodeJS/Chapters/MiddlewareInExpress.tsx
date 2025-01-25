import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MiddlewareInExpress = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Middleware in Express</div>
        <div className="description">
          Middleware in Express.js are functions that execute during the request-response cycle. They are used to process requests, add functionality, and handle tasks like
          logging, parsing, and authentication.
        </div>

        <div className="subHeader">What is Middleware?</div>
        <div className="description">
          Middleware functions are functions that have access to the request (`req`), response (`res`), and the `next` function in the application’s request-response cycle.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`app.use((req, res, next) => {
  console.log('Middleware executed!');
  next(); // Pass control to the next middleware or route handler
});`}</Code>

        <div className="subHeader">Types of Middleware</div>
        <ul className="list">
          <li>
            <b>Application-Level Middleware:</b> Bound to the application instance using `app.use()` or route-specific methods.
          </li>
          <li>
            <b>Router-Level Middleware:</b> Applied to specific routers using `router.use()`.
          </li>
          <li>
            <b>Built-in Middleware:</b> Provided by Express, such as `express.json()` for parsing JSON.
          </li>
          <li>
            <b>Third-Party Middleware:</b> Middleware from external libraries, e.g., `morgan` for logging.
          </li>
        </ul>

        <div className="subHeader">1. Logging Middleware</div>
        <div className="description">Logging middleware is used to log details about incoming requests, such as the URL, HTTP method, and time.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Simple logging middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url} at \${new Date().toISOString()}\`);
  next(); // Pass control to the next middleware
});

// Using a third-party logger (e.g., morgan)
const morgan = require('morgan');
app.use(morgan('combined'));`}</Code>

        <div className="subHeader">2. Parsing Middleware</div>
        <div className="description">Use built-in middleware like `express.json()` and `express.urlencoded()` to parse incoming request bodies.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Parse JSON requests
app.use(express.json());

// Parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Example route to access parsed data
app.post('/submit', (req, res) => {
  console.log('Body:', req.body);
  res.send('Data received');
});`}</Code>

        <div className="subHeader">3. Authentication Middleware</div>
        <div className="description">Authentication middleware is used to validate users before granting access to specific resources.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Example authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token === 'valid-token') {
    next(); // User is authenticated
  } else {
    res.status(401).send('Unauthorized');
  }
};

// Apply authentication middleware to protected routes
app.get('/protected', authenticate, (req, res) => {
  res.send('Access granted to protected route');
});`}</Code>

        <div className="subHeader">Error-Handling Middleware</div>
        <div className="description">Error-handling middleware is used to catch and handle errors in the application. It must have four arguments: `(err, req, res, next)`.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).send('Internal Server Error');
});`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use middleware like `express.json()` to handle parsing consistently.</li>
          <li>Keep middleware modular and reusable for different parts of the application.</li>
          <li>Apply authentication middleware to routes that require protection.</li>
          <li>Always include error-handling middleware to catch unhandled errors.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Middleware functions are essential for processing requests in Express.js.</li>
          <li>Logging, parsing, and authentication are common middleware use cases.</li>
          <li>Error-handling middleware helps improve application stability and debugging.</li>
        </ul>

        <Bottom back="/nodejs/expressjs-basics" next="/nodejs/defining-routes-in-express" />
      </div>
    </div>
  );
};

export default MiddlewareInExpress;
