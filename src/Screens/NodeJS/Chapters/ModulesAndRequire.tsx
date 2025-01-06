import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const NodeModulesAndRequire = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Modules and Require</div>
        <div className="description">
          Modules are the building blocks of a Node.js application. They allow you to organize your code into reusable pieces. In this chapter, we'll explore how to use built-in
          and custom modules in Node.js.
        </div>

        <div className="subHeader">What Are Modules?</div>
        <div className="description">
          A module in Node.js is a JavaScript file that contains related code. Modules can be built-in (provided by Node.js), third-party (installed via npm), or custom (created by
          you).
        </div>

        <div className="subHeader">Using Built-in Modules</div>
        <div className="description">
          Node.js includes a variety of built-in modules like <b>fs</b>, <b>http</b>, <b>path</b>, and <b>os</b>. To use these modules, you must import them using the{" "}
          <b>require()</b> function.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Importing the 'fs' (File System) module
const fs = require('fs');

// Example: Reading a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});`}</Code>

        <div className="subHeader">Creating and Using Custom Modules</div>
        <div className="description">Custom modules are JavaScript files that you create to organize your application code. To create a module:</div>
        <ol className="list">
          <li>
            Create a new file named <b>math.js</b> and define the following code:
            <Code language="javascript" style={materialDark} showLineNumbers>{`// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Exporting the functions
module.exports = { add, subtract };`}</Code>
          </li>
          <li>
            In another file, import the module and use its functions:
            <Code language="javascript" style={materialDark} showLineNumbers>{`// app.js
const math = require('./math');

console.log(math.add(5, 3));      // Outputs: 8
console.log(math.subtract(5, 3)); // Outputs: 2`}</Code>
          </li>
        </ol>

        <div className="subHeader">The Module System</div>
        <ul className="list">
          <li>
            <b>require:</b> Used to import modules in Node.js.
          </li>
          <li>
            <b>module.exports:</b> Used to export functions, objects, or values from a module.
          </li>
          <li>
            <b>Exports:</b> An alias for <b>module.exports</b>, used to export multiple values.
          </li>
        </ul>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Exporting using exports
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;

// Importing the exports
const math = require('./math');
console.log(math.multiply(4, 2)); // Outputs: 8`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Organize your code into modules to improve readability and maintainability.</li>
          <li>Use meaningful names for modules and their exported functions.</li>
          <li>Import only the modules you need to optimize performance.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Node.js has a powerful module system for code organization and reuse.</li>
          <li>
            The <b>require</b> function is used to import both built-in and custom modules.
          </li>
          <li>
            Custom modules are created using <b>module.exports</b> or <b>exports</b>.
          </li>
        </ul>

        <Bottom back="/nodejs/nodejs-basics" next="/nodejs/core-modules" />
      </div>
    </div>
  );
};

export default NodeModulesAndRequire;
