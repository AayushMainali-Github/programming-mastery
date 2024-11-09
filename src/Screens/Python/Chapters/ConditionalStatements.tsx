import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ConditionalStatements = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Conditional Statements</div>
        <div className="description">
          Conditional statements are used to execute code based on whether a condition is true or false. Python supports <b>if</b>, <b>elif</b> (else if), and <b>else</b>{" "}
          statements for decision-making.
        </div>

        <div className="subHeader">
          The <b>if</b> Statement
        </div>
        <div className="description">
          The <b>if</b> statement allows you to execute a block of code only if a specified condition is true.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Basic if statement
x = 10
if x > 5:
    print("x is greater than 5")`}</Code>

        <div className="subHeader">
          The <b>if-else</b> Statement
        </div>
        <div className="description">
          The <b>if-else</b> statement runs one block of code if the condition is true, and another block if it is false.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# if-else statement
x = 3
if x > 5:
    print("x is greater than 5")
else:
    print("x is 5 or less")`}</Code>

        <div className="subHeader">
          The <b>if-elif-else</b> Statement
        </div>
        <div className="description">
          The <b>elif</b> keyword stands for "else if" and is used to check multiple conditions. The <b>else</b> block runs if none of the <b>if</b> or <b>elif</b> conditions are
          true.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# if-elif-else statement
x = 10
if x > 15:
    print("x is greater than 15")
elif x > 10:
    print("x is greater than 10 but not greater than 15")
elif x > 5:
    print("x is greater than 5 but not greater than 10")
else:
    print("x is 5 or less")`}</Code>

        <div className="subHeader">
          Nested <b>if</b> Statements
        </div>
        <div className="description">
          You can nest <b>if</b> statements inside other <b>if</b> statements to create more complex conditions.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Nested if statements
x = 20
if x > 10:
    print("x is greater than 10")
    if x > 15:
        print("x is also greater than 15")
    else:
        print("x is not greater than 15")`}</Code>

        <div className="subHeader">Using Logical Operators</div>
        <div className="description">
          You can use logical operators like <b>and</b>, <b>or</b>, and <b>not</b> to combine multiple conditions in an <b>if</b> statement.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using logical operators
x = 7
if x > 5 and x < 10:
    print("x is between 5 and 10")

if x < 3 or x > 5:
    print("x is either less than 3 or greater than 5")

if not (x > 10):
    print("x is not greater than 10")`}</Code>

        <div className="subHeader">Ternary Conditional Operator</div>
        <div className="description">
          Python supports a shorthand version of the <b>if-else</b> statement called the ternary conditional operator.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Ternary conditional operator
x = 10
result = "x is greater than 5" if x > 5 else "x is 5 or less"
print(result)`}</Code>

        <Bottom back="/python/operators" next="/python/loops" />
      </div>
    </div>
  );
};

export default ConditionalStatements;
