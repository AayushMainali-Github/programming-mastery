import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Syntax = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Basic Syntax and Structure</div>
        <div className="description">
          Understanding Python's basic syntax and structure is essential for writing effective code. Python’s design philosophy emphasizes readability, making it a popular choice
          for beginners and professionals alike.
        </div>

        <div className="subHeader">Indentation</div>
        <div className="description">
          Python uses indentation to define blocks of code. Unlike many other languages that use curly braces <b>{`{}`}</b>, Python relies on indentation to indicate code blocks.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Correct indentation
if True:
    print("This is properly indented")

# Incorrect indentation will result in an error
# if True:
# print("This will raise an IndentationError")`}</Code>

        <div className="subHeader">Comments</div>
        <div className="description">
          Comments are used to annotate code and are ignored by the Python interpreter. Single-line comments start with the <b>#</b> symbol, while multi-line comments can be
          created using triple quotes.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# This is a single-line comment

'''
This is a multi-line comment.
It can span multiple lines.
'''`}</Code>

        <div className="subHeader">Printing to the Console</div>
        <div className="description">
          The <b>print()</b> function is used to output text or variables to the console.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`print("Hello, Python!")
name = "Alice"
print("Welcome,", name)`}</Code>

        <div className="subHeader">Basic Data Types</div>
        <div className="description">Python has several built-in data types including integers, floats, strings, and booleans.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Integer
x = 10

# Float
y = 3.14

# String
greeting = "Hello, World!"

# Boolean
is_active = True`}</Code>

        <div className="subHeader">Variables</div>
        <div className="description">
          Variables in Python are created by assigning a value to a name using the <b>=</b> operator. Python is dynamically typed, so you don't need to declare the type of a
          variable.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`age = 25
name = "John"
height = 5.9

print("Name:", name)
print("Age:", age)
print("Height:", height)`}</Code>

        <div className="subHeader">Code Blocks</div>
        <div className="description">Python uses indentation to define code blocks. Consistently using four spaces per indentation level is the standard practice.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`if age > 18:
    print("You are an adult.")
    if age > 65:
        print("You are a senior citizen.")`}</Code>

        <div className="subHeader">Case Sensitivity</div>
        <div className="description">
          Python is case-sensitive, meaning that <b>Variable</b> and <b>variable</b> would be considered different identifiers.
        </div>

        <Bottom back="/python/environmentsetup" next="/python/variables" />
      </div>
    </div>
  );
};

export default Syntax;
