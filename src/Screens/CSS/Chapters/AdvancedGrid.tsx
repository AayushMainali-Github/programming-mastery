import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSAdvancedGrid = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Advanced Grid</div>
        <div className="description">
          CSS Grid provides powerful tools for creating complex and responsive layouts. Advanced features like grid templates, named areas, and responsive grids enable greater
          control and flexibility in web design.
        </div>

        <div className="subHeader">Grid Template Layouts</div>
        <div className="description">
          The <b>grid-template-rows</b> and <b>grid-template-columns</b> properties define the structure of the grid. Use repeat(), minmax(), and fractional units (fr) for
          efficient layouts.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Define a grid with 3 columns and 2 rows */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>`}</Code>

        <div className="subHeader">Grid Template Areas</div>
        <div className="description">
          The <b>grid-template-areas</b> property allows you to name areas of the grid for better readability and easier item placement.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Define grid areas */
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-rows: 100px auto 50px;
  grid-template-columns: 200px 1fr;
}

/* Place items in named areas */
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
  <div class="footer">Footer</div>
</div>`}</Code>

        <div className="subHeader">
          Responsive Grids with <b>auto-fit</b> and <b>auto-fill</b>
        </div>
        <div className="description">
          Use <b>auto-fit</b> and <b>auto-fill</b> with <b>minmax()</b> to create grids that adjust dynamically based on available space.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Responsive grid with dynamic columns */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`}</Code>

        <div className="subHeader">Alignment in Grids</div>
        <div className="description">
          Use properties like <b>justify-items</b>, <b>align-items</b>, <b>justify-content</b>, and <b>align-content</b> to control alignment within grid cells and the grid as a
          whole.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Align items within cells */
.container {
  display: grid;
  justify-items: center; /* Horizontal alignment */
  align-items: center;   /* Vertical alignment */
}

/* Align the grid within its container */
.container {
  justify-content: space-between; /* Horizontal alignment */
  align-content: center;          /* Vertical alignment */
}`}</Code>

        <div className="subHeader">Explicit vs. Implicit Grids</div>
        <div className="description">
          Define explicit grids using <b>grid-template-rows</b> and <b>grid-template-columns</b>. Implicit grids are created automatically when items exceed the defined grid.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Explicit grid */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px; /* Implicit rows for overflow items */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> <!-- Implicit row -->
</div>`}</Code>

        <div className="subHeader">Example: Advanced Grid Layout</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
  <div class="ad">Advertisement</div>
  <div class="footer">Footer</div>
</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Define a complex grid layout */
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "ad ad"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: 100px auto 100px 50px;
  gap: 10px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.ad { grid-area: ad; }
.footer { grid-area: footer; }
`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use named grid areas for readability and easier maintenance.</li>
          <li>
            Combine <b>grid-template</b> properties with <b>auto-fit</b> or <b>auto-fill</b> for responsive layouts.
          </li>
          <li>Define explicit grids when possible, and use implicit grids for dynamic content.</li>
          <li>Test grid layouts on various devices and browsers for compatibility.</li>
        </ul>

        <Bottom back="/css/advanced-flexbox" next="/css/custom-fonts-and-typography" />
      </div>
    </div>
  );
};

export default CSSAdvancedGrid;
