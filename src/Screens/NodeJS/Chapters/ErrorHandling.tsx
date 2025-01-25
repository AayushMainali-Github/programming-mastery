import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ErrorHandlingInNode = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Error Handling in Node.js</div>
        <div className="description">
          Error handling is a critical part of any application to ensure smooth execution and user-friendly error messages. In this chapter, we'll explore how to manage errors
          effectively in Node.js using `try/catch` and middleware.
        </div>

        <div className="subHeader">Types of Errors in Node.js</div>
        <div className="description">Node.js errors can generally be categorized as:</div>
        <ul className="list">
          <li>
            <b>Operational Errors:</b> Issues like invalid input, failed network requests, or missing files.
          </li>
          <li>
            <b>Programming Errors:</b> Bugs in the code, such as reference errors or type errors.
          </li>
        </ul>

        <div className="subHeader">Handling Errors with try/catch</div>
        <div className="description">Use `try/catch` blocks to handle synchronous and asynchronous errors in your application:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Synchronous error handling
try {
  const result = someFunction();
  console.log(result);
} catch (err) {
  console.error('Error:', err.message);
}

// Asynchronous error handling (with async/await)
const someAsyncFunction = async () => {
  try {
    const result = await anotherFunction();
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
  }
};

someAsyncFunction();`}</Code>

        <div className="subHeader">Using Express Error-Handling Middleware</div>
        <div className="description">Express provides built-in support for error-handling middleware to catch and handle errors centrally.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const express = require('express');
const app = express();

// Regular middleware
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  next(); // Pass to the next middleware or route handler
});

// Route that generates an error
app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  err.status = 500;
  next(err); // Pass the error to the error-handling middleware
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({ message: err.message });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`}</Code>

        <div className="subHeader">Handling Uncaught Exceptions</div>
        <div className="description">Use the `process.on` event to handle uncaught exceptions or unhandled promise rejections globally:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err.message);
  process.exit(1); // Exit the application
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason.message);
  process.exit(1); // Exit the application
});`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always validate user inputs to prevent operational errors.</li>
          <li>Use centralized error-handling middleware in Express for consistent error responses.</li>
          <li>Avoid exposing sensitive information in error messages (e.g., stack traces).</li>
          <li>Log errors for debugging and monitoring using tools like `winston` or `pino`.</li>
          <li>Handle all possible promise rejections to ensure application stability.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Error handling is essential for building reliable and user-friendly applications.</li>
          <li>Use `try/catch` blocks for synchronous and asynchronous error handling.</li>
          <li>Leverage Express's error-handling middleware to manage errors centrally.</li>
          <li>Implement global handlers for uncaught exceptions and unhandled promise rejections.</li>
        </ul>

        <Bottom back="/nodejs/authentication-and-authorization" next="/nodejs/real-time-communication-with-socketio" />
      </div>
    </div>
  );
};

export default ErrorHandlingInNode;
