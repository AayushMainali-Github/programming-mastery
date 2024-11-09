import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const FunctionsModules = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Functions and Modules</div>
        <div className="description">
          Functions in Python are blocks of code that perform a specific task and can be reused throughout your program. Modules are files that contain Python code, such as
          functions and variables, that can be imported into other Python scripts.
        </div>

        <div className="subHeader">Defining Functions</div>
        <div className="description">
          Functions are defined using the <b>def</b> keyword, followed by the function name and parentheses <b>()</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Defining a function
def greet():
    print("Hello, World!")

# Calling the function
greet()  # Output: Hello, World!`}</Code>

        <div className="subHeader">Function Parameters</div>
        <div className="description">
          You can pass data to functions through parameters. Functions can accept multiple parameters, and you can also set default values for parameters.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Function with parameters
def greet_user(name):
    print(f"Hello, {name}!")

greet_user("Alice")  # Output: Hello, Alice!

# Function with a default parameter
def greet_with_default(name="User"):
    print(f"Hello, {name}!")

greet_with_default()  # Output: Hello, User!`}</Code>

        <div className="subHeader">Return Statement</div>
        <div className="description">
          Functions can return a value using the <b>return</b> statement.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Function with return statement
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # Output: 8`}</Code>

        <div className="subHeader">Lambda Functions</div>
        <div className="description">
          Lambda functions are small, anonymous functions defined using the <b>lambda</b> keyword. They can have any number of parameters but only one expression.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Lambda function
multiply = lambda x, y: x * y
print(multiply(3, 4))  # Output: 12`}</Code>

        <div className="subHeader">Modules</div>
        <div className="description">
          Modules are Python files that contain code like functions and variables. You can import a module into your script using the <b>import</b> keyword.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Importing a module
import math

# Using a function from the math module
print(math.sqrt(16))  # Output: 4.0`}</Code>

        <div className="subHeader">Creating Your Own Module</div>
        <div className="description">
          You can create your own modules by saving Python code in a file with a <b>.py</b> extension and importing it into other files.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# my_module.py
def greet(name):
    return f"Hello, {name}!"

# main.py
import my_module

print(my_module.greet("Alice"))  # Output: Hello, Alice!`}</Code>

        <div className="subHeader">Importing Specific Functions</div>
        <div className="description">
          You can import specific functions or variables from a module using the <b>from ... import ...</b> syntax.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Importing a specific function
from math import pi, factorial

print(pi)           # Output: 3.141592653589793
print(factorial(5)) # Output: 120`}</Code>

        <div className="subHeader">
          Using <b>as</b> to Rename Modules
        </div>
        <div className="description">
          You can use the <b>as</b> keyword to give a module an alias, making it easier to reference in your code.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Renaming a module
import math as m

print(m.sqrt(25))  # Output: 5.0`}</Code>

        <Bottom back="/python/loops" next="/python/lists" />
      </div>
    </div>
  );
};

export default FunctionsModules;
