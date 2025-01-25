import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSColorsAndBackgrounds = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Colors and Backgrounds</div>
        <div className="description">
          Colors and backgrounds play a crucial role in defining the visual appeal of a webpage. In this chapter, you'll learn how to set colors for text, backgrounds, and more,
          including gradients.
        </div>

        <div className="subHeader">Text Color</div>
        <div className="description">
          The <b>color</b> property is used to set the text color of an element. It accepts various formats:
        </div>
        <ul className="list">
          <li>
            <b>Named colors:</b> Predefined color names like <b>red</b>, <b>blue</b>, etc.
          </li>
          <li>
            <b>HEX:</b> A hexadecimal value like <b>#ff0000</b>.
          </li>
          <li>
            <b>RGB:</b> An RGB value like <b>rgb(255, 0, 0)</b>.
          </li>
          <li>
            <b>RGBA:</b> Similar to RGB but includes transparency, e.g., <b>rgba(255, 0, 0, 0.5)</b>.
          </li>
          <li>
            <b>HSL:</b> Hue, Saturation, and Lightness, e.g., <b>hsl(0, 100%, 50%)</b>.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`p {
  color: red;          /* Named color */
  color: #ff0000;      /* HEX */
  color: rgb(255, 0, 0); /* RGB */
  color: rgba(255, 0, 0, 0.5); /* RGBA with transparency */
  color: hsl(0, 100%, 50%); /* HSL */
}`}</Code>

        <div className="subHeader">Background Color</div>
        <div className="description">
          The <b>background-color</b> property sets the background color of an element:
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  background-color: lightblue;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div>
  This div has a light blue background.
</div>`}</Code>

        <div className="subHeader">Background Image</div>
        <div className="description">
          The <b>background-image</b> property sets an image as the background:
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  background-image: url('background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div>
  This div has a background image.
</div>`}</Code>

        <div className="subHeader">Gradients</div>
        <div className="description">Gradients are a type of background that smoothly transitions between two or more colors:</div>

        <div className="subSubHeader">Linear Gradients</div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  background: linear-gradient(to right, red, yellow);
}`}</Code>

        <div className="subSubHeader">Radial Gradients</div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  background: radial-gradient(circle, red, yellow, green);
}`}</Code>

        <div className="subHeader">Multiple Backgrounds</div>
        <div className="description">You can set multiple backgrounds using a comma-separated list:</div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  background-image: url('image1.jpg'), url('image2.jpg');
  background-position: left top, right bottom;
  background-repeat: no-repeat;
}`}</Code>

        <div className="subHeader">Shorthand Property</div>
        <div className="description">
          The <b>background</b> shorthand property can be used to set multiple background properties in one line:
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  background: url('image.jpg') no-repeat center/cover;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use HEX or RGB for consistent color representation.</li>
          <li>Use gradients to enhance design but avoid overloading them.</li>
          <li>
            Combine <b>background-color</b> with <b>background-image</b> as a fallback for older browsers.
          </li>
          <li>Optimize background images for faster load times.</li>
        </ul>

        <Bottom back="/css/css-syntax-and-selectors" next="/css/text-styling" />
      </div>
    </div>
  );
};

export default CSSColorsAndBackgrounds;
