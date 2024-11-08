import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const NumberMethods = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Number Methods</div>
        <div className="description">
          Numbers are one of the fundamental data types in JavaScript, representing both integer and floating-point values. JavaScript provides several built-in methods for working
          with numbers, such as mathematical operations, formatting, and conversions. Understanding these methods is essential for performing accurate calculations and formatting
          numeric data effectively in your applications. Here’s a detailed look at some of the most commonly used number methods in JavaScript.
        </div>
        <div className="subHeader">toString()</div>
        <div className="description">
          The toString() method converts a number to a string. This is useful when you need to concatenate numbers with strings or when formatting output. The method accepts an
          optional parameter to specify the base (radix) of the numeral system (e.g., binary, decimal, hexadecimal).
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let num = 255;
            console.log(num.toString());    // Output: "255"
            console.log(num.toString(16)); // Output: "ff" (hexadecimal representation)
    </script>
</html>`}</Code>

        <div className="subHeader">toFixed()</div>
        <div className="description">
          The toFixed() method formats a number using fixed-point notation. It returns a string representing the number to a specified number of decimal places. This is useful for
          rounding numbers and displaying them with a consistent number of decimal places.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let num = 3.14159;
            console.log(num.toFixed(2)); // Output: "3.14"
    </script>
</html>`}</Code>

        <div className="subHeader">toPrecision()</div>
        <div className="description">
          The toPrecision() method formats a number to a specified length, including both the integer and fractional parts. It returns a string representing the number to a
          specified number of significant digits. This is useful for controlling the precision of numeric output.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let num = 123.456;
            console.log(num.toPrecision(4)); // Output: "123.5"
    </script>
</html>`}</Code>

        <div className="subHeader">toExponential()</div>
        <div className="description">
          The toExponential() method returns a string representing the number in exponential notation. It is useful for representing very large or very small numbers in a concise
          format. You can specify the number of digits after the decimal point.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let num = 12345;
            console.log(num.toExponential());    // Output: "1.2345e+4"
            console.log(num.toExponential(2)); // Output: "1.23e+4"
    </script>
</html>`}</Code>

        <div className="subHeader">Number.isInteger()</div>
        <div className="description">
          The Number.isInteger() method determines whether the provided value is an integer. This is useful for validating numeric values and ensuring that they are whole numbers
          without decimal points.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            console.log(Number.isInteger(10));    // Output: true
            console.log(Number.isInteger(10.5)); // Output: false
    </script>
</html>`}</Code>

        <div className="subHeader">Number.parseInt()</div>
        <div className="description">
          The Number.parseInt() method parses a string argument and returns an integer of the specified radix (base). It is useful for converting strings to integers and handling
          different numeral systems.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            console.log(Number.parseInt("123", 10)); // Output: 123
            console.log(Number.parseInt("101", 2));  // Output: 5 (binary to decimal)
    </script>
</html>`}</Code>

        <div className="subHeader">Number.parseFloat()</div>
        <div className="description">
          The Number.parseFloat() method parses a string argument and returns a floating-point number. It is useful for converting strings to floating-point numbers and handling
          decimal values.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            console.log(Number.parseFloat("3.14")); // Output: 3.14
            console.log(Number.parseFloat("10.5abc")); // Output: 10.5
    </script>
</html>`}</Code>

        <div className="subHeader">Number.isNaN()</div>
        <div className="description">
          The Number.isNaN() method determines whether the provided value is NaN (Not-a-Number). This is useful for validating results of operations that might not yield a number
          and ensuring that values are numerical.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            console.log(Number.isNaN(NaN));      // Output: true
            console.log(Number.isNaN(123));     // Output: false
    </script>
</html>`}</Code>

        <Bottom back="/javascript/stringmethods" next="/javascript/dateandtime" />
      </div>
    </div>
  );
};

export default NumberMethods;
