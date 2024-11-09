import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CFunctions = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Functions in C</div>
        <div className="description">
          Functions are reusable blocks of code that perform a specific task. They help make programs modular and easier to read, maintain, and debug. In C, functions are essential
          for creating organized and efficient code.
        </div>

        <div className="subHeader">Defining and Using Functions</div>
        <div className="description">A function in C is defined using a return type, a name, and parameters (if any). The general structure of a function is:</div>
        <Code language="c" style={materialDark} showLineNumbers>{`return_type function_name(parameter_list) {
    // Function body
}`}</Code>

        <div className="subHeader">Example: Simple Function</div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

// Function declaration
void greet() {
    printf("Hello, World!\\n");
}

int main() {
    // Function call
    greet();
    return 0;
}`}</Code>
        <div className="description">
          <b>Explanation:</b> The function <b>greet()</b> has a <b>void</b> return type, meaning it does not return a value. It is called in the <b>main()</b> function to print a
          message.
        </div>

        <div className="subHeader">Functions with Parameters</div>
        <div className="description">Functions can take parameters to operate on. These parameters are specified in the function's declaration and definition.</div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

// Function declaration with parameters
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 10); // Function call with arguments
    printf("The sum is: %d\\n", result); // Output: The sum is: 15
    return 0;
}`}</Code>

        <div className="subHeader">Function Prototypes</div>
        <div className="description">
          A function prototype is a declaration of a function that tells the compiler about the function's return type and parameters. It is placed before the <b>main()</b>{" "}
          function to allow calling the function before its definition.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

// Function prototype
int multiply(int a, int b);

int main() {
    int result = multiply(3, 4);
    printf("The product is: %d\\n", result); // Output: The product is: 12
    return 0;
}

// Function definition
int multiply(int a, int b) {
    return a * b;
}`}</Code>

        <div className="subHeader">Return Values</div>
        <div className="description">
          Functions can return a value using the <b>return</b> statement. The return type of the function should match the type of value returned.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

// Function that returns an integer
int square(int num) {
    return num * num;
}

int main() {
    int number = 5;
    int result = square(number);
    printf("The square of %d is %d\\n", number, result); // Output: The square of 5 is 25
    return 0;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            <b>Use descriptive function names</b> to indicate the task the function performs.
          </li>
          <li>
            <b>Keep functions short and focused</b> on a single task to enhance readability and maintainability.
          </li>
          <li>
            <b>Use prototypes</b> to declare functions before <b>main()</b> if they are defined after it.
          </li>
          <li>
            <b>Document your functions</b> with comments to describe their purpose and parameters.
          </li>
        </ul>

        <Bottom back="/c/loops" next="/c/arraysstrings" />
      </div>
    </div>
  );
};

export default CFunctions;
