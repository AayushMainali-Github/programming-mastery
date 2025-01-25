import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSShadowEffects = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Shadow Effects</div>
        <div className="description">
          CSS shadow effects, created using <b>box-shadow</b> and <b>text-shadow</b>, add depth and dimension to elements. These effects are widely used in modern web design to
          enhance visuals.
        </div>

        <div className="subHeader">Box-shadow</div>
        <div className="description">
          The <b>box-shadow</b> property applies shadow effects to the entire element box, including its padding and border.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Syntax */
box-shadow: offset-x offset-y blur-radius spread-radius color;

/* Example */
div {
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="box">Box with Shadow</div>`}</Code>

        <div className="subSubHeader">Box-shadow Parameters</div>
        <ul className="list">
          <li>
            <b>offset-x:</b> Horizontal shadow position (positive moves right, negative moves left).
          </li>
          <li>
            <b>offset-y:</b> Vertical shadow position (positive moves down, negative moves up).
          </li>
          <li>
            <b>blur-radius:</b> The blur amount; higher values create softer shadows.
          </li>
          <li>
            <b>spread-radius:</b> Expands or contracts the shadow.
          </li>
          <li>
            <b>color:</b> Specifies the shadow color (e.g., <b>rgba(0,0,0,0.5)</b>).
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Multiple shadows */
div {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), -2px -2px 5px rgba(255, 255, 255, 0.5);
}`}</Code>

        <div className="subHeader">Text-shadow</div>
        <div className="description">
          The <b>text-shadow</b> property applies shadow effects to text, enhancing readability and aesthetics.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Syntax */
text-shadow: offset-x offset-y blur-radius color;

/* Example */
h1 {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<h1>Shadowed Text</h1>`}</Code>

        <div className="subSubHeader">Text-shadow Parameters</div>
        <ul className="list">
          <li>
            <b>offset-x:</b> Horizontal shadow position.
          </li>
          <li>
            <b>offset-y:</b> Vertical shadow position.
          </li>
          <li>
            <b>blur-radius:</b> The blur amount.
          </li>
          <li>
            <b>color:</b> Specifies the shadow color.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Glowing text effect */
h1 {
  text-shadow: 0 0 10px rgba(0, 123, 255, 0.7), 0 0 20px rgba(0, 123, 255, 0.5);
}`}</Code>

        <div className="subHeader">Inset Shadows</div>
        <div className="description">
          The <b>inset</b> keyword creates inner shadows for elements, giving a sunken or beveled effect.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3);
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="inset-box">Inset Shadow</div>`}</Code>

        <div className="subHeader">Example: Combined Shadow Effects</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="combined-box">
  <h1>Stylish Heading</h1>
  <p>With both box-shadow and text-shadow.</p>
</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`.combined-box {
  width: 300px;
  padding: 20px;
  background-color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.combined-box h1 {
  font-size: 24px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use subtle shadows to avoid overwhelming the design.</li>
          <li>Combine multiple shadows for realistic effects.</li>
          <li>Optimize performance by avoiding large blur-radius values unnecessarily.</li>
          <li>Use inset shadows sparingly for specific effects.</li>
        </ul>

        <Bottom back="/css/css-specificity-and-inheritance" next="/css/clipping-and-masking" />
      </div>
    </div>
  );
};

export default CSSShadowEffects;
