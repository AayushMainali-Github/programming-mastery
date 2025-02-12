import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AdvancedExceptionHandling = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Advanced Exception Handling</div>
        <div className="description">
          Robust error management in C++ is achieved by leveraging try/catch blocks to handle exceptions, creating custom exception classes to provide meaningful error messages,
          and using nested exception handling with rethrowing when necessary. This chapter covers advanced techniques for exception handling, ensuring that your program can
          gracefully recover from errors and manage resources effectively.
        </div>

        <div className="subHeader">Using try/catch Blocks</div>
        <div className="description">
          The fundamental mechanism for error handling in C++ is the try/catch block. Code that might throw an exception is enclosed within a try block, and exceptions are caught
          in catch blocks. For example:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <stdexcept>
using namespace std;

double divide(double numerator, double denominator) {
    if (denominator == 0) {
        throw runtime_error("Error: Division by zero encountered.");
    }
    return numerator / denominator;
}

int main() {
    try {
        double result = divide(10, 0);
        cout << "Result: " << result << endl;
    } catch (const runtime_error &e) {
        cout << "Caught exception: " << e.what() << endl;
    }
    return 0;
}`}</Code>
        <div className="description">
          In this example, if the denominator is zero, a <code>runtime_error</code> is thrown and then caught in the catch block where an error message is printed.
        </div>

        <div className="subHeader">Throwing Custom Exceptions</div>
        <div className="description">
          To provide more specific error information, you can create your own exception classes. Below is an example of a custom exception class for division errors:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <exception>
using namespace std;

// Define a custom exception class for division by zero
class DivideByZeroException : public exception {
public:
    const char* what() const noexcept override {
        return "DivideByZeroException: Denominator is zero.";
    }
};

double safeDivide(double numerator, double denominator) {
    if (denominator == 0) {
        throw DivideByZeroException();
    }
    return numerator / denominator;
}

int main() {
    try {
        double result = safeDivide(25, 0);
        cout << "Result: " << result << endl;
    } catch (const DivideByZeroException &e) {
        cout << "Caught custom exception: " << e.what() << endl;
    } catch (const exception &e) {
        cout << "Caught exception: " << e.what() << endl;
    }
    return 0;
}`}</Code>
        <div className="description">
          The <code>DivideByZeroException</code> class inherits from <code>std::exception</code> and overrides the <code>what()</code> method to return a custom error message. When{" "}
          <code>safeDivide</code> detects an invalid denominator, it throws this exception.
        </div>

        <div className="subHeader">Nested try/catch Blocks and Rethrowing Exceptions</div>
        <div className="description">
          In complex applications, you might need nested try/catch blocks. Sometimes, after logging or partially handling an error, it is necessary to rethrow the exception for
          higher-level handling.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <stdexcept>
using namespace std;

void innerFunction() {
    try {
        // Simulate an error in the inner function
        throw runtime_error("Error occurred in innerFunction");
    } catch (const runtime_error &e) {
        cout << "Inner catch: " << e.what() << endl;
        // Rethrow the exception to be handled by an outer try/catch block
        throw;
    }
}

int main() {
    try {
        innerFunction();
    } catch (const runtime_error &e) {
        cout << "Outer catch: " << e.what() << endl;
    }
    return 0;
}`}</Code>
        <div className="description">
          In this example, <code>innerFunction</code> catches an exception, logs an error message, and then rethrows the exception so that <code>main</code> can handle it.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use try/catch blocks to isolate error-prone code and to provide meaningful error messages.</li>
          <li>Create custom exception classes when standard exceptions do not provide sufficient context.</li>
          <li>Catch exceptions by reference to avoid unnecessary copying and to prevent object slicing.</li>
          <li>Rethrow exceptions if higher-level error handling is required, ensuring that all necessary cleanup is performed.</li>
          <li>Ensure that resource cleanup (e.g., file closures, memory deallocation) is handled properly even when exceptions are thrown, often by using RAII patterns.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Advanced exception handling in C++ improves program robustness by separating error handling from normal logic.</li>
          <li>Custom exception classes allow for more specific and meaningful error messages.</li>
          <li>Nesting try/catch blocks and rethrowing exceptions can help manage errors at different levels of an application.</li>
          <li>Adhering to best practices in exception handling minimizes resource leaks and improves code maintainability.</li>
        </ul>

        <Bottom back="/cpp/operator-overloading" next="/cpp/templates" />
      </div>
    </div>
  );
};

export default AdvancedExceptionHandling;
