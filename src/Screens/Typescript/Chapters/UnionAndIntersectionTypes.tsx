import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const UnionAndIntersectionTypes = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Union and Intersection Types</div>
        <div className="description">
          TypeScript offers powerful ways to combine and manipulate types using union and intersection operators. Union types (using the vertical bar, <code>|</code>) allow a
          variable to hold one of several types, while intersection types (using the ampersand, <code>&amp;</code>) merge multiple types into one. These techniques enable flexible
          and robust type definitions for complex applications.
        </div>

        <div className="subHeader">Union Types</div>
        <div className="description">
          A union type allows a variable to accept values of different types. It is defined using the <code>|</code> operator.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// A variable that can be either a number or a string
let userId: number | string;
userId = 101;       // Valid
userId = "ABC101";  // Also valid

// Function that accepts a union type as a parameter
function formatId(id: number | string): string {
  return \`ID: \${id}\`;
}

console.log(formatId(123));       // Output: ID: 123
console.log(formatId("XYZ789"));    // Output: ID: XYZ789`}</Code>

        <div className="subHeader">Intersection Types</div>
        <div className="description">
          Intersection types combine multiple types into a single type using the <code>&amp;</code> operator. This ensures that an object meets all of the specified type
          requirements.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Define two interfaces
interface HasName {
  name: string;
}

interface HasAge {
  age: number;
}

// Combine interfaces using an intersection type
type Person = HasName & HasAge;

const person: Person = {
  name: "Alice",
  age: 30
};

console.log(\`Name: \${person.name}, Age: \${person.age}\`); // Output: Name: Alice, Age: 30`}</Code>

        <div className="subHeader">Combining Union and Intersection Types</div>
        <div className="description">You can also combine union and intersection types to create more complex type definitions.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Define an interface for business-related details
interface Business {
  company: string;
}

// Create an intersection type that combines properties from multiple interfaces
type Employee = HasName & HasAge & Business;

const employee: Employee = {
  name: "Bob",
  age: 40,
  company: "Tech Corp"
};

console.log(employee); // Output: { name: "Bob", age: 40, company: "Tech Corp" }`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use union types to allow flexibility when a value can be one of several types.</li>
          <li>Use intersection types to combine multiple type definitions into a single comprehensive type.</li>
          <li>Keep type definitions clear and avoid overly complex combinations to maintain readability.</li>
          <li>Leverage type aliases to simplify and reuse union or intersection types.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>
            Union types (<code>|</code>) allow variables to hold values of multiple possible types.
          </li>
          <li>
            Intersection types (<code>&amp;</code>) combine multiple types into one, requiring all properties to be present.
          </li>
          <li>Combining these techniques enhances flexibility and robustness in your type system.</li>
          <li>Well-defined type combinations improve code reliability and developer productivity.</li>
        </ul>

        <Bottom back="/typescript/arrays-and-tuples" next="/typescript/enums-and-literal-types" />
      </div>
    </div>
  );
};

export default UnionAndIntersectionTypes;
