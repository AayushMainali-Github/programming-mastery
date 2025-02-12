import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const NamespacesAndModularization = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Namespaces and Modularization</div>
        <div className="description">
          Organizing your C++ code into logical groups is essential for avoiding naming conflicts and improving maintainability. Namespaces allow you to encapsulate related
          identifiers, preventing collisions between names in large projects. In addition, modularization, which involves dividing code into separate header and source files, helps
          manage complexity, promotes code reuse, and speeds up compilation. This chapter explores both namespaces and modularization practices with detailed examples and best
          practices.
        </div>

        <div className="subHeader">Using Namespaces</div>
        <div className="description">
          Namespaces in C++ provide a way to group related functions, classes, and variables. By wrapping your code in a namespace, you can avoid naming conflicts with other parts
          of your program or with external libraries.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

// Define a namespace for mathematical functions
namespace Math {
    int add(int a, int b) {
        return a + b;
    }
    
    int subtract(int a, int b) {
        return a - b;
    }
}

int main() {
    // Access functions using the scope resolution operator
    int sum = Math::add(10, 5);
    int diff = Math::subtract(20, 8);
    
    cout << "Sum: " << sum << endl;
    cout << "Difference: " << diff << endl;
    return 0;
}`}</Code>
        <div className="description">
          In this example, the <code>Math</code> namespace encapsulates the functions <code>add</code> and <code>subtract</code>, keeping them separate from the global scope.
        </div>

        <div className="subHeader">Nested Namespaces</div>
        <div className="description">
          In large projects, you may want to group related namespaces within a higher-level namespace. Nested namespaces help further organize code into a hierarchical structure.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

namespace Company {
    namespace Finance {
        double calculateBudget(double revenue, double expenses) {
            return revenue - expenses;
        }
    }
    
    namespace HR {
        void displayEmployeeCount(int count) {
            cout << "Employee Count: " << count << endl;
        }
    }
}

int main() {
    double budget = Company::Finance::calculateBudget(1000000.0, 750000.0);
    Company::HR::displayEmployeeCount(150);
    cout << "Budget: " << budget << endl;
    return 0;
}`}</Code>
        <div className="description">
          Here, the <code>Company</code> namespace contains nested namespaces <code>Finance</code> and <code>HR</code>, which clearly separate financial functions from human
          resources functions.
        </div>

        <div className="subHeader">Modularization with Header and Source Files</div>
        <div className="description">
          Dividing your code into header and source files is a key aspect of modularization in C++. Header files (with extensions such as <code>.h</code> or <code>.hpp</code>)
          contain declarations, while source files (<code>.cpp</code>) contain definitions. This separation makes your code more manageable and promotes reusability.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`// File: MathFunctions.h
#ifndef MATHFUNCTIONS_H
#define MATHFUNCTIONS_H

namespace Math {
    int add(int a, int b);
    int subtract(int a, int b);
}

#endif // MATHFUNCTIONS_H

// File: MathFunctions.cpp
#include "MathFunctions.h"

namespace Math {
    int add(int a, int b) {
        return a + b;
    }
    
    int subtract(int a, int b) {
        return a - b;
    }
}

// File: main.cpp
#include <iostream>
#include "MathFunctions.h"
using namespace std;

int main() {
    int sum = Math::add(15, 25);
    int diff = Math::subtract(50, 20);
    cout << "Sum: " << sum << endl;
    cout << "Difference: " << diff << endl;
    return 0;
}`}</Code>
        <div className="description">
          In this modular example, the functions <code>add</code> and <code>subtract</code> are declared in <code>MathFunctions.h</code> and defined in{" "}
          <code>MathFunctions.cpp</code>. The <code>main.cpp</code> file includes the header file to access these functions.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use namespaces to encapsulate related functions, classes, and variables, preventing naming conflicts.</li>
          <li>Organize your code into header and source files to enhance modularity and reusability.</li>
          <li>Employ header guards in your header files to prevent multiple inclusion issues.</li>
          <li>Maintain a clear hierarchy in your namespace structure, and document the purpose of each namespace.</li>
          <li>Separate interface declarations from implementation details for better code organization and faster compilation times.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Namespaces help group related code and prevent naming conflicts, leading to cleaner, more maintainable code.</li>
          <li>Nested namespaces offer a hierarchical structure that is especially useful in large projects.</li>
          <li>Modularization via header and source files separates declarations from implementations, making code easier to manage and reuse.</li>
          <li>Adhering to best practices in modular design leads to scalable and robust C++ applications.</li>
        </ul>

        <Bottom back="/cpp/smart-pointers-and-raii" next="/cpp/advanced-file-i-o" />
      </div>
    </div>
  );
};

export default NamespacesAndModularization;
