import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CommentsDocstrings = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Comments and Docstrings</div>
        <div className="description">
          Comments and docstrings are essential for making your code more readable and maintainable. Comments are used to explain parts of the code, while docstrings are used to
          provide documentation for functions, classes, and modules.
        </div>

        <div className="subHeader">Single-Line Comments</div>
        <div className="description">
          Single-line comments in Python start with a <b>#</b> symbol. They are ignored by the Python interpreter.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# This is a single-line comment
print("Hello, World!")  # This comment is next to a line of code`}</Code>

        <div className="subHeader">Multi-Line Comments</div>
        <div className="description">
          Although Python does not have a built-in way to write multi-line comments, you can use multiple single-line comments or a multi-line string (using triple quotes) that is
          not assigned to any variable.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Multi-line comments using single-line comments
# This is a comment
# spanning multiple
# lines

"""
This is another way to write a
multi-line comment, but it should not
be assigned to any variable.
"""`}</Code>

        <div className="subHeader">Docstrings</div>
        <div className="description">
          Docstrings are used to provide documentation for functions, classes, and modules. They are written using triple quotes <b>'''</b> or <b>"""</b> and are placed right after
          the function, class, or module definition.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`def greet(name):
    """
    This function greets the person whose name is passed as an argument.
    
    Parameters:
    name (str): The name of the person to greet.
    
    Returns:
    None
    """
    print(f"Hello, {name}!")

# Accessing the docstring
print(greet.__doc__)`}</Code>

        <div className="subHeader">Using Docstrings for Modules and Classes</div>
        <div className="description">Docstrings can also be used at the beginning of a module or within a class to describe their purpose.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`"""
This is a module docstring. It provides an overview of what this module does.
"""

class MyClass:
    """
    This is a class docstring. It describes what the class does and any
    important details or attributes.
    """
    
    def my_method(self):
        """
        This is a method docstring. It explains what the method does.
        """
        pass`}</Code>

        <div className="subHeader">Best Practices for Comments and Docstrings</div>
        <ul className="list">
          <li>Keep comments concise and relevant to explain complex logic or important sections of code.</li>
          <li>Use docstrings to describe the purpose of functions, classes, and modules, including any parameters and return values.</li>
          <li>Keep your comments and docstrings updated as you modify your code.</li>
        </ul>

        <Bottom back="/python/errorhandling" next="/python/mathoperations" />
      </div>
    </div>
  );
};

export default CommentsDocstrings;
