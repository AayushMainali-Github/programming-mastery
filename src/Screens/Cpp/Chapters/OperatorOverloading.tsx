import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const OperatorOverloading = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Operator Overloading</div>
        <div className="description">
          Operator overloading in C++ allows you to redefine the behavior of operators (such as +, -, {"<<"}, etc.) for user-defined types. This provides a natural and intuitive
          way to work with custom objects, enabling them to interact similarly to built-in types. In this chapter, we’ll explore how to overload operators for a class, discuss the
          importance of preserving intuitive semantics, and review best practices for operator overloading.
        </div>

        <div className="subHeader">Introduction to Operator Overloading</div>
        <div className="description">
          Operator overloading allows you to extend the built-in functionality of C++ operators to handle custom types. This is particularly useful for classes representing
          mathematical entities, complex data structures, or when you want to simplify your code syntax. Keep in mind that overloaded operators should maintain clear and intuitive
          behavior.
        </div>

        <div className="subHeader">Overloading the Arithmetic Operator (+)</div>
        <div className="description">
          Let’s begin with a simple example by overloading the <code>+</code> operator to add two complex numbers. The class will include a constructor, a member function for
          operator overloading, and a friend function to display the result using the <code>&lt;&lt;</code> operator.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

class Complex {
public:
    double real;
    double imag;

    // Constructor with default values
    Complex(double r = 0.0, double i = 0.0) : real(r), imag(i) {}

    // Overload the + operator to add two Complex numbers
    Complex operator+(const Complex &other) const {
        return Complex(real + other.real, imag + other.imag);
    }

    // Overload the - operator to subtract two Complex numbers
    Complex operator-(const Complex &other) const {
        return Complex(real - other.real, imag - other.imag);
    }

    // Friend function to overload the << operator for output
    friend ostream& operator<<(ostream &os, const Complex &c) {
        os << c.real << " + " << c.imag << "i";
        return os;
    }
};

int main() {
    Complex c1(3.0, 4.0), c2(1.5, 2.5);
    Complex sum = c1 + c2;
    Complex diff = c1 - c2;

    cout << "Sum: " << sum << endl;       // Output: Sum: 4.5 + 6.5i
    cout << "Difference: " << diff << endl; // Output: Difference: 1.5 + 1.5i

    return 0;
}`}</Code>
        <div className="description">
          In this example, the <code>Complex</code> class overloads the <code>+</code> and <code>-</code> operators to perform arithmetic on complex numbers. The friend function
          for <code>&lt;&lt;</code> allows for easy printing of complex numbers.
        </div>

        <div className="subHeader">Overloading the Stream Insertion Operator ({`<<`})</div>
        <div className="description">
          The stream insertion operator (<code>&lt;&lt;</code>) is commonly overloaded to enable a natural output syntax for user-defined types. This operator is typically
          implemented as a friend function to allow access to private members.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`// See the friend function in the Complex class above:
// friend ostream& operator<<(ostream &os, const Complex &c)
// This function formats the output of a Complex number for display.
`}</Code>
        <div className="description">Overloading this operator improves the readability of your code when printing objects to the console.</div>

        <div className="subHeader">Best Practices for Operator Overloading</div>
        <ul className="list">
          <li>Ensure that overloaded operators behave in an intuitive and consistent manner, mirroring the behavior of built-in types.</li>
          <li>Overload operators as member functions or friend functions as needed, while preserving encapsulation.</li>
          <li>Avoid overloading operators for side effects; they should generally perform calculations or return new objects without modifying operands unexpectedly.</li>
          <li>Keep the interface of your class simple and well-documented, especially when overloading multiple operators.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Operator overloading enables you to extend the functionality of C++ operators for custom types.</li>
          <li>Overloaded operators should maintain intuitive behavior consistent with built-in types.</li>
          <li>Use friend functions when overloading operators that require access to private data.</li>
          <li>Clear and well-documented operator overloading improves code readability and usability.</li>
        </ul>

        <Bottom back="/cpp/inheritance-and-polymorphism" next="/cpp/templates" />
      </div>
    </div>
  );
};

export default OperatorOverloading;
