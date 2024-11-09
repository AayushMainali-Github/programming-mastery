import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Decorators = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Decorators</div>
        <div className="description">
          Decorators in Python are a powerful tool for modifying the behavior of functions or methods. They allow you to wrap a function or method, adding additional functionality
          before or after the original function is executed.
        </div>

        <div className="subHeader">Basic Structure of a Decorator</div>
        <div className="description">
          A decorator is a function that takes another function as an argument and returns a new function that enhances or modifies the behavior of the original function.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Basic decorator example
def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Before function call
# Hello!
# After function call`}</Code>

        <div className="subHeader">Decorating Functions with Arguments</div>
        <div className="description">If the function being decorated takes arguments, the wrapper function should also accept these arguments.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Decorator for functions with arguments
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before function call")
        result = func(*args, **kwargs)
        print("After function call")
        return result
    return wrapper

@my_decorator
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
# Output:
# Before function call
# Hello, Alice!
# After function call`}</Code>

        <div className="subHeader">Chaining Multiple Decorators</div>
        <div className="description">You can use multiple decorators on a single function. The decorators are applied in the order they appear from top to bottom.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Define two decorators
def decorator_one(func):
    def wrapper():
        print("Decorator One - Before")
        func()
        print("Decorator One - After")
    return wrapper

def decorator_two(func):
    def wrapper():
        print("Decorator Two - Before")
        func()
        print("Decorator Two - After")
    return wrapper

@decorator_one
@decorator_two
def say_hi():
    print("Hi!")

say_hi()
# Output:
# Decorator One - Before
# Decorator Two - Before
# Hi!
# Decorator Two - After
# Decorator One - After`}</Code>

        <div className="subHeader">Using Decorators with Return Values</div>
        <div className="description">When decorating functions that return a value, ensure that the wrapper function also returns the result.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Decorator that returns the result of the function
def double_result(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result * 2
    return wrapper

@double_result
def add(x, y):
    return x + y

print(add(3, 5))  # Output: 16`}</Code>

        <div className="subHeader">Class-Based Decorators</div>
        <div className="description">
          Decorators can also be implemented as classes by defining a <b>__call__()</b> method, which allows the class to be used as a decorator.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Class-based decorator
class MyDecorator:
    def __call__(self, func):
        def wrapper(*args, **kwargs):
            print("Class-based decorator - Before")
            result = func(*args, **kwargs)
            print("Class-based decorator - After")
            return result
        return wrapper

@MyDecorator()
def say_hello():
    print("Hello from class-based decorator!")

say_hello()
# Output:
# Class-based decorator - Before
# Hello from class-based decorator!
# Class-based decorator - After`}</Code>

        <Bottom back="/python/listcomprehensions" next="/python/generators" />
      </div>
    </div>
  );
};

export default Decorators;
