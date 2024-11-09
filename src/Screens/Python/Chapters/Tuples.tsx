import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Tuples = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Tuples</div>
        <div className="description">
          Tuples are a type of data structure in Python that are similar to lists, but they are immutable, meaning their elements cannot be changed after they are created. Tuples
          are defined using parentheses <b>()</b>.
        </div>

        <div className="subHeader">Creating Tuples</div>
        <div className="description">You can create a tuple by placing a comma-separated sequence of values inside parentheses.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Creating tuples
empty_tuple = ()
single_element_tuple = (42,)  # Note the trailing comma for a single element
tuple_of_numbers = (1, 2, 3, 4, 5)
mixed_tuple = (1, "Python", 3.14, True)

print(tuple_of_numbers)  # Output: (1, 2, 3, 4, 5)
print(mixed_tuple)       # Output: (1, 'Python', 3.14, True)`}</Code>

        <div className="subHeader">Accessing Elements</div>
        <div className="description">Elements in a tuple can be accessed using their index, just like in a list.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Accessing tuple elements
my_tuple = (10, 20, 30, 40, 50)
print(my_tuple[0])   # Output: 10
print(my_tuple[-1])  # Output: 50 (negative index accesses from the end)`}</Code>

        <div className="subHeader">Immutability of Tuples</div>
        <div className="description">Once a tuple is created, its elements cannot be changed or modified. Attempting to do so will result in an error.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Attempting to change a tuple's element
my_tuple = (1, 2, 3)
# my_tuple[1] = 5  # This will raise a TypeError`}</Code>

        <div className="subHeader">Tuple Methods</div>
        <div className="description">
          Tuples support only a few built-in methods because of their immutability. The most common ones are <b>count()</b> and <b>index()</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using tuple methods
my_tuple = (1, 2, 3, 2, 4, 2)

# Count the number of times a value appears
print(my_tuple.count(2))  # Output: 3

# Find the index of a value
print(my_tuple.index(3))  # Output: 2`}</Code>

        <div className="subHeader">Unpacking Tuples</div>
        <div className="description">You can unpack a tuple into separate variables by assigning it to a comma-separated list of variables.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Tuple unpacking
coordinates = (10, 20, 30)
x, y, z = coordinates

print(x)  # Output: 10
print(y)  # Output: 20
print(z)  # Output: 30`}</Code>

        <div className="subHeader">Using Tuples as Keys in Dictionaries</div>
        <div className="description">Because tuples are immutable, they can be used as keys in dictionaries, unlike lists.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using tuples as dictionary keys
location_data = {
    (40.7128, -74.0060): "New York",
    (34.0522, -118.2437): "Los Angeles"
}

print(location_data[(40.7128, -74.0060)])  # Output: New York`}</Code>

        <Bottom back="/python/lists" next="/python/dictionaries" />
      </div>
    </div>
  );
};

export default Tuples;
