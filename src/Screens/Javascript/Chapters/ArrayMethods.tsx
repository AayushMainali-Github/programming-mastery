import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ArrayMethods = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Array Methods in JavaScript</div>
        <div className="description">
          JavaScript arrays come with a variety of built-in methods that allow you to manipulate, access, and manage array data efficiently. These methods can be used to perform
          operations such as adding, removing, and modifying elements, as well as iterating over arrays. Understanding and utilizing these array methods effectively is essential
          for working with collections of data in JavaScript.
        </div>

        <div className="subHeader">forEach()</div>
        <div className="description">
          The `forEach()` method executes a provided function once for each array element. It is used to iterate over arrays and perform operations on each item. Unlike `map()`, it
          does not create a new array but rather performs side effects such as logging or updating elements.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using forEach to iterate over an array
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number); // Output: 1, 2, 3, 4, 5
});
`}</Code>

        <div className="subHeader">map()</div>
        <div className="description">
          The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array. It is commonly used to transform
          or modify array elements while creating a new array with the same number of elements.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using map to create a new array with transformed elements
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
`}</Code>

        <div className="subHeader">filter()</div>
        <div className="description">
          The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. It is used to select a subset of elements based on a
          condition, leaving out elements that do not meet the criteria.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using filter to create a new array with elements greater than 3
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((number) => number > 3);
console.log(filteredNumbers); // Output: [4, 5]
`}</Code>

        <div className="subHeader">reduce()</div>
        <div className="description">
          The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It is used for accumulating values,
          such as calculating sums or combining array elements into a single result.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using reduce to calculate the sum of an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15
`}</Code>

        <div className="subHeader">find()</div>
        <div className="description">
          The `find()` method returns the first element in the array that satisfies the provided testing function. It is useful for finding a specific element that meets certain
          criteria.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using find to locate the first number greater than 3
const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find((number) => number > 3);
console.log(foundNumber); // Output: 4
`}</Code>

        <div className="subHeader">some()</div>
        <div className="description">
          The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value indicating if any
          element satisfies the condition.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using some to check if any number is greater than 4
const numbers = [1, 2, 3, 4, 5];
const hasNumberGreaterThanFour = numbers.some((number) => number > 4);
console.log(hasNumberGreaterThanFour); // Output: true
`}</Code>

        <div className="subHeader">every()</div>
        <div className="description">
          The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a boolean value indicating if every element
          satisfies the condition.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Using every to check if all numbers are greater than 0
const numbers = [1, 2, 3, 4, 5];
const allNumbersGreaterThanZero = numbers.every((number) => number > 0);
console.log(allNumbersGreaterThanZero); // Output: true
`}</Code>

        <Bottom back="/javascript/arrays" next="/javascript/objects" />
      </div>
    </div>
  );
};

export default ArrayMethods;
