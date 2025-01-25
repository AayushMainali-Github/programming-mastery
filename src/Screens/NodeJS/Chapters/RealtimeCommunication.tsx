import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const RealTimeCommunication = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Real-time Communication with WebSockets and socket.io</div>
        <div className="description">
          Real-time communication is essential for applications like chat apps, collaborative tools, and live updates. In this chapter, we’ll build a simple chat application using
          WebSockets with the help of the `socket.io` library.
        </div>

        <div className="subHeader">What is WebSockets?</div>
        <div className="description">
          WebSockets provide a persistent, full-duplex communication channel between the client and server, enabling real-time data exchange. The `socket.io` library simplifies
          WebSocket implementation in Node.js applications.
        </div>

        <div className="subHeader">Setting Up socket.io</div>
        <div className="description">Install `socket.io` to enable WebSocket support in your Node.js application:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm install socket.io`}</Code>

        <div className="subHeader">Building the Server</div>
        <div className="description">Create a simple server to handle WebSocket connections:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Serve the client HTML file
});

// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle incoming messages
  socket.on('chat message', (msg) => {
    console.log('Message received:', msg);
    io.emit('chat message', msg); // Broadcast to all connected clients
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`}</Code>

        <div className="subHeader">Building the Client</div>
        <div className="description">Create an `index.html` file in the same directory with the following code:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat App</title>
  <script src="/socket.io/socket.io.js"></script>
</head>
<body>
  <h1>Chat App</h1>
  <div id="messages"></div>
  <form id="chatForm">
    <input id="messageInput" autocomplete="off" placeholder="Type your message..." />
    <button>Send</button>
  </form>

  <script>
    const socket = io();

    // Handle form submission
    const form = document.getElementById('chatForm');
    const input = document.getElementById('messageInput');
    const messagesDiv = document.getElementById('messages');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = input.value;
      socket.emit('chat message', message); // Send message to the server
      input.value = '';
    });

    // Display incoming messages
    socket.on('chat message', (msg) => {
      const messageElement = document.createElement('div');
      messageElement.textContent = msg;
      messagesDiv.appendChild(messageElement);
    });
  </script>
</body>
</html>`}</Code>

        <div className="subHeader">Testing the Chat App</div>
        <div className="description">To test the chat app:</div>
        <ul className="list">
          <li>
            Run the server with <b>node app.js</b>.
          </li>
          <li>
            Open <b>http://localhost:3000</b> in your browser.
          </li>
          <li>Open multiple browser tabs or windows to simulate multiple users.</li>
          <li>Type messages in one tab, and they will appear in all tabs in real-time.</li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use namespaces in `socket.io` to separate communication channels for different features.</li>
          <li>Implement authentication for WebSocket connections to ensure secure communication.</li>
          <li>Handle errors and unexpected disconnections gracefully on both the client and server sides.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>WebSockets enable real-time, bidirectional communication between the client and server.</li>
          <li>`socket.io` simplifies the implementation of WebSockets in Node.js applications.</li>
          <li>Real-time communication is ideal for chat apps, live notifications, and collaborative tools.</li>
        </ul>

        <Bottom back="/nodejs/error-handling-in-node" next="/nodejs/deployment" />
      </div>
    </div>
  );
};

export default RealTimeCommunication;
