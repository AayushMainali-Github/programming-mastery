import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const NodeCoreModules = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Node.js Core Modules</div>
        <div className="description">
          Node.js provides several built-in modules that allow developers to handle tasks like file operations, server creation, and interacting with the operating system. In this
          chapter, we will explore key modules: <b>fs</b>, <b>path</b>, <b>os</b>, and <b>http</b>.
        </div>

        <div className="subHeader">1. File System Module (`fs`)</div>
        <div className="description">The `fs` module is used to interact with the file system, allowing you to read, write, and manage files.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const fs = require('fs');

// Reading a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Writing to a file
fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully.');
});`}</Code>

        <div className="subHeader">2. Path Module (`path`)</div>
        <div className="description">The `path` module provides utilities for working with file and directory paths.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const path = require('path');

// Joining paths
const fullPath = path.join(__dirname, 'folder', 'file.txt');
console.log(fullPath); // Outputs: /your/current/directory/folder/file.txt

// Getting file extension
const ext = path.extname('example.txt');
console.log(ext); // Outputs: .txt`}</Code>

        <div className="subHeader">3. Operating System Module (`os`)</div>
        <div className="description">The `os` module provides information about the operating system, such as CPU architecture, memory, and network interfaces.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const os = require('os');

// Get system information
console.log('OS Platform:', os.platform()); // Outputs: win32, darwin, linux, etc.
console.log('CPU Architecture:', os.arch()); // Outputs: x64, arm, etc.
console.log('Total Memory:', os.totalmem()); // Outputs: Total memory in bytes
console.log('Free Memory:', os.freemem()); // Outputs: Free memory in bytes`}</Code>

        <div className="subHeader">4. HTTP Module (`http`)</div>
        <div className="description">The `http` module is used to create web servers and handle HTTP requests and responses.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const http = require('http');

// Creating a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use the `fs` module to manage files efficiently, especially for I/O-intensive tasks.</li>
          <li>Leverage the `path` module for platform-independent file path handling.</li>
          <li>Use the `os` module to gather environment-specific information for cross-platform applications.</li>
          <li>Optimize HTTP server code by using frameworks like Express.js for complex applications.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>The `fs` module allows you to work with the file system for reading and writing files.</li>
          <li>The `path` module provides utilities to work with file and directory paths.</li>
          <li>The `os` module gives information about the operating system for system-level interactions.</li>
          <li>The `http` module enables you to create servers and handle HTTP requests and responses.</li>
        </ul>

        <Bottom back="/nodejs/modules-and-require" next="/nodejs/working-with-npm" />
      </div>
    </div>
  );
};

export default NodeCoreModules;
