import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CIntroduction = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Introduction to C Programming</div>
        <div className="description">
          C is a powerful, general-purpose programming language that has been around since the 1970s. It was developed by Dennis Ritchie at Bell Labs and has influenced many other
          modern programming languages, such as C++, Java, and Python. C is widely used for system programming, developing operating systems, and embedded system applications due
          to its efficiency and control over hardware resources.
        </div>

        <div className="subHeader">Why Learn C?</div>
        <div className="description">
          Learning C provides a strong foundation for understanding computer science concepts, as it gives you direct access to memory and system-level functions. Here are some
          reasons why C is worth learning:
        </div>
        <ul className="list">
          <li>
            <b>Efficiency</b>: C is known for its fast performance and minimal memory usage.
          </li>
          <li>
            <b>Portability</b>: Code written in C can be compiled and run on different machines with minimal changes.
          </li>
          <li>
            <b>Wide Use</b>: C is still heavily used in system programming, embedded systems, and developing kernels.
          </li>
          <li>
            <b>Foundation for Other Languages</b>: C's syntax and structure are the basis for many other popular languages like C++, Java, and JavaScript.
          </li>
        </ul>

        <div className="subHeader">Basic Structure of a C Program</div>
        <div className="description">
          A simple C program consists of functions and statements. Every C program must have a <b>main()</b> function, which serves as the entry point for execution.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

// Main function - entry point of the program
int main() {
    printf("Hello, World!\\n"); // Print a message to the console
    return 0; // Indicate that the program ended successfully
}`}</Code>

        <div className="subHeader">Explanation of the Basic Code</div>
        <ul className="list">
          <li>
            <b>#include &lt;stdio.h&gt;</b>: Includes the Standard Input Output library, which allows the program to use functions like <b>printf()</b>.
          </li>
          <li>
            <b>int main()</b>: The main function where the program starts executing.
          </li>
          <li>
            <b>printf()</b>: A function used to print text to the console.
          </li>
          <li>
            <b>return 0;</b>: Indicates that the program has run successfully.
          </li>
        </ul>

        <Bottom back="/c" next="/c/environmentsetup" />
      </div>
    </div>
  );
};

export default CIntroduction;
