import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const GenericsInTypeScript = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Generics in TypeScript</div>
        <div className="description">
          Generics allow you to write reusable, flexible functions, interfaces, and classes that can work with a variety of types while maintaining type safety. In this chapter,
          we’ll explore how to create generic functions, define generic interfaces, and build generic classes, along with advanced generic constraints.
        </div>

        <div className="subHeader">Generic Functions</div>
        <div className="description">
          Generic functions accept parameters of various types while preserving type information. They let you write a single function that works with different data types.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// A simple generic function that returns the input
function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>("Hello");
const output2 = identity<number>(123);
console.log("Identity outputs:", output1, output2); // Output: Hello, 123`}</Code>

        <div className="subHeader">Generic Interfaces</div>
        <div className="description">
          Generic interfaces allow you to create contracts for functions or objects that work with various types. They provide a template that can be reused with different type
          parameters.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Define a generic interface for an identity function
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

const myIdentity: GenericIdentityFn<number> = identity;
console.log("Generic Interface output:", myIdentity(42)); // Output: 42`}</Code>

        <div className="subHeader">Generic Classes</div>
        <div className="description">
          Generic classes enable you to build components that can operate on different types. They provide a blueprint for creating objects that hold values of a specific type.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
  
  constructor(zeroValue: T, addFunction: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = addFunction;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);
console.log("Generic Class output:", myGenericNumber.add(10, 20)); // Output: 30`}</Code>

        <div className="subHeader">Advanced Generic Constraints</div>
        <div className="description">
          You can apply constraints to generics to enforce that the type parameter satisfies certain criteria. This ensures that the generic type has specific properties.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Define an interface with a length property
interface Lengthwise {
  length: number;
}

// The generic function only accepts types that extend Lengthwise
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log("Length:", arg.length);
  return arg;
}

loggingIdentity("Hello, world!"); // Works because string has a length property
// loggingIdentity(123); // Error: number does not have a length property`}</Code>

        <div className="subHeader">Combining Generics with Interfaces</div>
        <div className="description">You can combine generics with interfaces to create reusable and flexible contracts for complex data structures.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

const response: ApiResponse<string[]> = {
  status: 200,
  message: "Success",
  data: ["Item 1", "Item 2", "Item 3"]
};

console.log("API Response:", response);`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use generics to create flexible and reusable code components without sacrificing type safety.</li>
          <li>Apply generic constraints when you need to enforce that a type has certain properties.</li>
          <li>Avoid over-complicating generic types; keep them as simple and focused as possible.</li>
          <li>Leverage generic interfaces and classes to promote code reuse across your application.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Generics enable functions, interfaces, and classes to work with multiple data types while retaining type information.</li>
          <li>They provide flexibility and reusability without compromising type safety.</li>
          <li>Advanced constraints allow you to enforce specific properties on generic types.</li>
          <li>Combining generics with interfaces and classes leads to scalable and maintainable code architectures.</li>
        </ul>

        <Bottom back="/typescript/interfaces-and-type-aliases" next="/typescript/type-guards-and-narrowing" />
      </div>
    </div>
  );
};

export default GenericsInTypeScript;
