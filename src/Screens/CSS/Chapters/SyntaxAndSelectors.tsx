import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSSyntaxAndSelectors = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">CSS Syntax and Selectors</div>
        <div className="description">
          In this chapter, we’ll explore the basic syntax of CSS, understand how rules, properties, and values work, and learn about the various types of selectors used to target
          elements.
        </div>

        <div className="subHeader">CSS Syntax</div>
        <div className="description">CSS is written in rulesets that consist of a selector and a declaration block. The syntax is as follows:</div>
        <Code language="css" style={materialDark} showLineNumbers>{`selector {
  property: value;
}`}</Code>
        <div className="description">
          <ul className="list">
            <li>
              <b>Selector:</b> Targets the HTML element(s) to style.
            </li>
            <li>
              <b>Property:</b> The style property to change (e.g., color, font-size).
            </li>
            <li>
              <b>Value:</b> The value assigned to the property (e.g., red, 16px).
            </li>
          </ul>
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Example */
p {
  color: blue;
  font-size: 18px;
}`}</Code>

        <div className="subHeader">CSS Properties and Values</div>
        <div className="description">CSS has a wide range of properties. Here are a few common examples:</div>
        <ul className="list">
          <li>
            <b>color:</b> Changes the text color.
          </li>
          <li>
            <b>background-color:</b> Sets the background color.
          </li>
          <li>
            <b>font-size:</b> Adjusts the size of the text.
          </li>
          <li>
            <b>margin:</b> Controls the space outside an element.
          </li>
          <li>
            <b>padding:</b> Controls the space inside an element.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`h1 {
  color: red;
  background-color: yellow;
  font-size: 24px;
  margin: 20px;
  padding: 10px;
}`}</Code>

        <div className="subHeader">CSS Selectors</div>
        <div className="description">Selectors are used to target HTML elements. There are several types of selectors in CSS:</div>

        <div className="subHeader">1. Universal Selector</div>
        <div className="description">Targets all elements on the page:</div>
        <Code language="css" style={materialDark} showLineNumbers>{`* {
  margin: 0;
  padding: 0;
}`}</Code>

        <div className="subHeader">2. Type Selector</div>
        <div className="description">
          Targets all elements of a specific type (e.g., all <b>p</b> tags):
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`p {
  color: green;
}`}</Code>

        <div className="subHeader">3. Class Selector</div>
        <div className="description">
          Targets elements with a specific class. Classes are defined with a <b>.</b> prefix:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="highlight">Highlighted Text</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`.highlight {
  background-color: yellow;
}`}</Code>

        <div className="subHeader">4. ID Selector</div>
        <div className="description">
          Targets an element with a specific ID. IDs are defined with a <b>#</b> prefix:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div id="main-header">Main Header</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`#main-header {
  font-size: 32px;
  font-weight: bold;
}`}</Code>

        <div className="subHeader">5. Grouping Selectors</div>
        <div className="description">Target multiple elements with the same styles by separating selectors with commas:</div>
        <Code language="css" style={materialDark} showLineNumbers>{`h1, h2, h3 {
  color: blue;
}`}</Code>

        <div className="subHeader">6. Descendant Selector</div>
        <div className="description">Targets elements nested within another element:</div>
        <Code language="css" style={materialDark} showLineNumbers>{`div p {
  color: gray;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div>
  <p>This paragraph is inside a div.</p>
</div>`}</Code>

        <div className="subHeader">7. Pseudo-classes</div>
        <div className="description">Target elements in a specific state, such as hover or focus:</div>
        <Code language="css" style={materialDark} showLineNumbers>{`a:hover {
  color: red;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use class selectors for reusable styles.</li>
          <li>Minimize the use of ID selectors for styling, as they have high specificity.</li>
          <li>Organize your CSS by grouping related styles together.</li>
        </ul>

        <Bottom back="/css/introduction" next="/css/colorsandbackgrounds" />
      </div>
    </div>
  );
};

export default CSSSyntaxAndSelectors;
