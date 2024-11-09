import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Lists = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Lists and List Methods</div>
        <div className="description">
          Lists are one of the most commonly used data structures in Python. They allow you to store multiple items in a single variable. Lists are ordered, mutable, and can
          contain duplicate elements.
        </div>

        <div className="subHeader">Creating Lists</div>
        <div className="description">
          Lists can be created using square brackets <b>[]</b> and can store elements of different data types.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Creating a list
numbers = [1, 2, 3, 4, 5]
mixed_list = [1, "Python", 3.14, True]

print(numbers)       # Output: [1, 2, 3, 4, 5]
print(mixed_list)    # Output: [1, 'Python', 3.14, True]`}</Code>

        <div className="subHeader">Accessing Elements</div>
        <div className="description">
          Elements in a list can be accessed using their index, starting from <b>0</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Accessing elements
numbers = [10, 20, 30, 40, 50]

print(numbers[0])    # Output: 10
print(numbers[2])    # Output: 30
print(numbers[-1])   # Output: 50 (negative index accesses from the end)`}</Code>

        <div className="subHeader">Modifying Elements</div>
        <div className="description">Lists are mutable, so you can change the value of specific elements.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Modifying elements
numbers = [5, 10, 15, 20]
numbers[1] = 12

print(numbers)  # Output: [5, 12, 15, 20]`}</Code>

        <div className="subHeader">List Methods</div>
        <div className="description">Python provides several built-in methods for manipulating lists. Here are some of the most commonly used methods:</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Append an item to the end of the list
numbers = [1, 2, 3]
numbers.append(4)
print(numbers)  # Output: [1, 2, 3, 4]

# Insert an item at a specific index
numbers.insert(1, 9)
print(numbers)  # Output: [1, 9, 2, 3, 4]

# Remove an item from the list
numbers.remove(3)
print(numbers)  # Output: [1, 9, 2, 4]

# Pop the last item or a specific index
last_item = numbers.pop()
print(last_item)  # Output: 4
print(numbers)    # Output: [1, 9, 2]

# Reverse the list
numbers.reverse()
print(numbers)    # Output: [2, 9, 1]

# Sort the list
numbers.sort()
print(numbers)    # Output: [1, 2, 9]

# Get the index of an item
index = numbers.index(2)
print(index)      # Output: 1

# Count occurrences of an item
count = numbers.count(2)
print(count)      # Output: 1`}</Code>

        <div className="subHeader">Slicing Lists</div>
        <div className="description">
          You can access a subset of a list using slicing. The syntax is <b>list[start:end:step]</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Slicing a list
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[2:5])   # Output: [2, 3, 4]
print(numbers[:3])    # Output: [0, 1, 2]
print(numbers[4:])    # Output: [4, 5, 6, 7, 8, 9]
print(numbers[::2])   # Output: [0, 2, 4, 6, 8]`}</Code>

        <div className="subHeader">List Comprehensions</div>
        <div className="description">
          List comprehensions provide a concise way to create lists. The syntax is <b>[expression for item in iterable if condition]</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# List comprehension to create a list of squares
squares = [x**2 for x in range(10)]
print(squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# List comprehension with condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)  # Output: [0, 4, 16, 36, 64]`}</Code>

        <Bottom back="/python/functionsmodules" next="/python/tuples" />
      </div>
    </div>
  );
};

export default Lists;
