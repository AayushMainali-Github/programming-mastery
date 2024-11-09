import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CustomExceptions = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Custom Exceptions</div>
        <div className="description">
          In Python, you can create your own custom exceptions to handle specific error cases in a more descriptive manner. Custom exceptions are useful for making your code more
          readable and for creating meaningful error messages.
        </div>

        <div className="subHeader">Creating a Custom Exception</div>
        <div className="description">
          To create a custom exception, define a new class that inherits from the built-in <b>Exception</b> class.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Defining a custom exception
class CustomError(Exception):
    """A custom exception for specific error handling."""
    pass

# Using the custom exception
try:
    raise CustomError("This is a custom exception")
except CustomError as e:
    print(e)  # Output: This is a custom exception`}</Code>

        <div className="subHeader">Adding Additional Information</div>
        <div className="description">You can add more attributes and methods to your custom exception class to include additional context or information.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Custom exception with additional attributes
class ValidationError(Exception):
    def __init__(self, message, code):
        super().__init__(message)
        self.code = code

# Using the custom exception with additional attributes
try:
    raise ValidationError("Invalid input detected", 400)
except ValidationError as e:
    print(f"Error: {e}, Code: {e.code}")
# Output: Error: Invalid input detected, Code: 400`}</Code>

        <div className="subHeader">Creating Exception Hierarchies</div>
        <div className="description">You can create a hierarchy of exceptions by creating multiple custom exception classes that inherit from each other or from a base class.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Base custom exception
class BaseCustomException(Exception):
    pass

# Specific custom exceptions
class InputError(BaseCustomException):
    pass

class ProcessingError(BaseCustomException):
    pass

try:
    raise InputError("An error occurred with the input")
except BaseCustomException as e:
    print(f"Caught a custom exception: {e}")
# Output: Caught a custom exception: An error occurred with the input`}</Code>

        <div className="subHeader">Raising Custom Exceptions</div>
        <div className="description">
          You can use the <b>raise</b> keyword to raise custom exceptions at specific points in your code where you want to enforce certain rules or conditions.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`def check_positive_number(value):
    if value < 0:
        raise CustomError("Only positive numbers are allowed")

try:
    check_positive_number(-5)
except CustomError as e:
    print(e)  # Output: Only positive numbers are allowed`}</Code>

        <div className="subHeader">Best Practices for Custom Exceptions</div>
        <ul className="list">
          <li>
            Inherit from <b>Exception</b> or a relevant built-in exception class.
          </li>
          <li>Use descriptive class names that indicate the type of error.</li>
          <li>Include docstrings to explain the purpose of the custom exception.</li>
          <li>Provide meaningful error messages to help users understand what went wrong.</li>
        </ul>

        <Bottom back="/python/jsoncsv" next="/python/datetimehandling" />
      </div>
    </div>
  );
};

export default CustomExceptions;
