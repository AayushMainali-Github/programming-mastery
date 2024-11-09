import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ModulesAndImports = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Modules and Imports</div>
        <div className="description">
          JavaScript modules allow you to break your code into smaller, reusable pieces. Each module can export functions, objects, or primitive values, making it easier to
          maintain and organize your codebase.
        </div>

        <div className="subHeader">What is a Module?</div>
        <div className="description">
          A module is a file containing JavaScript code that is executed in its own scope, not in the global scope. Variables, functions, or classes declared in a module are not
          visible outside unless explicitly exported.
        </div>

        <div className="subHeader">Exporting from a Module</div>
        <div className="description">
          You can export code from a module in two main ways: <b>named exports</b> and <b>default exports</b>.
        </div>
        <div className="subHeader">Named Exports</div>
        <div className="description">Named exports allow you to export multiple values from a module. You must use the same name when importing.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Importing named exports
import { add, subtract } from './mathUtils.js';

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3`}</Code>

        <div className="subHeader">Default Exports</div>
        <div className="description">A module can have only one default export. When importing, you can name the import anything.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// logger.js
export default function log(message) {
  console.log(message);
}

// Importing default export
import log from './logger.js';

log("This is a default export example.");`}</Code>

        <div className="subHeader">Combining Named and Default Exports</div>
        <div className="description">A module can contain both named and default exports. However, it is more common to choose one style per module for clarity.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// mixedExports.js
export const greet = (name) => \`Hello, \${name}\`;
export default function farewell(name) {
  return \`Goodbye, \${name}\`;
}

// Importing both named and default exports
import farewell, { greet } from './mixedExports.js';

console.log(greet("Alice")); // Hello, Alice
console.log(farewell("Bob")); // Goodbye, Bob`}</Code>

        <div className="subHeader">Importing All Exports</div>
        <div className="description">
          You can import all named exports as a single object using the <b>*</b> syntax.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// mathUtils.js (as before)
import * as math from './mathUtils.js';

console.log(math.add(10, 5)); // 15
console.log(math.subtract(10, 5)); // 5`}</Code>

        <div className="subHeader">Re-exporting</div>
        <div className="description">Modules can re-export items that they import, which is useful for creating module aggregators.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// utils.js
export { add, subtract } from './mathUtils.js';
export { default as log } from './logger.js';`}</Code>

        <div className="subHeader">Best Practices for Modules</div>
        <ul className="list">
          <li>
            <b>Use Descriptive Names</b>: When using named exports, choose names that clearly describe the function or value being exported.
          </li>
          <li>
            <b>One Default Export per File</b>: Keep modules simple by having only one default export when applicable.
          </li>
          <li>
            <b>Group Related Code</b>: Use modules to group related functions or classes to keep the code organized and maintainable.
          </li>
          <li>
            <b>Avoid Circular Dependencies</b>: Circular dependencies can cause hard-to-debug issues. Structure your modules to avoid them.
          </li>
        </ul>

        <Bottom back="/javascript/errorhandling" next="/javascript/localstorage" />
      </div>
    </div>
  );
};

export default ModulesAndImports;
