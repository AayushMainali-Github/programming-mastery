import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Math = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Math</div>
        <div className="description">
          JavaScript provides a built-in `Math` object (we will learn what objects are in upcoming chapters) that includes a variety of methods and properties for performing
          mathematical operations. These methods offer functionality for calculations involving numbers, such as rounding, finding absolute values, and performing trigonometric
          operations. Understanding these methods can be highly beneficial for handling complex mathematical tasks in your JavaScript code.
        </div>

        <div className="subHeader">Math.abs()</div>
        <div className="description">
          The `Math.abs()` method returns the absolute value of a number, which is the distance of the number from zero on the number line. It converts negative numbers to positive
          numbers and leaves positive numbers unchanged.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using Math.abs to get the absolute value of a number
const negativeNumber = -10;
const absoluteValue = Math.abs(negativeNumber);
console.log(absoluteValue); // Output: 10
`}</Code>

        <div className="subHeader">Math.ceil()</div>
        <div className="description">
          The `Math.ceil()` method returns the smallest integer greater than or equal to a given number. It effectively rounds the number up to the nearest whole number.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using Math.ceil to round a number up
const number = 4.2;
const roundedUp = Math.ceil(number);
console.log(roundedUp); // Output: 5
`}</Code>

        <div className="subHeader">Math.floor()</div>
        <div className="description">
          The `Math.floor()` method returns the largest integer less than or equal to a given number. It rounds the number down to the nearest whole number.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using Math.floor to round a number down
const number = 4.7;
const roundedDown = Math.floor(number);
console.log(roundedDown); // Output: 4
`}</Code>

        <div className="subHeader">Math.round()</div>
        <div className="description">
          The `Math.round()` method returns the value of a number rounded to the nearest integer. If the decimal part of the number is 0.5 or greater, it rounds up; otherwise, it
          rounds down.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using Math.round to round a number to the nearest integer
const number1 = 4.5;
const rounded1 = Math.round(number1);
console.log(rounded1); // Output: 5

const number2 = 4.4;
const rounded2 = Math.round(number2);
console.log(rounded2); // Output: 4
`}</Code>

        <div className="subHeader">Math.max()</div>
        <div className="description">
          The `Math.max()` method returns the largest of zero or more numbers. It can take any number of arguments and will return the greatest value among them.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using Math.max to find the largest number in a set
const largestNumber = Math.max(1, 5, 10, 2, 8);
console.log(largestNumber); // Output: 10
`}</Code>

        <div className="subHeader">Math.min()</div>
        <div className="description">
          The `Math.min()` method returns the smallest of zero or more numbers. It can take any number of arguments and will return the smallest value among them.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using Math.min to find the smallest number in a set
const smallestNumber = Math.min(1, 5, 10, 2, 8);
console.log(smallestNumber); // Output: 1
`}</Code>

        <div className="subHeader">Math.random()</div>
        <div className="description">
          The `Math.random()` method returns a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive). It is often used for generating random values in various
          applications.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using Math.random to generate a random number
const randomNumber = Math.random();
console.log(randomNumber); // Output: a random number between 0 (inclusive) and 1 (exclusive)
`}</Code>

        <div className="subHeader">Math.pow()</div>
        <div className="description">
          The `Math.pow()` method returns the base raised to the exponent power, that is, base^exponent. It is used to perform exponentiation operations.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using Math.pow to calculate the power of a number
const base = 2;
const exponent = 3;
const power = Math.pow(base, exponent);
console.log(power); // Output: 8
`}</Code>

        <Bottom back="/javascript/functions" next="/javascript/conditionalstatements" />
      </div>
    </div>
  );
};

export default Math;
