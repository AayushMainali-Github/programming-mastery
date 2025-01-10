import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HttpServerBasics = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">HTTP Server Basics</div>
        <div className="description">
          The `http` module in Node.js allows you to create a web server that can handle incoming requests and send responses. In this chapter, we’ll build a simple HTTP server and
          explore basic request and response handling.
        </div>

        <div className="subHeader">What is the `http` Module?</div>
        <div className="description">
          The `http` module is a core Node.js module used for creating web servers and making HTTP requests. It provides the ability to handle HTTP requests and responses with
          minimal overhead.
        </div>

        <div className="subHeader">Creating a Basic HTTP Server</div>
        <div className="description">Follow these steps to create a simple HTTP server:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Import the 'http' module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response
  res.end('Hello, World!');
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});`}</Code>

        <div className="subHeader">Handling Requests</div>
        <div className="description">
          The `req` object contains details about the incoming request, such as the method, URL, and headers. You can use it to handle different routes or query parameters.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page!');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Us');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});`}</Code>

        <div className="subHeader">Sending Responses</div>
        <div className="description">The `res` object is used to send responses to the client. You can set response headers, status codes, and body content.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ message: 'Hello, JSON!' }));`}</Code>

        <div className="subHeader">Serving HTML Content</div>
        <div className="description">Instead of plain text, you can serve HTML content by setting the `Content-Type` to `text/html`:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Welcome to Node.js HTTP Server</h1><p>This is a basic HTML response.</p>');
});`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use frameworks like Express.js for more complex routing and middleware.</li>
          <li>Always set proper headers to specify the content type and status code.</li>
          <li>Handle errors gracefully to avoid crashing the server.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>The `http` module is a core module for creating web servers in Node.js.</li>
          <li>Use the `req` object to handle incoming requests and the `res` object to send responses.</li>
          <li>Set appropriate headers and status codes to ensure proper communication between client and server.</li>
        </ul>

        <Bottom back="/nodejs/file-system-operations" next="/nodejs/routing-in-nodejs" />
      </div>
    </div>
  );
};

export default HttpServerBasics;
