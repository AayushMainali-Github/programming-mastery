import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const IntroductionToCPP = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Introduction to C++</div>
        <div className="description">
          C++ is a powerful, high-performance programming language that has been pivotal in the development of modern software. Developed by Bjarne Stroustrup in the early 1980s,
          C++ evolved from the C programming language by adding object-oriented features and many other enhancements. Today, C++ is used across various domains, from systems
          programming and game development to high-performance computing and financial systems.
        </div>

        <div className="subHeader">What is C++?</div>
        <div className="description">
          C++ is a statically typed, compiled language that supports multiple programming paradigms including procedural, object-oriented, and generic programming. Its flexibility
          allows developers to write low-level code for system tasks as well as high-level abstractions for complex applications.
        </div>

        <div className="subHeader">History and Evolution</div>
        <div className="description">
          C++ was initially developed in 1979 by Bjarne Stroustrup at Bell Labs as "C with Classes". Over the years, it has undergone significant enhancements:
        </div>
        <ul className="list">
          <li>
            <b>C++98/C++03:</b> Established the core language features including classes, templates, and exception handling.
          </li>
          <li>
            <b>C++11:</b> Introduced modern features like auto, lambda expressions, smart pointers, and concurrency support.
          </li>
          <li>
            <b>C++14 and C++17:</b> Provided further enhancements in usability and performance improvements.
          </li>
          <li>
            <b>C++20:</b> Brings concepts, ranges, coroutines, and modules, pushing the boundaries of type safety and code organization.
          </li>
        </ul>

        <div className="subHeader">Significance in Modern Programming</div>
        <div className="description">
          Despite the emergence of many new languages, C++ remains crucial due to its unmatched performance and control over system resources. It is used in:
        </div>
        <ul className="list">
          <li>
            <b>Systems Programming:</b> Operating systems, embedded systems, and high-performance applications.
          </li>
          <li>
            <b>Game Development:</b> Leading game engines leverage C++ for its speed and efficiency.
          </li>
          <li>
            <b>Financial Systems:</b> Low-latency trading platforms and financial analytics.
          </li>
          <li>
            <b>Scientific Computing:</b> Applications requiring intensive computations and simulations.
          </li>
        </ul>

        <div className="subHeader">Example: Hello, World! in C++</div>
        <div className="description">Below is a classic "Hello, World!" program in C++:</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`}</Code>

        <div className="subHeader">Industry Impact and Best Practices</div>
        <div className="description">C++ has continuously evolved to meet modern software demands. Best practices include:</div>
        <ul className="list">
          <li>Adopt modern C++ standards (C++11 and later) to improve code safety and performance.</li>
          <li>Leverage object-oriented and generic programming to write reusable, maintainable code.</li>
          <li>Optimize critical systems by balancing low-level resource management with high-level abstractions.</li>
          <li>Utilize community resources and modern libraries to stay current with best practices.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>C++ is a multi-paradigm language known for its performance and versatility.</li>
          <li>Its evolution from C has introduced powerful features like object-oriented and generic programming.</li>
          <li>C++ remains essential in areas requiring high efficiency, such as systems programming, game development, and financial systems.</li>
          <li>Understanding the history and evolution of C++ provides context for its design and its continued relevance in modern programming.</li>
        </ul>

        <Bottom back="/cpp/previous-chapter" next="/cpp/setting-up-the-cpp-environment" />
      </div>
    </div>
  );
};

export default IntroductionToCPP;
