import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const FunctionsAndTypeAnnotations = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Functions</div>
        <div className="description">
          Functions are the core building blocks of any C++ program. They allow you to encapsulate reusable logic, making your code modular and easier to maintain. In this chapter,
          we will learn how to define and invoke functions with explicit parameter types, return types, and function prototypes. We will also cover best practices for organizing
          your functions, ensuring type safety, and improving code readability.
        </div>

        <div className="subHeader">Defining Functions</div>
        <div className="description">
          In C++, a function is defined by specifying a return type, a name, and a list of parameters in parentheses, followed by the function body enclosed in braces. Here’s a
          simple example of a function that adds two integers:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int main() {
    int sum = add(10, 20);
    cout << "Sum: " << sum << endl;
    return 0;
}`}</Code>
        <div className="description">
          In this example, the function <code>add</code> takes two integers as parameters and returns their sum. The <code>main()</code> function then calls <code>add</code> and
          prints the result.
        </div>

        <div className="subHeader">Parameter Types and Return Types</div>
        <div className="description">
          Specifying parameter types and return types helps ensure that functions are used correctly. For instance, consider a function that calculates the area of a circle:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

double calculateArea(double radius) {
    const double PI = 3.14159;
    return PI * radius * radius;
}

int main() {
    double area = calculateArea(5.0);
    cout << "Area: " << area << endl;
    return 0;
}`}</Code>
        <div className="description">
          Here, <code>calculateArea</code> is explicitly typed to accept a <code>double</code> and return a <code>double</code>, ensuring precise type handling.
        </div>

        <div className="subHeader">Function Prototypes</div>
        <div className="description">
          Function prototypes, or declarations, inform the compiler about a function’s name, return type, and parameters before its definition. This is particularly useful for
          organizing code in large projects.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

// Function prototype
int subtract(int, int);

int main() {
    int result = subtract(30, 15);
    cout << "Difference: " << result << endl;
    return 0;
}

// Function definition
int subtract(int a, int b) {
    return a - b;
}`}</Code>
        <div className="description">
          The prototype for <code>subtract</code> is declared before <code>main()</code>, allowing its usage in <code>main</code> even though the function definition comes later.
        </div>

        <div className="subHeader">Invoking Functions</div>
        <div className="description">
          To call a function, simply use its name followed by a set of parentheses containing any required arguments. The argument types must match the function’s parameter types.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

void printMessage(string message) {
    cout << "Message: " << message << endl;
}

int main() {
    printMessage("Hello from C++ functions!");
    return 0;
}`}</Code>
        <div className="description">
          In this example, the <code>printMessage</code> function is invoked with a string literal, and it prints the message to the console.
        </div>

        <div className="subHeader">Advanced Function Concepts</div>
        <div className="description">
          As your programs grow, consider breaking your logic into smaller functions, using inline comments, and organizing function prototypes in header files for reusability and
          clarity. Always aim for functions that perform a single task and have clearly defined input and output, which enhances maintainability and testing.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always specify explicit parameter and return types for clarity and to catch errors early.</li>
          <li>Use function prototypes to separate declarations from definitions, especially in multi-file projects.</li>
          <li>Document each function with comments describing its purpose, parameters, and return value.</li>
          <li>Keep functions short and focused on a single task to improve readability and maintainability.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Functions are essential for modular, reusable, and maintainable code in C++.</li>
          <li>Explicit parameter and return type declarations improve type safety and clarity.</li>
          <li>Function prototypes allow for better organization and modularity in your codebase.</li>
          <li>Properly invoked functions ensure predictable program execution and easier debugging.</li>
        </ul>

        <Bottom back="/cpp/control-flow-statements" next="/cpp/arrays-and-strings" />
      </div>
    </div>
  );
};

export default FunctionsAndTypeAnnotations;
