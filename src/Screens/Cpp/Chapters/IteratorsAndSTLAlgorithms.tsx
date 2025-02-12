import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const IteratorsAndSTLAlgorithms = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Iterators and STL Algorithms</div>
        <div className="description">
          The Standard Template Library (STL) provides powerful tools for data manipulation in C++ through iterators and algorithms. Iterators offer a uniform way to access
          elements in various containers, while STL algorithms simplify common operations such as sorting, searching, and transformation. This chapter covers the fundamentals of
          iterators, demonstrates how to traverse containers, and explains how to apply STL algorithms effectively.
        </div>

        <div className="subHeader">What Are Iterators?</div>
        <div className="description">
          Iterators act much like pointers, allowing you to traverse the elements of a container without needing to know the underlying implementation details. They provide a
          consistent interface to iterate through arrays, vectors, lists, and other STL containers.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numbers = {10, 20, 30, 40, 50};
    
    // Using a traditional iterator to traverse the vector
    for (vector<int>::iterator it = numbers.begin(); it != numbers.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    return 0;
}`}</Code>
        <div className="description">In this example, a vector iterator is used to loop through and print each element.</div>

        <div className="subHeader">Range-Based for Loop</div>
        <div className="description">Modern C++ offers a range-based for loop, which simplifies iteration by abstracting iterator usage.</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numbers = {10, 20, 30, 40, 50};
    
    // Using a range-based for loop to iterate over the vector
    for (const int &num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}`}</Code>
        <div className="description">This loop automatically iterates over the container without explicitly declaring an iterator.</div>

        <div className="subHeader">STL Algorithms</div>
        <div className="description">
          The STL offers a rich set of algorithms that operate on containers via iterators. These algorithms, such as <code>std::sort</code>, <code>std::find</code>, and{" "}
          <code>std::for_each</code>, perform common tasks like sorting, searching, and processing data with minimal code.
        </div>

        <div className="subHeader">
          Sorting with <code>std::sort</code>
        </div>
        <div className="description">
          The <code>std::sort</code> algorithm sorts elements in containers that support random-access iterators, such as vectors and arrays.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> numbers = {40, 10, 30, 20, 50};
    
    // Sorting the vector in ascending order
    sort(numbers.begin(), numbers.end());
    
    cout << "Sorted numbers: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}`}</Code>

        <div className="subHeader">
          Searching with <code>std::find</code>
        </div>
        <div className="description">
          The <code>std::find</code> algorithm searches for a specific value in a container and returns an iterator to the first occurrence.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> numbers = {10, 20, 30, 40, 50};
    
    // Searching for the value 30 in the vector
    auto it = find(numbers.begin(), numbers.end(), 30);
    if (it != numbers.end()) {
        cout << "Found 30 at position: " << distance(numbers.begin(), it) << endl;
    } else {
        cout << "30 not found" << endl;
    }
    return 0;
}`}</Code>

        <div className="subHeader">
          Applying <code>std::for_each</code>
        </div>
        <div className="description">
          The <code>std::for_each</code> algorithm applies a function to each element in a container. This is useful for performing operations on each element without manually
          writing loop code.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void printElement(int element) {
    cout << element << " ";
}

int main() {
    vector<int> numbers = {5, 10, 15, 20, 25};
    cout << "Elements: ";
    for_each(numbers.begin(), numbers.end(), printElement);
    cout << endl;
    return 0;
}`}</Code>

        <div className="subHeader">Combining Iterators and Algorithms</div>
        <div className="description">
          Iterators serve as the bridge between containers and algorithms. By combining them, you can perform complex data manipulations with concise code. For example, you can
          sort a container and then iterate over it using a range-based loop.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> data = {15, 42, 8, 23, 4};
    
    // Sort the container
    sort(data.begin(), data.end());
    
    // Use a range-based loop to print sorted elements
    cout << "Sorted data: ";
    for (const auto &value : data) {
        cout << value << " ";
    }
    cout << endl;
    
    return 0;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Choose the appropriate STL algorithm based on the container and task at hand.</li>
          <li>Use range-based for loops for simplicity, but understand traditional iterators for complex traversal requirements.</li>
          <li>Keep your code modular by separating data manipulation (algorithms) from data storage (containers).</li>
          <li>Always test your algorithms with various data sets to ensure correctness and performance.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Iterators provide a uniform interface to traverse STL containers.</li>
          <li>
            STL algorithms such as <code>std::sort</code>, <code>std::find</code>, and <code>std::for_each</code> greatly simplify common data manipulation tasks.
          </li>
          <li>Combining iterators with STL algorithms leads to concise, efficient, and readable code.</li>
          <li>Understanding the underlying iterator concepts is essential for effective use of STL algorithms in C++.</li>
        </ul>

        <Bottom back="/cpp/objects-and-functions" next="/cpp/lambda-expressions" />
      </div>
    </div>
  );
};

export default IteratorsAndSTLAlgorithms;
