import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSCustomFontsAndTypography = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Custom Fonts and Typography</div>
        <div className="description">
          Typography is a key aspect of web design. Using custom fonts with <b>@font-face</b> and advanced styling techniques can help enhance readability and the visual appeal of
          your website.
        </div>

        <div className="subHeader">@font-face: Importing Custom Fonts</div>
        <div className="description">
          The <b>@font-face</b> rule allows you to use custom fonts in your project by linking to external font files. These can be hosted locally or sourced from online providers.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Basic syntax */
@font-face {
  font-family: "CustomFont";
  src: url("custom-font.woff2") format("woff2"),
       url("custom-font.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

/* Apply the custom font */
body {
  font-family: "CustomFont", sans-serif;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<p>This is a paragraph using a custom font.</p>`}</Code>

        <div className="subHeader">Using Google Fonts</div>
        <div className="description">Google Fonts provides a collection of free-to-use fonts. You can link them directly in your HTML or import them in your CSS.</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!-- HTML link -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Import in CSS */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

body {
  font-family: "Roboto", sans-serif;
}`}</Code>

        <div className="subHeader">Advanced Text Styling</div>
        <div className="description">CSS offers various properties for fine-tuning typography. Combine these to achieve the desired look and feel.</div>

        <div className="subSubHeader">1. Text Transformations</div>
        <ul className="list">
          <li>
            <b>text-transform:</b> Controls the capitalization of text (e.g., <b>uppercase</b>, <b>lowercase</b>, <b>capitalize</b>).
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`p {
  text-transform: uppercase;
}`}</Code>

        <div className="subSubHeader">2. Text Spacing</div>
        <ul className="list">
          <li>
            <b>letter-spacing:</b> Adjusts the space between characters.
          </li>
          <li>
            <b>word-spacing:</b> Adjusts the space between words.
          </li>
          <li>
            <b>line-height:</b> Sets the spacing between lines of text.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`p {
  letter-spacing: 2px;
  word-spacing: 4px;
  line-height: 1.5;
}`}</Code>

        <div className="subSubHeader">3. Font Weights and Styles</div>
        <ul className="list">
          <li>
            <b>font-weight:</b> Sets the weight of the font (e.g., <b>normal</b>, <b>bold</b>, <b>lighter</b>, <b>100</b>-<b>900</b>).
          </li>
          <li>
            <b>font-style:</b> Defines the style of the font (e.g., <b>normal</b>, <b>italic</b>, <b>oblique</b>).
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`h1 {
  font-weight: 700;
  font-style: italic;
}`}</Code>

        <div className="subSubHeader">4. Text Decorations</div>
        <ul className="list">
          <li>
            <b>text-decoration:</b> Adds lines to text (e.g., <b>underline</b>, <b>line-through</b>, <b>none</b>).
          </li>
          <li>
            <b>text-decoration-color:</b> Sets the color of the decoration.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`a {
  text-decoration: underline;
  text-decoration-color: red;
}`}</Code>

        <div className="subSubHeader">5. Text Alignment</div>
        <ul className="list">
          <li>
            <b>text-align:</b> Aligns text horizontally (e.g., <b>left</b>, <b>center</b>, <b>right</b>, <b>justify</b>).
          </li>
          <li>
            <b>vertical-align:</b> Aligns text vertically within its container.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`p {
  text-align: justify;
}`}</Code>

        <div className="subHeader">Example: Advanced Typography</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="typography-example">
  <h1>Custom Heading</h1>
  <p>Advanced typography with custom fonts and CSS properties.</p>
</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`.typography-example {
  font-family: "Roboto", sans-serif;
}
.typography-example h1 {
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.typography-example p {
  line-height: 1.8;
  text-align: justify;
  color: #555;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use <b>@font-face</b> for self-hosted fonts and Google Fonts for simplicity.
          </li>
          <li>Combine typography properties to create cohesive text styling.</li>
          <li>Ensure font sizes and line spacing are accessible and easy to read.</li>
          <li>
            Optimize custom fonts for performance by using modern formats like <b>woff2</b>.
          </li>
        </ul>

        <Bottom back="/css/advancedgrid" next="/css/cssspecificityandinheritance" />
      </div>
    </div>
  );
};

export default CSSCustomFontsAndTypography;
