import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Arrays = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Arrays</div>
        <div className="description">
          Arrays are one of the fundamental data structures in JavaScript. They are used to store ordered collections of values, which can be of any type, including numbers,
          strings, objects, or even other arrays. Arrays provide a way to work with lists of data, allowing for efficient indexing, iteration, and manipulation. Understanding
          arrays is crucial for handling and processing collections of data in JavaScript. This section provides an overview of arrays, including their creation, basic operations,
          and common use cases.
        </div>

        <div className="subHeader">Creating Arrays</div>
        <div className="description">
          Arrays can be created using array literals or the Array constructor. The array literal method is more common and preferred for its simplicity and readability. Arrays
          created with the Array constructor can specify the initial length or provide elements to initialize the array. Arrays are flexible and can hold elements of different
          types, making them suitable for a wide range of applications.
        </div>

        <div className="subHeader">Array Literals</div>
        <div className="description">
          An array literal is a comma-separated list of values enclosed in square brackets. This method is the most common way to create arrays. For example, you can create an
          array of numbers or strings directly by listing the values inside square brackets.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Creating an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Creating an array of strings
const fruits = ["apple", "banana", "orange"];

// Creating an array with mixed types
const mixedArray = [1, "hello", true, null, { name: "John" }];
`}</Code>

        <div className="subHeader">Array Constructor</div>
        <div className="description">
          The Array constructor can create arrays in different ways. You can create an empty array, specify an initial length, or provide elements to initialize the array. The
          Array constructor is less commonly used but can be useful for creating arrays programmatically.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Creating an empty array
const emptyArray = new Array();

// Creating an array with a specified length
const lengthArray = new Array(5); // Creates an array with 5 empty slots

// Creating an array with initial values
const initializedArray = new Array("apple", "banana", "orange");
`}</Code>

        <div className="subHeader">Accessing Array Elements</div>
        <div className="description">
          Array elements are accessed using their index, which starts at 0. You can access, modify, and iterate over array elements using their indices. This allows you to work
          with individual items in the array.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const fruits = ["apple", "banana", "orange"];

// Accessing elements
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"

// Modifying elements
fruits[2] = "grape";
console.log(fruits[2]); // Output: "grape"
`}</Code>

        <div className="subHeader">Iterating Over Arrays</div>
        <div className="description">
          You can iterate over arrays using loops such as for, for...of, or array methods like forEach(). Iteration allows you to perform operations on each element of the array,
          such as processing or transforming data.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const fruits = ["apple", "banana", "orange"];

// Using a for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach() method
fruits.forEach(fruit => console.log(fruit));
`}</Code>

        <Bottom back="/javascript/loops" next="/javascript/arraymethods" />
      </div>
    </div>
  );
};

export default Arrays;
