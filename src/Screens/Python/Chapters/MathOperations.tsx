import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MathOperations = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Basic Math Operations</div>
        <div className="description">
          Python provides a variety of built-in operators and functions for performing basic math operations. This includes addition, subtraction, multiplication, division, and
          more complex operations like power and modulus.
        </div>

        <div className="subHeader">Basic Arithmetic Operators</div>
        <div className="description">Python supports the standard arithmetic operators for addition, subtraction, multiplication, and division.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Basic arithmetic operations
a = 10
b = 3

# Addition
print(a + b)  # Output: 13

# Subtraction
print(a - b)  # Output: 7

# Multiplication
print(a * b)  # Output: 30

# Division (results in a float)
print(a / b)  # Output: 3.3333333333333335`}</Code>

        <div className="subHeader">Modulus and Floor Division</div>
        <div className="description">
          The modulus operator <b>%</b> returns the remainder of a division, while floor division <b>{"//"}</b> returns the quotient without the remainder (rounded down to the
          nearest whole number).
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Modulus
print(a % b)  # Output: 1 (remainder of 10 / 3)

# Floor division
print(a // b)  # Output: 3 (10 divided by 3, rounded down)`}</Code>

        <div className="subHeader">Exponentiation</div>
        <div className="description">
          Python uses the <b>**</b> operator for exponentiation.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Exponentiation
print(a ** b)  # Output: 1000 (10 raised to the power of 3)`}</Code>

        <div className="subHeader">Built-in Math Functions</div>
        <div className="description">Python provides several built-in functions to perform mathematical operations.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using built-in math functions
print(abs(-10))     # Output: 10 (absolute value)
print(pow(2, 3))    # Output: 8 (2 raised to the power of 3)
print(round(5.678, 2))  # Output: 5.68 (round to 2 decimal places)

# Maximum and minimum
numbers = [3, 6, 1, 8, 4]
print(max(numbers))  # Output: 8
print(min(numbers))  # Output: 1`}</Code>

        <div className="subHeader">
          The <b>math</b> Module
        </div>
        <div className="description">
          For more advanced mathematical operations, you can use Python's built-in <b>math</b> module.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`import math

# Square root
print(math.sqrt(16))  # Output: 4.0

# Trigonometric functions
print(math.sin(math.pi / 2))  # Output: 1.0 (sine of 90 degrees)

# Constants
print(math.pi)   # Output: 3.141592653589793
print(math.e)    # Output: 2.718281828459045`}</Code>

        <div className="subHeader">Rounding and Precision</div>
        <div className="description">
          You can use <b>round()</b>, <b>math.ceil()</b>, and <b>math.floor()</b> for rounding numbers.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Rounding
print(round(5.678))     # Output: 6
print(math.ceil(4.2))   # Output: 5 (rounds up)
print(math.floor(4.8))  # Output: 4 (rounds down)`}</Code>

        <Bottom back="/python/commentsdocstrings" next="/python/oop" />
      </div>
    </div>
  );
};

export default MathOperations;
