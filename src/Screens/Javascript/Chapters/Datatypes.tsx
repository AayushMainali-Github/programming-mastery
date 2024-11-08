import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Datatypes = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Data Types</div>
        <div className="description">
          JavaScript is a versatile and dynamic programming language that supports a variety of data types to manage and manipulate different kinds of values effectively.
          Understanding these data types is crucial for developers, as it forms the foundation for writing efficient, bug-free, and maintainable code. JavaScript's data types can
          be broadly categorized into primitive types and objects. Each data type serves a unique purpose and offers specific capabilities, allowing developers to handle data
          ranging from simple numerical operations to complex data structures. With the evolution of JavaScript, especially with the introduction of ES6 and subsequent versions,
          the language has expanded its repertoire of data types, providing developers with more tools to write robust applications. This knowledge is essential for leveraging
          JavaScript's full potential in both client-side and server-side development.
        </div>

        <div className="subHeader">Primitive Data Types</div>
        <ul className="list">
          <li>
            <b>Number</b>: Represents both integer and floating-point numbers. JavaScript does not distinguish between different kinds of numbers, treating all numerical values as
            a single type.
          </li>
          <li>
            <b>String</b>: Used to represent text. Strings are sequences of characters enclosed in single quotes, double quotes, or backticks (for template literals introduced in
            ES6).
          </li>
          <li>
            <b>Boolean</b>: Represents a logical entity and can have two values: true or false.
          </li>
          <li>
            <b>Undefined</b>: A variable that has been declared but not assigned a value has the value undefined. This type signifies an uninitialized variable.
          </li>
          <li>
            <b>Null</b>: Represents the intentional absence of any object value. It is often used to indicate that a variable should have no value.
          </li>
          <li>
            <b>BigInt</b>: Introduced in ES11 (ECMAScript 2020), BigInt is used to represent integers that are too large to be represented by the Number type. This allows for the
            handling of high-precision arithmetic.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
        // Number
        let age = 17; // Integer
        let temperature = 98.6; // Floating-point

        // String
        let name = "Aayush Mainali"; // Double quotes
        let country = 'Nepal'; // Single quotes
        let template = \`Hi, \${name}\`; // Template literals (ES6)

        let isMarried = false; // Boolean

        let address; // Undefined

        let netWorth = null; // Null

        let bigIntValue = 12345678901234567890n; // BigInt
    </script>
</html>`}</Code>
        <div className="subHeader">Objects Data Types</div>
        <ul className="list">
          <li>
            <b>Object</b>: Used to store collections of data and more complex entities. Objects are fundamental to JavaScript's nature as an object-oriented language.
          </li>
          <li>
            <b>Array</b>: A special type of object used for storing ordered collections of values. Arrays are particularly useful for handling lists and collections of data.
          </li>
          <li>
            <b>Function</b>: A special type of object designed to perform tasks or calculate values. Functions are first-class citizens in JavaScript, meaning they can be stored in
            variables, passed as arguments, and returned from other functions.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
        // Object
        let person = {          
            name: "Aayush",
            age: 17,
            isStudent: true
        };

        // Array
        let cities = ["Biratnagar", "Kathmandu", "Pokhara"]; 

        // Function
        function greet(name) {  
            return \`Hello, \${name}!\`;
        }
    </script>
</html>`}</Code>
        <Bottom back="/javascript/variables" next="/javascript/comments" />
      </div>
    </div>
  );
};

export default Datatypes;
