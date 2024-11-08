import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Operators = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Operators</div>
        <div className="description">
          Operators are fundamental building blocks in JavaScript, enabling developers to perform various operations on variables and values. These operations include arithmetic
          calculations, comparisons, logical operations, and more. Understanding operators and their functionality is crucial for writing effective and efficient code. JavaScript
          provides a wide range of operators that allow you to manipulate data, make decisions, and control the flow of your programs. Operators can be categorized into several
          types based on their functionality, including arithmetic, assignment, comparison, logical, bitwise, and special operators. Each type of operator serves a specific purpose
          and is used in different contexts to achieve the desired outcome in your code.
        </div>

        <div className="subHeader">Arithmetic Operators</div>
        <ul className="list">
          <li>
            <b>Addition ( + )</b>: Adds two operands.
          </li>
          <li>
            <b>Subtraction ( - )</b>: Subtracts the second operand from the first.
          </li>
          <li>
            <b>Multiplication ( * )</b>: Multiplies two operands.
          </li>
          <li>
            <b>Division ( / )</b>: Divides the first operand by the second.
          </li>
          <li>
            <b>Modulus ( % )</b>: Returns the remainder of the division of two operands.
          </li>
          <li>
            <b>Exponentiation ( ** )</b>: Raises the first operand to the power of the second.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let sum = 5 + 3; // 8
            let difference = 5 - 3; // 2
            let product = 5 * 3; // 15
            let quotient = 5 / 3; // 1.6667
            let remainder = 5 % 3; // 2
            let power = 5 ** 3; // 125
    </script>
</html>`}</Code>

        <div className="subHeader">Assignment Operators</div>
        <ul className="list">
          <li>
            <b>Assignment ( = )</b>: Assigns the right operand's value to the left operand.
          </li>
          <li>
            <b>Addition Assignment ( += )</b>: Adds the right operand to the left operand and assigns the result to the left operand.
          </li>
          <li>
            <b>Subtraction Assignment ( -= )</b>: Subtracts the right operand from the left operand and assigns the result to the left operand.
          </li>
          <li>
            <b>Multiplication Assignment ( *= )</b>: Multiplies the left operand by the right operand and assigns the result to the left operand.
          </li>
          <li>
            <b>Division Assignment ( /= )</b>: Divides the left operand by the right operand and assigns the result to the left operand.
          </li>
          <li>
            <b>Modulus Assignment ( %= )</b>: Takes the modulus of the left operand and the right operand and assigns the result to the left operand.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let x = 10;
            x += 5; // x = x + 5
            x -= 3; // x = x - 3
            x *= 2; // x = x * 2
            x /= 2; // x = x / 2
            x %= 2; // x = x % 2
    </script>
</html>`}</Code>

        <div className="subHeader">Comparison Operators</div>
        <ul className="list">
          <li>
            <b>Equal ( == )</b>: Compares two values for equality (type coercion is performed).
          </li>
          <li>
            <b>Strict Equal ( === )</b>: Compares two values for equality without performing type coercion.
          </li>
          <li>
            <b>Not Equal ( != )</b>: Compares two values for inequality (type coercion is performed).
          </li>
          <li>
            <b>Strict Not Equal ( !== )</b>: Compares two values for inequality without performing type coercion.
          </li>
          <li>
            <b>Greater Than ( {">"} )</b>: Checks if the left operand is greater than the right operand.
          </li>
          <li>
            <b>Less Than ( {"<"} )</b>: Checks if the left operand is less than the right operand.
          </li>
          <li>
            <b>Greater Than or Equal ( {">="} )</b>: Checks if the left operand is greater than or equal to the right operand.
          </li>
          <li>
            <b>Less Than or Equal ( {"<="} )</b>: Checks if the left operand is less than or equal to the right operand.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            console.log(5 == "5"); // true
            console.log(5 === "5"); // false
            console.log(5 != "5"); // false
            console.log(5 !== "5"); // true
            console.log(5 > 3); // true
            console.log(5 < 3); // false
            console.log(5 >= 5); // true
            console.log(5 <= 5); // true
            // What is console.log()?
            // It basically prints anything inside those brackets onto the browser console
    </script>
</html>`}</Code>

        <div className="subHeader">Logical and Bitwise Operators</div>
        <ul className="list">
          <li>
            <b>Logical AND ( && )</b>: Returns true if both operands are true.
          </li>
          <li>
            <b>Logical OR ( || )</b>: Returns true if at least one of the operands is true.
          </li>
          <li>
            <b>Logical NOT ( ! )</b>: Inverts the boolean value of the operand.
          </li>
          <li>
            <b>Bitwise AND ( & )</b>: Performs a bitwise AND operation.
          </li>
          <li>
            <b>Bitwise OR ( | )</b>: Performs a bitwise OR operation.
          </li>
          <li>
            <b>Bitwise XOR ( ^ )</b>: Performs a bitwise XOR operation.
          </li>
          <li>
            <b>Bitwise NOT ( ~ )</b>: Inverts the bits of its operand.
          </li>
          <li>
            <b>Left Shift ( {"<<"} )</b>: Shifts the bits of the operand to the left by the specified number of positions.
          </li>
          <li>
            <b>Right Shift ( {">>"} )</b>: Shifts the bits of the operand to the right by the specified number of positions.
          </li>
          <li>
            <b>Unsigned Right Shift ( {">>>"} )</b>: Shifts the bits of the operand to the right by the specified number of positions, filling the leftmost bits with zeros.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            // Logical Operators
            console.log(true && false); // false
            console.log(true || false); // true
            console.log(!true); // false

            // Bitwise Operators
            console.log(5 & 3); // 1 (binary: 0101 & 0011 = 0001)
            console.log(5 | 3); // 7 (binary: 0101 | 0011 = 0111)
            console.log(5 ^ 3); // 6 (binary: 0101 ^ 0011 = 0110)
            console.log(~5); // -6 (binary: ~0101 = 1010, which is -6 in two's complement)
            console.log(5 << 1); // 10 (binary: 0101 << 1 = 1010)
            console.log(5 >> 1); // 2 (binary: 0101 >> 1 = 0010)
            console.log(5 >>> 1); // 2 (binary: 0101 >>> 1 = 0010)
    </script>
</html>`}</Code>

        <Bottom back="/javascript/comments" next="/javascript/stringmethods" />
      </div>
    </div>
  );
};

export default Operators;
