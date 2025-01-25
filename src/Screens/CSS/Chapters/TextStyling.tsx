import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSTextStyling = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Text Styling</div>
        <div className="description">
          Text styling is essential for creating visually appealing and readable content on your web pages. CSS provides several properties to control fonts, sizes, alignments,
          decorations, and transformations.
        </div>

        <div className="subHeader">Font Family</div>
        <div className="description">
          The <b>font-family</b> property specifies the font of an element. It can include fallback fonts for better compatibility:
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`p {
  font-family: 'Arial', 'Helvetica', sans-serif;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<p>This paragraph uses Arial as its font.</p>`}</Code>

        <div className="subHeader">Font Size</div>
        <div className="description">
          The <b>font-size</b> property adjusts the size of text. Common units include:
        </div>
        <ul className="list">
          <li>
            <b>px:</b> Fixed size (e.g., <b>16px</b>).
          </li>
          <li>
            <b>em:</b> Relative to the parent element’s font size.
          </li>
          <li>
            <b>rem:</b> Relative to the root element’s font size.
          </li>
          <li>
            <b>%:</b> Percentage of the parent element’s font size.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`h1 {
  font-size: 2rem; /* 2 times the root font size */
}`}</Code>

        <div className="subHeader">Text Alignment</div>
        <div className="description">
          The <b>text-align</b> property aligns text horizontally:
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`h1 {
  text-align: center; /* Options: left, right, center, justify */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<h1>This heading is centered.</h1>`}</Code>

        <div className="subHeader">Text Decoration</div>
        <div className="description">
          The <b>text-decoration</b> property adds or removes decorations like underlines:
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`a {
  text-decoration: none; /* Removes underline */
}

h1 {
  text-decoration: underline; /* Adds underline */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<a href="#">This link has no underline.</a>`}</Code>

        <div className="subHeader">Text Transformation</div>
        <div className="description">
          The <b>text-transform</b> property changes the case of text:
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`p {
  text-transform: uppercase; /* Options: uppercase, lowercase, capitalize */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<p>This text is uppercase.</p>`}</Code>

        <div className="subHeader">Line Height</div>
        <div className="description">
          The <b>line-height</b> property sets the vertical spacing between lines:
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`p {
  line-height: 1.5; /* Multiplier of the font size */
}`}</Code>

        <div className="subHeader">Letter Spacing and Word Spacing</div>
        <div className="description">These properties adjust spacing between characters or words:</div>
        <Code language="css" style={materialDark} showLineNumbers>{`h1 {
  letter-spacing: 2px; /* Space between characters */
  word-spacing: 5px;   /* Space between words */
}`}</Code>

        <div className="subHeader">Font Weight</div>
        <div className="description">
          The <b>font-weight</b> property sets the thickness of text:
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`p {
  font-weight: bold; /* Options: normal, bold, bolder, lighter, or numeric values (100-900) */
}`}</Code>

        <div className="subHeader">Font Style</div>
        <div className="description">
          The <b>font-style</b> property defines the style of text, such as italic:
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`em {
  font-style: italic; /* Options: normal, italic, oblique */
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use web-safe fonts or include fallbacks.</li>
          <li>Maintain proper contrast between text and background for readability.</li>
          <li>Keep font sizes consistent for a professional look.</li>
        </ul>

        <Bottom back="/css/colors-and-backgrounds" next="/css/box-model" />
      </div>
    </div>
  );
};

export default CSSTextStyling;
