import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AdvancedFunctions = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Advanced Functions</div>
        <div className="description">
          Advanced functions in Python include concepts like lambda functions, decorators, closures, and higher-order functions. These tools provide more functionality and
          flexibility when writing Python programs.
        </div>

        <div className="subHeader">Lambda Functions</div>
        <div className="description">
          A lambda function is a small, anonymous function defined using the <b>lambda</b> keyword. It can have any number of parameters, but it only contains one expression.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Basic lambda function
add = lambda x, y: x + y
print(add(5, 3))  # Output: 8

# Using lambda with map()
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # Output: [1, 4, 9, 16, 25]`}</Code>

        <div className="subHeader">Decorators</div>
        <div className="description">
          Decorators are functions that modify the behavior of other functions or methods. They are used with the <b>@decorator_name</b> syntax.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Basic decorator example
def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@my_decorator
def greet():
    print("Hello!")

greet()
# Output:
# Before function call
# Hello!
# After function call`}</Code>

        <div className="subHeader">Closures</div>
        <div className="description">
          Closures are nested functions that remember the environment in which they were created. They can capture and remember the values of variables from their enclosing scopes.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Closure example
def outer_function(msg):
    def inner_function():
        print(msg)  # 'msg' is remembered from the enclosing scope
    return inner_function

hello_closure = outer_function("Hello, World!")
hello_closure()  # Output: Hello, World!`}</Code>

        <div className="subHeader">Higher-Order Functions</div>
        <div className="description">
          Higher-order functions are functions that can take other functions as arguments or return them as results. Examples include <b>map()</b>, <b>filter()</b>, and{" "}
          <b>reduce()</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using map() as a higher-order function
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)  # Output: [2, 4, 6, 8, 10]

# Using filter() to filter even numbers
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # Output: [2, 4]`}</Code>

        <div className="subHeader">
          Using <b>reduce()</b> from the <b>functools</b> Module
        </div>
        <div className="description">
          The <b>reduce()</b> function applies a rolling computation to a list of items and returns the final result.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`from functools import reduce

# Using reduce() to calculate the product of a list
numbers = [1, 2, 3, 4, 5]
product = reduce(lambda x, y: x * y, numbers)
print(product)  # Output: 120`}</Code>

        <Bottom back="/python/inheritance" next="/python/listcomprehensions" />
      </div>
    </div>
  );
};

export default AdvancedFunctions;
