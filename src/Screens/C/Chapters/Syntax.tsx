import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSyntax = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Basic Syntax and Structure</div>
        <div className="description">
          Understanding the basic syntax and structure of a C program is essential for writing code effectively. This chapter introduces you to the essential building blocks of a C
          program.
        </div>

        <div className="subHeader">Basic Structure of a C Program</div>
        <div className="description">A simple C program has a structure that includes libraries, a main function, and statements. Here is the typical structure:</div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h> // Library inclusion

// Main function - entry point of the program
int main() {
    // Print a message to the console
    printf("Hello, World!\\n");
    
    // Return 0 to indicate successful execution
    return 0;
}`}</Code>

        <div className="subHeader">Key Elements Explained</div>
        <ul className="list">
          <li>
            <b>#include &lt;stdio.h&gt;</b>: A preprocessor directive that includes the Standard Input Output library. This allows you to use functions like <b>printf()</b> and{" "}
            <b>scanf()</b>.
          </li>
          <li>
            <b>int main()</b>: The main function where the program starts execution. It returns an integer value.
          </li>
          <li>
            <b>printf()</b>: A standard function used to print text to the console.
          </li>
          <li>
            <b>return 0;</b>: Indicates that the program has completed successfully.
          </li>
        </ul>

        <div className="subHeader">Basic Syntax Rules</div>
        <ul className="list">
          <li>
            <b>Case Sensitivity</b>: C is case-sensitive, meaning <b>Variable</b> and <b>variable</b> are different identifiers.
          </li>
          <li>
            <b>Semicolons</b>: Every statement in C ends with a semicolon <b>(;)</b>.
          </li>
          <li>
            <b>Braces</b>: Code blocks are enclosed in curly braces <b>{}</b>.
          </li>
          <li>
            <b>Comments</b>: Use <b>{"//"}</b> for single-line comments and <b>{"/* ... */"}</b> for multi-line comments.
          </li>
        </ul>
        <Code language="c" style={materialDark} showLineNumbers>{`// This is a single-line comment

/*
This is a
multi-line comment
*/`}</Code>

        <div className="subHeader">Indentation and Formatting</div>
        <div className="description">While indentation is not mandatory for C code to execute, using proper indentation makes the code more readable and maintainable.</div>

        <div className="subHeader">Printing and Formatting Output</div>
        <div className="description">
          The <b>printf()</b> function is used to print formatted output. You can use format specifiers to print different data types.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    int num = 10;
    float pi = 3.14;
    char letter = 'A';

    printf("Integer: %d\\n", num); // Prints: Integer: 10
    printf("Float: %.2f\\n", pi);  // Prints: Float: 3.14
    printf("Character: %c\\n", letter); // Prints: Character: A

    return 0;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            <b>Use meaningful variable names</b> for better code readability.
          </li>
          <li>
            <b>Comment your code</b> to describe complex logic or highlight important sections.
          </li>
          <li>
            <b>Consistent indentation</b> helps with readability and debugging.
          </li>
        </ul>

        <Bottom back="/c/environmentsetup" next="/c/variables" />
      </div>
    </div>
  );
};

export default CSyntax;
