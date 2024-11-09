import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Variables = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Variables and Data Types</div>
        <div className="description">
          Variables are used to store data in Python, and the data stored can be of various types. Python is dynamically typed, which means you don’t need to declare the type of a
          variable; it is inferred during runtime.
        </div>

        <div className="subHeader">Creating Variables</div>
        <div className="description">
          Variables are created by assigning a value using the <b>=</b> operator.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Creating variables
name = "Alice"
age = 30
height = 5.7

print("Name:", name)
print("Age:", age)
print("Height:", height)`}</Code>

        <div className="subHeader">Basic Data Types</div>
        <div className="description">Python has several built-in data types that you will use frequently. Here are some of the most common ones:</div>
        <ul className="list">
          <li>
            <b>Integers</b>: Whole numbers, e.g., <b>10, -5</b>.
          </li>
          <li>
            <b>Floats</b>: Numbers with decimal points, e.g., <b>3.14, -2.5</b>.
          </li>
          <li>
            <b>Strings</b>: A sequence of characters, e.g., <b>"Hello, World!"</b>.
          </li>
          <li>
            <b>Booleans</b>: Logical values, either <b>True</b> or <b>False</b>.
          </li>
        </ul>
        <Code language="python" style={materialDark} showLineNumbers>{`# Examples of different data types
integer_value = 42
float_value = 3.14159
string_value = "Python"
boolean_value = True

print(type(integer_value))  # Output: <class 'int'>
print(type(float_value))    # Output: <class 'float'>
print(type(string_value))   # Output: <class 'str'>
print(type(boolean_value))  # Output: <class 'bool'>`}</Code>

        <div className="subHeader">Reassigning Variables</div>
        <div className="description">
          Variables in Python can be reassigned to different data types. This makes Python flexible but requires you to keep track of variable types during development.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`x = 10
print(x)  # Output: 10

x = "Now I'm a string"
print(x)  # Output: Now I'm a string`}</Code>

        <div className="subHeader">Naming Conventions</div>
        <div className="description">Variable names should be descriptive and follow these rules:</div>
        <ul className="list">
          <li>Variable names must start with a letter or an underscore (_).</li>
          <li>
            They can only contain alphanumeric characters and underscores (e.g., <b>my_variable</b>).
          </li>
          <li>
            Variable names are case-sensitive (<b>myVariable</b> and <b>myvariable</b> are different).
          </li>
        </ul>
        <Code language="python" style={materialDark} showLineNumbers>{`# Valid variable names
user_name = "John"
_age = 25
PI = 3.14159

# Invalid variable names (will raise a SyntaxError)
# 2user = "Alice"
# user-name = "Bob"`}</Code>

        <div className="subHeader">Constants</div>
        <div className="description">
          By convention, constants are written in uppercase letters. While Python doesn’t have built-in support for constants, developers use naming conventions to indicate that a
          variable should not change.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Constants by convention
GRAVITY = 9.81
SPEED_OF_LIGHT = 299792458`}</Code>

        <Bottom back="/python/syntax" next="/python/inputoutput" />
      </div>
    </div>
  );
};

export default Variables;
