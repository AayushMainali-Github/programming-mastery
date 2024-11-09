import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const StringManipulation = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">String Manipulation</div>
        <div className="description">
          Strings are sequences of characters and are one of the most commonly used data types in Python. Python provides a rich set of methods for string manipulation and
          formatting.
        </div>

        <div className="subHeader">Basic String Operations</div>
        <div className="description">Strings can be concatenated, repeated, and indexed.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# String concatenation
greeting = "Hello, " + "World!"
print(greeting)  # Output: Hello, World!

# String repetition
laugh = "Ha" * 3
print(laugh)  # Output: HaHaHa

# Indexing
word = "Python"
print(word[0])  # Output: P
print(word[-1])  # Output: n`}</Code>

        <div className="subHeader">String Slicing</div>
        <div className="description">
          You can extract parts of a string using slicing. The syntax is <b>string[start:end:step]</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`text = "Hello, Python!"
print(text[0:5])  # Output: Hello
print(text[7:])   # Output: Python!
print(text[:5])   # Output: Hello
print(text[::2])  # Output: Hlo yhn`}</Code>

        <div className="subHeader">String Methods</div>
        <div className="description">Python provides many built-in methods for string manipulation:</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Converting to uppercase and lowercase
text = "Python Programming"
print(text.upper())  # Output: PYTHON PROGRAMMING
print(text.lower())  # Output: python programming

# Checking if a string starts or ends with a specific substring
print(text.startswith("Py"))  # Output: True
print(text.endswith("ing"))   # Output: True

# Finding and replacing substrings
print(text.find("Prog"))      # Output: 7
print(text.replace("Python", "Java"))  # Output: Java Programming

# Splitting and joining strings
words = text.split(" ")
print(words)  # Output: ['Python', 'Programming']

joined_text = "-".join(words)
print(joined_text)  # Output: Python-Programming`}</Code>

        <div className="subHeader">Formatting Strings</div>
        <div className="description">
          Python offers different ways to format strings, including using the <b>format()</b> method and f-strings.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using the format() method
name = "Alice"
age = 30
formatted_text = "My name is {} and I am {} years old.".format(name, age)
print(formatted_text)  # Output: My name is Alice and I am 30 years old.

# Using f-strings (Python 3.6+)
formatted_text = f"My name is {name} and I am {age} years old."
print(formatted_text)  # Output: My name is Alice and I am 30 years old.`}</Code>

        <div className="subHeader">Escape Characters</div>
        <div className="description">
          Escape characters are used to include special characters in strings. They start with a backslash <b>\\</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Common escape characters
print("Hello\\nWorld!")  # Newline character. Output:
# Hello
# World!

print("This is a tab:\\tTabbed")  # Tab character. Output: This is a tab:    Tabbed

print("He said, \\"Hello!\\"")  # Output: He said, "Hello!"`}</Code>

        <div className="subHeader">Multiline Strings</div>
        <div className="description">
          You can create a string that spans multiple lines using triple quotes <b>'''</b> or <b>"""</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Multiline string
multi_line_text = """This is a string
that spans multiple
lines."""
print(multi_line_text)`}</Code>

        <Bottom back="/python/sets" next="/python/filehandling" />
      </div>
    </div>
  );
};

export default StringManipulation;
