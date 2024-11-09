import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const RegularExpressions = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Regular Expressions (Regex)</div>
        <div className="description">
          Regular expressions are a powerful tool for matching patterns in text. Python provides the <b>re</b> module, which supports operations like searching, matching, and
          replacing text using regex.
        </div>

        <div className="subHeader">Basic Syntax</div>
        <div className="description">
          The <b>re</b> module includes several methods for working with regular expressions, such as <b>search()</b>, <b>match()</b>, <b>findall()</b>, and <b>sub()</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`import re

# Using re.search() to find a pattern
pattern = r"hello"
text = "Hello world, hello Python!"
match = re.search(pattern, text, re.IGNORECASE)
if match:
    print("Match found:", match.group())  # Output: Match found: Hello`}</Code>

        <div className="subHeader">Common Regex Patterns</div>
        <div className="description">Here are some common regex patterns and their meanings:</div>
        <ul className="list">
          <li>
            <b>.</b>: Matches any character except a newline.
          </li>
          <li>
            <b>\d</b>: Matches any digit (0-9).
          </li>
          <li>
            <b>\D</b>: Matches any non-digit character.
          </li>
          <li>
            <b>\w</b>: Matches any alphanumeric character (letters, digits, and underscore).
          </li>
          <li>
            <b>\W</b>: Matches any non-alphanumeric character.
          </li>
          <li>
            <b>\s</b>: Matches any whitespace character (space, tab, newline).
          </li>
          <li>
            <b>^</b>: Matches the start of a string.
          </li>
          <li>
            <b>$</b>: Matches the end of a string.
          </li>
        </ul>

        <div className="subHeader">
          Using <b>re.findall()</b>
        </div>
        <div className="description">
          The <b>findall()</b> method returns all matches of a pattern in a string as a list.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Finding all occurrences of a pattern
pattern = r"\\bhello\\b"
text = "hello world, hello Python, hi there"
matches = re.findall(pattern, text)
print(matches)  # Output: ['hello', 'hello']`}</Code>

        <div className="subHeader">
          Using <b>re.sub()</b> for Replacements
        </div>
        <div className="description">
          The <b>sub()</b> method replaces all matches of a pattern with a specified string.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Replacing text with re.sub()
pattern = r"dog"
text = "The dog is playing with another dog."
new_text = re.sub(pattern, "cat", text)
print(new_text)  # Output: The cat is playing with another cat.`}</Code>

        <div className="subHeader">Grouping and Capturing</div>
        <div className="description">
          Parentheses <b>()</b> are used to create groups within a regex pattern. You can extract matched groups using the <b>group()</b> method.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using groups in regex
pattern = r"(\\d{3})-(\\d{2})-(\\d{4})"
text = "My number is 123-45-6789"
match = re.search(pattern, text)
if match:
    print("Full match:", match.group(0))  # Output: Full match: 123-45-6789
    print("Group 1:", match.group(1))     # Output: Group 1: 123
    print("Group 2:", match.group(2))     # Output: Group 2: 45
    print("Group 3:", match.group(3))     # Output: Group 3: 6789`}</Code>

        <div className="subHeader">Flags in Regex</div>
        <div className="description">
          The <b>re</b> module provides flags to modify regex behavior, such as <b>re.IGNORECASE</b> for case-insensitive matching.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using flags for case-insensitive search
pattern = r"hello"
text = "Hello world!"
match = re.search(pattern, text, re.IGNORECASE)
if match:
    print("Match found:", match.group())  # Output: Match found: Hello`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use raw strings <b>r""</b> for regex patterns to avoid escaping backslashes.
          </li>
          <li>
            Use <b>re.compile()</b> to compile a regex pattern for reuse in your code.
          </li>
          <li>Keep your regex patterns as simple and readable as possible.</li>
        </ul>

        <Bottom back="/python/datetimehandling" next="/python" />
      </div>
    </div>
  );
};

export default RegularExpressions;
