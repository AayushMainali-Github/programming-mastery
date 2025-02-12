import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const OperatorsAndExpressions = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Operators and Expressions</div>
        <div className="description">
          Operators are the building blocks of expressions in C++. They allow you to perform computations, make comparisons, combine logical values, and manipulate bits. In this
          chapter, we will explore various categories of operators in C++: arithmetic, relational, logical, and bitwise operators. Detailed examples and best practices will help
          you write clear and efficient code.
        </div>

        <div className="subHeader">Arithmetic Operators</div>
        <div className="description">Arithmetic operators perform basic mathematical operations on numeric operands. The most commonly used operators are:</div>
        <ul className="list">
          <li>
            <b>+</b> (Addition): Adds two values.
          </li>
          <li>
            <b>-</b> (Subtraction): Subtracts one value from another.
          </li>
          <li>
            <b>*</b> (Multiplication): Multiplies two values.
          </li>
          <li>
            <b>/</b> (Division): Divides one value by another.
          </li>
          <li>
            <b>%</b> (Modulus): Returns the remainder of division.
          </li>
        </ul>
        <div className="description">Example: Performing basic arithmetic calculations:</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    int a = 15, b = 4;
    cout << "Addition: " << a + b << endl;         // 19
    cout << "Subtraction: " << a - b << endl;      // 11
    cout << "Multiplication: " << a * b << endl;   // 60
    cout << "Division: " << a / b << endl;         // 3 (integer division)
    cout << "Modulus: " << a % b << endl;          // 3
    return 0;
}`}</Code>

        <div className="subHeader">Relational Operators</div>
        <div className="description">
          Relational operators compare two values and return a Boolean result. They are essential in decision-making processes. Common relational operators include:
        </div>
        <ul className="list">
          <li>
            <b>==</b>: Equal to
          </li>
          <li>
            <b>!=</b>: Not equal to
          </li>
          <li>
            <b>&lt;</b>: Less than
          </li>
          <li>
            <b>&gt;</b>: Greater than
          </li>
          <li>
            <b>&lt;=</b>: Less than or equal to
          </li>
          <li>
            <b>&gt;=</b>: Greater than or equal to
          </li>
        </ul>
        <div className="description">Example: Comparing two values:</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    int x = 10, y = 20;
    cout << "x == y: " << (x == y) << endl;  // 0 (false)
    cout << "x != y: " << (x != y) << endl;  // 1 (true)
    cout << "x < y: " << (x < y) << endl;    // 1 (true)
    cout << "x >= y: " << (x >= y) << endl;  // 0 (false)
    return 0;
}`}</Code>

        <div className="subHeader">Logical Operators</div>
        <div className="description">Logical operators are used to combine or invert Boolean expressions. They help in constructing complex conditions:</div>
        <ul className="list">
          <li>
            <b>&amp;&amp;</b>: Logical AND returns true if both operands are true.
          </li>
          <li>
            <b>||</b>: Logical OR returns true if at least one operand is true.
          </li>
          <li>
            <b>!</b>: Logical NOT inverts the Boolean value.
          </li>
        </ul>
        <div className="description">Example: Using logical operators to evaluate conditions:</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    bool isAdult = true;
    bool hasLicense = false;
    
    // Logical AND
    if (isAdult && hasLicense) {
        cout << "Allowed to drive" << endl;
    } else {
        cout << "Not allowed to drive" << endl;
    }
    
    // Logical OR
    if (isAdult || hasLicense) {
        cout << "At least one condition is met" << endl;
    }
    
    // Logical NOT
    cout << "Not isAdult: " << (!isAdult) << endl;  // 0 (false)
    
    return 0;
}`}</Code>

        <div className="subHeader">Bitwise Operators</div>
        <div className="description">
          Bitwise operators perform operations on the binary representations of numbers. They are particularly useful for low-level programming tasks, such as hardware interfacing
          or performance-critical code. Common bitwise operators include:
        </div>
        <ul className="list">
          <li>
            <b>&amp;</b>: Bitwise AND
          </li>
          <li>
            <b>|</b>: Bitwise OR
          </li>
          <li>
            <b>^</b>: Bitwise XOR
          </li>
          <li>
            <b>~</b>: Bitwise NOT
          </li>
          <li>
            <b>&lt;&lt;</b>: Left shift
          </li>
          <li>
            <b>&gt;&gt;</b>: Right shift
          </li>
        </ul>
        <div className="description">Example: Bitwise operations on integers:</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    unsigned int a = 5;      // Binary: 0101
    unsigned int b = 9;      // Binary: 1001
    
    cout << "Bitwise AND: " << (a & b) << endl;   // 0101 & 1001 = 0001 (1)
    cout << "Bitwise OR: " << (a | b) << endl;    // 0101 | 1001 = 1101 (13)
    cout << "Bitwise XOR: " << (a ^ b) << endl;   // 0101 ^ 1001 = 1100 (12)
    cout << "Bitwise NOT of a: " << (~a) << endl; // ~0101 = ...1010 (depends on system size)
    cout << "Left shift a by 1: " << (a << 1) << endl;  // 0101 << 1 = 1010 (10)
    cout << "Right shift b by 1: " << (b >> 1) << endl;  // 1001 >> 1 = 0100 (4)
    return 0;
}`}</Code>
        <div className="description">Bitwise operations are powerful tools but require careful handling due to their low-level nature.</div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use arithmetic and relational operators for most high-level computations.</li>
          <li>Utilize logical operators for constructing complex conditions in control flow.</li>
          <li>Leverage bitwise operators only when necessary, and ensure you understand the underlying binary representation.</li>
          <li>Always test operator-based expressions to verify their behavior, especially when dealing with bitwise operations.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Arithmetic operators perform mathematical operations, while relational and logical operators help in decision-making.</li>
          <li>Bitwise operators manipulate data at the binary level and are essential for performance-critical or low-level programming tasks.</li>
          <li>Understanding the proper use of each operator category is crucial for writing efficient and error-free C++ code.</li>
          <li>Testing and clear code documentation are essential when working with complex expressions.</li>
        </ul>

        <Bottom back="/cpp/variables-and-data-types" next="/cpp/control-flow-statements" />
      </div>
    </div>
  );
};

export default OperatorsAndExpressions;
