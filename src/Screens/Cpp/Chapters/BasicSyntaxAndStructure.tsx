import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BasicSyntaxAndStructure = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Basic Syntax and Structure</div>
        <div className="description">
          This chapter introduces the fundamental structure of a C++ program. You will learn how to write your first "Hello, World!" program, understand the role of the{" "}
          <code>main()</code> function, and explore the overall layout of a C++ application. These core concepts lay the groundwork for more advanced C++ programming.
        </div>

        <div className="subHeader">Writing Your First "Hello, World!" Program</div>
        <div className="description">
          The "Hello, World!" program is the classic starting point for any programming language. In C++, it typically involves including the necessary header file, defining the{" "}
          <code>main()</code> function, and using <code>std::cout</code> to display a message.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`}</Code>
        <div className="description">
          In this example, <code>#include &lt;iostream&gt;</code> imports the standard input/output stream library. The <code>main()</code> function is the entry point of the
          program, and <code>std::cout</code> outputs the text "Hello, World!" followed by a newline.
        </div>

        <div className="subHeader">Understanding the main() Function</div>
        <div className="description">
          Every C++ program starts execution in the <code>main()</code> function. It is where the program begins and ends its execution. Typically, <code>main()</code> returns an
          integer value, where returning 0 indicates successful execution. The function can also accept command-line arguments, allowing dynamic input.
        </div>

        <div className="subHeader">Program Layout and Organization</div>
        <div className="description">As projects grow, organizing your code becomes essential. A typical C++ project includes:</div>
        <ul className="list">
          <li>
            <b>Header Files:</b> Files with a <code>.h</code> or <code>.hpp</code> extension that contain declarations of functions, classes, and variables.
          </li>
          <li>
            <b>Source Files:</b> Files with a <code>.cpp</code> extension that contain the implementation of functions and classes.
          </li>
          <li>
            <b>Build Configuration:</b> Tools like Make or CMake to compile and link the project.
          </li>
        </ul>
        <div className="description">This structured approach makes your code more modular, easier to maintain, and scalable for larger applications.</div>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>
            The <code>main()</code> function is the starting point for any C++ program.
          </li>
          <li>
            "Hello, World!" is a simple program that demonstrates basic syntax, including header inclusion and output via <code>std::cout</code>.
          </li>
          <li>A well-organized project structure with separate header and source files is critical for maintainability in larger projects.</li>
        </ul>

        <Bottom back="/cpp/setting-up-the-cpp-environment" next="/cpp/variables-and-data-types" />
      </div>
    </div>
  );
};

export default BasicSyntaxAndStructure;
