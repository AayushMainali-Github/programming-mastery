import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const InterfacesAndTypeAliases = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Interfaces and Type Aliases</div>
        <div className="description">
          TypeScript offers powerful tools for defining structured types in your code. Two of the most commonly used methods are interfaces and type aliases. They help you create
          contracts for objects, define reusable types, and maintain consistency throughout your application.
        </div>

        <div className="subHeader">What are Interfaces?</div>
        <div className="description">
          Interfaces define the shape of an object by specifying its properties and methods. They are used to enforce contracts on classes or objects, ensuring that they follow a
          certain structure.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet(): string;
}`}</Code>
        <div className="description">
          In the example above, the <code>Person</code> interface specifies that any object of type <code>Person</code> must have <code>firstName</code>, <code>lastName</code>, and{" "}
          <code>age</code> properties, as well as a <code>greet</code> method that returns a string.
        </div>

        <div className="subHeader">Using Interfaces</div>
        <div className="description">Once an interface is defined, it can be used to type-check objects and enforce a consistent structure. For example:</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`const person: Person = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 28,
  greet() {
    return \`Hello, my name is \${this.firstName} \${this.lastName}.\`;
  }
};

console.log(person.greet()); // Output: Hello, my name is Alice Johnson.`}</Code>

        <div className="subHeader">Extending Interfaces</div>
        <div className="description">Interfaces can extend other interfaces to create more complex types. This is useful for building hierarchical type definitions:</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`interface Employee extends Person {
  employeeId: number;
  department: string;
}

const employee: Employee = {
  firstName: "Bob",
  lastName: "Smith",
  age: 35,
  employeeId: 101,
  department: "HR",
  greet() {
    return \`Hi, I am \${this.firstName} from \${this.department}.\`;
  }
};

console.log(employee.greet()); // Output: Hi, I am Bob from HR.`}</Code>

        <div className="subHeader">What are Type Aliases?</div>
        <div className="description">
          Type aliases allow you to create a new name for a type. Unlike interfaces, type aliases can represent primitive types, unions, intersections, tuples, and more.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`type ID = number | string;

let userId: ID;
userId = 101;
userId = "abc123";

// Define an object type using a type alias
type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 20 };
console.log(point); // Output: { x: 10, y: 20 }`}</Code>

        <div className="subHeader">Differences Between Interfaces and Type Aliases</div>
        <div className="description">While both interfaces and type aliases are used to define the shape of data, they have some key differences:</div>
        <ul className="list">
          <li>
            <b>Interfaces:</b> Best for defining object structures and can be extended by other interfaces or classes. They are open-ended and can be merged.
          </li>
          <li>
            <b>Type Aliases:</b> More versatile, as they can alias primitive types, unions, intersections, or tuples. They are closed once defined and cannot be reopened.
          </li>
        </ul>

        <div className="subHeader">Combining Interfaces and Type Aliases</div>
        <div className="description">
          In many cases, you can use interfaces and type aliases together. For example, you might define an interface for an object's structure and then use a type alias to
          represent a union of multiple interfaces.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`interface Base {
  id: number;
}

type Timestamp = string | number;

interface Record extends Base {
  data: string;
  createdAt: Timestamp;
}

const record: Record = {
  id: 1,
  data: "Sample Data",
  createdAt: Date.now(),
};

console.log(record); // Output: { id: 1, data: "Sample Data", createdAt: 1616161616161 }`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use interfaces for public APIs and class contracts to enforce a clear structure.</li>
          <li>Leverage type aliases when working with complex types, unions, or tuples.</li>
          <li>Keep your type definitions organized and well-documented.</li>
          <li>Consider using both interfaces and type aliases together to maximize flexibility.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Interfaces define the structure of objects and can be extended or implemented by classes.</li>
          <li>Type aliases provide a flexible way to assign names to complex types, including unions and tuples.</li>
          <li>Both interfaces and type aliases improve type safety and code maintainability in TypeScript.</li>
          <li>Choosing between them depends on your specific use case and design requirements.</li>
        </ul>

        <Bottom back="/typescript/functions-and-type-annotations" next="/typescript/arrays-and-tuples" />
      </div>
    </div>
  );
};

export default InterfacesAndTypeAliases;
