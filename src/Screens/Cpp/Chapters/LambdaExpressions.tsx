import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const LambdaExpressions = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Lambda Expressions</div>
        <div className="description">
          Lambda expressions in C++ are anonymous functions that enable you to write concise, inline code for functional programming patterns. They provide an elegant syntax to
          define small functions directly where they are needed, making your code more readable and maintainable, especially when used with STL algorithms and callbacks.
        </div>

        <div className="subHeader">Basic Lambda Syntax</div>
        <div className="description">The general syntax of a lambda expression is:</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`[capture](parameters) -> return_type {
    // function body
};`}</Code>
        <div className="description">For example, a lambda that adds two numbers can be defined as follows:</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    auto add = [](int a, int b) -> int {
        return a + b;
    };
    cout << "Sum: " << add(5, 7) << endl; // Output: Sum: 12
    return 0;
}`}</Code>

        <div className="subHeader">Capture Clauses</div>
        <div className="description">
          The capture clause, specified inside the square brackets, allows lambdas to access variables from their surrounding scope. You can capture variables by value or by
          reference:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    int factor = 10;
    
    // Capture 'factor' by value
    auto multiplyByFactor = [factor](int value) -> int {
        return value * factor;
    };
    
    // Capture 'factor' by reference
    auto incrementFactor = [&factor]() {
        factor++;
    };

    cout << "Result of multiplication: " << multiplyByFactor(5) << endl; // Output: 50
    incrementFactor();
    cout << "New factor: " << factor << endl; // Output: 11
    
    return 0;
}`}</Code>
        <div className="description">
          In this example, the first lambda captures <code>factor</code> by value, so its copy remains constant, while the second lambda captures it by reference and can modify it.
        </div>

        <div className="subHeader">Lambdas with STL Algorithms</div>
        <div className="description">
          One of the most common uses of lambda expressions is in conjunction with STL algorithms. For example, you can use a lambda with <code>std::sort</code> to sort a container
          in descending order:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> numbers = {5, 2, 9, 1, 5, 6};
    
    // Sort in descending order using a lambda expression
    sort(numbers.begin(), numbers.end(), [](int a, int b) -> bool {
        return a > b;
    });
    
    cout << "Sorted in descending order: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}`}</Code>

        <div className="subHeader">Capturing All Variables</div>
        <div className="description">
          You can capture all local variables in the current scope by using <code>[=]</code> (by value) or <code>[&]</code> (by reference). However, it's best to capture only what
          you need to avoid unintended side effects.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 20;
    
    // Capture all variables by value
    auto sum = [=]() -> int {
        return a + b;
    };
    
    // Capture all variables by reference
    auto incrementAll = [&]() {
        a++;
        b++;
    };
    
    cout << "Sum before increment: " << sum() << endl; // Output: 30
    incrementAll();
    cout << "Sum after increment: " << a + b << endl;    // Output: 32
    return 0;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Keep lambda expressions concise; if a lambda becomes too complex, consider converting it to a named function.</li>
          <li>
            Capture only the variables you need rather than using a blanket capture (<code>[=]</code> or <code>[&]</code>).
          </li>
          <li>Use lambdas with STL algorithms to reduce boilerplate code and enhance readability.</li>
          <li>Document the intent of complex lambdas to clarify which variables are captured and why.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Lambda expressions allow for concise, inline definition of anonymous functions.</li>
          <li>They provide powerful features such as variable capture, making them versatile for a range of tasks.</li>
          <li>When used with STL algorithms, lambdas simplify data manipulation and reduce code verbosity.</li>
          <li>Adhering to best practices helps prevent unintended side effects and maintains code clarity.</li>
        </ul>

        <Bottom back="/cpp/iterators-and-algorithms" next="/cpp/multithreading-and-concurrency" />
      </div>
    </div>
  );
};

export default LambdaExpressions;
