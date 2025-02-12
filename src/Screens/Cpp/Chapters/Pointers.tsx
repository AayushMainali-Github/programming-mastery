import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Pointers = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Pointers</div>
        <div className="description">
          Pointers are one of the most powerful and fundamental features in C++. They allow you to store and manipulate memory addresses, enabling dynamic memory management,
          efficient array handling, and complex data structures. In this chapter, we will cover what pointers are, how pointer arithmetic works, and how pointers reference memory
          locations.
        </div>

        <div className="subHeader">What Are Pointers?</div>
        <div className="description">
          A pointer is a variable that holds the memory address of another variable. Instead of storing a direct value, a pointer stores the location where the value is stored in
          memory.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    int value = 42;            // A normal integer variable
    int* ptr = &value;         // A pointer variable that holds the address of 'value'

    cout << "Value: " << value << endl;
    cout << "Address of value: " << &value << endl;
    cout << "Pointer (ptr) stores address: " << ptr << endl;
    cout << "Dereferenced pointer (*ptr): " << *ptr << endl; // Retrieves the value at the memory address stored in ptr

    return 0;
}`}</Code>
        <div className="description">
          In this example, <code>ptr</code> is declared as a pointer to an <code>int</code> and is initialized with the address of the variable <code>value</code> using the{" "}
          <code>&amp;</code> operator. Dereferencing the pointer using <code>*ptr</code> gives us the original value.
        </div>

        <div className="subHeader">Pointer Arithmetic</div>
        <div className="description">
          Pointer arithmetic allows you to manipulate pointer values by performing arithmetic operations. Since pointers refer to memory addresses, adding or subtracting a value
          from a pointer moves it by that number of elements of the pointer's type.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int* p = arr; // Points to the first element of the array

    cout << "First element: " << *p << endl;  // Output: 10

    p++; // Move pointer to the next element
    cout << "Second element: " << *p << endl;   // Output: 20

    p += 2; // Move pointer forward by two elements
    cout << "Fourth element: " << *p << endl;   // Output: 40

    return 0;
}`}</Code>
        <div className="description">
          In this snippet, pointer arithmetic is used to navigate through an array. When you increment a pointer, it moves by the size of the data type it points to.
        </div>

        <div className="subHeader">Dereferencing Pointers</div>
        <div className="description">
          Dereferencing a pointer means accessing the value stored at the memory address held by the pointer. This is done using the unary <code>*</code> operator.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    int number = 100;
    int* ptr = &number;

    // Dereferencing the pointer to access the value
    cout << "The value of number is: " << *ptr << endl;

    // Changing the value using the pointer
    *ptr = 200;
    cout << "The updated value of number is: " << number << endl;

    return 0;
}`}</Code>
        <div className="description">This example demonstrates how dereferencing allows both reading and modifying the value stored at a particular memory address.</div>

        <div className="subHeader">Pointers and Memory Addresses</div>
        <div className="description">
          The <code>&amp;</code> operator is used to obtain the memory address of a variable, which is then stored in a pointer. Understanding this relationship is key to effective
          memory management in C++.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    int x = 50;
    int* ptr = &x;

    cout << "Value of x: " << x << endl;
    cout << "Memory address of x: " << &x << endl;
    cout << "Pointer ptr stores: " << ptr << endl;

    return 0;
}`}</Code>
        <div className="description">
          Here, we see that <code>&amp;x</code> gives the memory address of <code>x</code>, which is then stored in the pointer <code>ptr</code>.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always initialize pointers; uninitialized pointers may lead to undefined behavior.</li>
          <li>Use nullptr (C++11 and later) instead of 0 or NULL for better type safety.</li>
          <li>Be cautious with pointer arithmetic to avoid accessing memory out of bounds.</li>
          <li>
            Prefer smart pointers (e.g., <code>std::unique_ptr</code>, <code>std::shared_ptr</code>) in modern C++ to manage dynamic memory safely.
          </li>
          <li>Document your pointer usage clearly to ease debugging and maintenance.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Pointers store memory addresses and provide a powerful way to directly access and manipulate memory.</li>
          <li>Pointer arithmetic is useful for iterating over arrays and other data structures.</li>
          <li>Dereferencing a pointer allows you to read and modify the value stored at the pointed-to memory location.</li>
          <li>Proper management of pointers is crucial for writing efficient and safe C++ code.</li>
        </ul>

        <Bottom back="/cpp/functions" next="/cpp/references-and-const" />
      </div>
    </div>
  );
};

export default Pointers;
