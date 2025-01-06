import React from "react";
import Bottom from "../../../Components/Bottom";

const NodeIntroduction = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Introduction to Node.js</div>
        <div className="description">
          Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It enables developers to run JavaScript outside the browser, making it a popular choice for
          server-side development.
        </div>

        <div className="subHeader">What is Node.js?</div>
        <div className="description">
          Node.js is an open-source, cross-platform runtime environment for executing JavaScript code. Initially designed for building scalable network applications, Node.js has
          grown to power a wide range of use cases, from web servers to real-time chat applications.
        </div>

        <div className="subHeader">History of Node.js</div>
        <ul className="list">
          <li>
            Node.js was created in <b>2009</b> by <b>Ryan Dahl</b>.
          </li>
          <li>It was designed to solve the problem of blocking I/O operations in traditional web servers.</li>
          <li>Built on Chrome's V8 JavaScript engine, Node.js introduced an event-driven, non-blocking I/O model.</li>
          <li>Today, Node.js is maintained by the OpenJS Foundation and has a thriving developer community.</li>
        </ul>

        <div className="subHeader">Key Features of Node.js</div>
        <ul className="list">
          <li>
            <b>Asynchronous and Event-Driven:</b> Non-blocking I/O ensures that multiple operations can execute simultaneously without waiting for each other.
          </li>
          <li>
            <b>Single-Threaded but Scalable:</b> Node.js uses a single-threaded event loop architecture to handle multiple client requests efficiently.
          </li>
          <li>
            <b>Built-in Modules:</b> Includes core modules like <b>fs</b>, <b>http</b>, <b>path</b>, and <b>events</b> for common functionality.
          </li>
          <li>
            <b>High Performance:</b> Powered by Chrome's V8 engine, Node.js compiles JavaScript to machine code for fast execution.
          </li>
          <li>
            <b>Cross-Platform:</b> Runs on Windows, macOS, and Linux with minimal setup.
          </li>
          <li>
            <b>Active Community and Ecosystem:</b> npm (Node Package Manager) hosts over a million packages to extend Node.js functionality.
          </li>
        </ul>

        <div className="subHeader">What Can You Do with Node.js?</div>
        <ul className="list">
          <li>Build web servers and APIs.</li>
          <li>Develop real-time applications like chat apps or multiplayer games.</li>
          <li>Create command-line tools and utilities.</li>
          <li>Automate tasks using scripts.</li>
          <li>Build microservices for scalable applications.</li>
        </ul>

        <div className="subHeader">Why Choose Node.js?</div>
        <ul className="list">
          <li>Unified development: Use JavaScript for both frontend and backend development.</li>
          <li>Fast execution: Handles high-concurrency applications efficiently.</li>
          <li>Large ecosystem: Access thousands of libraries via npm to speed up development.</li>
          <li>Developer-friendly: Supports modern JavaScript syntax and has robust debugging tools.</li>
        </ul>

        <Bottom back="/nodejs/environment-setup" next="/nodejs/nodejs-fundamentals" />
      </div>
    </div>
  );
};

export default NodeIntroduction;
