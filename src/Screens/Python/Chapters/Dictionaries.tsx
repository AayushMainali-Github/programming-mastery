import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Dictionaries = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Dictionaries and Dictionary Methods</div>
        <div className="description">
          Dictionaries in Python are used to store data values in key-value pairs. They are mutable, unordered, and can have keys of different data types (as long as the keys are
          immutable).
        </div>

        <div className="subHeader">Creating Dictionaries</div>
        <div className="description">
          You can create a dictionary using curly braces <b>{`{}`}</b> or with the <b>dict()</b> function.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Creating a dictionary
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Using the dict() function
person2 = dict(name="Bob", age=30, city="Los Angeles")

print(person)   # Output: {'name': 'Alice', 'age': 25, 'city': 'New York'}
print(person2)  # Output: {'name': 'Bob', 'age': 30, 'city': 'Los Angeles'}`}</Code>

        <div className="subHeader">Accessing Values</div>
        <div className="description">You can access dictionary values by referring to their keys.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Accessing values
print(person["name"])  # Output: Alice

# Using the get() method to avoid KeyError
print(person.get("age"))  # Output: 25
print(person.get("country", "Not found"))  # Output: Not found`}</Code>

        <div className="subHeader">Modifying Dictionaries</div>
        <div className="description">You can add, update, or remove items from a dictionary.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Adding or updating an item
person["email"] = "alice@example.com"
person["city"] = "Boston"
print(person)  # Output: {'name': 'Alice', 'age': 25, 'city': 'Boston', 'email': 'alice@example.com'}

# Removing an item using del
del person["age"]
print(person)  # Output: {'name': 'Alice', 'city': 'Boston', 'email': 'alice@example.com'}

# Removing an item using pop()
email = person.pop("email")
print(email)  # Output: alice@example.com
print(person)  # Output: {'name': 'Alice', 'city': 'Boston'}`}</Code>

        <div className="subHeader">Looping Through Dictionaries</div>
        <div className="description">You can loop through dictionaries to access keys, values, or both.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Looping through keys
for key in person:
    print(key)

# Looping through values
for value in person.values():
    print(value)

# Looping through key-value pairs
for key, value in person.items():
    print(f"{key}: {value}")`}</Code>

        <div className="subHeader">Common Dictionary Methods</div>
        <div className="description">Python provides several built-in methods to work with dictionaries.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using dictionary methods
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# keys() method
print(person.keys())  # Output: dict_keys(['name', 'age', 'city'])

# values() method
print(person.values())  # Output: dict_values(['Alice', 25, 'New York'])

# items() method
print(person.items())  # Output: dict_items([('name', 'Alice'), ('age', 25), ('city', 'New York')])

# clear() method
person.clear()
print(person)  # Output: {} (empty dictionary)`}</Code>

        <div className="subHeader">Nested Dictionaries</div>
        <div className="description">You can create dictionaries within dictionaries (nested dictionaries) for more complex data structures.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Creating a nested dictionary
family = {
    "child1": {"name": "Emily", "age": 5},
    "child2": {"name": "Jake", "age": 8},
    "child3": {"name": "Liam", "age": 3}
}

print(family["child1"]["name"])  # Output: Emily`}</Code>

        <Bottom back="/python/tuples" next="/python/sets" />
      </div>
    </div>
  );
};

export default Dictionaries;
