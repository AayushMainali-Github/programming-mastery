import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BasicErrorHandling = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Basic Error Handling</div>
        <div className="description">
          In C++, error handling is critical for writing robust and reliable applications. There are two primary approaches: simple error reporting using error codes and a more
          advanced method using exception handling. This chapter provides examples for both techniques, explains their advantages and disadvantages, and discusses best practices
          for handling errors in your programs.
        </div>

        <div className="subHeader">Simple Error Reporting Using Error Codes</div>
        <div className="description">
          A common strategy for error handling is to use error codes. Functions return a value indicating success or failure, and the caller checks this value to determine whether
          to proceed or handle an error.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

// Function that performs division and uses an error code for division by zero
int divide(int numerator, int denominator, int &result) {
    if (denominator == 0) {
        return -1; // Error code: division by zero
    }
    result = numerator / denominator;
    return 0; // Success code
}

int main() {
    int num = 10, den = 0;
    int result;
    
    int status = divide(num, den, result);
    if (status != 0) {
        cout << "Error: Division by zero encountered." << endl;
    } else {
        cout << "Result: " << result << endl;
    }
    
    return 0;
}`}</Code>
        <div className="description">
          In the example above, the function <code>divide</code> returns <code>-1</code> if the denominator is zero, signaling an error. The caller then checks the returned status
          to determine whether to process the result.
        </div>

        <div className="subHeader">Introduction to Exception Handling</div>
        <div className="description">
          Exception handling provides a more robust way to deal with errors by separating error handling logic from regular code flow. C++ supports exception handling using{" "}
          <code>try</code>, <code>catch</code>, and <code>throw</code> keywords. When an error occurs, an exception is thrown and caught by a corresponding catch block.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <stdexcept>
using namespace std;

double safeDivide(double numerator, double denominator) {
    if (denominator == 0) {
        throw runtime_error("Division by zero error");
    }
    return numerator / denominator;
}

int main() {
    try {
        double result = safeDivide(10.0, 0.0);
        cout << "Result: " << result << endl;
    } catch (const runtime_error &e) {
        cout << "Exception caught: " << e.what() << endl;
    }
    
    return 0;
}`}</Code>
        <div className="description">
          In this example, the function <code>safeDivide</code> throws a <code>runtime_error</code> if a division by zero is attempted. The <code>try</code> block is used to call
          the function, and the <code>catch</code> block handles the exception, printing an error message.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            For simple scenarios, error codes can be effective; however, for more complex error handling, prefer exception handling to separate normal logic from error handling.
          </li>
          <li>Always validate input values to prevent errors from occurring in the first place.</li>
          <li>Ensure that resources are properly managed (e.g., using RAII) to avoid resource leaks even when exceptions are thrown.</li>
          <li>Document error handling strategies and possible exceptions in your function comments for clarity.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Error codes provide a straightforward method for reporting errors but require explicit checks by the caller.</li>
          <li>Exception handling separates error handling logic from the main code, making the code cleaner and more maintainable.</li>
          <li>Using try/catch blocks and throwing exceptions improves program robustness, especially for complex operations.</li>
          <li>Adopting best practices in error handling is essential for creating reliable and maintainable C++ applications.</li>
        </ul>

        <Bottom back="/cpp/input-output" next="/cpp/structures-unions-enumerations" />
      </div>
    </div>
  );
};

export default BasicErrorHandling;
