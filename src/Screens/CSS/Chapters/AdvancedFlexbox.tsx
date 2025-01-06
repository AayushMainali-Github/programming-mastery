import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSAdvancedFlexbox = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Advanced Flexbox</div>
        <div className="description">
          Flexbox is a powerful tool for creating complex layouts. By combining advanced properties and techniques, you can build dynamic, responsive, and sophisticated designs.
        </div>

        <div className="subHeader">Flexbox Recap</div>
        <div className="description">
          Flexbox operates on a container and its child elements. Key properties like <b>flex-direction</b>, <b>justify-content</b>, and <b>align-items</b> are used to control
          layout along the main and cross axes.
        </div>

        <div className="subHeader">Nested Flex Containers</div>
        <div className="description">
          Flexbox allows you to nest flex containers within one another for more complex layouts. Each nested container can have its own set of flex properties.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Parent flex container */
.container {
  display: flex;
  flex-direction: column;
}

/* Nested flex container */
.row {
  display: flex;
  justify-content: space-between;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div class="row">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
  <div class="row">
    <div>Item A</div>
    <div>Item B</div>
  </div>
</div>`}</Code>

        <div className="subHeader">
          The <b>flex</b> Property
        </div>
        <div className="description">
          The <b>flex</b> shorthand property combines <b>flex-grow</b>, <b>flex-shrink</b>, and <b>flex-basis</b> to control how flex items grow, shrink, and take up space.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Syntax */
flex: grow shrink basis;

/* Example */
.item {
  flex: 1 1 auto; /* Grow, shrink, and calculate size automatically */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`}</Code>

        <div className="subHeader">
          Alignment with <b>align-content</b>
        </div>
        <div className="description">
          The <b>align-content</b> property aligns multiple rows of flex items along the cross axis. It works only when the flex container has wrapping enabled.
        </div>
        <ul className="list">
          <li>
            <b>flex-start:</b> Rows align at the start of the container.
          </li>
          <li>
            <b>flex-end:</b> Rows align at the end of the container.
          </li>
          <li>
            <b>center:</b> Rows are centered in the container.
          </li>
          <li>
            <b>space-between:</b> Rows are evenly distributed, with no space at the edges.
          </li>
          <li>
            <b>space-around:</b> Rows are evenly distributed, with equal space around them.
          </li>
          <li>
            <b>stretch:</b> Rows stretch to fill the container.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Align rows to center */
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}`}</Code>

        <div className="subHeader">Ordering Flex Items</div>
        <div className="description">
          The <b>order</b> property allows you to rearrange the visual order of flex items without changing the HTML structure.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Set custom order */
.item:first-child {
  order: 3;
}
.item:nth-child(2) {
  order: 1;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`}</Code>

        <div className="subHeader">Responsive Flexbox Layouts</div>
        <div className="description">Use media queries with Flexbox properties to create responsive designs that adapt to different screen sizes.</div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Default layout */
.container {
  display: flex;
  flex-wrap: nowrap;
}

/* Adjust layout for smaller screens */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`}</Code>

        <div className="subHeader">Example: Advanced Flexbox Layout</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div class="header">Header</div>
  <div class="main-content">
    <div class="sidebar">Sidebar</div>
    <div class="content">Main Content</div>
  </div>
  <div class="footer">Footer</div>
</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Flexbox layout */
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header, .footer {
  background-color: #007bff;
  color: white;
  padding: 20px;
  text-align: center;
}

.main-content {
  display: flex;
  flex: 1;
}

.sidebar {
  flex: 0 0 200px;
  background-color: #f8f9fa;
  padding: 20px;
}

.content {
  flex: 1;
  background-color: #e9ecef;
  padding: 20px;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use nested flex containers for more granular control.</li>
          <li>
            Leverage the <b>flex</b> shorthand to simplify code.
          </li>
          <li>Combine Flexbox with media queries for responsive designs.</li>
          <li>
            Use the <b>order</b> property sparingly to avoid confusion in the visual order.
          </li>
        </ul>

        <Bottom back="/css/csstransformations" next="/css/advancedgrid" />
      </div>
    </div>
  );
};

export default CSSAdvancedFlexbox;
