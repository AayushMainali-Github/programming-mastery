import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CLoops = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Loops in C</div>
        <div className="description">
          Loops are used to execute a block of code repeatedly until a certain condition is met. In C, there are three main types of loops: <b>for</b>, <b>while</b>, and{" "}
          <b>do-while</b>.
        </div>

        <div className="subHeader">
          1. The <b>for</b> Loop
        </div>
        <div className="description">
          The <b>for</b> loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        printf("Iteration %d\\n", i);
    }

    return 0;
}`}</Code>
        <div className="description">
          <b>Explanation:</b> The loop starts with <b>int i = 0</b>, runs while <b>i &lt; 5</b>, and increments <b>i</b> by 1 after each iteration.
        </div>

        <div className="subHeader">
          2. The <b>while</b> Loop
        </div>
        <div className="description">
          The <b>while</b> loop is used when the number of iterations is not known and depends on a condition.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    int i = 0;

    while (i < 5) {
        printf("Iteration %d\\n", i);
        i++;
    }

    return 0;
}`}</Code>
        <div className="description">
          <b>Explanation:</b> The condition <b>i &lt; 5</b> is checked before each iteration, and the loop stops when the condition is false.
        </div>

        <div className="subHeader">
          3. The <b>do-while</b> Loop
        </div>
        <div className="description">
          The <b>do-while</b> loop is similar to the <b>while</b> loop, but it guarantees at least one execution of the loop body since the condition is checked after the loop
          executes.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    int i = 0;

    do {
        printf("Iteration %d\\n", i);
        i++;
    } while (i < 5);

    return 0;
}`}</Code>
        <div className="description">
          <b>Explanation:</b> The loop body runs once before checking the condition.
        </div>

        <div className="subHeader">Breaking Out of Loops</div>
        <div className="description">
          The <b>break</b> statement is used to exit a loop prematurely when a certain condition is met.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    for (int i = 0; i < 10; i++) {
        if (i == 5) {
            break; // Exit the loop when i is 5
        }
        printf("Iteration %d\\n", i);
    }

    return 0;
}`}</Code>

        <div className="subHeader">Skipping Iterations</div>
        <div className="description">
          The <b>continue</b> statement is used to skip the current iteration and move to the next iteration of the loop.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    for (int i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            continue; // Skip even numbers
        }
        printf("Iteration %d\\n", i);
    }

    return 0;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            <b>Avoid infinite loops</b>: Ensure loop conditions are well-defined and will eventually become false.
          </li>
          <li>
            <b>
              Use <b>break</b> and <b>continue</b> judiciously
            </b>
            : Overusing them can make code harder to read.
          </li>
          <li>
            <b>Choose the appropriate loop type</b>: Use <b>for</b> loops when the number of iterations is known, and <b>while</b> loops when it depends on a condition.
          </li>
        </ul>

        <Bottom back="/c/conditionalstatements" next="/c/functions" />
      </div>
    </div>
  );
};

export default CLoops;
