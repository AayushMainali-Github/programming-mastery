import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ReferencesAndConstQualifiers = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">References and Const Qualifiers</div>
        <div className="description">
          In C++, references provide a way to create an alias for an existing variable, offering a more intuitive alternative to pointers when only aliasing is required. The{" "}
          <code>const</code> keyword is used to enforce immutability, ensuring that certain values cannot be changed once set. This chapter explains how to declare and use
          references, how const qualifiers work, and how combining these features can help write safer and more predictable code.
        </div>

        <div className="subHeader">Understanding References</div>
        <div className="description">
          A reference is essentially an alternative name for an existing variable. Once a reference is established, it cannot be changed to refer to another variable. References
          are particularly useful for passing large objects to functions without copying them, and for modifying variables indirectly.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    int original = 10;
    int &ref = original;  // 'ref' is an alias for 'original'
    
    cout << "Original value: " << original << endl; // Output: 10
    cout << "Reference value: " << ref << endl;       // Output: 10
    
    // Modifying the reference also updates the original variable
    ref = 20;
    cout << "Updated original value: " << original << endl; // Output: 20

    return 0;
}`}</Code>
        <div className="description">
          In the example above, the variable <code>ref</code> is declared as a reference to <code>original</code>. Changing the value via <code>ref</code> directly modifies{" "}
          <code>original</code>.
        </div>

        <div className="subHeader">Using Const Qualifiers</div>
        <div className="description">
          The <code>const</code> keyword is used to prevent modifications to variables after initialization. When applied to variables, it ensures that the value remains unchanged
          throughout its lifetime.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    const int constantValue = 100;
    // constantValue = 200; // This will cause a compile-time error

    cout << "Constant Value: " << constantValue << endl; // Output: 100
    return 0;
}`}</Code>
        <div className="description">Constants are especially useful when you want to prevent accidental modifications to critical values.</div>

        <div className="subHeader">Combining References with Const Qualifiers</div>
        <div className="description">
          You can combine references with the <code>const</code> qualifier to create a read-only alias. This ensures that the referenced value cannot be modified through the
          reference.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    int x = 50;
    const int &refConst = x;  // refConst is a read-only reference to x

    cout << "Original value: " << x << endl;      // Output: 50
    cout << "Const reference: " << refConst << endl; // Output: 50

    // refConst = 60; // Error: Cannot assign to 'refConst' because it is a const reference
    x = 60; // Changing x directly is allowed
    cout << "Updated value via x: " << refConst << endl; // Output: 60

    return 0;
}`}</Code>
        <div className="description">
          In this example, <code>refConst</code> is a constant reference to <code>x</code>. Although you cannot modify <code>x</code> through <code>refConst</code>, modifying{" "}
          <code>x</code> directly updates the value seen via the reference.
        </div>

        <div className="subHeader">Benefits of Using const with References</div>
        <div className="description">
          Using <code>const</code> with references provides several advantages:
        </div>
        <ul className="list">
          <li>Prevents unintended modification of variables.</li>
          <li>Helps document the intent of the code by clearly indicating which variables should remain unchanged.</li>
          <li>Enables compiler optimizations by guaranteeing immutability.</li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always initialize references at the time of declaration.</li>
          <li>
            Use <code>const</code> references when passing large objects to functions to prevent unnecessary copying and to ensure that they are not modified.
          </li>
          <li>Avoid mixing pointers and references without clear intent to prevent confusion in memory management.</li>
          <li>Favor const-correctness in your code to promote safer and more maintainable programs.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>References provide an alias for existing variables and must be initialized upon declaration.</li>
          <li>
            The <code>const</code> qualifier enforces immutability, preventing changes to variables or referenced values.
          </li>
          <li>
            Combining references with <code>const</code> ensures that data cannot be inadvertently modified, enhancing code safety.
          </li>
          <li>Understanding these concepts is fundamental for writing efficient and robust C++ programs.</li>
        </ul>

        <Bottom back="/cpp/pointers" next="/cpp/dynamic-memory-management" />
      </div>
    </div>
  );
};

export default ReferencesAndConstQualifiers;
