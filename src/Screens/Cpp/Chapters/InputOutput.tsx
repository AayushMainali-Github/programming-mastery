import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const InputOutputCPP = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Input/Output in C++</div>
        <div className="description">
          C++ provides robust support for both console-based I/O and file I/O operations. In this chapter, you will learn how to work with the standard I/O streams—<code>cin</code>{" "}
          for input and <code>cout</code> for output—to interact with the user, as well as how to perform basic file I/O using <code>ifstream</code> and <code>ofstream</code> for
          reading from and writing to files.
        </div>

        <div className="subHeader">Standard I/O Streams (cin, cout)</div>
        <div className="description">
          The <code>iostream</code> library in C++ provides the <code>cin</code> and <code>cout</code> streams for console input and output.
          <code>cout</code> is used to display information, while <code>cin</code> is used to receive input from the user.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter your age: ";  // Prompt the user for input
    cin >> age;                  // Read input from the console
    cout << "You are " << age << " years old." << endl;
    return 0;
}`}</Code>
        <div className="description">
          In this example, the program prompts the user to enter their age, reads the value using <code>cin</code>, and then prints the result using <code>cout</code>.
        </div>

        <div className="subHeader">Basic File I/O Operations</div>
        <div className="description">
          C++ supports file I/O through the <code>fstream</code> library. The <code>ofstream</code> class is used for writing to files, while <code>ifstream</code> is used for
          reading from files.
        </div>
        <div className="subHeader">Writing to a File</div>
        <div className="description">
          To write to a file, create an <code>ofstream</code> object and check if the file opens successfully.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // Create an output file stream object to write to "example.txt"
    ofstream outFile("example.txt");
    
    if (outFile.is_open()) {
        outFile << "Hello, file I/O in C++!" << endl;
        outFile << "This is the second line." << endl;
        outFile.close();  // Always close the file after writing
        cout << "Data successfully written to example.txt" << endl;
    } else {
        cout << "Error: Unable to open file for writing." << endl;
    }
    
    return 0;
}`}</Code>
        <div className="description">
          This example writes two lines of text to <code>example.txt</code> and then closes the file to ensure that the changes are saved.
        </div>

        <div className="subHeader">Reading from a File</div>
        <div className="description">
          To read data from a file, use an <code>ifstream</code> object. This example demonstrates how to open a file, read its content line by line, and display the output on the
          console.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // Create an input file stream object to read from "example.txt"
    ifstream inFile("example.txt");
    string line;
    
    if (inFile.is_open()) {
        cout << "Reading from example.txt:" << endl;
        while (getline(inFile, line)) {
            cout << line << endl;
        }
        inFile.close();  // Always close the file after reading
    } else {
        cout << "Error: Unable to open file for reading." << endl;
    }
    
    return 0;
}`}</Code>
        <div className="description">
          In this program, <code>getline</code> is used to read each line of the file until the end is reached. This approach ensures that spaces and special characters in the file
          are handled correctly.
        </div>

        <div className="subHeader">Error Handling and Resource Management</div>
        <div className="description">
          When working with I/O operations, it is important to check if files are successfully opened before proceeding. Always close file streams after operations to prevent
          resource leaks.
        </div>
        <ul className="list">
          <li>
            Check file stream objects (<code>is_open()</code>) to confirm that the file was opened successfully.
          </li>
          <li>
            Always close file streams using <code>close()</code> to release system resources.
          </li>
          <li>Consider using RAII patterns or smart file wrappers to manage file lifetimes automatically.</li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use standard I/O streams (<code>cin</code> and <code>cout</code>) for console interactions.
          </li>
          <li>Prefer the standard library’s file I/O classes for reading and writing files.</li>
          <li>Always handle possible errors when opening or reading/writing files.</li>
          <li>Document I/O operations clearly to facilitate debugging and maintenance.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Standard I/O streams are essential for console-based applications.</li>
          <li>File I/O operations allow you to persist data to external files or read data from them.</li>
          <li>Robust error handling and proper resource management (opening and closing files) are crucial for reliable I/O operations.</li>
          <li>Understanding these fundamentals is key to developing efficient and safe C++ applications.</li>
        </ul>

        <Bottom back="/cpp/arrays-and-strings" next="/cpp/pointers" />
      </div>
    </div>
  );
};

export default InputOutputCPP;
