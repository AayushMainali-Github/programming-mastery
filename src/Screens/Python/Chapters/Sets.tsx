import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Sets = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Sets and Set Methods</div>
        <div className="description">
          Sets are a type of data structure in Python that store unordered, unique elements. They are mutable, allowing you to add or remove items, but do not allow duplicate
          values.
        </div>

        <div className="subHeader">Creating Sets</div>
        <div className="description">
          You can create a set using curly braces <b>{`{}`}</b> or the <b>set()</b> function.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Creating a set
my_set = {1, 2, 3, 4, 5}
print(my_set)  # Output: {1, 2, 3, 4, 5}

# Creating an empty set
empty_set = set()
print(empty_set)  # Output: set()`}</Code>

        <div className="subHeader">Adding and Removing Elements</div>
        <div className="description">
          You can add elements to a set using the <b>add()</b> method and remove elements using <b>remove()</b> or <b>discard()</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Adding elements
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 4, 5, 6}

# Removing elements
my_set.remove(3)
print(my_set)  # Output: {1, 2, 4, 5, 6}

# Using discard() (does not raise an error if the element is not found)
my_set.discard(10)  # No error

# Using pop() to remove and return an arbitrary element
removed_element = my_set.pop()
print(removed_element)
print(my_set)`}</Code>

        <div className="subHeader">Set Operations</div>
        <div className="description">Sets support mathematical operations like union, intersection, difference, and symmetric difference.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Union
print(set1 | set2)  # Output: {1, 2, 3, 4, 5, 6}

# Intersection
print(set1 & set2)  # Output: {3, 4}

# Difference
print(set1 - set2)  # Output: {1, 2}

# Symmetric Difference
print(set1 ^ set2)  # Output: {1, 2, 5, 6}`}</Code>

        <div className="subHeader">Set Methods</div>
        <div className="description">Python provides several built-in methods for sets:</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using isdisjoint() to check if sets have no elements in common
print(set1.isdisjoint({7, 8}))  # Output: True

# Using issubset() to check if one set is a subset of another
print({1, 2}.issubset(set1))  # Output: True

# Using issuperset() to check if one set is a superset of another
print(set1.issuperset({2, 3}))  # Output: True

# Clearing all elements from a set
set1.clear()
print(set1)  # Output: set()`}</Code>

        <div className="subHeader">Frozen Sets</div>
        <div className="description">
          A frozen set is an immutable version of a set. Once created, its elements cannot be changed, making it hashable and usable as dictionary keys or set elements.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Creating a frozen set
frozen = frozenset([1, 2, 3, 4])
print(frozen)  # Output: frozenset({1, 2, 3, 4})

# Attempting to modify a frozen set will raise an error
# frozen.add(5)  # AttributeError: 'frozenset' object has no attribute 'add'`}</Code>

        <Bottom back="/python/dictionaries" next="/python/stringmanipulation" />
      </div>
    </div>
  );
};

export default Sets;
