import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ConditionalStatements = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Conditional Statements in JavaScript</div>
        <div className="description">
          Conditional statements are a fundamental aspect of programming that allow you to execute code based on certain conditions. They enable you to control the flow of your
          program by making decisions and executing different blocks of code depending on whether a condition is true or false. JavaScript provides several ways to handle
          conditional logic, including `if`, `else if`, `else`, `switch`, and ternary operators. Mastering these conditional statements is crucial for creating dynamic and
          interactive applications.
        </div>

        <div className="subHeader">if Statement</div>
        <div className="description">
          The `if` statement is the simplest form of conditional statement. It allows you to execute a block of code only if a specified condition evaluates to true. If the
          condition is false, the code inside the `if` block is skipped.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Basic if statement
let number = 10;
if (number > 5) {
    console.log("Number is greater than 5"); // Output: "Number is greater than 5"
}
`}</Code>

        <div className="subHeader">if...else Statement</div>
        <div className="description">
          The `if...else` statement extends the `if` statement by providing an alternative block of code to execute when the condition evaluates to false. This allows you to handle
          both true and false scenarios.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Basic if...else statement
let number = 3;
if (number > 5) {
    console.log("Number is greater than 5");
} else {
    console.log("Number is 5 or less"); // Output: "Number is 5 or less"
}
`}</Code>

        <div className="subHeader">if...else if...else Statement</div>
        <div className="description">
          The `if...else if...else` statement allows you to check multiple conditions sequentially. If the first condition is false, it checks the next condition, and so on. The
          `else` block at the end handles all cases where none of the preceding conditions are true.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Basic if...else if...else statement
let number = 7;
if (number > 10) {
    console.log("Number is greater than 10");
} else if (number > 5) {
    console.log("Number is greater than 5 but 10 or less"); // Output: "Number is greater than 5 but 10 or less"
} else {
    console.log("Number is 5 or less");
}
`}</Code>

        <div className="subHeader">switch Statement</div>
        <div className="description">
          The `switch` statement provides a way to handle multiple conditions based on the value of a single variable. It evaluates the expression and executes the block of code
          that matches the corresponding case. The `default` case is executed if none of the specified cases match.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Basic switch statement
let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday"); // Output: "Tuesday"
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Weekend");
}
`}</Code>

        <div className="subHeader">ternary Operator</div>
        <div className="description">
          The ternary operator is a shorthand for the `if...else` statement. It allows you to perform a simple conditional check and return one of two values based on whether the
          condition is true or false. The syntax is `condition ? valueIfTrue : valueIfFalse`.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Basic ternary operator
let number = 4;
let result = number > 5 ? "Greater than 5" : "5 or less";
console.log(result); // Output: "5 or less"
`}</Code>

        <div className="subHeader">Logical Operators</div>
        <div className="description">
          Logical operators are used in conjunction with conditional statements to combine or negate conditions. The most common logical operators are `&&` (AND), `||` (OR), and
          `!` (NOT). These operators help you create more complex conditions and control the flow of your program more precisely.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using logical operators
let number = 8;
if (number > 5 && number < 10) {
    console.log("Number is between 5 and 10"); // Output: "Number is between 5 and 10"
}

if (number < 5 || number > 10) {
    console.log("Number is either less than 5 or greater than 10");
} else {
    console.log("Number is between 5 and 10"); // Output: "Number is between 5 and 10"
}
`}</Code>

        <Bottom back="/javascript/math" next="/javascript/loops" />
      </div>
    </div>
  );
};

export default ConditionalStatements;
