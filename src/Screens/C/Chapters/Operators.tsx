import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const COperators = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Operators in C</div>
        <div className="description">
          Operators are symbols that tell the compiler to perform specific operations on variables and values. In C, operators are used to perform various computations and logical
          operations.
        </div>

        <div className="subHeader">Types of Operators</div>
        <div className="description">C supports a variety of operators, including:</div>
        <ul className="list">
          <li>
            <b>Arithmetic Operators</b>
          </li>
          <li>
            <b>Relational Operators</b>
          </li>
          <li>
            <b>Logical Operators</b>
          </li>
          <li>
            <b>Bitwise Operators</b>
          </li>
          <li>
            <b>Assignment Operators</b>
          </li>
          <li>
            <b>Increment and Decrement Operators</b>
          </li>
        </ul>

        <div className="subHeader">1. Arithmetic Operators</div>
        <div className="description">These operators are used for mathematical operations:</div>
        <ul className="list">
          <li>
            <b>+</b>: Addition
          </li>
          <li>
            <b>-</b>: Subtraction
          </li>
          <li>
            <b>*</b>: Multiplication
          </li>
          <li>
            <b>/</b>: Division
          </li>
          <li>
            <b>%</b>: Modulus (remainder)
          </li>
        </ul>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    int a = 10, b = 3;
    printf("Addition: %d\\n", a + b);      // Output: 13
    printf("Subtraction: %d\\n", a - b);   // Output: 7
    printf("Multiplication: %d\\n", a * b); // Output: 30
    printf("Division: %d\\n", a / b);       // Output: 3
    printf("Modulus: %d\\n", a % b);        // Output: 1

    return 0;
}`}</Code>

        <div className="subHeader">2. Relational Operators</div>
        <div className="description">Relational operators compare two values and return a boolean result (true or false).</div>
        <ul className="list">
          <li>
            <b>==</b>: Equal to
          </li>
          <li>
            <b>!=</b>: Not equal to
          </li>
          <li>
            <b>&gt;</b>: Greater than
          </li>
          <li>
            <b>&lt;</b>: Less than
          </li>
          <li>
            <b>&gt;=</b>: Greater than or equal to
          </li>
          <li>
            <b>&lt;=</b>: Less than or equal to
          </li>
        </ul>
        <Code language="c" style={materialDark} showLineNumbers>{`int x = 5, y = 10;
printf("x == y: %d\\n", x == y); // Output: 0 (false)
printf("x != y: %d\\n", x != y); // Output: 1 (true)`}</Code>

        <div className="subHeader">3. Logical Operators</div>
        <div className="description">Logical operators are used to combine conditional statements.</div>
        <ul className="list">
          <li>
            <b>&&</b>: Logical AND
          </li>
          <li>
            <b>||</b>: Logical OR
          </li>
          <li>
            <b>!</b>: Logical NOT
          </li>
        </ul>
        <Code language="c" style={materialDark} showLineNumbers>{`int a = 1, b = 0;
printf("a && b: %d\\n", a && b); // Output: 0 (false)
printf("a || b: %d\\n", a || b); // Output: 1 (true)
printf("!a: %d\\n", !a);         // Output: 0 (false)`}</Code>

        <div className="subHeader">4. Assignment Operators</div>
        <div className="description">Assignment operators are used to assign values to variables.</div>
        <ul className="list">
          <li>
            <b>=</b>: Simple assignment
          </li>
          <li>
            <b>+=</b>: Add and assign
          </li>
          <li>
            <b>-=</b>: Subtract and assign
          </li>
          <li>
            <b>*=</b>: Multiply and assign
          </li>
          <li>
            <b>/=</b>: Divide and assign
          </li>
          <li>
            <b>%=</b>: Modulus and assign
          </li>
        </ul>
        <Code language="c" style={materialDark} showLineNumbers>{`int num = 10;
num += 5; // num = num + 5 -> num = 15
printf("Updated num: %d\\n", num); // Output: 15`}</Code>

        <div className="subHeader">5. Increment and Decrement Operators</div>
        <div className="description">These operators increase or decrease a variable's value by one.</div>
        <ul className="list">
          <li>
            <b>++</b>: Increment
          </li>
          <li>
            <b>--</b>: Decrement
          </li>
        </ul>
        <Code language="c" style={materialDark} showLineNumbers>{`int counter = 5;
printf("Counter: %d\\n", counter++); // Output: 5 (then counter becomes 6)
printf("Counter: %d\\n", ++counter); // Output: 7 (counter is incremented before printing)`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            <b>Use parentheses</b> to make complex expressions more readable.
          </li>
          <li>
            <b>Avoid division by zero</b> when using the division and modulus operators.
          </li>
          <li>
            <b>Understand operator precedence</b> to avoid unexpected results in complex expressions.
          </li>
        </ul>

        <Bottom back="/c/inputoutput" next="/c/conditionalstatements" />
      </div>
    </div>
  );
};

export default COperators;
