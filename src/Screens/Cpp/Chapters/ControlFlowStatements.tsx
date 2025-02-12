import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ControlFlowStatements = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Control Flow Statements</div>
        <div className="description">
          Control flow statements determine the order in which the instructions of a C++ program are executed. By using conditional statements such as <code>if</code> and{" "}
          <code>switch</code>, and loops like <code>for</code>, <code>while</code>, and <code>do-while</code>, you can build dynamic and responsive programs. This chapter
          introduces these statements, provides detailed code examples, and discusses best practices for their use.
        </div>

        <div className="subHeader">Conditional Statements</div>
        <div className="description">
          Conditional statements allow you to execute different blocks of code depending on certain conditions. They form the backbone of decision-making in C++.
        </div>

        <div className="subHeader">if Statement</div>
        <div className="description">
          The <code>if</code> statement evaluates a condition; if the condition is true, the associated block of code is executed. Optionally, you can include <code>else</code> or{" "}
          <code>else if</code> clauses for alternative execution paths.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    int score = 85;

    if (score >= 90) {
        cout << "Grade: A" << endl;
    } else if (score >= 80) {
        cout << "Grade: B" << endl;
    } else if (score >= 70) {
        cout << "Grade: C" << endl;
    } else {
        cout << "Grade: D or below" << endl;
    }
    
    return 0;
}`}</Code>
        <div className="description">
          In this example, the program checks the value of <code>score</code> and prints the corresponding grade.
        </div>

        <div className="subHeader">switch Statement</div>
        <div className="description">
          The <code>switch</code> statement is used when you have multiple discrete cases based on a single variable. It makes the code cleaner and more readable compared to a long
          chain of if-else statements.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    char grade = 'B';

    switch (grade) {
        case 'A':
            cout << "Excellent!" << endl;
            break;
        case 'B':
            cout << "Good job!" << endl;
            break;
        case 'C':
            cout << "Well done" << endl;
            break;
        default:
            cout << "Grade not recognized" << endl;
    }
    
    return 0;
}`}</Code>
        <div className="description">
          The <code>switch</code> statement checks the value of <code>grade</code> and executes the corresponding case. The <code>break</code> statement prevents fall-through.
        </div>

        <div className="subHeader">Loop Statements</div>
        <div className="description">Loops enable you to execute a block of code repeatedly. C++ offers several types of loops, each suited for different scenarios.</div>

        <div className="subHeader">for Loop</div>
        <div className="description">
          The <code>for</code> loop is ideal when the number of iterations is known. It combines initialization, condition-checking, and increment/decrement in a single statement.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 5; i++) {
        cout << "Iteration: " << i << endl;
    }
    return 0;
}`}</Code>

        <div className="subHeader">while Loop</div>
        <div className="description">
          The <code>while</code> loop executes a block of code as long as the specified condition is true. It’s useful when the number of iterations isn’t predetermined.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    int count = 0;
    while (count < 5) {
        cout << "Count: " << count << endl;
        count++;
    }
    return 0;
}`}</Code>

        <div className="subHeader">do-while Loop</div>
        <div className="description">
          The <code>do-while</code> loop is similar to the <code>while</code> loop, but it guarantees that the code block is executed at least once, as the condition is checked
          after the loop body.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    int count = 0;
    do {
        cout << "Count (do-while): " << count << endl;
        count++;
    } while (count < 5);
    return 0;
}`}</Code>
        <div className="description">
          Here, the <code>do-while</code> loop ensures that the statement inside the loop is executed before the condition is evaluated.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Choose the loop type that best fits your use case: use <code>for</code> loops for a fixed number of iterations, <code>while</code> for indefinite iterations, and{" "}
            <code>do-while</code> when at least one execution is required.
          </li>
          <li>Always ensure your loop has a valid exit condition to prevent infinite loops.</li>
          <li>Use clear, concise conditions in your conditional statements to enhance readability.</li>
          <li>Comment complex conditional or looping logic to aid future maintenance.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Control flow statements are essential for directing program execution based on conditions and iterations.</li>
          <li>
            <code>if</code> and <code>switch</code> statements provide decision-making capabilities, while loops manage repetitive tasks.
          </li>
          <li>Understanding the nuances of each loop type helps in choosing the most efficient structure for your needs.</li>
          <li>Properly implemented control flow statements lead to more dynamic and responsive applications.</li>
        </ul>

        <Bottom back="/cpp/variables-and-data-types" next="/cpp/objects-and-functions" />
      </div>
    </div>
  );
};

export default ControlFlowStatements;
