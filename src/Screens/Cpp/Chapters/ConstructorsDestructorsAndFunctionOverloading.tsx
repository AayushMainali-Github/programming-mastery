import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ConstructorsDestructorsOverloading = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Constructors, Destructors, and Function Overloading</div>
        <div className="description">
          In C++, constructors and destructors are special member functions responsible for initializing and cleaning up objects, respectively. Function overloading allows you to
          define multiple versions of a function with the same name but different parameter lists, providing flexibility and polymorphic behavior. This chapter explains how to
          create and use constructors (including default, parameterized, and copy constructors), destructors, and function overloading with detailed examples and best practices.
        </div>

        <div className="subHeader">Constructors</div>
        <div className="description">
          Constructors initialize objects at the time of creation. They can have different signatures to provide multiple ways of initializing an object. Consider the following
          example of a <code>Box</code> class with multiple constructors:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

class Box {
  private:
    double length;
    double width;
    double height;
    
  public:
    // Default constructor
    Box() : length(0), width(0), height(0) {
        cout << "Default constructor called." << endl;
    }
    
    // Parameterized constructor
    Box(double l, double w, double h) : length(l), width(w), height(h) {
        cout << "Parameterized constructor called." << endl;
    }
    
    // Copy constructor
    Box(const Box &other) : length(other.length), width(other.width), height(other.height) {
        cout << "Copy constructor called." << endl;
    }
    
    double getVolume() const {
        return length * width * height;
    }
};

int main() {
    Box defaultBox;
    Box customBox(3.0, 4.0, 5.0);
    Box copiedBox = customBox;
    
    cout << "Volume of customBox: " << customBox.getVolume() << endl;
    cout << "Volume of copiedBox: " << copiedBox.getVolume() << endl;
    return 0;
}`}</Code>
        <div className="description">
          Here, the <code>Box</code> class defines a default constructor, a parameterized constructor for custom dimensions, and a copy constructor that duplicates an existing box.
        </div>

        <div className="subHeader">Destructors</div>
        <div className="description">
          Destructors clean up resources when an object goes out of scope. They are automatically called and help prevent memory leaks by releasing allocated resources.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

class Logger {
  public:
    Logger() {
        cout << "Logger created." << endl;
    }
    
    ~Logger() {
        cout << "Logger destroyed." << endl;
    }
};

int main() {
    {
        Logger log;
        // The Logger object is created and will be automatically destroyed
        // when the block ends.
    }
    cout << "Exited the inner block." << endl;
    return 0;
}`}</Code>
        <div className="description">
          In this example, the <code>Logger</code> class has a destructor that announces when the object is destroyed, ensuring that cleanup occurs automatically.
        </div>

        <div className="subHeader">Function Overloading</div>
        <div className="description">
          Function overloading allows you to define multiple functions with the same name but different parameter lists. This enables polymorphic behavior based on the types or
          number of arguments passed to a function.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

class Calculator {
  public:
    // Overloaded function for adding two integers
    int add(int a, int b) {
      return a + b;
    }
    
    // Overloaded function for adding three integers
    int add(int a, int b, int c) {
      return a + b + c;
    }
    
    // Overloaded function for adding two double values
    double add(double a, double b) {
      return a + b;
    }
};

int main() {
    Calculator calc;
    cout << "Sum of 2 and 3: " << calc.add(2, 3) << endl;
    cout << "Sum of 2, 3, and 4: " << calc.add(2, 3, 4) << endl;
    cout << "Sum of 2.5 and 3.5: " << calc.add(2.5, 3.5) << endl;
    return 0;
}`}</Code>
        <div className="description">
          The <code>Calculator</code> class demonstrates function overloading by providing multiple <code>add</code> functions that handle different types and numbers of
          parameters.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Design constructors to initialize all necessary data members to avoid undefined states.</li>
          <li>Implement destructors to release resources and prevent memory leaks, especially in classes managing dynamic memory.</li>
          <li>Define overloaded functions with clear, distinct parameter lists to avoid ambiguity and improve code readability.</li>
          <li>Keep functions focused on a single responsibility for easier testing and maintenance.</li>
          <li>Document each constructor and overloaded function to clarify its intended usage.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Constructors initialize objects, while destructors clean up resources when objects go out of scope.</li>
          <li>Function overloading allows multiple versions of a function to coexist, enabling polymorphism.</li>
          <li>Proper management of object lifecycles is essential for writing robust and efficient C++ code.</li>
          <li>Clear function definitions and thorough documentation enhance code maintainability and usability.</li>
        </ul>

        <Bottom back="/cpp/object-oriented-programming" next="/cpp/templates" />
      </div>
    </div>
  );
};

export default ConstructorsDestructorsOverloading;
