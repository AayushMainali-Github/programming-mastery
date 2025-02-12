import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ModernCppFeatures = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Modern C++ Features (C++11/14/17/20)</div>
        <div className="description">
          Modern C++ introduces numerous enhancements that improve code efficiency, safety, and readability. Features like <code>auto</code>, range-based loops, smart pointers,
          structured bindings, and concepts enable developers to write cleaner and more maintainable code. This chapter covers key improvements from C++11, C++14, C++17, and C++20.
        </div>

        <div className="subHeader">Automatic Type Deduction (C++11)</div>
        <div className="description">
          The <code>auto</code> keyword allows the compiler to infer variable types automatically, reducing redundancy in code.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    auto num = 42;        // Automatically deduced as int
    auto pi = 3.14;       // Deducted as double
    auto message = "Hello"; // Deducted as const char*
    
    cout << num << ", " << pi << ", " << message << endl;
    return 0;
}`}</Code>

        <div className="subHeader">Range-Based Loops (C++11)</div>
        <div className="description">Range-based for loops simplify iterating over collections such as arrays, vectors, and lists.</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numbers = {1, 2, 3, 4, 5};

    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}`}</Code>

        <div className="subHeader">Smart Pointers (C++11)</div>
        <div className="description">
          Smart pointers (<code>std::unique_ptr</code> and <code>std::shared_ptr</code>) help manage dynamic memory safely by automatically deallocating resources when no longer
          needed.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <memory>
using namespace std;

class Resource {
public:
    Resource() { cout << "Resource allocated" << endl; }
    ~Resource() { cout << "Resource deallocated" << endl; }
    void use() { cout << "Using resource" << endl; }
};

int main() {
    unique_ptr<Resource> ptr = make_unique<Resource>();
    ptr->use(); // Access resource
    return 0;   // Resource automatically deallocated
}`}</Code>

        <div className="subHeader">Lambda Expressions (C++11)</div>
        <div className="description">Lambda expressions provide a concise syntax for defining anonymous functions in-place.</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    auto square = [](int x) { return x * x; };
    cout << "Square of 5: " << square(5) << endl;
    return 0;
}`}</Code>

        <div className="subHeader">std::tuple and Structured Bindings (C++17)</div>
        <div className="description">
          <code>std::tuple</code> allows grouping multiple values, while structured bindings simplify variable unpacking.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <tuple>
using namespace std;

tuple<int, string, double> getData() {
    return {1, "Alice", 99.5};
}

int main() {
    auto [id, name, score] = getData();
    cout << "ID: " << id << ", Name: " << name << ", Score: " << score << endl;
    return 0;
}`}</Code>

        <div className="subHeader">std::optional (C++17)</div>
        <div className="description">
          <code>std::optional</code> allows representing values that might be absent, reducing reliance on null pointers.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <optional>
using namespace std;

optional<int> findNumber(bool exists) {
    if (exists) return 42;
    return nullopt;
}

int main() {
    optional<int> result = findNumber(true);
    if (result) {
        cout << "Found: " << *result << endl;
    } else {
        cout << "Not found" << endl;
    }
    return 0;
}`}</Code>

        <div className="subHeader">Concepts and Constraints (C++20)</div>
        <div className="description">Concepts define type constraints for templates, improving code readability and compile-time safety.</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

template <typename T>
concept Numeric = requires(T a, T b) {
    a + b;
    a - b;
    a * b;
};

template <Numeric T>
T add(T a, T b) {
    return a + b;
}

int main() {
    cout << add(5, 10) << endl; // Works
    // cout << add("Hello", "World"); // Compile-time error
    return 0;
}`}</Code>

        <div className="subHeader">Co-Routines (C++20)</div>
        <div className="description">Coroutines provide an efficient way to handle asynchronous computations.</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <coroutine>
using namespace std;

struct Task {
    struct promise_type {
        Task get_return_object() { return {}; }
        suspend_never initial_suspend() { return {}; }
        suspend_never final_suspend() noexcept { return {}; }
        void return_void() {}
        void unhandled_exception() { throw; }
    };
};

Task example() {
    cout << "Start Coroutine" << endl;
    co_await suspend_always{};
    cout << "Resume Coroutine" << endl;
}

int main() {
    example();
    return 0;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use <code>auto</code> to improve readability, but ensure clarity of inferred types.
          </li>
          <li>Prefer range-based loops over traditional loops for iterating through containers.</li>
          <li>
            Replace raw pointers with <code>std::unique_ptr</code> or <code>std::shared_ptr</code> for better memory management.
          </li>
          <li>Leverage structured bindings for simplifying multiple return values.</li>
          <li>
            Use <code>std::optional</code> instead of returning nullptrs or invalid values.
          </li>
          <li>Adopt C++20 features like concepts for more robust template programming.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>
            C++11 introduced modern features such as <code>auto</code>, smart pointers, and lambda expressions.
          </li>
          <li>
            C++14 and C++17 refined the language with features like structured bindings and <code>std::optional</code>.
          </li>
          <li>C++20 introduced powerful new concepts, coroutines, and range-based improvements.</li>
          <li>Modern C++ encourages safer, cleaner, and more efficient programming practices.</li>
        </ul>

        <Bottom back="/cpp/capstone-project" next="/cpp/conclusion" />
      </div>
    </div>
  );
};

export default ModernCppFeatures;
