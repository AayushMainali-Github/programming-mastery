import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ExternalLibraries = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">External Libraries</div>
        <div className="description">
          Python has a vast ecosystem of external libraries that extend its capabilities beyond the standard library. These libraries can be used for various purposes, such as data
          analysis, web development, and machine learning.
        </div>

        <div className="subHeader">Installing Libraries</div>
        <div className="description">
          The <b>pip</b> command is used to install external libraries from the Python Package Index (PyPI).
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Install a library using pip
pip install library_name`}</Code>

        <div className="subHeader">Popular External Libraries</div>
        <div className="description">Here are some popular external libraries and their common use cases:</div>
        <ul className="list">
          <li>
            <b>NumPy</b>: A library for numerical computing and working with arrays.
          </li>
          <li>
            <b>Pandas</b>: Used for data manipulation and analysis.
          </li>
          <li>
            <b>Matplotlib</b>: A library for creating visualizations and plots.
          </li>
          <li>
            <b>Requests</b>: A simple library for making HTTP requests.
          </li>
          <li>
            <b>Beautiful Soup</b>: Used for web scraping and parsing HTML/XML documents.
          </li>
        </ul>

        <div className="subHeader">Using External Libraries</div>
        <div className="description">After installing a library, you can import it into your Python script and start using it.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Example using requests
import requests

response = requests.get("https://api.github.com")
print(response.status_code)  # Output: 200
print(response.json())       # Output: JSON response from GitHub API

# Example using NumPy
import numpy as np

array = np.array([1, 2, 3, 4, 5])
print(array * 2)  # Output: [ 2  4  6  8 10 ]`}</Code>

        <div className="subHeader">Finding and Exploring Libraries</div>
        <div className="description">
          You can explore external libraries on the <b>Python Package Index (PyPI)</b> website or by searching for Python packages relevant to your project.
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Search for packages on PyPI
https://pypi.org/`}</Code>

        <div className="subHeader">Managing Dependencies</div>
        <div className="description">
          To manage your project's dependencies, you can create a <b>requirements.txt</b> file with the list of all libraries and their versions. You can install all dependencies
          using:
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Install all dependencies from requirements.txt
pip install -r requirements.txt`}</Code>

        <div className="subHeader">Virtual Environments</div>
        <div className="description">It's best practice to use a virtual environment to isolate your project's dependencies from the global Python environment.</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Create a virtual environment
python -m venv myenv

# Activate the virtual environment (Windows)
myenv\\Scripts\\activate

# Activate the virtual environment (macOS/Linux)
source myenv/bin/activate`}</Code>

        <Bottom back="/python/generators" next="/python/modulespackages" />
      </div>
    </div>
  );
};

export default ExternalLibraries;
