import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSGridBasics = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Grid Basics</div>
        <div className="description">
          CSS Grid is a two-dimensional layout system that provides greater flexibility in creating grid-based designs. Unlike Flexbox, which operates in one dimension, Grid allows
          you to work with both rows and columns simultaneously.
        </div>

        <div className="subHeader">What is CSS Grid?</div>
        <div className="description">
          CSS Grid Layout is a system for creating complex and responsive web designs. A container with <b>display: grid;</b> allows you to define grid tracks (rows and columns)
          and place items within the grid.
        </div>

        <div className="subHeader">Grid Container</div>
        <div className="description">
          To use CSS Grid, first define a grid container using <b>display: grid;</b> or <b>display: inline-grid;</b>.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div.container {
  display: grid;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}</Code>

        <div className="subHeader">Defining Grid Tracks</div>
        <div className="description">
          Grid tracks (rows and columns) are defined using <b>grid-template-rows</b> and <b>grid-template-columns</b>.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div.container {
  display: grid;
  grid-template-columns: 100px 200px auto;
  grid-template-rows: 50px 100px auto;
}`}</Code>

        <div className="subHeader">Grid Gap</div>
        <div className="description">
          The <b>gap</b> property sets the space between grid items. Use <b>row-gap</b>, <b>column-gap</b>, or <b>gap</b> shorthand.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}`}</Code>

        <div className="subHeader">Placing Items in the Grid</div>
        <div className="description">
          You can place grid items explicitly using <b>grid-column</b> and <b>grid-row</b>.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div.item {
  grid-column: 1 / 3; /* Span from column 1 to 3 */
  grid-row: 2;        /* Place in row 2 */
}`}</Code>

        <div className="subHeader">Grid Shortcuts</div>
        <div className="description">
          Shorthand properties like <b>grid-area</b> and <b>grid-template</b> can simplify grid layout definitions.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div.container {
  display: grid;
  grid-template: 
    "header header" 50px
    "sidebar main" auto
    "footer footer" 30px / 100px auto;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div style={{ gridArea: "header" }}>Header</div>
  <div style={{ gridArea: "sidebar" }}>Sidebar</div>
  <div style={{ gridArea: "main" }}>Main Content</div>
  <div style={{ gridArea: "footer" }}>Footer</div>
</div>`}</Code>

        <div className="subHeader">Responsive Grids</div>
        <div className="description">
          Use fractional units (<b>fr</b>) and media queries to create responsive grid layouts.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
}`}</Code>

        <div className="subHeader">Example: CSS Grid in Action</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`div.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 10px;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use <b>grid-template-areas</b> for semantic layouts.
          </li>
          <li>Combine Grid with Flexbox for complex designs.</li>
          <li>
            Use <b>auto-fit</b> or <b>auto-fill</b> for dynamic, responsive grids.
          </li>
        </ul>

        <Bottom back="/css/flexboxbasics" next="/css/cssunits" />
      </div>
    </div>
  );
};

export default CSSGridBasics;
