import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Templates = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Templates in C++</div>
        <div className="description">
          Templates are a powerful feature in C++ that allow you to write generic code. By defining functions and classes as templates, you can create reusable components that work
          with any data type while maintaining type safety. This chapter covers the basics of template functions and template classes, provides practical examples, and discusses
          best practices for using templates effectively in your C++ projects.
        </div>

        <div className="subHeader">Generic Functions with Templates</div>
        <div className="description">
          Template functions allow you to write a single function that can work with multiple data types. For instance, consider a function that returns the maximum of two values.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

// Template function to return the maximum of two values
template <typename T>
T maxValue(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << "Max of 10 and 20: " << maxValue(10, 20) << endl;
    cout << "Max of 3.14 and 2.71: " << maxValue(3.14, 2.71) << endl;
    cout << "Max of 'Z' and 'A': " << maxValue('Z', 'A') << endl;
    return 0;
}`}</Code>
        <div className="description">
          In this example, the <code>maxValue</code> template function can compare integers, doubles, or characters, ensuring type safety while avoiding duplicate code.
        </div>

        <div className="subHeader">Generic Classes with Templates</div>
        <div className="description">
          Template classes allow you to define a class that operates on a generic data type. Below is an example of a simple template class called <code>Pair</code> that stores two
          values of the same type.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

// Template class to store a pair of values
template <typename T>
class Pair {
  private:
    T first;
    T second;
    
  public:
    // Constructor to initialize the pair
    Pair(T a, T b) : first(a), second(b) {}

    // Member functions to access the pair values
    T getFirst() const { return first; }
    T getSecond() const { return second; }

    // Function to display the pair
    void display() const {
        cout << "First: " << first << ", Second: " << second << endl;
    }
};

int main() {
    // Using Pair with integers
    Pair<int> intPair(10, 20);
    intPair.display(); // Output: First: 10, Second: 20

    // Using Pair with strings
    Pair<string> stringPair("Hello", "World");
    stringPair.display(); // Output: First: Hello, Second: World

    return 0;
}`}</Code>
        <div className="description">
          The <code>Pair</code> template class demonstrates how a single class definition can be reused for different data types, promoting code reuse and ensuring type safety.
        </div>

        <div className="subHeader">Advanced Template Concepts</div>
        <div className="description">
          Beyond simple generic functions and classes, you can add constraints to templates using concepts (in C++20) or SFINAE (Substitution Failure Is Not An Error) techniques.
          These advanced features allow you to restrict template parameters to types that meet specific criteria. For example, you might ensure that a type supports arithmetic
          operations.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`// Example using SFINAE to enable a function only for arithmetic types
#include <iostream>
#include <type_traits>
using namespace std;

template <typename T>
typename enable_if<is_arithmetic<T>::value, T>::type
add(T a, T b) {
    return a + b;
}

int main() {
    cout << "Sum of 5 and 10: " << add(5, 10) << endl;            // Valid: integer addition
    cout << "Sum of 3.5 and 2.5: " << add(3.5, 2.5) << endl;       // Valid: floating-point addition
    // add("Hello", "World"); // Compilation error: Not an arithmetic type
    return 0;
}`}</Code>
        <div className="description">
          This example uses <code>std::enable_if</code> along with <code>std::is_arithmetic</code> to ensure that the <code>add</code> function only works with arithmetic types.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use template functions and classes to create reusable, generic code that works with multiple data types.</li>
          <li>Leverage template constraints or SFINAE techniques to enforce type safety and limit template instantiation to valid types.</li>
          <li>Keep your template implementations simple and well-documented to improve readability and maintainability.</li>
          <li>Use meaningful names for template parameters to clarify their purpose.</li>
          <li>Regularly test your template code with different types to ensure its robustness and flexibility.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Templates allow you to write generic functions and classes that are reusable across different data types.</li>
          <li>They provide strong compile-time type checking while reducing code duplication.</li>
          <li>Advanced techniques, such as SFINAE and concepts, enable you to constrain templates for more specific use cases.</li>
          <li>Following best practices ensures that your template code remains maintainable and type-safe.</li>
        </ul>

        <Bottom back="/cpp/inheritance-and-polymorphism" next="/cpp/advanced-exception-handling" />
      </div>
    </div>
  );
};

export default Templates;
