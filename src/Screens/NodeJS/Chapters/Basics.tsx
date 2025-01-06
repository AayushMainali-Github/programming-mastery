import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const NodeBasics = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Node.js Basics</div>
        <div className="description">
          In this chapter, we'll explore the Node.js runtime, learn how to use the REPL (Read-Eval-Print Loop), and create a simple "Hello, World!" application.
        </div>

        <div className="subHeader">What is the Node.js Runtime?</div>
        <div className="description">
          The Node.js runtime executes JavaScript code outside the browser, powered by the V8 JavaScript engine. It enables server-side development, making JavaScript a full-stack
          programming language.
        </div>

        <div className="subHeader">Exploring the REPL</div>
        <div className="description">
          The REPL (Read-Eval-Print Loop) is an interactive environment for executing JavaScript code line by line. It’s great for testing snippets of code quickly.
        </div>
        <div className="description">To start the REPL:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`node`}</Code>
        <div className="description">Once inside the REPL, you can type JavaScript commands. For example:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`> const sum = (a, b) => a + b;
> sum(3, 5);
8`}</Code>
        <div className="description">To exit the REPL, type:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`.exit`}</Code>

        <div className="subHeader">Your First Node.js Application: "Hello, World!"</div>
        <div className="description">Follow these steps to create a simple Node.js application that prints "Hello, World!" to the console:</div>
        <ol className="list">
          <li>
            Create a new directory for your project:
            <Code language="bash" style={materialDark} showLineNumbers>{`mkdir hello-world-app
cd hello-world-app`}</Code>
          </li>
          <li>
            Create a new file named <b>app.js</b>:<Code language="bash" style={materialDark} showLineNumbers>{`touch app.js`}</Code>
          </li>
          <li>
            Open <b>app.js</b> in your code editor and add the following code:
            <Code language="javascript" style={materialDark} showLineNumbers>{`console.log("Hello, World!");`}</Code>
          </li>
          <li>
            Run the application:
            <Code language="bash" style={materialDark} showLineNumbers>{`node app.js`}</Code>
          </li>
        </ol>
        <div className="description">
          When executed, the terminal should display:
          <Code language="bash" style={materialDark} showLineNumbers>{`Hello, World!`}</Code>
        </div>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>The Node.js runtime enables you to run JavaScript outside the browser.</li>
          <li>The REPL is a powerful tool for testing small pieces of code interactively.</li>
          <li>Node.js applications are created using JavaScript files and executed with the `node` command.</li>
        </ul>

        <Bottom back="/nodejs/environment-setup" next="/nodejs/modules-and-require" />
      </div>
    </div>
  );
};

export default NodeBasics;
