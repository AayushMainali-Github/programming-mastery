import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSTransformations = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">CSS Transformations</div>
        <div className="description">
          CSS transformations allow you to manipulate elements in 2D or 3D space by rotating, scaling, skewing, or translating them. These transformations can enhance user
          experiences by creating dynamic and visually appealing effects.
        </div>

        <div className="subHeader">
          The <b>transform</b> Property
        </div>
        <div className="description">
          The <b>transform</b> property is used to apply transformations to an element. Multiple transformations can be combined by separating them with spaces.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Basic syntax */
element {
  transform: transformation-function;
}`}</Code>

        <div className="subHeader">1. Rotate</div>
        <div className="description">
          The <b>rotate()</b> function rotates an element around a fixed point (usually the center). The rotation angle is specified in degrees (<b>deg</b>) or radians (<b>rad</b>
          ).
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Rotate 45 degrees */
div {
  transform: rotate(45deg);
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="box">Rotate</div>`}</Code>

        <div className="subHeader">2. Scale</div>
        <div className="description">
          The <b>scale()</b> function resizes an element. It takes one or two values:
        </div>
        <ul className="list">
          <li>
            <b>scale(1.5):</b> Scales uniformly to 1.5 times its original size.
          </li>
          <li>
            <b>scale(2, 1):</b> Doubles the width but keeps the height the same.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Scale width and height uniformly */
div {
  transform: scale(1.5);
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="box">Scale</div>`}</Code>

        <div className="subHeader">3. Skew</div>
        <div className="description">
          The <b>skew()</b> function distorts an element along the X and/or Y axis by the specified angles.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Skew along the X axis */
div {
  transform: skewX(30deg);
}

/* Skew along both axes */
div {
  transform: skew(30deg, 15deg);
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="box">Skew</div>`}</Code>

        <div className="subHeader">4. Translate</div>
        <div className="description">
          The <b>translate()</b> function moves an element from its current position. The values specify movement along the X and Y axes.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Move 50px right and 30px down */
div {
  transform: translate(50px, 30px);
}

/* Move 100% of the width to the right */
div {
  transform: translateX(100%);
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="box">Translate</div>`}</Code>

        <div className="subHeader">Combining Transformations</div>
        <div className="description">Multiple transformations can be applied to an element simultaneously by separating them with spaces.</div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Combine rotation, scaling, and translation */
div {
  transform: rotate(45deg) scale(1.5) translate(50px, 30px);
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="box">Combined Transform</div>`}</Code>

        <div className="subHeader">Transform Origin</div>
        <div className="description">
          The <b>transform-origin</b> property defines the point around which a transformation occurs. The default is the center of the element (<b>50% 50%</b>).
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Change the origin to the top-left corner */
div {
  transform-origin: 0 0;
  transform: rotate(45deg);
}`}</Code>

        <div className="subHeader">3D Transformations</div>
        <div className="description">
          CSS also supports 3D transformations using functions like <b>rotateX()</b>, <b>rotateY()</b>, and <b>perspective()</b>.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Rotate in 3D space */
div {
  transform: rotateX(45deg) rotateY(45deg);
}`}</Code>

        <div className="subHeader">Example: Interactive Transformations</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="interactive-box">Hover Me</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Base styles */
.interactive-box {
  width: 100px;
  height: 100px;
  background-color: #007bff;
  transition: transform 0.5s ease;
}

/* Hover transformations */
.interactive-box:hover {
  transform: rotate(45deg) scale(1.2);
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use transformations sparingly to maintain performance.</li>
          <li>Combine transformations for more dynamic effects.</li>
          <li>Test transformations across different browsers to ensure consistency.</li>
          <li>
            Use <b>transition</b> with transformations for smooth effects.
          </li>
        </ul>

        <Bottom back="/css/transitionsandanimations" next="/css/advancedflexbox" />
      </div>
    </div>
  );
};

export default CSSTransformations;
