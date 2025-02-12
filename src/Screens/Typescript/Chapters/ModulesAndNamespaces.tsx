import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ModulesAndNamespaces = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Modules and Namespaces</div>
        <div className="description">
          TypeScript offers two main ways to organize your code: ES modules and namespaces. ES modules allow you to split your code into separate files using the modern{" "}
          <code>import</code> and <code>export</code> syntax, which is ideal for projects using module loaders or bundlers. On the other hand, namespaces provide a way to organize
          code in a single or multiple files without relying on external modules, and they help prevent naming conflicts by encapsulating code within a specific scope.
        </div>

        <div className="subHeader">ES Modules</div>
        <div className="description">
          ES modules are the standard for modular code in modern TypeScript. They enable you to export functions, classes, and variables from one file and import them into another.
          This helps in maintaining a clean and organized codebase.
        </div>
        <div className="description">For example, consider a simple math module:</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// math.ts - This is an ES module
export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export const PI: number = 3.14159;`}</Code>
        <div className="description">In another file, you can import these functions and constants:</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// main.ts - Importing from the math module
import { add, multiply, PI } from "./math";

console.log("Sum:", add(10, 20));        // Output: Sum: 30
console.log("Product:", multiply(5, 6));   // Output: Product: 30
console.log("PI:", PI);                    // Output: PI: 3.14159`}</Code>

        <div className="subHeader">Namespaces</div>
        <div className="description">
          Namespaces are an alternative way to organize code by grouping related variables, functions, and types under a single name. They are especially useful in projects that do
          not use modules or when you want to avoid polluting the global scope.
        </div>
        <div className="description">For example, you can define a namespace to encapsulate geometric shapes:</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Defining a namespace
namespace Geometry {
  export interface Shape {
    getArea(): number;
  }

  export class Circle implements Shape {
    constructor(public radius: number) {}
    getArea(): number {
      return PI * this.radius * this.radius;
    }
  }

  export class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}
    getArea(): number {
      return this.width * this.height;
    }
  }
}

// Using the namespace to create instances
const circle = new Geometry.Circle(5);
const rectangle = new Geometry.Rectangle(10, 20);

console.log("Circle Area:", circle.getArea());
console.log("Rectangle Area:", rectangle.getArea());`}</Code>
        <div className="description">
          Notice that we used <code>export</code> inside the namespace so that its members are accessible outside the namespace.
        </div>

        <div className="subHeader">When to Use Modules vs. Namespaces</div>
        <div className="description">Modern TypeScript development favors ES modules for their compatibility with bundlers and module loaders. Use namespaces when:</div>
        <ul className="list">
          <li>You are working on a project that does not use a module system.</li>
          <li>You need to organize code in a legacy codebase that lacks module support.</li>
          <li>You want to avoid global namespace pollution without setting up a module loader.</li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Prefer ES modules for new projects, as they are the modern standard and work well with tools like Webpack and ES6 imports.</li>
          <li>Use namespaces only when necessary, such as in non-modular scripts or legacy systems.</li>
          <li>Keep your modules and namespaces focused on specific functionality to maintain a clean code structure.</li>
          <li>Document your modules and namespaces clearly to help other developers understand the code organization.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>
            ES modules use the <code>import</code> and <code>export</code> syntax to organize code into separate files, which is ideal for modular projects.
          </li>
          <li>Namespaces provide an internal mechanism to group related code and prevent naming collisions, useful in non-modular environments.</li>
          <li>Modern development trends favor modules, but namespaces remain useful in specific scenarios.</li>
          <li>Clear organization, documentation, and adherence to best practices ensure a maintainable and scalable codebase.</li>
        </ul>

        <Bottom back="/typescript/type-guards-and-narrowing" next="/typescript/decorators" />
      </div>
    </div>
  );
};

export default ModulesAndNamespaces;
