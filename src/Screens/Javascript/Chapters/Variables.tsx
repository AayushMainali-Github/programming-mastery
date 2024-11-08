import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import VariablePng from "../../../Assets/Javascript/Variables/var.png";

const Variables = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Variables</div>
        <div className="description">
          Variables in JavaScript are essential for storing and managing data within a program. They serve as containers that hold values, which can be referenced, modified, and
          utilized throughout the code. This concept is fundamental to programming, enabling developers to create dynamic and interactive applications. JavaScript supports several
          types of variables, each designed to handle different data types, including numbers, strings, objects, and arrays. The ability to store and manipulate these data types
          allows for the development of complex logic and functionality.
        </div>

        <div className="subHeader">How to define a variable?</div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 65 }}>
          <div className="description">
            Defining a variable in JavaScript is a fundamental aspect of the language, allowing developers to store and manipulate data throughout their code. Variables act as
            containers for storing data values that can be referenced and manipulated. JavaScript, a versatile and dynamic programming language, provides three main keywords for
            declaring variables: var, let, and const. Each keyword has specific characteristics and use cases, making them suitable for different scenarios within a program.
            Understanding the differences and appropriate usage of these keywords is crucial for writing efficient and error-free code. The evolution of JavaScript from ES5 to ES6
            brought significant improvements in how variables are handled, leading to better practices and more robust applications.{" "}
          </div>
          <img className="imgI" style={{ width: 240, height: 240 }} src={VariablePng} alt="Variable" />
        </div>

        <div className="subHeader">Using var</div>
        <div className="description">
          The var keyword is the oldest way to declare a variable in JavaScript. Variables declared with var are function-scoped, meaning they are accessible throughout the
          function in which they are declared. If declared outside of any function, they become globally scoped.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
        <div id="result"></div>
    </body>
    <script>
        var name = "Aayush Mainali";
        var age = 17;
        var result = name + " is " + age + " years old.";
        document.getElementById("result").innerText = result;
    </script>
</html>`}</Code>

        <div className="subHeader">Using let</div>
        <div className="description">
          The let keyword was introduced in ES6 (ECMAScript 2015) and is now the preferred way to declare variables that may change their value. let provides block scope, meaning
          the variable is only accessible within the block where it is defined. This helps to avoid potential errors caused by variable hoisting and scope leakage. We will learn
          about scope and vaiable hoisting in upcoming chapters.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
        <div id="result"></div>
    </body>
    <script>
        let name = "Aayush Mainali";
        let age = 17;
        let result = name + " is " + age + " years old.";
        document.getElementById("result").innerText = result;
    </script>
</html>`}</Code>

        <div className="subHeader">Using const</div>
        <div className="description">
          The const keyword, also introduced in ES6, is used to declare variables that are intended to remain constant. Variables declared with const cannot be reassigned a new
          value after their initial assignment. Like let, const variables are also block-scoped.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
        <div id="result"></div>
    </body>
    <script>
        const pi = 3.14159;
        document.getElementById("result").innerText = "The value of pi is " + pi;
    </script>
</html>`}</Code>

        <div className="subHeader">Best Practises for Defining Variables</div>
        <ul className="list">
          <li>
            <b>Use let and const Instead of var</b>: Due to the block-scoping of let and const, it is recommended to use these keywords over var to prevent issues related to
            variable hoisting and global scope pollution.
          </li>
          <li>
            <b>Prefer const for Constants</b>: Use const for variables that should not change their value. This makes your code more predictable and easier to debug.
          </li>
          <li>
            <b>Descriptive Names</b>: Choose meaningful and descriptive names for your variables to make your code more readable and maintainable.
          </li>
          <li>
            <b>Initialize Variables</b>: Always initialize your variables at the time of declaration to avoid unintended undefined values.
          </li>
        </ul>
        <Bottom back="/javascript/introduction" next="/javascript/datatypes" />
      </div>
    </div>
  );
};

export default Variables;
