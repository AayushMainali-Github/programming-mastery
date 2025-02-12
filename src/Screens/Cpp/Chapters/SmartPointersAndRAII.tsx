import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SmartPointersAndRAII = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Smart Pointers and RAII</div>
        <div className="description">
          Modern C++ offers robust tools for safe and efficient dynamic memory management through smart pointers and the RAII (Resource Acquisition Is Initialization) paradigm.
          Smart pointers, such as <code>std::unique_ptr</code> and <code>std::shared_ptr</code>, help automate resource management by ensuring that memory is automatically released
          when no longer in use. RAII ties the lifetime of resources to the lifetime of objects, thereby preventing memory leaks and dangling pointers.
        </div>

        <div className="subHeader">std::unique_ptr</div>
        <div className="description">
          <code>std::unique_ptr</code> provides exclusive ownership of a dynamically allocated object. It cannot be copied, only moved, ensuring that a single unique pointer is
          responsible for the object's lifetime.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <memory>
using namespace std;

class Widget {
public:
    Widget() { cout << "Widget created" << endl; }
    ~Widget() { cout << "Widget destroyed" << endl; }
    void doSomething() { cout << "Widget is doing something" << endl; }
};

int main() {
    // Create a unique_ptr to manage a Widget object
    unique_ptr<Widget> widgetPtr = make_unique<Widget>();
    widgetPtr->doSomething();
    // widgetPtr goes out of scope here, and the Widget is automatically destroyed.
    return 0;
}`}</Code>
        <div className="description">
          In this example, the <code>unique_ptr</code> automatically manages the lifetime of the <code>Widget</code> object. When the pointer goes out of scope, the object is
          properly deallocated without any explicit <code>delete</code> call.
        </div>

        <div className="subHeader">std::shared_ptr</div>
        <div className="description">
          <code>std::shared_ptr</code> allows multiple pointers to share ownership of a dynamically allocated object. The object is deallocated only when the last{" "}
          <code>shared_ptr</code> referencing it is destroyed.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <memory>
using namespace std;

class Gadget {
public:
    Gadget() { cout << "Gadget created" << endl; }
    ~Gadget() { cout << "Gadget destroyed" << endl; }
    void operate() { cout << "Gadget is operating" << endl; }
};

int main() {
    shared_ptr<Gadget> ptr1 = make_shared<Gadget>();
    {
        // Another shared_ptr sharing ownership of the same Gadget
        shared_ptr<Gadget> ptr2 = ptr1;
        cout << "Reference count: " << ptr1.use_count() << endl; // Expected output: 2
        ptr2->operate();
    }
    // ptr2 goes out of scope, reference count decreases
    cout << "Reference count after ptr2 goes out of scope: " << ptr1.use_count() << endl; // Expected output: 1
    ptr1->operate();
    return 0;
}`}</Code>
        <div className="description">
          This example demonstrates shared ownership with <code>std::shared_ptr</code>. The resource is automatically deallocated when the last pointer (here, <code>ptr1</code>)
          goes out of scope.
        </div>

        <div className="subHeader">RAII: Resource Acquisition Is Initialization</div>
        <div className="description">
          RAII is a fundamental programming idiom in C++ that ties resource management to the lifetime of objects. When an object is constructed, it acquires the necessary
          resources, and when the object is destroyed, it releases them automatically. This technique ensures that resources such as dynamic memory, file handles, or network
          connections are properly cleaned up.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <fstream>
#include <stdexcept>
using namespace std;

class FileManager {
private:
    ifstream file;
public:
    // Constructor acquires the file resource
    FileManager(const string &filename) {
        file.open(filename);
        if (!file.is_open()) {
            throw runtime_error("Failed to open file: " + filename);
        }
        cout << "File opened successfully: " << filename << endl;
    }
    // Destructor releases the file resource automatically
    ~FileManager() {
        if (file.is_open()) {
            file.close();
            cout << "File closed automatically." << endl;
        }
    }
    // Function to read and display file contents
    void displayContents() {
        string line;
        while(getline(file, line)) {
            cout << line << endl;
        }
    }
};

int main() {
    try {
        FileManager fm("example.txt");
        fm.displayContents();
    } catch (const exception &e) {
        cout << "Exception: " << e.what() << endl;
    }
    return 0;
}`}</Code>
        <div className="description">
          In this RAII example, the <code>FileManager</code> class encapsulates file handling. The file is opened when the object is created and automatically closed when the
          object goes out of scope, ensuring proper resource management.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Prefer smart pointers over raw pointers for managing dynamic memory.</li>
          <li>
            Use <code>std::unique_ptr</code> for exclusive ownership and <code>std::shared_ptr</code> for shared ownership.
          </li>
          <li>Implement RAII in classes that manage resources to ensure that cleanup is automatic and exception-safe.</li>
          <li>Always initialize pointers and check resource validity to prevent undefined behavior.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Smart pointers provide automated and safe dynamic memory management.</li>
          <li>RAII ties resource management to object lifetimes, ensuring that resources are released properly.</li>
          <li>
            Using <code>std::unique_ptr</code> and <code>std::shared_ptr</code> significantly reduces the risk of memory leaks.
          </li>
          <li>Adopting these modern C++ practices leads to more robust, maintainable, and error-free code.</li>
        </ul>

        <Bottom back="/cpp/references-and-const-qualifiers" next="/cpp/objects-and-functions" />
      </div>
    </div>
  );
};

export default SmartPointersAndRAII;
