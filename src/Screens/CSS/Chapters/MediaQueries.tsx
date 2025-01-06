import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSMediaQueries = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Media Queries</div>
        <div className="description">
          Media queries are a CSS feature that enables responsive design by applying styles based on device characteristics such as screen size, resolution, or orientation. They
          help create layouts that work well on different devices, including desktops, tablets, and mobile phones.
        </div>

        <div className="subHeader">What are Media Queries?</div>
        <div className="description">
          Media queries allow you to define specific styles for different breakpoints. A breakpoint is a specific screen width at which the layout adjusts to provide an optimal
          user experience.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Basic syntax */
@media (condition) {
  /* CSS rules */
}`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Example */
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}`}</Code>

        <div className="subHeader">Common Media Query Conditions</div>
        <ul className="list">
          <li>
            <b>max-width:</b> Applies styles when the screen width is less than or equal to the specified value.
          </li>
          <li>
            <b>min-width:</b> Applies styles when the screen width is greater than or equal to the specified value.
          </li>
          <li>
            <b>orientation:</b> Targets the orientation of the device (portrait or landscape).
          </li>
          <li>
            <b>aspect-ratio:</b> Targets specific aspect ratios of the screen.
          </li>
          <li>
            <b>resolution:</b> Targets the screen resolution in DPI (dots per inch).
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Example: Different device orientations */
@media (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
@media (orientation: portrait) {
  body {
    background-color: lightcoral;
  }
}`}</Code>

        <div className="subHeader">Setting Breakpoints</div>
        <div className="description">Breakpoints define the widths at which your layout changes. Here are common breakpoints used in responsive design:</div>
        <ul className="list">
          <li>
            <b>320px:</b> Small phones.
          </li>
          <li>
            <b>768px:</b> Tablets.
          </li>
          <li>
            <b>1024px:</b> Small desktops.
          </li>
          <li>
            <b>1200px:</b> Large desktops.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Example: Responsive layout */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
@media (min-width: 769px) {
  .container {
    flex-direction: row;
  }
}`}</Code>

        <div className="subHeader">Using Media Queries for Responsive Grids</div>
        <div className="description">Media queries are particularly useful for adjusting grid layouts on different devices:</div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Example: Grid layout */
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .container {
    grid-template-columns: 1fr;
  }
}`}</Code>

        <div className="subHeader">Combining Media Queries</div>
        <div className="description">You can combine multiple conditions using logical operators:</div>
        <ul className="list">
          <li>
            <b>and:</b> All conditions must be true.
          </li>
          <li>
            <b>or:</b> At least one condition must be true.
          </li>
          <li>
            <b>not:</b> Negates a condition.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Example: Combined conditions */
@media (min-width: 480px) and (max-width: 768px) {
  body {
    background-color: lightgreen;
  }
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use a mobile-first approach by styling for small screens first and then adding media queries for larger screens.</li>
          <li>Keep media queries organized and grouped for better maintainability.</li>
          <li>Test responsiveness on multiple devices and screen sizes.</li>
        </ul>

        <div className="subHeader">Example: Responsive Design in Action</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Base styles */
.container {
  display: flex;
  flex-wrap: wrap;
}
.container div {
  flex: 1 1 200px;
  margin: 10px;
  padding: 20px;
  background-color: lightgray;
}
/* Media queries */
@media (max-width: 768px) {
  .container div {
    flex: 1 1 100%;
  }
}
@media (max-width: 480px) {
  .container div {
    flex: 1 1 auto;
    font-size: 14px;
  }
}`}</Code>

        <Bottom back="/css/formsstyling" next="/css/advancedselectors" />
      </div>
    </div>
  );
};

export default CSSMediaQueries;
