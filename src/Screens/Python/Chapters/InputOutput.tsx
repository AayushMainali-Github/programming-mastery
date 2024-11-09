import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const InputOutput = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Input and Output</div>
        <div className="description">
          Handling input and output is a fundamental aspect of Python programming. The <b>print()</b> function is used for outputting data, while the <b>input()</b> function is
          used to capture user input.
        </div>

        <div className="subHeader">Printing to the Console</div>
        <div className="description">
          The <b>print()</b> function is used to display information on the console. You can pass multiple arguments, format strings, and print variables.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Printing a simple message
print("Hello, Python!")

# Printing variables
name = "Alice"
age = 25
print("Name:", name, "Age:", age)

# Using formatted strings (f-strings)
print(f"My name is {name} and I am {age} years old.")`}</Code>

        <div className="subHeader">Getting User Input</div>
        <div className="description">
          The <b>input()</b> function reads a line of text input from the user. By default, it returns data as a string, so you may need to convert it to other types as needed.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Capturing user input
user_name = input("Enter your name: ")
print("Hello,", user_name)

# Capturing numerical input and converting it to an integer
age = int(input("Enter your age: "))
print(f"You are {age} years old.")`}</Code>

        <div className="subHeader">Type Conversion</div>
        <div className="description">
          Since the <b>input()</b> function returns data as a string, you need to use type conversion functions like <b>int()</b>, <b>float()</b>, etc., to convert it to other
          types.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Converting input to integer
num1 = int(input("Enter a number: "))
num2 = int(input("Enter another number: "))
sum_result = num1 + num2
print("The sum is:", sum_result)

# Converting input to float
height = float(input("Enter your height in meters: "))
print(f"Your height is {height} meters.")`}</Code>

        <div className="subHeader">Output Formatting</div>
        <div className="description">
          Python provides different ways to format output, such as concatenation, f-strings, and the <b>format()</b> method.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using concatenation
print("Hello " + user_name + ", welcome!")

# Using the format() method
print("Hello {}, you are {} years old.".format(name, age))

# Using f-strings for formatting
print(f"Hello {name}, next year you will be {age + 1} years old.")`}</Code>

        <div className="subHeader">Printing Special Characters</div>
        <div className="description">
          To print special characters or format output, you can use escape sequences like <b>\\n</b> for a new line and <b>\\t</b> for a tab.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Newline and tab characters
print("Hello, World!\\nWelcome to Python programming.")
print("Item\\tPrice")
print("Apple\\t$1.00")`}</Code>

        <Bottom back="/python/variables" next="/python/operators" />
      </div>
    </div>
  );
};

export default InputOutput;
