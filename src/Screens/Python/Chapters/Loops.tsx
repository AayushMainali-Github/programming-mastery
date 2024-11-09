import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Loops = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Loops</div>
        <div className="description">
          Loops are used to execute a block of code multiple times. Python supports two main types of loops: <b>for</b> loops and <b>while</b> loops.
        </div>

        <div className="subHeader">
          The <b>for</b> Loop
        </div>
        <div className="description">
          The <b>for</b> loop is used to iterate over a sequence (e.g., a list, tuple, dictionary, or string) and execute a block of code for each item in the sequence.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Iterating over a list
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num)

# Iterating over a string
for char in "Python":
    print(char)`}</Code>

        <div className="subHeader">
          The <b>range()</b> Function
        </div>
        <div className="description">
          The <b>range()</b> function is commonly used with <b>for</b> loops to generate a sequence of numbers.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using range() to print numbers from 0 to 4
for i in range(5):
    print(i)

# Using range() with a start and end value
for i in range(1, 6):
    print(i)

# Using range() with a step value
for i in range(0, 10, 2):
    print(i)`}</Code>

        <div className="subHeader">
          The <b>while</b> Loop
        </div>
        <div className="description">
          The <b>while</b> loop is used to execute a block of code as long as a condition is true. Be cautious with <b>while</b> loops to avoid creating infinite loops.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Basic while loop
x = 0
while x < 5:
    print(x)
    x += 1`}</Code>

        <div className="subHeader">
          The <b>break</b> Statement
        </div>
        <div className="description">
          The <b>break</b> statement is used to exit a loop before it has finished iterating.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using break to exit a loop
for i in range(10):
    if i == 5:
        break
    print(i)`}</Code>

        <div className="subHeader">
          The <b>continue</b> Statement
        </div>
        <div className="description">
          The <b>continue</b> statement is used to skip the current iteration of a loop and continue with the next iteration.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using continue to skip an iteration
for i in range(5):
    if i == 2:
        continue
    print(i)`}</Code>

        <div className="subHeader">
          The <b>else</b> Clause in Loops
        </div>
        <div className="description">
          Python allows an optional <b>else</b> clause at the end of a loop. The <b>else</b> block runs if the loop completes normally (i.e., not terminated by <b>break</b>).
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using else with a for loop
for i in range(3):
    print(i)
else:
    print("Loop completed successfully")

# Using else with a while loop
x = 0
while x < 3:
    print(x)
    x += 1
else:
    print("While loop completed successfully")`}</Code>

        <Bottom back="/python/conditionalstatements" next="/python/functionsmodules" />
      </div>
    </div>
  );
};

export default Loops;
