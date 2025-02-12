import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const IntroductionToTypeScript = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Introduction to TypeScript</div>
        <div className="description">
          TypeScript is a statically typed superset of JavaScript that adds optional type annotations and advanced features to improve code quality, maintainability, and developer
          productivity. It compiles to plain JavaScript and is widely used in modern web development.
        </div>

        <div className="subHeader">What is TypeScript?</div>
        <div className="description">
          TypeScript is an open-source programming language developed by Microsoft. It extends JavaScript by introducing a static type system, interfaces, generics, and other
          powerful features, making large-scale development more manageable.
        </div>

        <div className="subHeader">Why Use TypeScript?</div>
        <ul className="list">
          <li>
            <b>Static Typing:</b> TypeScript enables optional static typing, which helps catch errors during development rather than at runtime.
          </li>
          <li>
            <b>Better Code Maintainability:</b> Type safety, interfaces, and modularization make it easier to manage large codebases.
          </li>
          <li>
            <b>Enhanced Developer Experience:</b> Improved auto-completion, inline documentation, and refactoring support.
          </li>
          <li>
            <b>Modern JavaScript Features:</b> Supports ES6+ features while ensuring compatibility with older browsers.
          </li>
          <li>
            <b>Works with Existing JavaScript:</b> TypeScript is a superset of JavaScript, meaning any JavaScript code is also valid TypeScript.
          </li>
        </ul>

        <div className="subHeader">How TypeScript Works</div>
        <div className="description">
          TypeScript code is written in `.ts` files and must be compiled to standard JavaScript using the TypeScript compiler (`tsc`). The compiled JavaScript code can then run in
          any browser or JavaScript runtime.
        </div>

        <div className="subHeader">Example: TypeScript vs. JavaScript</div>
        <div className="description">The following example compares JavaScript and TypeScript in defining a function:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// JavaScript version
function add(a, b) {
    return a + b;
}

console.log(add(5, "10")); // No error, but unexpected result`}</Code>

        <Code language="typescript" style={materialDark} showLineNumbers>{`// TypeScript version
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 10)); // Type safety prevents passing incorrect types`}</Code>

        <div className="subHeader">TypeScript Compilation</div>
        <div className="description">TypeScript code must be compiled to JavaScript before execution. This is done using the TypeScript compiler (`tsc`). Example:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Install TypeScript globally
npm install -g typescript

# Check TypeScript version
tsc --version

# Compile a TypeScript file
tsc index.ts

# The compiled JavaScript file (index.js) can be executed with Node.js
node index.js`}</Code>

        <div className="subHeader">Key Features of TypeScript</div>
        <ul className="list">
          <li>
            <b>Static Typing:</b> Explicit type annotations for variables and function parameters.
          </li>
          <li>
            <b>Interfaces:</b> Define contracts for objects to ensure consistency.
          </li>
          <li>
            <b>Classes and Inheritance:</b> Implements object-oriented programming features.
          </li>
          <li>
            <b>Generics:</b> Provides reusable type-safe components.
          </li>
          <li>
            <b>ES6+ Support:</b> Supports modern JavaScript features like arrow functions, destructuring, and async/await.
          </li>
        </ul>

        <div className="subHeader">Who Uses TypeScript?</div>
        <div className="description">TypeScript is widely used in enterprise and open-source projects. Some popular frameworks and platforms built with TypeScript include:</div>
        <ul className="list">
          <li>
            <b>Angular:</b> TypeScript is the default language for Angular applications.
          </li>
          <li>
            <b>React:</b> Many React projects use TypeScript for better type safety.
          </li>
          <li>
            <b>Node.js:</b> TypeScript enhances backend development with better type management.
          </li>
          <li>
            <b>Microsoft, Google, and Airbnb:</b> Many large companies have adopted TypeScript for production use.
          </li>
        </ul>

        <div className="subHeader">Advantages of Using TypeScript</div>
        <ul className="list">
          <li>
            <b>Fewer Runtime Errors:</b> Type checking prevents many common JavaScript errors.
          </li>
          <li>
            <b>Better Collaboration:</b> Large teams benefit from improved code consistency and documentation.
          </li>
          <li>
            <b>Improved Refactoring:</b> Changing variable and function names is safer with static types.
          </li>
          <li>
            <b>Enhanced Code Readability:</b> Type annotations provide better context for developers.
          </li>
        </ul>

        <div className="subHeader">Limitations of TypeScript</div>
        <ul className="list">
          <li>
            <b>Requires Compilation:</b> TypeScript must be compiled to JavaScript before execution.
          </li>
          <li>
            <b>Learning Curve:</b> Developers familiar with JavaScript may need time to learn TypeScript features.
          </li>
          <li>
            <b>Potential Overhead:</b> In small projects, strict typing may add unnecessary complexity.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use TypeScript in new projects for better maintainability.</li>
          <li>Adopt gradual migration for existing JavaScript projects.</li>
          <li>Leverage TypeScript’s `strict` mode for enhanced type checking.</li>
          <li>Use interfaces and type aliases to define clear data structures.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>TypeScript is a superset of JavaScript that adds static typing and modern features.</li>
          <li>It enhances code quality, maintainability, and debugging experience.</li>
          <li>TypeScript compiles to JavaScript and works with all existing JavaScript frameworks.</li>
          <li>It is widely used in enterprise applications and modern frontend/backend development.</li>
        </ul>

        <Bottom back="/typescript/introduction" next="/typescript/setup" />
      </div>
    </div>
  );
};

export default IntroductionToTypeScript;
