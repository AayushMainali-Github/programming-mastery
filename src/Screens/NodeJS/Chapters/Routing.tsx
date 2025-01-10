import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const RoutingInNode = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Routing in Node.js</div>
        <div className="description">
          Routing in Node.js refers to defining various endpoints (routes) that respond to client requests. In this chapter, we’ll explore how to set up basic routes and handle
          query parameters using the `http` module.
        </div>

        <div className="subHeader">What is Routing?</div>
        <div className="description">Routing involves directing requests from clients to specific responses based on the URL or HTTP method. For example:</div>
        <ul className="list">
          <li>
            <b>GET /</b>: Return the homepage.
          </li>
          <li>
            <b>GET /about</b>: Return information about the application.
          </li>
          <li>
            <b>GET /search?query=nodejs</b>: Handle search functionality.
          </li>
        </ul>

        <div className="subHeader">Setting Up Basic Routes</div>
        <div className="description">To define basic routes, you can use the `http` module and check the `req.url` property to identify the requested path.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const http = require('http');

const server = http.createServer((req, res) => {
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
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});`}</Code>

        <div className="subHeader">Handling Query Parameters</div>
        <div className="description">
          Query parameters allow you to pass additional data in the URL. For example: <b>/search?query=nodejs</b>. Use the `url` module to parse query parameters.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Parse the URL
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === '/search') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(\`You searched for: \${query.query}\`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});`}</Code>

        <div className="subHeader">Using HTTP Methods</div>
        <div className="description">
          HTTP methods like <b>GET</b>, <b>POST</b>, <b>PUT</b>, and <b>DELETE</b> define the type of request being made. Use the `req.method` property to handle different methods:
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const server = http.createServer((req, res) => {
  if (req.url === '/data' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'This is a GET request' }));
  } else if (req.url === '/data' && req.method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'This is a POST request' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use frameworks like Express.js for easier and more advanced routing.</li>
          <li>Handle query parameters carefully to avoid exposing sensitive information.</li>
          <li>Always return appropriate HTTP status codes (e.g., 200 for success, 404 for not found).</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Routing allows you to define endpoints to handle specific client requests.</li>
          <li>The `url` module is useful for parsing query parameters.</li>
          <li>Handling different HTTP methods allows your server to respond to various types of requests.</li>
        </ul>

        <Bottom back="/nodejs/http-server-basics" next="/nodejs/asynchronous-programming-basics" />
      </div>
    </div>
  );
};

export default RoutingInNode;
