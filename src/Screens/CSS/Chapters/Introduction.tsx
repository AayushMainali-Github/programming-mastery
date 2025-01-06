import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSIntroduction = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Introduction to CSS</div>
        <div className="description">
          CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation of web pages. It allows you to style and layout HTML elements by defining rules
          that specify the appearance of your content.
        </div>

        <div className="subHeader">What is CSS?</div>
        <div className="description">
          CSS stands for <b>Cascading Style Sheets</b>. It is used to separate the content of a webpage (HTML) from its presentation (design and layout). CSS enables you to:
        </div>
        <ul className="list">
          <li>Control the color, font, size, and spacing of elements.</li>
          <li>Create responsive designs that adapt to different screen sizes.</li>
          <li>Apply animations and visual effects to elements.</li>
        </ul>

        <div className="subHeader">History of CSS</div>
        <div className="description">CSS has evolved over the years to include advanced features:</div>
        <ul className="list">
          <li>
            <b>CSS1 (1996):</b> Introduced basic styling capabilities like fonts, colors, and text alignment.
          </li>
          <li>
            <b>CSS2 (1998):</b> Added support for positioning, media types, and more selectors.
          </li>
          <li>
            <b>CSS3 (2001):</b> Introduced modular features like Flexbox, Grid, animations, and transitions.
          </li>
        </ul>

        <div className="subHeader">How CSS Works with HTML</div>
        <div className="description">CSS works by targeting HTML elements and applying styles to them. It can be added in three main ways:</div>

        <div className="subHeader">1. Inline CSS</div>
        <div className="description">
          Styles are added directly to the HTML element using the <b>style</b> attribute:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<p style="color: blue; font-size: 18px;">This is a styled paragraph.</p>`}</Code>

        <div className="subHeader">2. Internal CSS</div>
        <div className="description">
          Styles are written inside a <b>&lt;style&gt;</b> tag within the HTML file:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<style>
  p {
    color: green;
    font-size: 16px;
  }
</style>

<p>This paragraph is styled using internal CSS.</p>`}</Code>

        <div className="subHeader">3. External CSS</div>
        <div className="description">
          Styles are defined in a separate CSS file and linked to the HTML file using a <b>&lt;link&gt;</b> tag:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!-- Link to an external stylesheet -->
<link rel="stylesheet" href="styles.css">

<p>This paragraph is styled using external CSS.</p>`}</Code>

        <div className="subHeader">Benefits of CSS</div>
        <ul className="list">
          <li>
            <b>Separation of Content and Design:</b> Improves maintainability by keeping HTML and CSS separate.
          </li>
          <li>
            <b>Reusable Styles:</b> Allows you to reuse styles across multiple pages with a single CSS file.
          </li>
          <li>
            <b>Consistency:</b> Ensures uniform styling across the website.
          </li>
        </ul>

        <div className="subHeader">Example: Basic HTML and CSS</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!-- HTML File -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to CSS</h1>
  <p>This is a styled paragraph.</p>
</body>
</html>

<!-- CSS File (styles.css) -->
h1 {
  color: blue;
  text-align: center;
}

p {
  color: gray;
  font-size: 18px;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Prefer external CSS for scalability and maintainability.</li>
          <li>Use meaningful class and ID names for elements.</li>
          <li>Organize CSS files logically for easy navigation and updates.</li>
        </ul>

        <Bottom back="/css/home" next="/css/syntaxandselectors" />
      </div>
    </div>
  );
};

export default CSSIntroduction;
