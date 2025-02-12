import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BasicTypes = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Basic Types in TypeScript</div>
        <div className="description">
          TypeScript provides a set of built-in types that add type safety to JavaScript code. These types help prevent errors by enforcing strict type checks during development.
        </div>

        <div className="subHeader">What are Basic Types?</div>
        <div className="description">Basic types in TypeScript ensure that variables hold only specific types of values. These include:</div>

        <div className="subHeader">String</div>
        <div className="description">The `string` type is used for text values.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`let firstName: string = "John";
let message: string = \`Hello, \${firstName}!\`;

console.log(message); // Output: Hello, John!`}</Code>

        <div className="subHeader">Number</div>
        <div className="description">The `number` type represents both integer and floating-point numbers.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`let age: number = 30;
let price: number = 99.99;

console.log(age, price); // Output: 30, 99.99`}</Code>

        <div className="subHeader">Boolean</div>
        <div className="description">The `boolean` type holds either `true` or `false`.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`let isCompleted: boolean = true;
let isActive: boolean = false;

console.log(isCompleted, isActive); // Output: true, false`}</Code>

        <div className="subHeader">Null and Undefined</div>
        <div className="description">The `null` and `undefined` types represent the absence of a value.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`let emptyValue: null = null;
let notAssigned: undefined = undefined;

console.log(emptyValue, notAssigned); // Output: null, undefined`}</Code>

        <div className="subHeader">Any</div>
        <div className="description">The `any` type allows a variable to hold values of any type, bypassing TypeScript's strict type checks.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`let dynamicValue: any = "Hello";
dynamicValue = 42;
dynamicValue = true;

console.log(dynamicValue); // Output: true`}</Code>
        <div className="description">Using `any` should be avoided when possible, as it defeats TypeScript’s type safety.</div>

        <div className="subHeader">Void</div>
        <div className="description">The `void` type is used for functions that do not return a value.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`function logMessage(): void {
  console.log("This function does not return anything.");
}

logMessage(); // Output: This function does not return anything.`}</Code>

        <div className="subHeader">Type Inference</div>
        <div className="description">TypeScript can automatically infer types based on assigned values.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`let inferredString = "TypeScript"; // Inferred as string
let inferredNumber = 100; // Inferred as number

console.log(inferredString, inferredNumber);`}</Code>

        <div className="subHeader">Advantages of Using Basic Types</div>
        <ul className="list">
          <li>
            <b>Prevents Runtime Errors:</b> Type checking reduces unexpected behavior.
          </li>
          <li>
            <b>Improves Code Readability:</b> Clear type definitions make code easier to understand.
          </li>
          <li>
            <b>Enhances Auto-Completion:</b> IDEs provide better suggestions and type hints.
          </li>
        </ul>

        <div className="subHeader">Limitations of Basic Types</div>
        <ul className="list">
          <li>
            <b>Strict Type Enforcement:</b> Some flexibility is lost compared to JavaScript.
          </li>
          <li>
            <b>Extra Setup Required:</b> TypeScript needs compilation before execution.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use `string`, `number`, and `boolean` for most variables.</li>
          <li>Avoid `any` unless necessary.</li>
          <li>Use `void` for functions that don’t return values.</li>
          <li>Let TypeScript infer types when possible.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>TypeScript provides basic types like `string`, `number`, and `boolean` to enforce type safety.</li>
          <li>`null` and `undefined` represent missing values.</li>
          <li>`any` allows flexibility but should be avoided when possible.</li>
          <li>`void` is used for functions that do not return values.</li>
        </ul>

        <Bottom back="/typescript/setup" next="/typescript/type-inference" />
      </div>
    </div>
  );
};

export default BasicTypes;
