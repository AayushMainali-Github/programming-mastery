import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Introduction = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Introduction to Python</div>
        <div className="description">
          Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and was first released in 1991.
          Python emphasizes code readability with its clean syntax, making it an excellent choice for both beginners and experienced developers.
        </div>

        <div className="subHeader">Why Choose Python?</div>
        <ul className="list">
          <li>
            <b>Easy to Learn and Use</b>: Python's syntax is clear and resembles natural language, making it accessible to beginners.
          </li>
          <li>
            <b>Versatile</b>: Python can be used for web development, data science, artificial intelligence, scientific computing, automation, and more.
          </li>
          <li>
            <b>Large Community Support</b>: Python has an extensive and supportive community, offering a wide range of libraries and frameworks.
          </li>
          <li>
            <b>Portability</b>: Python code can be executed across various platforms without modification.
          </li>
        </ul>

        <div className="subHeader">Basic Python Code Example</div>
        <div className="description">Here is a simple Python program that prints "Hello, World!" to the screen:</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# This is a simple Python program
print("Hello, World!")`}</Code>

        <div className="subHeader">Features of Python</div>
        <ul className="list">
          <li>
            <b>Interpreted Language</b>: Python code is executed line by line, which simplifies debugging.
          </li>
          <li>
            <b>Dynamically Typed</b>: You don't need to declare the type of variable; Python automatically infers it.
          </li>
          <li>
            <b>Extensive Standard Library</b>: Python comes with a large library of built-in functions and modules to simplify coding.
          </li>
          <li>
            <b>Open-Source</b>: Python is open-source and freely available.
          </li>
        </ul>

        <div className="subHeader">Applications of Python</div>
        <ul className="list">
          <li>
            <b>Web Development</b>: Frameworks like Flask and Django make building web applications easy.
          </li>
          <li>
            <b>Data Science and Machine Learning</b>: Libraries like NumPy, pandas, and scikit-learn are commonly used for data analysis and machine learning.
          </li>
          <li>
            <b>Automation</b>: Python can be used for automating repetitive tasks using scripts.
          </li>
          <li>
            <b>Game Development</b>: Python libraries like Pygame can be used for game development.
          </li>
        </ul>

        <div className="subHeader">Getting Started</div>
        <div className="description">
          To start coding in Python, you'll need to install Python on your computer. We will cover the installation process in the next chapter, "Setting Up the Environment."
        </div>

        <Bottom back="/python" next="/python/environmentsetup" />
      </div>
    </div>
  );
};

export default Introduction;
