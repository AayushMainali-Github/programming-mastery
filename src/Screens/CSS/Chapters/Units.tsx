import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSUnits = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">CSS Units</div>
        <div className="description">
          CSS units are used to define the size of various properties like width, height, padding, margin, and more. They are broadly classified into absolute and relative units.
        </div>

        <div className="subHeader">Absolute Units</div>
        <div className="description">
          Absolute units specify fixed values that do not depend on other elements. They are ideal when you want consistent dimensions regardless of the screen size or parent
          elements.
        </div>
        <ul className="list">
          <li>
            <b>px (pixels):</b> Represents a fixed number of pixels. One of the most commonly used units.
          </li>
          <li>
            <b>cm (centimeters):</b> Used for print layouts; rarely used in web design.
          </li>
          <li>
            <b>mm (millimeters):</b> Like <b>cm</b>, used for print.
          </li>
          <li>
            <b>in (inches):</b> One inch equals 2.54 cm.
          </li>
          <li>
            <b>pt (points):</b> Commonly used in typography; 1pt = 1/72 inch.
          </li>
          <li>
            <b>pc (picas):</b> Less commonly used; 1pc = 12pt.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  width: 100px; /* Fixed size of 100 pixels */
  height: 2cm;  /* 2 centimeters in height */
}`}</Code>

        <div className="subHeader">Relative Units</div>
        <div className="description">
          Relative units are defined relative to another property, such as the font size of the parent element or the viewport size. These units make designs more flexible and
          responsive.
        </div>

        <div className="subSubHeader">1. em</div>
        <div className="description">
          <b>em</b> is relative to the font size of the parent element. For example, if the parent font size is 16px, <b>1em</b> equals 16px.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  font-size: 1.5em; /* 1.5 times the parent font size */
}`}</Code>

        <div className="subSubHeader">2. rem</div>
        <div className="description">
          <b>rem</b> is relative to the font size of the root element (<b>&lt;html&gt;</b>). It provides consistency across elements, regardless of their nesting.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`html {
  font-size: 16px;
}
div {
  font-size: 2rem; /* 2 times the root font size, i.e., 32px */
}`}</Code>

        <div className="subSubHeader">3. % (Percentage)</div>
        <div className="description">Percentage values are relative to the parent element’s dimensions. They are commonly used for widths, heights, and padding.</div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  width: 50%; /* 50% of the parent's width */
}`}</Code>

        <div className="subSubHeader">4. vh and vw</div>
        <div className="description">
          <b>vh</b> (viewport height) and <b>vw</b> (viewport width) are relative to the size of the viewport.
        </div>
        <ul className="list">
          <li>
            <b>1vh:</b> 1% of the viewport's height.
          </li>
          <li>
            <b>1vw:</b> 1% of the viewport's width.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  width: 100vw; /* Full width of the viewport */
  height: 50vh; /* Half the height of the viewport */
}`}</Code>

        <div className="subSubHeader">5. Other Relative Units</div>
        <ul className="list">
          <li>
            <b>vmin:</b> The smaller value between <b>vh</b> and <b>vw</b>.
          </li>
          <li>
            <b>vmax:</b> The larger value between <b>vh</b> and <b>vw</b>.
          </li>
          <li>
            <b>ch:</b> Relative to the width of the "0" character of the current font.
          </li>
          <li>
            <b>ex:</b> Relative to the height of the lowercase "x" of the current font.
          </li>
        </ul>

        <div className="subHeader">Example: Combining Units</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`div.container {
  width: 90%;  /* Relative to the viewport width */
  height: 50vh; /* Half the viewport height */
}
div.container div {
  font-size: 1.5rem; /* Relative to the root font size */
  margin: 10px;      /* Fixed margin */
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use relative units for responsive designs.</li>
          <li>
            Prefer <b>rem</b> over <b>em</b> for consistent typography.
          </li>
          <li>
            Combine <b>px</b> and percentages for hybrid layouts.
          </li>
          <li>
            Use <b>vh</b> and <b>vw</b> to create full-screen sections.
          </li>
        </ul>

        <Bottom back="/css/grid-basics" next="/css/links-and-buttons-styling" />
      </div>
    </div>
  );
};

export default CSSUnits;
