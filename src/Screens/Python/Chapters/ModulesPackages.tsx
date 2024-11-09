import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ModulesPackages = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Modules and Packages</div>
        <div className="description">
          Python allows you to organize your code into modules and packages for better structure and reusability. A module is a Python file that contains functions, classes, and
          variables. A package is a collection of modules within a directory.
        </div>

        <div className="subHeader">Creating and Importing Modules</div>
        <div className="description">
          To create a module, save your Python code in a file with a <b>.py</b> extension. You can import it using the <b>import</b> statement.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# my_module.py
def greet(name):
    return f"Hello, {name}!"

# main.py
import my_module

print(my_module.greet("Alice"))  # Output: Hello, Alice!`}</Code>

        <div className="subHeader">Importing Specific Functions or Variables</div>
        <div className="description">
          You can import specific components from a module using the <b>from ... import ...</b> syntax.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Importing a specific function
from my_module import greet

print(greet("Bob"))  # Output: Hello, Bob`}</Code>

        <div className="subHeader">Using Aliases</div>
        <div className="description">
          You can use the <b>as</b> keyword to create an alias for a module or function.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Importing with an alias
import my_module as mm

print(mm.greet("Charlie"))  # Output: Hello, Charlie`}</Code>

        <div className="subHeader">Built-in Modules</div>
        <div className="description">
          Python includes several built-in modules for various tasks, such as <b>math</b>, <b>datetime</b>, and <b>random</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`import math

print(math.sqrt(25))  # Output: 5.0

import datetime
print(datetime.datetime.now())  # Output: Current date and time`}</Code>

        <div className="subHeader">Creating Packages</div>
        <div className="description">
          A package is a directory that contains a special <b>__init__.py</b> file, which can be empty or include initialization code. This file indicates that the directory should
          be treated as a package.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Directory structure
# my_package/
# ├── __init__.py
# ├── module1.py
# └── module2.py

# Importing from a package
from my_package import module1
from my_package.module2 import some_function`}</Code>

        <div className="subHeader">
          The <b>__init__.py</b> File
        </div>
        <div className="description">
          The <b>__init__.py</b> file can be used to initialize the package or to make specific submodules available for import.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Example __init__.py
print("Initializing my_package")
__all__ = ["module1", "module2"]  # Controls what is imported with 'from my_package import *'`}</Code>

        <div className="subHeader">Relative Imports</div>
        <div className="description">Relative imports are used to import modules within the same package or from parent packages.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# module2.py in my_package
from .module1 import some_function  # Relative import within the same package
from ..another_package import another_function  # Relative import from a parent package`}</Code>

        <div className="subHeader">
          Exploring Modules with <b>dir()</b>
        </div>
        <div className="description">
          You can use the <b>dir()</b> function to list all the available functions and variables in a module.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`import math

print(dir(math))  # Lists all functions and variables in the math module`}</Code>

        <Bottom back="/python/externallibraries" next="/python/jsoncsv" />
      </div>
    </div>
  );
};

export default ModulesPackages;
