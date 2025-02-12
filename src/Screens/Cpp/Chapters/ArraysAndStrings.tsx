import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ArraysAndStrings = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Arrays and Strings</div>
        <div className="description">
          In C++, arrays and strings are fundamental data structures used to store collections of elements. This chapter covers how to declare, initialize, and manipulate arrays
          and strings. We will explore both C-style strings and the modern <code>std::string</code> class, discussing their advantages, common pitfalls, and best practices.
        </div>

        <div className="subHeader">Working with Arrays</div>
        <div className="description">
          Arrays are used to store a collection of elements of the same type. They are allocated in contiguous memory locations and can be accessed using an index. Here’s an
          example of declaring and initializing an array:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    // Declaration and initialization of an array of integers
    int numbers[5] = {1, 2, 3, 4, 5};
    
    // Printing the array elements
    cout << "Original array: ";
    for (int i = 0; i < 5; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    // Modifying an element in the array
    numbers[2] = 10;
    
    cout << "Modified array: ";
    for (int i = 0; i < 5; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    return 0;
}`}</Code>
        <div className="description">In this example, we declare an array of 5 integers, initialize it with values, modify one of the elements, and then display the results.</div>

        <div className="subHeader">C-style Strings</div>
        <div className="description">
          C-style strings are arrays of characters terminated by a null character (<code>'\0'</code>). They require careful handling to ensure that the null terminator is included.
          Below is an example of how to declare, initialize, and manipulate a C-style string:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <cstring>
using namespace std;

int main() {
    // Declaration and initialization of a C-style string
    char greeting[20] = "Hello, World!";
    cout << "C-style string: " << greeting << endl;
    
    // Using <cstring> functions: Get the length of the string
    cout << "Length: " << strlen(greeting) << endl;
    
    // Copying strings using strcpy
    char copy[20];
    strcpy(copy, greeting);
    cout << "Copied string: " << copy << endl;
    
    // Concatenating strings using strcat
    strcat(greeting, " How are you?");
    cout << "Concatenated string: " << greeting << endl;
    
    return 0;
}`}</Code>
        <div className="description">
          The above example demonstrates basic C-style string operations using functions from the <code>&lt;cstring&gt;</code> library.
        </div>

        <div className="subHeader">std::string</div>
        <div className="description">
          The C++ Standard Library provides the <code>std::string</code> class, which offers a more robust and safer way to work with strings compared to C-style strings.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    // Declaration and initialization of a std::string
    string message = "Hello, C++!";
    cout << "std::string: " << message << endl;
    
    // Concatenating strings
    string fullMessage = message + " Welcome to modern string handling.";
    cout << fullMessage << endl;
    
    // Accessing individual characters
    cout << "First character: " << fullMessage[0] << endl;
    
    // Finding a substring
    size_t position = fullMessage.find("C++");
    if (position != string::npos) {
        cout << ""C++" found at position: " << position << endl;
    }
    
    // Replacing a substring
    fullMessage.replace(fullMessage.find("Hello"), 5, "Hi");
    cout << "After replacement: " << fullMessage << endl;
    
    return 0;
}`}</Code>
        <div className="description">
          The <code>std::string</code> class simplifies many common string operations such as concatenation, substring search, and replacement, while handling memory management
          automatically.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Prefer <code>std::string</code> over C-style strings for safer and more convenient string manipulation.
          </li>
          <li>Always ensure that arrays are properly initialized to prevent undefined behavior.</li>
          <li>When using C-style strings, always account for the null terminator to avoid buffer overflows.</li>
          <li>Utilize standard library functions and classes to simplify code and reduce errors.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Arrays are used to store collections of elements, and proper initialization and bounds checking are critical.</li>
          <li>C-style strings are character arrays that require manual management of the null terminator.</li>
          <li>
            The <code>std::string</code> class offers a robust and flexible way to work with text data in C++.
          </li>
          <li>Choosing the appropriate string type depends on your specific needs and the level of control you require.</li>
        </ul>

        <Bottom back="/cpp/control-flow-statements" next="/cpp/pointers" />
      </div>
    </div>
  );
};

export default ArraysAndStrings;
