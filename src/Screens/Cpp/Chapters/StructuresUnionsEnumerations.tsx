import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const StructuresUnionsEnumerations = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Structures, Unions, and Enumerations</div>
        <div className="description">
          C++ provides several ways to group related data into a single composite type. In this chapter, we will explore structures (struct), unions, and enumerations (enums).
          Structures allow you to create complex data types by combining variables of different types, unions let you store different data types in the same memory location, and
          enumerations define a set of named integral constants for improved code clarity.
        </div>

        <div className="subHeader">Structures</div>
        <div className="description">
          Structures in C++ are user-defined data types that group related variables. They allow you to create a single composite type that represents an entity. Once defined, you
          can create instances of the structure, access members using the dot operator, and pass structures to functions.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <string>
using namespace std;

// Define a structure to represent a person
struct Person {
    string name;
    int age;
    double height;
};

// Function to print a Person's details
void printPerson(const Person &p) {
    cout << "Name: " << p.name << endl;
    cout << "Age: " << p.age << endl;
    cout << "Height: " << p.height << " meters" << endl;
}

int main() {
    // Declare and initialize a structure variable
    Person alice = {"Alice Johnson", 28, 1.65};
    
    // Accessing structure members
    cout << "Accessing individual members:" << endl;
    cout << "Name: " << alice.name << endl;
    cout << "Age: " << alice.age << endl;
    
    // Passing structure to a function
    cout << "\nPrinting full details:" << endl;
    printPerson(alice);
    
    return 0;
}`}</Code>
        <div className="description">
          In the above example, the <code>Person</code> structure groups a person's name, age, and height. We create an instance <code>alice</code> and pass it to a function for
          display.
        </div>

        <div className="subHeader">Unions</div>
        <div className="description">
          A union is a special data type that allows storing different data types in the same memory location. All members of a union share the same memory, which can help reduce
          memory usage.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

// Define a union to store different types of data in the same memory location
union Data {
    int intValue;
    float floatValue;
    char charValue;
};

int main() {
    Data data;
    
    // Store an integer
    data.intValue = 42;
    cout << "Integer: " << data.intValue << endl;
    
    // Store a float (overwrites the previous integer)
    data.floatValue = 3.14f;
    cout << "Float: " << data.floatValue << endl;
    
    // Store a character (overwrites the previous float)
    data.charValue = 'A';
    cout << "Character: " << data.charValue << endl;
    
    // Note: Only one member of the union can hold a valid value at any given time.
    return 0;
}`}</Code>
        <div className="description">
          This example demonstrates how a union named <code>Data</code> can store an integer, a float, or a character, but only one value is valid at any moment.
        </div>

        <div className="subHeader">Enumerations</div>
        <div className="description">
          Enumerations (enums) define a set of named integral constants. They enhance code readability by replacing magic numbers with descriptive names. C++ supports both unscoped
          enums and scoped enums (enum classes).
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

// Unscoped enum: The enumerator names are in the global namespace
enum Color {
    Red,    // 0
    Green,  // 1
    Blue    // 2
};

// Scoped enum (enum class): Enumerator names are scoped within the enum
enum class Direction {
    North,
    South,
    East,
    West
};

int main() {
    // Using unscoped enum
    Color myColor = Red;
    cout << "Color (Red) has value: " << myColor << endl; // Typically outputs 0

    // Using scoped enum requires explicit scoping
    Direction myDirection = Direction::North;
    // To output, you may need to cast it to an integer:
    cout << "Direction (North) has value: " << static_cast<int>(myDirection) << endl; // Outputs 0

    return 0;
}`}</Code>
        <div className="description">
          The unscoped <code>Color</code> enum assigns default integer values starting at 0, while the scoped <code>Direction</code> enum (using <code>enum class</code>) provides
          better type safety.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use structures to group related data and improve code organization.</li>
          <li>Utilize unions when you need to save memory by sharing storage among different data types, but be cautious as only one member can hold a valid value at a time.</li>
          <li>
            Prefer scoped enums (<code>enum class</code>) over unscoped enums for improved type safety and to avoid name collisions.
          </li>
          <li>Document the purpose and usage of each composite type to enhance code clarity and maintainability.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Structures allow grouping of different data types into a single composite type.</li>
          <li>Unions share memory among different types, which can be useful for memory-constrained applications.</li>
          <li>Enumerations define a set of named constants to replace magic numbers, improving code readability.</li>
          <li>Choosing the appropriate composite type depends on your specific use case and design requirements.</li>
        </ul>

        <Bottom back="/cpp/dynamic-memory-management" next="/cpp/objects-and-functions" />
      </div>
    </div>
  );
};

export default StructuresUnionsEnumerations;
