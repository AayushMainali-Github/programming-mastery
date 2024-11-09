import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CInputOutput = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Input and Output</div>
        <div className="description">
          In C programming, input and output operations are performed using standard I/O functions provided by the <b>stdio.h</b> library. This chapter covers the use of{" "}
          <b>printf()</b> for output and <b>scanf()</b> for input.
        </div>

        <div className="subHeader">
          Using <b>printf()</b> for Output
        </div>
        <div className="description">
          The <b>printf()</b> function is used to display output on the console. It can print strings, variables, and formatted text.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    int age = 20;
    float gpa = 3.75;
    char initial = 'J';

    // Printing variables
    printf("Age: %d\\n", age);         // Output: Age: 20
    printf("GPA: %.2f\\n", gpa);       // Output: GPA: 3.75
    printf("Initial: %c\\n", initial); // Output: Initial: J

    return 0;
}`}</Code>

        <div className="subHeader">
          Using <b>scanf()</b> for Input
        </div>
        <div className="description">
          The <b>scanf()</b> function is used to read input from the user. You need to provide a format specifier and a reference to the variable where the input should be stored.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    int age;
    float gpa;
    char initial;

    // Prompting the user for input
    printf("Enter your age: ");
    scanf("%d", &age); // Reading an integer

    printf("Enter your GPA: ");
    scanf("%f", &gpa); // Reading a float

    printf("Enter your initial: ");
    scanf(" %c", &initial); // Reading a character

    // Displaying the input
    printf("You entered: Age = %d, GPA = %.2f, Initial = %c\\n", age, gpa, initial);

    return 0;
}`}</Code>

        <div className="subHeader">Common Format Specifiers</div>
        <ul className="list">
          <li>
            <b>%d</b>: For integers
          </li>
          <li>
            <b>%f</b>: For floats
          </li>
          <li>
            <b>%c</b>: For characters
          </li>
          <li>
            <b>%s</b>: For strings
          </li>
        </ul>

        <div className="subHeader">Important Notes</div>
        <ul className="list">
          <li>
            Always use <b>&</b> before the variable name in <b>scanf()</b> to provide the memory address, except for <b>char[]</b> strings.
          </li>
          <li>
            For reading characters, add a space before <b>%c</b> in <b>scanf()</b> to consume any newline characters left in the input buffer.
          </li>
          <li>Format specifiers must match the type of variable being read or printed.</li>
        </ul>

        <div className="subHeader">Example: Simple Calculator</div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    int num1, num2, sum;

    // Prompting user for input
    printf("Enter two integers: ");
    scanf("%d %d", &num1, &num2); // Reading two integers

    // Calculating the sum
    sum = num1 + num2;

    // Displaying the result
    printf("The sum of %d and %d is %d\\n", num1, num2, sum);

    return 0;
}`}</Code>

        <Bottom back="/c/variables" next="/c/operators" />
      </div>
    </div>
  );
};

export default CInputOutput;
