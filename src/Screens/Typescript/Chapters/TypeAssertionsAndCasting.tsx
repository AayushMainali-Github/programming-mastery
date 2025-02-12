import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const TypeAssertionsAndCasting = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Type Assertions and Casting</div>
        <div className="description">
          Type assertions in TypeScript allow you to tell the compiler what type you expect a value to be, even when its inferred type may be broader or unknown. This chapter
          covers how to use the <code>as</code> syntax and the angle bracket syntax (<code>&lt;Type&gt;</code>) for casting, along with best practices for when to use type
          assertions.
        </div>

        <div className="subHeader">What Are Type Assertions?</div>
        <div className="description">
          Type assertions inform the TypeScript compiler to treat a value as a specific type. They do not perform runtime type checking or conversion; they simply provide a way for
          you to override TypeScript's inferred type when you are certain of the value’s structure.
        </div>

        <div className="subHeader">
          Using the <code>as</code> Syntax
        </div>
        <div className="description">
          The most common way to perform a type assertion in TypeScript is by using the <code>as</code> keyword. This approach is preferred in JSX files to avoid conflicts with JSX
          syntax.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Example: Casting a variable to a specific interface using "as"
interface User {
  id: number;
  name: string;
  email: string;
}

const rawData: any = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

// Assert that rawData is of type User
const user = rawData as User;
console.log(user.name); // Output: Alice`}</Code>

        <div className="subHeader">Using Angle Bracket Syntax</div>
        <div className="description">Alternatively, you can use the angle bracket syntax for type assertions. Note that this syntax cannot be used in JSX files.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Example: Casting using angle brackets
const rawValue: any = "12345";
const numericValue = <number><unknown>rawValue; // Casting rawValue to unknown then to number
console.log(numericValue);`}</Code>
        <div className="description">
          In non-JSX environments, both the <code>as</code> syntax and the angle bracket syntax achieve the same result.
        </div>

        <div className="subHeader">When to Use Type Assertions</div>
        <div className="description">Use type assertions when:</div>
        <ul className="list">
          <li>You are confident of the type of a value, even though TypeScript may infer it as a broader type.</li>
          <li>
            Working with values of type <code>any</code> or unknown, and you need to convert them to a more specific type.
          </li>
          <li>Interacting with third-party libraries where type definitions might be missing or incomplete.</li>
        </ul>

        <div className="subHeader">Example: DOM Manipulation</div>
        <div className="description">When accessing DOM elements, TypeScript often infers a general type. You can use type assertions to cast it to a more specific type:</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Without type assertion, element may be of type HTMLElement | null
const element = document.getElementById("myInput") as HTMLInputElement;
if (element) {
  element.value = "Hello, TypeScript!";
}`}</Code>

        <div className="subHeader">Combining with Non-Null Assertions</div>
        <div className="description">
          Sometimes you know that a value will not be null or undefined. In these cases, you can use the non-null assertion operator (<code>!</code>) along with type assertions:
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Using non-null assertion to inform TypeScript that element is not null
const button = document.getElementById("submitButton")! as HTMLButtonElement;
button.disabled = true;`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use type assertions sparingly and only when necessary; rely on TypeScript's inference when possible.</li>
          <li>
            Prefer the <code>as</code> syntax in projects that use JSX to avoid conflicts.
          </li>
          <li>Always ensure that the value you are asserting truly matches the target type to avoid runtime errors.</li>
          <li>Consider using type guards for safer runtime checks rather than relying solely on assertions.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Type assertions do not change the runtime type of a value; they only affect the compile-time type checking.</li>
          <li>
            The <code>as</code> syntax is the preferred method for type assertions in TypeScript, especially when working with JSX.
          </li>
          <li>Use type assertions when you have more precise knowledge of a value's type than TypeScript's inference.</li>
          <li>Always be cautious and validate your assumptions when using type assertions to prevent potential runtime errors.</li>
        </ul>

        <Bottom back="/typescript/enums-and-literal-types" next="/typescript/classes-and-oop" />
      </div>
    </div>
  );
};

export default TypeAssertionsAndCasting;
