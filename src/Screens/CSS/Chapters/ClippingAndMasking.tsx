import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSClippingAndMasking = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Clipping and Masking</div>
        <div className="description">
          Clipping and masking are advanced CSS techniques used to control the visibility of parts of an element. The <b>clip-path</b> property is used to define a clipping region,
          while the <b>mask</b> property uses an image or gradient to create complex visibility effects.
        </div>

        <div className="subHeader">
          Clipping with <b>clip-path</b>
        </div>
        <div className="description">
          The <b>clip-path</b> property allows you to define a visible region for an element. Everything outside the clipping path is hidden.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Syntax */
clip-path: shape;

/* Example: Circle clipping */
div {
  clip-path: circle(50% at center);
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="clip-circle">Clipped Content</div>`}</Code>

        <div className="subSubHeader">
          Shapes in <b>clip-path</b>
        </div>
        <ul className="list">
          <li>
            <b>circle():</b> Creates a circular clipping region.
          </li>
          <li>
            <b>ellipse():</b> Creates an elliptical clipping region.
          </li>
          <li>
            <b>polygon():</b> Defines a clipping region with multiple points.
          </li>
          <li>
            <b>inset():</b> Creates a rectangular region with inset values.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Example: Polygon clipping */
div {
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="clip-triangle">Triangle Clipping</div>`}</Code>

        <div className="subHeader">
          Masking with <b>mask</b>
        </div>
        <div className="description">
          The <b>mask</b> property uses an image or gradient to determine which parts of an element are visible. The visible areas are determined by the transparency of the mask.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Syntax */
mask: url(mask-image.png);

/* Example: Gradient mask */
div {
  mask: linear-gradient(to right, black 50%, transparent 100%);
  -webkit-mask: linear-gradient(to right, black 50%, transparent 100%);
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="masked-box">Masked Content</div>`}</Code>

        <div className="subHeader">Combining Clipping and Masking</div>
        <div className="description">
          Clipping and masking can be combined to create complex visual effects. Clipping defines the shape, while masking adds gradients or images for more intricate designs.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  clip-path: circle(50% at center);
  mask: radial-gradient(circle, black 50%, transparent 100%);
  -webkit-mask: radial-gradient(circle, black 50%, transparent 100%);
}`}</Code>

        <div className="subHeader">Example: Clipping and Masking Effects</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="effect-container">
  <div class="clipped">Clipped</div>
  <div class="masked">Masked</div>
</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Styles for clipping */
.clipped {
  width: 200px;
  height: 200px;
  background-color: lightblue;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
}

/* Styles for masking */
.masked {
  width: 200px;
  height: 200px;
  background: url('example.jpg') center/cover;
  mask: linear-gradient(to bottom, black, transparent);
  -webkit-mask: linear-gradient(to bottom, black, transparent);
}`}</Code>

        <div className="subHeader">Browser Compatibility</div>
        <div className="description">
          Ensure you test clipping and masking effects across different browsers. The <b>-webkit-mask</b> prefix is often required for WebKit-based browsers like Safari.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use <b>clip-path</b> for simple geometric shapes and <b>mask</b> for more complex patterns.
          </li>
          <li>Combine clipping and masking with animations for dynamic effects.</li>
          <li>Always include fallback styles for unsupported browsers.</li>
          <li>Optimize mask images to reduce file sizes and improve performance.</li>
        </ul>

        <Bottom back="/css/shadow-effects" next="/css/css-frameworks" />
      </div>
    </div>
  );
};

export default CSSClippingAndMasking;
