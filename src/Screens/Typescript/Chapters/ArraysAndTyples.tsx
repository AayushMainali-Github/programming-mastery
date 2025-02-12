import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ArraysAndTuples = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Arrays and Tuples</div>
        <div className="description">
          TypeScript provides powerful features for working with arrays and tuples. You can strongly type collections to ensure that they contain only the expected values.
          Additionally, readonly arrays allow you to prevent modifications to the data, enforcing immutability and making your code more robust.
        </div>

        <div className="subHeader">Working with Arrays</div>
        <div className="description">
          Arrays are ordered collections of elements of the same type. TypeScript offers two syntaxes for array types: the <code>Type[]</code> syntax and the{" "}
          <code>Array&lt;Type&gt;</code> syntax.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Using Type[] syntax
let numbers: number[] = [1, 2, 3, 4, 5];

// Using Array<Type> syntax
let fruits: Array<string> = ["Apple", "Banana", "Cherry"];

console.log("Numbers:", numbers);
console.log("Fruits:", fruits);`}</Code>

        <div className="subHeader">Working with Tuples</div>
        <div className="description">
          Tuples allow you to store a fixed number of elements of different types in a single array-like structure. They are useful when you want to represent a collection of
          related values with a known structure.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Defining a tuple with a string and a number
let person: [string, number] = ["Alice", 30];

// Accessing tuple elements
let name: string = person[0];
let age: number = person[1];

console.log(\`Name: \${name}, Age: \${age}\`);`}</Code>

        <div className="subHeader">Readonly Arrays</div>
        <div className="description">
          Readonly arrays prevent modifications after creation, ensuring that the data remains immutable. This is particularly useful when you need to guarantee that an array's
          values will not change.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Declaring a readonly array
let immutableNumbers: ReadonlyArray<number> = [10, 20, 30];

// Attempting to modify the array results in a compile-time error
// immutableNumbers.push(40); // Error: Property 'push' does not exist on type 'readonly number[]'.

console.log("Immutable Numbers:", immutableNumbers);`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use arrays for collections of elements with the same type.</li>
          <li>Utilize tuples when you need to store a fixed number of elements of different types.</li>
          <li>Apply readonly arrays to enforce immutability and avoid unintended mutations.</li>
          <li>Always annotate your array and tuple types to ensure type safety and improve code readability.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>
            Arrays in TypeScript can be defined using <code>Type[]</code> or <code>Array&lt;Type&gt;</code>.
          </li>
          <li>Tuples provide a way to store a fixed collection of heterogeneous values.</li>
          <li>Readonly arrays help maintain immutability, preventing accidental data modifications.</li>
          <li>Explicit type annotations improve code clarity and catch errors at compile time.</li>
        </ul>

        <Bottom back="/typescript/functions-and-type-annotations" next="/typescript/union-and-intersection-types" />
      </div>
    </div>
  );
};

export default ArraysAndTuples;
