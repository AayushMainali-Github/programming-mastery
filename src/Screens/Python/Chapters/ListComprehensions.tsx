import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ListComprehensions = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">List Comprehensions</div>
        <div className="description">
          List comprehensions provide a concise way to create lists in Python. They offer a syntactically elegant alternative to using <b>for</b> loops and <b>append()</b> calls,
          making code easier to read and write.
        </div>

        <div className="subHeader">Basic Syntax</div>
        <div className="description">
          The basic syntax for a list comprehension is: <b>[expression for item in iterable]</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Basic list comprehension
squares = [x**2 for x in range(10)]
print(squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]`}</Code>

        <div className="subHeader">List Comprehension with Condition</div>
        <div className="description">You can add a condition to filter elements in the list comprehension.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# List comprehension with a condition
even_numbers = [x for x in range(20) if x % 2 == 0]
print(even_numbers)  # Output: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]`}</Code>

        <div className="subHeader">Nested List Comprehensions</div>
        <div className="description">List comprehensions can be nested to handle more complex situations, such as creating a matrix or flattening a list of lists.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Creating a 2D matrix with nested list comprehension
matrix = [[x * y for x in range(1, 4)] for y in range(1, 4)]
print(matrix)  # Output: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

# Flattening a list of lists
nested_list = [[1, 2, 3], [4, 5], [6, 7, 8]]
flattened_list = [item for sublist in nested_list for item in sublist]
print(flattened_list)  # Output: [1, 2, 3, 4, 5, 6, 7, 8]`}</Code>

        <div className="subHeader">Using Functions in List Comprehensions</div>
        <div className="description">You can call functions within a list comprehension to manipulate each element.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using a function in a list comprehension
def square(x):
    return x * x

squared_numbers = [square(x) for x in range(5)]
print(squared_numbers)  # Output: [0, 1, 4, 9, 16]`}</Code>

        <div className="subHeader">Comprehensions with Multiple Conditions</div>
        <div className="description">List comprehensions can include multiple conditions for more complex filtering.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# List comprehension with multiple conditions
filtered_list = [x for x in range(50) if x % 2 == 0 and x % 5 == 0]
print(filtered_list)  # Output: [0, 10, 20, 30, 40]`}</Code>

        <div className="subHeader">Dictionary and Set Comprehensions</div>
        <div className="description">Comprehensions are not limited to lists; you can use them to create dictionaries and sets.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Dictionary comprehension
squared_dict = {x: x**2 for x in range(5)}
print(squared_dict)  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Set comprehension
unique_numbers = {x for x in [1, 2, 2, 3, 4, 4, 5]}
print(unique_numbers)  # Output: {1, 2, 3, 4, 5}`}</Code>

        <Bottom back="/python/advancedfunctions" next="/python/decorators" />
      </div>
    </div>
  );
};

export default ListComprehensions;
