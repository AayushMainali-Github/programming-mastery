import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const TypeInferenceAnnotations = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Type Inference and Type Annotations</div>
        <div className="description">
          TypeScript provides two ways to define types: **type inference**, where TypeScript automatically detects the type, and **type annotations**, where types are explicitly
          declared. Both approaches help improve code quality and maintainability.
        </div>

        <div className="subHeader">What is Type Inference?</div>
        <div className="description">
          Type inference is when TypeScript automatically determines the type of a variable based on the assigned value. This reduces the need for explicit type declarations.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// TypeScript infers the type based on the assigned value
let message = "Hello, TypeScript!"; // Inferred as string
let age = 25; // Inferred as number
let isActive = true; // Inferred as boolean

console.log(message, age, isActive);`}</Code>

        <div className="subHeader">Advantages of Type Inference</div>
        <ul className="list">
          <li>
            <b>Less Boilerplate:</b> Reduces redundant type declarations.
          </li>
          <li>
            <b>Improves Readability:</b> Code remains concise and easy to read.
          </li>
          <li>
            <b>Automatic Type Safety:</b> TypeScript ensures type correctness without explicit annotations.
          </li>
        </ul>

        <div className="subHeader">What are Type Annotations?</div>
        <div className="description">Type annotations explicitly declare the type of a variable, function parameter, or return value.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Explicit type annotations
let name: string = "Alice";
let score: number = 98;
let isCompleted: boolean = false;

console.log(name, score, isCompleted);`}</Code>

        <div className="subHeader">When to Use Type Annotations</div>
        <ul className="list">
          <li>
            <b>When TypeScript Cannot Infer the Type:</b> Complex structures may require explicit types.
          </li>
          <li>
            <b>For Function Parameters and Return Types:</b> Helps enforce type safety in function calls.
          </li>
          <li>
            <b>For Object Properties:</b> Ensures that an object follows a specific shape.
          </li>
        </ul>

        <div className="subHeader">Type Annotations in Functions</div>
        <div className="description">Function parameters and return types should be explicitly annotated for clarity and type safety.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(5, 10)); // Output: 50`}</Code>

        <div className="subHeader">Type Inference in Functions</div>
        <div className="description">TypeScript can infer the return type if it's obvious.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`function add(x: number, y: number) {
  return x + y; // TypeScript infers return type as number
}

console.log(add(10, 20));`}</Code>

        <div className="subHeader">Annotating Object Types</div>
        <div className="description">Object types can be explicitly defined using type annotations.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`let user: { name: string; age: number } = {
  name: "Charlie",
  age: 30
};

console.log(user.name, user.age);`}</Code>

        <div className="subHeader">Using Type Annotations with Arrays</div>
        <div className="description">Arrays should have their element types explicitly defined to prevent incorrect values.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

console.log(numbers, names);`}</Code>

        <div className="subHeader">Combining Type Inference and Type Annotations</div>
        <div className="description">You can combine both approaches by letting TypeScript infer simpler types while explicitly defining complex ones.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Inferred type
let city = "New York"; // Inferred as string

// Explicit type annotation
let population: number = 8419600; 

console.log(city, population);`}</Code>

        <div className="subHeader">Avoiding `any` with Type Annotations</div>
        <div className="description">
          Without annotations, TypeScript assigns the `any` type, which disables type checking. To ensure better type safety, avoid `any` when possible.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`let data: any = "Hello";
data = 42; // Allowed but not recommended

// Better approach:
let fixedData: string = "Hello";
// fixedData = 42; // TypeScript will show an error`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Let TypeScript infer types when possible to reduce redundancy.</li>
          <li>Use explicit type annotations for function parameters, return types, and objects.</li>
          <li>Avoid using `any` unless necessary.</li>
          <li>Use array and object type annotations for better structure and consistency.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>TypeScript infers types automatically based on assigned values.</li>
          <li>Type annotations explicitly declare types for variables, functions, and objects.</li>
          <li>Function return types can be inferred but should be annotated for clarity.</li>
          <li>Combining type inference with explicit annotations improves readability and type safety.</li>
        </ul>

        <Bottom back="/typescript/basic-types" next="/typescript/functions" />
      </div>
    </div>
  );
};

export default TypeInferenceAnnotations;
