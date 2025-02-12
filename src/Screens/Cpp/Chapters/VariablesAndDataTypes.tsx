import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const VariablesAndDataTypes = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Variables and Data Types</div>
        <div className="description">
          In C++, variables are used to store data that your program can manipulate. C++ provides a rich set of primitive data types and offers type modifiers and constants to
          control the characteristics of variables. Understanding these types is essential for writing efficient and type-safe code. In this chapter, we will explore various
          primitive types, how to declare constants, and how to use type modifiers to customize the behavior of data types.
        </div>

        <div className="subHeader">Primitive Data Types</div>
        <div className="description">Primitive data types represent the most basic kinds of data that can be manipulated in C++. Common primitive types include:</div>
        <ul className="list">
          <li>
            <b>int:</b> Used for integer values.
          </li>
          <li>
            <b>float:</b> Used for single-precision floating-point numbers.
          </li>
          <li>
            <b>double:</b> Used for double-precision floating-point numbers.
          </li>
          <li>
            <b>char:</b> Used for single characters.
          </li>
          <li>
            <b>bool:</b> Represents Boolean values (<code>true</code> or <code>false</code>).
          </li>
        </ul>
        <div className="description">Below is an example that declares variables of these primitive types:</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>

int main() {
    // Integer
    int age = 30;

    // Floating point numbers
    float height = 5.9f;
    double weight = 72.5;

    // Character
    char grade = 'A';

    // Boolean
    bool isActive = true;

    std::cout << "Age: " << age << std::endl;
    std::cout << "Height: " << height << std::endl;
    std::cout << "Weight: " << weight << std::endl;
    std::cout << "Grade: " << grade << std::endl;
    std::cout << "Active: " << (isActive ? "Yes" : "No") << std::endl;

    return 0;
}`}</Code>
        <div className="description">In this program, we declare and initialize variables of various primitive types and then print their values.</div>

        <div className="subHeader">Constants</div>
        <div className="description">
          Constants are variables whose values cannot be changed once set. In C++, you can declare constants using the <code>const</code> keyword.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>

int main() {
    const int DAYS_IN_WEEK = 7;
    const double PI = 3.14159;
    
    // Attempting to change a constant will result in a compilation error
    // DAYS_IN_WEEK = 8; // Error: assignment of read-only variable
    
    std::cout << "Days in a week: " << DAYS_IN_WEEK << std::endl;
    std::cout << "Value of PI: " << PI << std::endl;

    return 0;
}`}</Code>
        <div className="description">Constants help prevent accidental modification of values that should remain unchanged throughout the program.</div>

        <div className="subHeader">Type Modifiers</div>
        <div className="description">Type modifiers allow you to adjust the range and behavior of basic data types. They include:</div>
        <ul className="list">
          <li>
            <b>signed</b> and <b>unsigned</b>: Specify whether an integer can be negative.
          </li>
          <li>
            <b>short</b> and <b>long</b>: Define the size (and range) of integer values.
          </li>
        </ul>
        <div className="description">
          For example, an <code>unsigned int</code> can only store non-negative values, and <code>short int</code> uses less memory compared to a regular <code>int</code>.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>

int main() {
    unsigned int positiveNumber = 4000;
    short int smallNumber = -100;
    long int largeNumber = 1000000;

    std::cout << "Unsigned int: " << positiveNumber << std::endl;
    std::cout << "Short int: " << smallNumber << std::endl;
    std::cout << "Long int: " << largeNumber << std::endl;

    return 0;
}`}</Code>

        <div className="subHeader">Floating-Point Modifiers</div>
        <div className="description">
          C++ provides different floating-point types to balance precision and performance. The most common types are <code>float</code> for single-precision and{" "}
          <code>double</code> for double-precision values.
        </div>
        <div className="description">
          You can also use the <code>long double</code> type for even higher precision in some systems.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>

int main() {
    float fValue = 3.14f;
    double dValue = 3.14159265359;
    long double ldValue = 3.141592653589793238L;

    std::cout << "Float: " << fValue << std::endl;
    std::cout << "Double: " << dValue << std::endl;
    std::cout << "Long Double: " << ldValue << std::endl;

    return 0;
}`}</Code>

        <div className="subHeader">Character Type Modifiers</div>
        <div className="description">
          The <code>char</code> type is used for single characters. In addition, C++ supports <code>wchar_t</code> for wide characters, allowing for the representation of
          international character sets.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>

int main() {
    char letter = 'A';
    wchar_t wideLetter = L'Ä';

    std::cout << "Char: " << letter << std::endl;
    std::wcout << L"Wide Char: " << wideLetter << std::endl;

    return 0;
}`}</Code>
        <div className="description">
          Note: When using <code>wchar_t</code>, you may need to configure your output streams for wide characters.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always initialize variables to avoid undefined behavior.</li>
          <li>
            Use <code>const</code> for values that should not change, improving code safety.
          </li>
          <li>Choose the appropriate type and modifier to balance memory usage and performance.</li>
          <li>Be mindful of signed versus unsigned types when performing arithmetic operations.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>C++ provides a variety of primitive data types to store different kinds of data.</li>
          <li>Constants help prevent unintended modifications to critical values.</li>
          <li>Type modifiers allow you to customize the range and behavior of variables.</li>
          <li>Proper use of data types and modifiers improves code reliability, performance, and maintainability.</li>
        </ul>

        <Bottom back="/cpp/basic-syntax-and-structure" next="/cpp/operators-and-expressions" />
      </div>
    </div>
  );
};

export default VariablesAndDataTypes;
