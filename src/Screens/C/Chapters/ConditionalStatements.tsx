import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CConditionalStatements = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Conditional Statements</div>
        <div className="description">
          Conditional statements allow you to execute different blocks of code based on certain conditions. In C, the main conditional statements are <b>if</b>, <b>if-else</b>,{" "}
          <b>else if</b>, and <b>switch</b>.
        </div>

        <div className="subHeader">
          1. The <b>if</b> Statement
        </div>
        <div className="description">
          The <b>if</b> statement executes a block of code only if a specified condition is true.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    int num = 10;

    if (num > 5) {
        printf("The number is greater than 5\\n");
    }

    return 0;
}`}</Code>

        <div className="subHeader">
          2. The <b>if-else</b> Statement
        </div>
        <div className="description">
          The <b>if-else</b> statement provides an alternative block of code to execute if the condition is false.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    int num = 3;

    if (num > 5) {
        printf("The number is greater than 5\\n");
    } else {
        printf("The number is 5 or less\\n");
    }

    return 0;
}`}</Code>

        <div className="subHeader">
          3. The <b>else if</b> Ladder
        </div>
        <div className="description">
          The <b>else if</b> statement is used to check multiple conditions sequentially. If one condition is true, its corresponding block of code is executed, and the rest are
          skipped.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    int num = 15;

    if (num > 20) {
        printf("The number is greater than 20\\n");
    } else if (num > 10) {
        printf("The number is greater than 10 but less than or equal to 20\\n");
    } else {
        printf("The number is 10 or less\\n");
    }

    return 0;
}`}</Code>

        <div className="subHeader">
          4. The <b>switch</b> Statement
        </div>
        <div className="description">
          The <b>switch</b> statement is used to execute one block of code among many based on the value of a variable. It is an alternative to using multiple <b>else if</b>{" "}
          statements.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    int choice = 2;

    switch (choice) {
        case 1:
            printf("You chose option 1\\n");
            break;
        case 2:
            printf("You chose option 2\\n");
            break;
        case 3:
            printf("You chose option 3\\n");
            break;
        default:
            printf("Invalid choice\\n");
            break;
    }

    return 0;
}`}</Code>

        <div className="subHeader">Explanation</div>
        <ul className="list">
          <li>
            <b>break</b>: Exits the switch block once a case is executed. Without it, execution continues to the next case.
          </li>
          <li>
            <b>default</b>: Runs if no case matches. It's optional but recommended for completeness.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            <b>
              Use <b>switch</b> for multiple discrete values
            </b>
            : Use <b>switch</b> statements when comparing a variable to multiple specific values for better readability.
          </li>
          <li>
            <b>Include a default case</b>: Always include a <b>default</b> case to handle unexpected values.
          </li>
          <li>
            <b>Keep code blocks clear</b>: Use indentation and comments to make conditional logic readable.
          </li>
        </ul>

        <Bottom back="/c/operators" next="/c/loops" />
      </div>
    </div>
  );
};

export default CConditionalStatements;
