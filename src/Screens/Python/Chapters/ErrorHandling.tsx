import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ErrorHandling = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Error Handling with Try/Except</div>
        <div className="description">
          Error handling is crucial for building robust programs that can gracefully handle unexpected situations. Python provides the <b>try/except</b> block to catch and handle
          exceptions.
        </div>

        <div className="subHeader">Basic Try/Except Structure</div>
        <div className="description">
          The <b>try</b> block lets you test a block of code for errors, while the <b>except</b> block lets you handle the error.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`try:
    # Code that may raise an exception
    num = int(input("Enter a number: "))
    print("The number you entered is:", num)
except ValueError:
    # Code to execute if a ValueError occurs
    print("Invalid input! Please enter a valid number.")`}</Code>

        <div className="subHeader">Catching Multiple Exceptions</div>
        <div className="description">
          You can catch multiple exceptions by specifying multiple <b>except</b> blocks or using a tuple.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`try:
    num = int(input("Enter a number: "))
    result = 10 / num
except ValueError:
    print("Invalid input! Please enter a valid number.")
except ZeroDivisionError:
    print("Division by zero is not allowed.")
except (TypeError, IndexError):
    print("A TypeError or IndexError occurred.")`}</Code>

        <div className="subHeader">
          Using the <b>else</b> Block
        </div>
        <div className="description">
          The <b>else</b> block can be used to define code that runs only if the <b>try</b> block does not raise an exception.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`try:
    num = int(input("Enter a number: "))
    result = 100 / num
except ZeroDivisionError:
    print("Cannot divide by zero.")
else:
    print("The result is:", result)`}</Code>

        <div className="subHeader">
          Using the <b>finally</b> Block
        </div>
        <div className="description">
          The <b>finally</b> block runs regardless of whether an exception was raised or not. This is useful for cleanup actions.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`try:
    file = open("example.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found.")
finally:
    if 'file' in locals() and not file.closed:
        file.close()
        print("File has been closed.")`}</Code>

        <div className="subHeader">Raising Exceptions</div>
        <div className="description">
          You can raise exceptions using the <b>raise</b> keyword to manually trigger an error.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Raising an exception manually
age = -5
if age < 0:
    raise ValueError("Age cannot be negative.")`}</Code>

        <div className="subHeader">Creating Custom Exceptions</div>
        <div className="description">
          You can create custom exception classes by extending the built-in <b>Exception</b> class.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Creating a custom exception
class NegativeValueError(Exception):
    pass

try:
    value = int(input("Enter a positive number: "))
    if value < 0:
        raise NegativeValueError("Negative value entered.")
except NegativeValueError as e:
    print(e)`}</Code>

        <Bottom back="/python/filehandling" next="/python/commentsdocstrings" />
      </div>
    </div>
  );
};

export default ErrorHandling;
