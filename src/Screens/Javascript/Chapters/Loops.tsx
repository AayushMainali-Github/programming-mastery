import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Loops = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Loops in JavaScript</div>
        <div className="description">
          Loops are a fundamental programming construct that allow you to execute a block of code repeatedly based on certain conditions. They are essential for tasks that involve
          repetitive actions, such as iterating over arrays, performing calculations, or processing data. JavaScript provides several types of loops, each with its own use cases
          and features. Understanding how to use these loops effectively can help streamline your code and improve performance. This section covers the primary loop types in
          JavaScript, including `for`, `while`, `do...while`, and `for...of`.
        </div>

        <div className="subHeader">for Loop</div>
        <div className="description">
          The `for` loop is one of the most commonly used loops in JavaScript. It allows you to specify the initialization, condition, and increment/decrement in a single line. The
          loop executes as long as the condition evaluates to true. It's particularly useful when the number of iterations is known beforehand.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}
`}</Code>

        <div className="subHeader">while Loop</div>
        <div className="description">
          The `while` loop continues to execute a block of code as long as the specified condition remains true. It is useful when you do not know in advance how many times the
          loop will run, and the loop continues until the condition becomes false.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Basic while loop
let i = 0;
while (i < 5) {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
}
`}</Code>

        <div className="subHeader">do...while Loop</div>
        <div className="description">
          The `do...while` loop is similar to the `while` loop but guarantees that the block of code will execute at least once. The condition is evaluated after the block of code
          runs, so the loop will always run at least once before checking the condition.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Basic do...while loop
let i = 0;
do {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
} while (i < 5);
`}</Code>

        <div className="subHeader">for...of Loop</div>
        <div className="description">
          The `for...of` loop is used to iterate over iterable objects like arrays, strings, or other collections. It provides a clean and concise way to loop through the values of
          an iterable object without needing to manage an index.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Basic for...of loop
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit); // Output: "apple", "banana", "orange"
}
`}</Code>

        <div className="subHeader">for...in Loop</div>
        <div className="description">
          The `for...in` loop is used to iterate over the enumerable properties of an object. It is generally used for looping through object properties rather than array elements.
          This loop will iterate over the keys of the object.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Basic for...in loop
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
    console.log(key, person[key]); // Output: name John, age 30, city New York
}
`}</Code>

        <div className="subHeader">Breaking and Continuing Loops</div>
        <div className="description">
          You can control the flow of loops using `break` and `continue` statements. The `break` statement exits the loop immediately, while the `continue` statement skips the
          current iteration and proceeds to the next one. These statements can be useful for managing complex loop conditions and flow control.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exits the loop when i is 5
    }
    if (i % 2 === 0) {
        continue; // Skips the iteration if i is even
    }
    console.log(i); // Output: 1, 3
}
`}</Code>

        <Bottom back="/javascript/conditionalstatements" next="/javascript/arrays" />
      </div>
    </div>
  );
};

export default Loops;
