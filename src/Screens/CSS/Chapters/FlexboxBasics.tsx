import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSFlexboxBasics = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Flexbox Basics</div>
        <div className="description">
          Flexbox is a CSS layout model designed to align items efficiently, even when their sizes are dynamic. It’s a powerful tool for creating responsive designs and organizing
          elements in rows or columns.
        </div>

        <div className="subHeader">What is Flexbox?</div>
        <div className="description">
          The Flexible Box Layout (Flexbox) is a one-dimensional layout system for distributing space and aligning items in a container. It allows you to control the layout along a
          single axis (either horizontally or vertically).
        </div>

        <div className="subHeader">Flex Container</div>
        <div className="description">
          A flex container is an element with the <b>display: flex;</b> or <b>display: inline-flex;</b> property. This makes its child elements (flex items) align and behave
          according to flexbox rules.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div.container {
  display: flex;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}</Code>

        <div className="subHeader">Flexbox Properties</div>
        <div className="description">Flexbox properties are applied to both the container and its child elements. Let’s explore the key properties:</div>

        <div className="subSubHeader">1. Flex Direction</div>
        <div className="description">
          The <b>flex-direction</b> property defines the main axis and the direction in which items are placed.
        </div>
        <ul className="list">
          <li>
            <b>row (default):</b> Items are placed from left to right.
          </li>
          <li>
            <b>row-reverse:</b> Items are placed from right to left.
          </li>
          <li>
            <b>column:</b> Items are placed from top to bottom.
          </li>
          <li>
            <b>column-reverse:</b> Items are placed from bottom to top.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`div.container {
  flex-direction: row;
}`}</Code>

        <div className="subSubHeader">2. Justify Content</div>
        <div className="description">
          The <b>justify-content</b> property aligns items along the main axis.
        </div>
        <ul className="list">
          <li>
            <b>flex-start (default):</b> Items align at the start of the container.
          </li>
          <li>
            <b>flex-end:</b> Items align at the end of the container.
          </li>
          <li>
            <b>center:</b> Items are centered along the main axis.
          </li>
          <li>
            <b>space-between:</b> Items are evenly spaced, with no space at the edges.
          </li>
          <li>
            <b>space-around:</b> Items are evenly spaced, with equal space around each item.
          </li>
          <li>
            <b>space-evenly:</b> Items are evenly spaced, with equal space between and around them.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`div.container {
  justify-content: center;
}`}</Code>

        <div className="subSubHeader">3. Align Items</div>
        <div className="description">
          The <b>align-items</b> property aligns items along the cross axis (perpendicular to the main axis).
        </div>
        <ul className="list">
          <li>
            <b>stretch (default):</b> Items stretch to fill the container.
          </li>
          <li>
            <b>flex-start:</b> Items align at the start of the container.
          </li>
          <li>
            <b>flex-end:</b> Items align at the end of the container.
          </li>
          <li>
            <b>center:</b> Items are centered along the cross axis.
          </li>
          <li>
            <b>baseline:</b> Items align based on their text baseline.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`div.container {
  align-items: center;
}`}</Code>

        <div className="subSubHeader">4. Align Self</div>
        <div className="description">
          The <b>align-self</b> property allows individual items to override the container’s <b>align-items</b> property.
        </div>
        <ul className="list">
          <li>
            Possible values: <b>auto</b>, <b>flex-start</b>, <b>flex-end</b>, <b>center</b>, <b>baseline</b>, <b>stretch</b>.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`div.item {
  align-self: flex-end;
}`}</Code>

        <div className="subHeader">Example: Flexbox in Action</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`div.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  border: 2px solid black;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use Flexbox for one-dimensional layouts (rows or columns).</li>
          <li>Combine Flexbox with media queries for responsive designs.</li>
          <li>
            Use shorthand properties (e.g., <b>flex</b>) for cleaner CSS.
          </li>
        </ul>

        <Bottom back="/css/positioning" next="/css/grid-basics" />
      </div>
    </div>
  );
};

export default CSSFlexboxBasics;
