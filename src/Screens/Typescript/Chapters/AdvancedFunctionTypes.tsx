import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AdvancedFunctionTypes = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Advanced Function Types</div>
        <div className="description">
          Advanced function types in TypeScript allow you to create flexible and reusable code by defining multiple function signatures (overloads), working with higher-order
          functions, and properly typing callback functions. This chapter will guide you through these concepts with examples and best practices to ensure robust and type-safe
          functions.
        </div>

        <div className="subHeader">Function Overloads</div>
        <div className="description">
          Function overloading lets you define multiple signatures for a single function. This is useful when a function can handle different types or a varying number of
          parameters.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Overload signatures
function combine(input1: number, input2: number): number;
function combine(input1: string, input2: string): string;
function combine(input1: number[], input2: number[]): number[];

// Implementation signature
function combine(input1: any, input2: any): any {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1 + " " + input2;
  }
  if (Array.isArray(input1) && Array.isArray(input2)) {
    return [...input1, ...input2];
  }
  throw new Error("Invalid arguments");
}

// Examples
console.log(combine(10, 20));             // Output: 30
console.log(combine("Hello", "World"));     // Output: Hello World
console.log(combine([1, 2], [3, 4]));         // Output: [1, 2, 3, 4]`}</Code>
        <div className="description">
          In this example, <code>combine</code> supports adding numbers, concatenating strings, or merging arrays.
        </div>

        <div className="subHeader">Higher-Order Functions</div>
        <div className="description">
          A higher-order function is a function that takes one or more functions as arguments, or returns a function as its result. These functions allow you to abstract common
          patterns of computation, such as filtering or mapping over data.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// A higher-order function that applies a function to each element of an array
function mapArray<T, U>(arr: T[], callback: (item: T, index: number) => U): U[] {
  const result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const squared = mapArray(numbers, (num) => num * num);
console.log("Squared Numbers:", squared); // Output: [1, 4, 9, 16, 25]`}</Code>
        <div className="description">
          Here, the <code>mapArray</code> function is a higher-order function that transforms an array by applying a callback function to each element.
        </div>

        <div className="subHeader">Callback Types</div>
        <div className="description">
          Callback functions are functions passed as parameters to other functions. Properly typing callbacks is essential for ensuring the correctness of higher-order functions.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Define a callback type for processing strings
type StringProcessor = (input: string) => string;

// A function that accepts a callback to process a message
function processMessage(message: string, callback: StringProcessor): string {
  return callback(message);
}

const shout: StringProcessor = (msg) => msg.toUpperCase() + "!!!";
console.log(processMessage("hello", shout)); // Output: HELLO!!!`}</Code>
        <div className="description">This example demonstrates how to define and use a callback type, ensuring that the function provided meets the expected signature.</div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Define clear overload signatures to improve function versatility while ensuring type safety.</li>
          <li>Use higher-order functions to abstract common patterns and avoid code duplication.</li>
          <li>Explicitly type callback functions to ensure that they meet expected parameter and return types.</li>
          <li>Keep function signatures as simple as possible for maintainability.</li>
          <li>Document overloads and callback expectations to enhance code clarity.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Function overloading allows a single function to handle multiple types of input with appropriate return types.</li>
          <li>Higher-order functions enable code reusability by accepting functions as parameters or returning them as results.</li>
          <li>Properly typing callbacks is essential for robust and predictable behavior in higher-order functions.</li>
          <li>Clear function type definitions lead to more maintainable and error-resistant code.</li>
        </ul>

        <Bottom back="/typescript/type-inference-and-type-annotations" next="/typescript/interfaces-and-type-aliases" />
      </div>
    </div>
  );
};

export default AdvancedFunctionTypes;
