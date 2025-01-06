import React from "react";
import Bottom from "../../../Components/Bottom";
import { Link } from "react-router-dom"; // Ensure you import Link from react-router-dom
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const EnvironmentSetup = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Setting Up the Environment</div>
        <div className="description">
          To start coding in Python, you need to set up your development environment. This involves installing Python, setting up a code editor or IDE, and ensuring everything is
          configured correctly.
        </div>

        <div className="subHeader">Step 1: Downloading Python</div>
        <div className="description">
          Go to the official Python website at{" "}
          <Link className="link" to="https://www.python.org/downloads/">
            python.org/downloads
          </Link>{" "}
          and download the latest version of Python for your operating system (Windows, macOS, or Linux).
        </div>

        <div className="subHeader">Step 2: Installing Python</div>
        <div className="description">Once downloaded, run the installer and follow these steps:</div>
        <ul className="list">
          <li>
            On Windows, check the box that says <b>"Add Python to PATH"</b> before clicking <b>Install Now</b>.
          </li>
          <li>On macOS and Linux, follow the on-screen instructions to complete the installation.</li>
        </ul>

        <div className="subHeader">Step 3: Verifying Installation</div>
        <div className="description">To verify that Python was installed correctly, open your terminal or command prompt and type:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`python --version`}</Code>
        <div className="description">
          If Python was installed successfully, you should see the version number printed on the screen (e.g., <b>Python 3.x.x</b>).
        </div>

        <div className="subHeader">Step 4: Choosing a Code Editor or IDE</div>
        <div className="description">
          While you can write Python code in any text editor, using a code editor or integrated development environment (IDE) makes coding easier. Some popular options include:
        </div>
        <ul className="list">
          <li>
            <b>Visual Studio Code (VS Code)</b>: A free, powerful, and customizable code editor. Download it from{" "}
            <Link className="link" to="https://code.visualstudio.com/">
              Visual Studio Code
            </Link>
            .
          </li>
          <li>
            <b>PyCharm</b>: A full-featured IDE specifically for Python development. Download it from{" "}
            <Link className="link" to="https://www.jetbrains.com/pycharm/">
              PyCharm
            </Link>
            .
          </li>
          <li>
            <b>Sublime Text</b>: A lightweight editor with Python support. Download it from{" "}
            <Link className="link" to="https://www.sublimetext.com/">
              Sublime Text
            </Link>
            .
          </li>
        </ul>

        <div className="subHeader">Step 5: Running Python Code</div>
        <div className="description">You can run Python code in two main ways:</div>
        <ul className="list">
          <li>
            <b>Using the Python Shell</b>: Open your terminal and type <b>python</b>. You will enter the Python interactive shell where you can run Python commands line by line.
          </li>
          <li>
            <b>Running Python Scripts</b>: Save your code in a file with a <b>.py</b> extension (e.g., <b>script.py</b>) and run it from the terminal using:
          </li>
        </ul>
        <Code language="bash" style={materialDark} showLineNumbers>{`python script.py`}</Code>

        <div className="subHeader">Installing Additional Packages</div>
        <div className="description">
          Python comes with a built-in package manager called <b>pip</b>. You can use it to install additional packages. For example, to install the <b>requests</b> library, run:
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`pip install requests`}</Code>

        <Bottom back="/python/introduction" next="/python/syntax" />
      </div>
    </div>
  );
};

export default EnvironmentSetup;
