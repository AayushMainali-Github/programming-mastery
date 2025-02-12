import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const STLFundamentals = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Standard Template Library (STL) Fundamentals</div>
        <div className="description">
          The Standard Template Library (STL) is a powerful part of C++ that provides a set of generic classes and functions for common data structures and algorithms. In this
          chapter, you'll learn about several key STL containers such as vectors, lists, maps, sets, deques, and more. Understanding these containers and their associated
          algorithms is critical for writing efficient and maintainable C++ applications.
        </div>

        <div className="subHeader">Vectors</div>
        <div className="description">
          Vectors are dynamic arrays that can automatically resize. They allow fast random access to elements and efficient insertion and deletion at the end of the container.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numbers = {1, 2, 3, 4, 5};
    // Adding an element at the end
    numbers.push_back(6);

    // Iterating using a traditional for-loop
    for (size_t i = 0; i < numbers.size(); i++) {
        cout << "numbers[" << i << "] = " << numbers[i] << endl;
    }
    return 0;
}`}</Code>

        <div className="subHeader">Lists</div>
        <div className="description">
          Lists in the STL are implemented as doubly-linked lists, which allow for efficient insertion and deletion anywhere in the list. They are ideal for scenarios where
          frequent modifications are required.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <list>
using namespace std;

int main() {
    list<string> fruits = {"Apple", "Banana", "Cherry"};
    // Insert an element at the beginning
    fruits.push_front("Mango");
    
    // Iterate using a range-based for loop
    for (const auto &fruit : fruits) {
        cout << fruit << " ";
    }
    cout << endl;
    return 0;
}`}</Code>

        <div className="subHeader">Maps</div>
        <div className="description">
          Maps are associative containers that store key-value pairs, where each key is unique. They provide efficient look-up, insertion, and deletion based on keys. In this
          example, we use a map to associate names with ages.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <map>
using namespace std;

int main() {
    map<string, int> ageMap;
    ageMap["Alice"] = 30;
    ageMap["Bob"] = 25;
    ageMap["Charlie"] = 35;
    
    // Iterate over the map and print key-value pairs
    for (const auto &entry : ageMap) {
        cout << entry.first << " is " << entry.second << " years old." << endl;
    }
    return 0;
}`}</Code>

        <div className="subHeader">Sets</div>
        <div className="description">Sets store unique elements in a sorted order. They are useful when you need to maintain a collection of distinct items.</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> uniqueNumbers = {5, 2, 8, 1, 5, 2};
    // Duplicate values are automatically removed
    for (int num : uniqueNumbers) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}`}</Code>

        <div className="subHeader">Deques</div>
        <div className="description">
          A deque (double-ended queue) allows insertion and deletion of elements from both ends. This container provides fast access and is useful in scenarios where you need to
          manipulate both the front and the back of a sequence.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<string> tasks = {"Task1", "Task2", "Task3"};
    // Add elements to both ends
    tasks.push_front("Task0");
    tasks.push_back("Task4");
    
    // Iterate and print all tasks
    for (const auto &task : tasks) {
        cout << task << " ";
    }
    cout << endl;
    return 0;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Choose the appropriate container based on the operations required (random access vs. frequent insertions/deletions).</li>
          <li>Utilize STL algorithms (e.g., sort, find, for_each) for efficient data manipulation.</li>
          <li>Familiarize yourself with the properties and performance characteristics of each container.</li>
          <li>Keep your code modular and leverage container iterators to maintain clean, readable loops.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>The STL provides a variety of containers that simplify data storage and manipulation.</li>
          <li>Vectors, lists, maps, sets, and deques each have unique strengths and ideal use cases.</li>
          <li>STL algorithms work seamlessly with these containers to perform common operations efficiently.</li>
          <li>Understanding the characteristics of each container leads to more optimized and maintainable code.</li>
        </ul>

        <Bottom back="/cpp/constructors-destructors-and-overloading" next="/cpp/iterators-and-algorithms" />
      </div>
    </div>
  );
};

export default STLFundamentals;
