import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CVariables = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Variables and Data Types</div>
        <div className="description">
          Variables are containers used to store data values. In C, you must declare variables with a specific data type before using them. This chapter will cover how to declare,
          initialize, and use variables in C, as well as the different data types available.
        </div>

        <div className="subHeader">Declaring and Initializing Variables</div>
        <div className="description">In C, variables must be declared before they are used. You can declare and initialize variables as shown below:</div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    // Declaration of variables
    int num; // Declaring an integer variable
    float pi; // Declaring a float variable

    // Initialization of variables
    num = 10;
    pi = 3.14;

    // Declaration and initialization in one line
    char letter = 'A';

    // Printing variable values
    printf("Number: %d\\n", num); // Output: Number: 10
    printf("Pi: %.2f\\n", pi); // Output: Pi: 3.14
    printf("Letter: %c\\n", letter); // Output: Letter: A

    return 0;
}`}</Code>

        <div className="subHeader">Common Data Types in C</div>
        <ul className="list">
          <li>
            <b>int</b>: Used for integers (e.g., <b>int x = 5;</b>).
          </li>
          <li>
            <b>float</b>: Used for floating-point numbers (e.g., <b>float y = 3.14;</b>).
          </li>
          <li>
            <b>double</b>: Used for double-precision floating-point numbers (e.g., <b>double z = 3.141592;</b>).
          </li>
          <li>
            <b>char</b>: Used for single characters (e.g., <b>char c = 'A';</b>).
          </li>
        </ul>

        <div className="subHeader">Format Specifiers</div>
        <div className="description">
          When printing different data types with <b>printf()</b>, you use format specifiers to indicate the type of variable being printed:
        </div>
        <ul className="list">
          <li>
            <b>%d</b>: For integers
          </li>
          <li>
            <b>%f</b>: For floats
          </li>
          <li>
            <b>%lf</b>: For doubles
          </li>
          <li>
            <b>%c</b>: For characters
          </li>
          <li>
            <b>%s</b>: For strings
          </li>
        </ul>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    int age = 25;
    float height = 5.9;
    char grade = 'A';

    printf("Age: %d\\n", age); // Output: Age: 25
    printf("Height: %.1f\\n", height); // Output: Height: 5.9
    printf("Grade: %c\\n", grade); // Output: Grade: A

    return 0;
}`}</Code>

        <div className="subHeader">Rules for Naming Variables</div>
        <ul className="list">
          <li>
            Variable names must start with a letter or an underscore (<b>_</b>).
          </li>
          <li>
            They can only contain letters, digits, and underscores (e.g., <b>num1, total_value</b>).
          </li>
          <li>
            Variable names are case-sensitive (<b>value</b> and <b>Value</b> are different).
          </li>
          <li>
            Reserved words (keywords) cannot be used as variable names (e.g., <b>int, return</b>).
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            <b>Use meaningful variable names</b> to make your code readable (e.g., <b>score</b> instead of <b>x</b>).
          </li>
          <li>
            <b>Initialize variables</b> when declaring them to avoid using undefined values.
          </li>
          <li>
            <b>Choose the appropriate data type</b> based on the type of value to be stored (e.g., use <b>int</b> for whole numbers).
          </li>
        </ul>

        <Bottom back="/c/syntax" next="/c/inputoutput" />
      </div>
    </div>
  );
};

export default CVariables;
