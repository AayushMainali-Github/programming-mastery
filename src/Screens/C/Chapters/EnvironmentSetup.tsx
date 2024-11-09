import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CEnvironmentSetup = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Setting Up the Environment</div>
        <div className="description">
          Before you can start coding in C, you need to set up your development environment. This involves installing a C compiler and an Integrated Development Environment (IDE)
          or using a text editor.
        </div>

        <div className="subHeader">Installing a C Compiler</div>
        <div className="description">
          A compiler is necessary to convert your C code into executable programs. The most commonly used compiler is <b>GCC (GNU Compiler Collection)</b>.
        </div>
        <div className="description">
          <b>Steps to Install GCC:</b>
        </div>
        <ul className="list">
          <li>
            <b>Windows</b>: Install <b>MinGW</b>, which provides the GCC compiler. You can download it from the{" "}
            <a href="https://sourceforge.net/projects/mingw/" target="_blank" rel="noopener noreferrer">
              MinGW official site
            </a>
            .
          </li>
          <li>
            <b>macOS</b>: Install Xcode Command Line Tools by running{" "}
            <Code language="bash" style={materialDark}>
              {"xcode-select --install"}
            </Code>{" "}
            in the terminal.
          </li>
          <li>
            <b>Linux</b>: Use the package manager to install GCC. For Ubuntu, run{" "}
            <Code language="bash" style={materialDark}>
              {"sudo apt install gcc"}
            </Code>
            .
          </li>
        </ul>

        <div className="subHeader">Choosing an IDE or Text Editor</div>
        <div className="description">An IDE or text editor will make coding more efficient and easier to manage. Here are some popular options:</div>
        <ul className="list">
          <li>
            <b>Visual Studio Code (VS Code)</b>: A popular, lightweight text editor with extensive extensions for C/C++ development.
          </li>
          <li>
            <b>Code::Blocks</b>: An open-source IDE specifically designed for C and C++ programming.
          </li>
          <li>
            <b>Dev-C++</b>: A simple, beginner-friendly IDE for C/C++.
          </li>
        </ul>

        <div className="subHeader">Configuring Your Environment</div>
        <div className="description">
          After installing your compiler and IDE, ensure that your compiler's path is added to the system's PATH environment variable. This allows you to compile programs from the
          command line.
        </div>

        <Code language="bash" style={materialDark} showLineNumbers>{`# Example command to check GCC version
gcc --version

# Expected output:
# gcc (GCC) X.X.X
# Copyright (C) YYYY Free Software Foundation, Inc.`}</Code>

        <div className="subHeader">Running Your First C Program</div>
        <div className="description">
          Create a new file called <b>hello.c</b> and write the following code:
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`}</Code>
        <div className="description">To compile and run the program, use the following commands:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Compile the program
gcc hello.c -o hello

# Run the program
./hello`}</Code>

        <Bottom back="/c/introduction" next="/c/syntax" />
      </div>
    </div>
  );
};

export default CEnvironmentSetup;
