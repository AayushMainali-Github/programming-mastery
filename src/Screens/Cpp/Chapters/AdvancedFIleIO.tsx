import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AdvancedFileIO = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Advanced File I/O</div>
        <div className="description">
          File input and output (I/O) operations in C++ are crucial for reading and writing data to files efficiently. The C++ Standard Library provides the <code>fstream</code>{" "}
          module for handling file streams and <code>stringstream</code> for processing formatted data in-memory. This chapter explores advanced file handling techniques, including
          error handling, appending data, and working with structured data.
        </div>

        <div className="subHeader">Using fstream for File Handling</div>
        <div className="description">
          The <code>fstream</code> library provides three main classes for file operations:
        </div>
        <ul className="list">
          <li>
            <code>ifstream</code> (input file stream) - Used for reading from files.
          </li>
          <li>
            <code>ofstream</code> (output file stream) - Used for writing to files.
          </li>
          <li>
            <code>fstream</code> (file stream) - Used for both reading and writing.
          </li>
        </ul>

        <div className="subHeader">Writing to a File</div>
        <div className="description">
          The following example demonstrates how to write data to a file using <code>ofstream</code>:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream outFile("data.txt");

    if (!outFile) {
        cerr << "Error: Could not open the file for writing." << endl;
        return 1;
    }

    outFile << "Name: John Doe" << endl;
    outFile << "Age: 30" << endl;
    outFile << "City: New York" << endl;

    outFile.close();
    cout << "Data successfully written to file." << endl;
    return 0;
}`}</Code>
        <div className="description">
          In this example, the program creates (or overwrites) a file named <code>data.txt</code> and writes structured data into it.
        </div>

        <div className="subHeader">Reading from a File</div>
        <div className="description">
          The following example demonstrates how to read data from a file using <code>ifstream</code>:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ifstream inFile("data.txt");

    if (!inFile) {
        cerr << "Error: Could not open the file for reading." << endl;
        return 1;
    }

    string line;
    while (getline(inFile, line)) {
        cout << line << endl;
    }

    inFile.close();
    return 0;
}`}</Code>
        <div className="description">
          Here, <code>getline()</code> reads each line from the file and prints it to the console. The program handles file errors gracefully.
        </div>

        <div className="subHeader">Appending Data to a File</div>
        <div className="description">
          To add content to an existing file without overwriting it, open the file in append mode using the <code>ios::app</code> flag.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream outFile("data.txt", ios::app);

    if (!outFile) {
        cerr << "Error: Could not open the file for appending." << endl;
        return 1;
    }

    outFile << "Country: USA" << endl;
    outFile.close();

    cout << "New data appended successfully." << endl;
    return 0;
}`}</Code>
        <div className="description">
          This example appends the line <code>"Country: USA"</code> to <code>data.txt</code> without overwriting existing content.
        </div>

        <div className="subHeader">Working with stringstream</div>
        <div className="description">
          The <code>stringstream</code> class provides a convenient way to process formatted text in memory. It allows you to treat strings like input/output streams.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <sstream>
using namespace std;

int main() {
    string data = "100 JohnDoe 75000.50";
    stringstream ss(data);

    int id;
    string name;
    double salary;

    ss >> id >> name >> salary;

    cout << "ID: " << id << endl;
    cout << "Name: " << name << endl;
    cout << "Salary: $" << salary << endl;

    return 0;
}`}</Code>
        <div className="description">
          Here, the <code>stringstream</code> extracts formatted data from a string, parsing integers, strings, and floating-point values efficiently.
        </div>

        <div className="subHeader">Handling File Errors</div>
        <div className="description">It's essential to check for errors when working with file streams. The following flags help detect file I/O issues:</div>
        <ul className="list">
          <li>
            <code>fail()</code> - Checks if an operation failed.
          </li>
          <li>
            <code>eof()</code> - Returns true if the end of the file has been reached.
          </li>
          <li>
            <code>bad()</code> - Detects irrecoverable errors such as hardware failures.
          </li>
        </ul>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ifstream file("data.txt");

    if (!file) {
        cerr << "Error: File not found!" << endl;
        return 1;
    }

    string line;
    while (getline(file, line)) {
        if (file.fail()) {
            cerr << "Error: Read failure occurred." << endl;
            break;
        }
        cout << line << endl;
    }

    file.close();
    return 0;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always check if the file stream opened successfully before performing read/write operations.</li>
          <li>
            Use <code>ios::app</code> mode for appending rather than overwriting existing files.
          </li>
          <li>
            Utilize <code>stringstream</code> for efficient in-memory text processing and parsing.
          </li>
          <li>
            Use error handling methods such as <code>fail()</code>, <code>eof()</code>, and <code>bad()</code> to detect potential file I/O issues.
          </li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>
            C++ provides <code>fstream</code>, <code>ifstream</code>, and <code>ofstream</code> for handling file I/O operations.
          </li>
          <li>
            Appending to files without overwriting is possible using the <code>ios::app</code> flag.
          </li>
          <li>
            <code>stringstream</code> enables efficient parsing and formatted text manipulation in memory.
          </li>
          <li>Robust error handling ensures files are read and written safely, preventing corruption and crashes.</li>
        </ul>

        <Bottom back="/cpp/namespaces-and-modularization" next="/cpp/multithreading-and-concurrency" />
      </div>
    </div>
  );
};

export default AdvancedFileIO;
