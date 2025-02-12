import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const FunctionsAndTypeAnnotations = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Functions and Type Annotations</div>
        <div className="description">
          In TypeScript, you can explicitly define the types of function parameters and return values. This not only improves code readability and maintainability but also helps
          catch errors at compile time. In this chapter, we’ll cover how to define functions with return types, parameter types, as well as optional and default parameters. We’ll
          also explore arrow functions, and even function overloading for more advanced use cases.
        </div>

        <div className="subHeader">Defining Functions with Parameter and Return Types</div>
        <div className="description">
          Explicitly annotating function parameters and return types ensures that functions are used correctly. For example, a simple addition function can be defined as:
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`function add(a: number, b: number): number {
  return a + b;
}

const result: number = add(10, 5);
console.log("Sum:", result); // Output: Sum: 15`}</Code>
        <div className="description">
          Here, both the parameters and the return value are strictly typed as <code>number</code>.
        </div>

        <div className="subHeader">Optional Parameters</div>
        <div className="description">Optional parameters are denoted with a question mark (?). They allow functions to be called without providing every argument.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`function greet(name: string, greeting?: string): string {
  return greeting ? \`\${greeting}, \${name}!\` : \`Hello, \${name}!\`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Hi")); // Output: Hi, Bob!`}</Code>

        <div className="subHeader">Default Parameters</div>
        <div className="description">Default parameters assign a fallback value if no value is provided. This makes your functions more flexible.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`function multiply(a: number, b: number = 2): number {
  return a * b;
}

console.log(multiply(5));    // Output: 10
console.log(multiply(5, 3)); // Output: 15`}</Code>

        <div className="subHeader">Combining Optional and Default Parameters</div>
        <div className="description">You can combine optional and default parameters for even greater flexibility.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`function buildMessage(name: string, greeting?: string, punctuation: string = "!"): string {
  return \`\${greeting ? greeting : "Hello"}, \${name}\${punctuation}\`;
}

console.log(buildMessage("Charlie")); // Output: Hello, Charlie!
console.log(buildMessage("Dave", "Good morning")); // Output: Good morning, Dave!
console.log(buildMessage("Eve", "Hi", "!!!")); // Output: Hi, Eve!!!`}</Code>

        <div className="subHeader">Arrow Functions and Type Annotations</div>
        <div className="description">
          Arrow functions provide a concise syntax for writing functions. You can annotate their parameters and return types just like regular functions.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`const subtract = (a: number, b: number): number => {
  return a - b;
};

console.log("Subtraction:", subtract(10, 4)); // Output: Subtraction: 6

// Concise version for single expression:
const divide = (a: number, b: number): number => a / b;
console.log("Division:", divide(20, 4)); // Output: Division: 5`}</Code>

        <div className="subHeader">Function Overloading</div>
        <div className="description">
          TypeScript supports function overloading, where a function can have multiple signatures. This is useful when a function should behave differently based on input types.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Overload signatures
function combine(input1: number, input2: number): number;
function combine(input1: string, input2: string): string;

// Implementation signature
function combine(input1: any, input2: any): any {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else if (typeof input1 === "string" && typeof input2 === "string") {
    return input1 + " " + input2;
  }
}

console.log(combine(10, 20));         // Output: 30
console.log(combine("Hello", "World")); // Output: Hello World`}</Code>
        <div className="description">
          In this example, the <code>combine</code> function supports both numerical addition and string concatenation.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always annotate function parameters and return types to maintain clarity and catch errors early.</li>
          <li>Use optional parameters when certain arguments are not required.</li>
          <li>Provide default parameter values to simplify function calls.</li>
          <li>Leverage arrow functions for concise syntax, especially for inline callbacks.</li>
          <li>Use function overloading sparingly and only when multiple behaviors are needed for a single function name.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Type annotations help ensure functions are used correctly, reducing runtime errors.</li>
          <li>Optional and default parameters add flexibility to function calls.</li>
          <li>Arrow functions offer a concise syntax with full type support.</li>
          <li>Function overloading enables multiple type signatures for improved API design.</li>
        </ul>

        <Bottom back="/typescript/type-inference-and-type-annotations" next="/typescript/interfaces" />
      </div>
    </div>
  );
};

export default FunctionsAndTypeAnnotations;
