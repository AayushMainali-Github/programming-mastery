import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DynamicMemoryManagement = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Dynamic Memory Management</div>
        <div className="description">
          Dynamic memory management in C++ allows you to allocate memory during runtime using <code>new</code> and release it using <code>delete</code>. This enables flexible
          memory usage for variable-sized data structures and runtime decisions. However, managing dynamic memory manually can lead to issues like memory leaks and dangling
          pointers. Modern C++ provides smart pointers such as <code>std::unique_ptr</code>, <code>std::shared_ptr</code>, and <code>std::weak_ptr</code> to help automate memory
          management and improve code safety.
        </div>

        <div className="subHeader">
          Allocating Memory with <code>new</code>
        </div>
        <div className="description">
          The <code>new</code> operator allocates memory on the heap for a given type and returns a pointer to it. For example, to allocate an integer:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    // Allocate memory for an integer and initialize it to 42
    int* p = new int(42);
    cout << "Value allocated: " << *p << endl;
    // Remember to deallocate the memory to prevent leaks
    delete p;
    p = nullptr;  // Setting pointer to nullptr after deletion
    return 0;
}`}</Code>
        <div className="description">
          When using <code>new</code> to allocate memory, always ensure that you eventually free the memory using <code>delete</code> to avoid memory leaks.
        </div>

        <div className="subHeader">
          Allocating Arrays with <code>new[]</code> and Releasing with <code>delete[]</code>
        </div>
        <div className="description">
          For dynamic arrays, use the <code>new[]</code> operator to allocate and <code>delete[]</code> to deallocate:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    // Allocate an array of 5 integers
    int* arr = new int[5] {1, 2, 3, 4, 5};
    
    // Print array elements
    for (int i = 0; i < 5; i++) {
        cout << "arr[" << i << "] = " << arr[i] << endl;
    }
    
    // Deallocate the array
    delete[] arr;
    arr = nullptr;
    return 0;
}`}</Code>
        <div className="description">
          Using <code>delete[]</code> ensures that memory allocated for arrays is properly released.
        </div>

        <div className="subHeader">Introduction to Smart Pointers</div>
        <div className="description">
          Smart pointers in C++ (introduced in C++11) automate dynamic memory management, reducing the risks associated with manual memory handling. They automatically deallocate
          memory when it is no longer in use.
        </div>
        <div className="description">The most common smart pointers include:</div>
        <ul className="list">
          <li>
            <code>std::unique_ptr</code>: Owns a resource exclusively. It cannot be copied, only moved.
          </li>
          <li>
            <code>std::shared_ptr</code>: Allows multiple pointers to share ownership of a resource.
          </li>
          <li>
            <code>std::weak_ptr</code>: Provides a non-owning reference to an object managed by <code>std::shared_ptr</code> to prevent circular references.
          </li>
        </ul>

        <div className="subHeader">
          Example: Using <code>std::unique_ptr</code>
        </div>
        <div className="description">
          Here’s a simple example of using <code>std::unique_ptr</code> to manage dynamic memory for an integer:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <memory>
using namespace std;

int main() {
    // Create a unique_ptr to an integer
    unique_ptr<int> uptr(new int(100));
    cout << "Unique pointer value: " << *uptr << endl;

    // The memory is automatically deallocated when uptr goes out of scope
    return 0;
}`}</Code>

        <div className="subHeader">
          Example: Using <code>std::shared_ptr</code>
        </div>
        <div className="description">
          <code>std::shared_ptr</code> enables shared ownership of a resource. Multiple <code>shared_ptr</code>s can manage the same resource, and the resource is deallocated when
          the last <code>shared_ptr</code> is destroyed.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <memory>
using namespace std;

int main() {
    // Create a shared_ptr to an integer
    shared_ptr<int> sptr1 = make_shared<int>(200);
    {
        // Create another shared_ptr sharing the same resource
        shared_ptr<int> sptr2 = sptr1;
        cout << "Shared pointer value from sptr2: " << *sptr2 << endl;
        cout << "sptr2 use count: " << sptr2.use_count() << endl; // Output: 2
    }
    // sptr2 is out of scope, sptr1 remains
    cout << "sptr1 use count after sptr2 is out of scope: " << sptr1.use_count() << endl; // Output: 1
    return 0;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Always match each <code>new</code> with a corresponding <code>delete</code> to avoid memory leaks.
          </li>
          <li>
            Prefer smart pointers (<code>std::unique_ptr</code>, <code>std::shared_ptr</code>) for dynamic memory management to reduce manual errors.
          </li>
          <li>Avoid raw pointers for ownership management; use them only for non-owning references.</li>
          <li>
            Initialize pointers to <code>nullptr</code> after deletion to prevent dangling pointers.
          </li>
          <li>Use modern C++ practices and libraries to simplify memory management and enhance code safety.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>
            Dynamic memory allocation with <code>new</code> and <code>delete</code> enables flexible memory management in C++.
          </li>
          <li>
            Memory allocated for arrays must be deallocated using <code>delete[]</code> to prevent leaks.
          </li>
          <li>Smart pointers automate memory management, improving safety and reducing errors in modern C++ code.</li>
          <li>Adopting best practices in dynamic memory management is critical for writing efficient and robust C++ programs.</li>
        </ul>

        <Bottom back="/cpp/references-and-const-qualifiers" next="/cpp/objects-and-functions" />
      </div>
    </div>
  );
};

export default DynamicMemoryManagement;
