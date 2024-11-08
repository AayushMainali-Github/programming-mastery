import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Functions = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Functions</div>
        <div className="description">
          Functions are one of the fundamental building blocks in JavaScript. They allow you to encapsulate code into reusable blocks, perform specific tasks, and return values.
          Understanding how to define and use functions is essential for writing efficient and organized code. Here’s an overview of some key aspects of functions in JavaScript.
        </div>

        <div className="subHeader">Function Declaration</div>
        <div className="description">
          A function declaration defines a named function that can be called anywhere in your code. It starts with the `function` keyword, followed by the function name,
          parameters, and a block of code.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
        function greet(name) {
            return "Hello, " + name + "!";
        }
        console.log(greet("Alice")); // Output: Hello, Alice!
    </script>
</html>`}</Code>

        <div className="subHeader">Function Expression</div>
        <div className="description">
          A function expression defines a function as part of an expression. This can be useful for assigning functions to variables or passing functions as arguments to other
          functions. Function expressions can be anonymous or named.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
        const square = function(num) {
            return num * num;
        };
        console.log(square(5)); // Output: 25
    </script>
</html>`}</Code>

        <div className="subHeader">Arrow Functions</div>
        <div className="description">
          Arrow functions provide a more concise syntax for writing functions. They are often used for shorter functions and have lexical `this` binding, which means they inherit
          `this` from their surrounding context.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
        const add = (a, b) => a + b;
        console.log(add(3, 4)); // Output: 7
    </script>
</html>`}</Code>

        <div className="subHeader">Function Parameters</div>
        <div className="description">
          Functions can accept parameters, which are values passed into the function when it is called. Parameters allow functions to operate on different data and perform
          computations or actions based on the input values.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
        function multiply(x, y) {
            return x * y;
        }
        console.log(multiply(6, 7)); // Output: 42
    </script>
</html>`}</Code>

        <div className="subHeader">Default Parameters</div>
        <div className="description">
          Default parameters allow you to set default values for function parameters if no value is provided when the function is called. This helps to avoid errors and provides a
          fallback value.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
        function greet(name = "Guest") {
            return "Hello, " + name + "!";
        }
        console.log(greet()); // Output: Hello, Guest!
    </script>
</html>`}</Code>

        <div className="subHeader">Returning Values</div>
        <div className="description">
          Functions can return values using the `return` statement. The value returned by the function can be used in expressions or assigned to variables. If no `return` statement
          is present, the function returns `undefined` by default.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
        function getAge(yearOfBirth) {
            return new Date().getFullYear() - yearOfBirth;
        }
        console.log(getAge(1990)); // Output: Age based on current year
    </script>
</html>`}</Code>

        <div className="subHeader">Function Scope</div>
        <div className="description">
          Functions create their own scope, which means that variables declared inside a function are not accessible outside of it. This is important for encapsulation and avoiding
          variable name conflicts.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
        function showMessage() {
            let message = "Hello, World!";
            console.log(message);
        }
        showMessage(); // Output: Hello, World!
        console.log(message); // Error: message is not defined
    </script>
</html>`}</Code>

        <Bottom back="/javascript/dateandtime" next="/javascript/math" />
      </div>
    </div>
  );
};

export default Functions;
