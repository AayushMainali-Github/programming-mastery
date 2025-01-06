import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSBoxModel = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Box Model</div>
        <div className="description">
          The CSS Box Model is a fundamental concept that describes the rectangular boxes generated for elements in the document. Understanding the Box Model is crucial for
          controlling layout and spacing.
        </div>

        <div className="subHeader">What is the Box Model?</div>
        <div className="description">Every element on a webpage is represented as a rectangular box composed of the following parts:</div>
        <ul className="list">
          <li>
            <b>Content:</b> The content of the element, such as text, images, or other elements.
          </li>
          <li>
            <b>Padding:</b> The space between the content and the border.
          </li>
          <li>
            <b>Border:</b> The edge surrounding the padding (or content if no padding exists).
          </li>
          <li>
            <b>Margin:</b> The space outside the border, creating distance between elements.
          </li>
        </ul>
        <Code language="plaintext" style={materialDark} showLineNumbers>{`+-------------+
|   Margin    |
+=============+
|   Border    |
+-------------+
|   Padding   |
+-------------+
|   Content   |
+-------------+`}</Code>

        <div className="subHeader">Box Model Properties</div>

        <div className="subSubHeader">1. Content</div>
        <div className="description">
          The content box holds the element's actual content, such as text or images. Its size is controlled by properties like <b>width</b> and <b>height</b>.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  width: 200px;
  height: 100px;
}`}</Code>

        <div className="subSubHeader">2. Padding</div>
        <div className="description">Padding creates space between the content and the border. You can set padding for each side:</div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  padding: 10px;         /* Equal padding on all sides */
  padding: 10px 20px;    /* Vertical | Horizontal */
  padding: 10px 15px 20px; /* Top | Horizontal | Bottom */
  padding: 10px 15px 20px 25px; /* Top | Right | Bottom | Left */
}`}</Code>

        <div className="subSubHeader">3. Border</div>
        <div className="description">
          The border surrounds the padding. You can style it using <b>border-width</b>, <b>border-style</b>, and <b>border-color</b>:
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  border-width: 2px;
  border-style: solid; /* Options: solid, dashed, dotted, double, none */
  border-color: black;
}`}</Code>
        <div className="description">The shorthand for setting all border properties is:</div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  border: 2px solid black;
}`}</Code>

        <div className="subSubHeader">4. Margin</div>
        <div className="description">Margins create space between the element and its neighbors. Margins can also be set for each side:</div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  margin: 10px;           /* Equal margin on all sides */
  margin: 10px 20px;      /* Vertical | Horizontal */
  margin: 10px 15px 20px; /* Top | Horizontal | Bottom */
  margin: 10px 15px 20px 25px; /* Top | Right | Bottom | Left */
}`}</Code>

        <div className="subHeader">Box Sizing</div>
        <div className="description">
          By default, the width and height of an element only include the content box. The <b>box-sizing</b> property changes how total size is calculated:
        </div>
        <ul className="list">
          <li>
            <b>content-box (default):</b> Width and height include only the content, excluding padding and border.
          </li>
          <li>
            <b>border-box:</b> Width and height include padding and border.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  box-sizing: border-box;
}`}</Code>

        <div className="subHeader">Example: Box Model in Action</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="box">Hello, World!</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`.box {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
  background-color: lightblue;
}`}</Code>

        <div className="subHeader">Visual Representation</div>
        <div className="description">
          The above code will create a box with:
          <ul className="list">
            <li>
              <b>Content:</b> 200px × 100px
            </li>
            <li>
              <b>Padding:</b> 10px
            </li>
            <li>
              <b>Border:</b> 5px
            </li>
            <li>
              <b>Margin:</b> 20px
            </li>
          </ul>
          Resulting in a total width of <b>230px</b> (200 + 10 + 10 + 5 + 5) and a total height of <b>130px</b> (100 + 10 + 10 + 5 + 5).
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use <b>box-sizing: border-box;</b> to simplify size calculations.
          </li>
          <li>Use shorthand properties to write cleaner CSS.</li>
          <li>Adjust padding and margin to create consistent spacing across your design.</li>
        </ul>

        <Bottom back="/css/textstyling" next="/css/positioning" />
      </div>
    </div>
  );
};

export default CSSBoxModel;
