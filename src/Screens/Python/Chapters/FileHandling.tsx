import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const FileHandling = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">File Handling</div>
        <div className="description">
          File handling in Python allows you to work with files to read, write, and manipulate them. Python provides built-in functions and methods to handle file operations.
        </div>

        <div className="subHeader">Opening Files</div>
        <div className="description">
          Files can be opened using the <b>open()</b> function. The function takes two main parameters: the file name and the mode.
        </div>
        <ul className="list">
          <li>
            <b>'r'</b>: Read (default mode)
          </li>
          <li>
            <b>'w'</b>: Write (creates a new file if it doesn't exist or truncates the file if it exists)
          </li>
          <li>
            <b>'a'</b>: Append (creates a new file if it doesn't exist)
          </li>
          <li>
            <b>'b'</b>: Binary mode
          </li>
        </ul>
        <Code language="python" style={materialDark} showLineNumbers>{`# Opening a file in read mode
file = open("example.txt", "r")
print(file.read())
file.close()`}</Code>

        <div className="subHeader">Reading Files</div>
        <div className="description">
          Python provides various methods to read files, such as <b>read()</b>, <b>readline()</b>, and <b>readlines()</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Reading the entire content of the file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# Reading line by line
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())  # Using strip() to remove the newline character

# Reading all lines as a list
with open("example.txt", "r") as file:
    lines = file.readlines()
    print(lines)`}</Code>

        <div className="subHeader">Writing to Files</div>
        <div className="description">
          To write to a file, use the <b>'w'</b> or <b>'a'</b> mode. The <b>'w'</b> mode will overwrite the file, while <b>'a'</b> will append content to the end of the file.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Writing to a file (overwrites existing content)
with open("example.txt", "w") as file:
    file.write("This is a new line.\n")

# Appending to a file
with open("example.txt", "a") as file:
    file.write("This line is appended.\n")`}</Code>

        <div className="subHeader">File Modes</div>
        <div className="description">You can specify different modes when opening a file:</div>
        <ul className="list">
          <li>
            <b>'r'</b>: Read mode (default)
          </li>
          <li>
            <b>'w'</b>: Write mode (overwrites existing content)
          </li>
          <li>
            <b>'a'</b>: Append mode (adds content at the end)
          </li>
          <li>
            <b>'x'</b>: Create mode (fails if the file exists)
          </li>
          <li>
            <b>'b'</b>: Binary mode
          </li>
        </ul>

        <div className="subHeader">File Methods</div>
        <div className="description">Python provides several methods to handle files:</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Checking if the file is readable or writable
with open("example.txt", "r") as file:
    print(file.readable())  # Output: True
    print(file.writable())  # Output: False

# Getting the current file position
with open("example.txt", "r") as file:
    print(file.tell())  # Output: Current position in the file

# Moving the file cursor
with open("example.txt", "r") as file:
    file.seek(0)  # Move cursor to the beginning
    content = file.read()
    print(content)`}</Code>

        <div className="subHeader">Deleting Files</div>
        <div className="description">
          To delete files, you can use the <b>os</b> module.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`import os

# Deleting a file
if os.path.exists("example.txt"):
    os.remove("example.txt")
    print("File deleted successfully")
else:
    print("The file does not exist")`}</Code>

        <Bottom back="/python/stringmanipulation" next="/python/errorhandling" />
      </div>
    </div>
  );
};

export default FileHandling;
