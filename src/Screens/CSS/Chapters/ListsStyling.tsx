import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSListsStyling = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Lists Styling</div>
        <div className="description">
          Lists are a fundamental way to organize content. CSS allows you to style ordered and unordered lists to make them more visually appealing and aligned with your design.
        </div>

        <div className="subHeader">Default List Types</div>
        <div className="description">HTML provides two main types of lists:</div>
        <ul className="list">
          <li>
            <b>Ordered lists (&lt;ol&gt;):</b> Display items with numbers or letters.
          </li>
          <li>
            <b>Unordered lists (&lt;ul&gt;):</b> Display items with bullets.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
<ul>
  <li>Item A</li>
  <li>Item B</li>
</ul>`}</Code>

        <div className="subHeader">Removing Default Styling</div>
        <div className="description">
          Browsers apply default styling to lists. You can remove it using <b>list-style: none;</b>:
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`ul, ol {
  list-style: none;
  padding: 0;
  margin: 0;
}`}</Code>

        <div className="subHeader">Customizing Bullets</div>
        <div className="description">
          You can customize list markers using the <b>list-style-type</b> property:
        </div>
        <ul className="list">
          <li>
            <b>disc:</b> Default solid circle for unordered lists.
          </li>
          <li>
            <b>circle:</b> Hollow circle.
          </li>
          <li>
            <b>square:</b> Solid square.
          </li>
          <li>
            <b>decimal:</b> Numbers (default for ordered lists).
          </li>
          <li>
            <b>lower-roman:</b> Lowercase Roman numerals.
          </li>
          <li>
            <b>upper-alpha:</b> Uppercase letters.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`ul {
  list-style-type: square;
}
ol {
  list-style-type: upper-roman;
}`}</Code>

        <div className="subHeader">Custom List Markers</div>
        <div className="description">
          Use <b>list-style-image</b> to add custom images as markers:
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`ul {
  list-style-image: url('custom-marker.png');
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<ul>
  <li>Custom Marker 1</li>
  <li>Custom Marker 2</li>
</ul>`}</Code>

        <div className="subHeader">Positioning Markers</div>
        <div className="description">
          The <b>list-style-position</b> property controls whether the marker is inside or outside the content box:
        </div>
        <ul className="list">
          <li>
            <b>outside (default):</b> Markers are outside the content box.
          </li>
          <li>
            <b>inside:</b> Markers are inside the content box.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`ul {
  list-style-position: inside;
}`}</Code>

        <div className="subHeader">Spacing and Alignment</div>
        <div className="description">Use margin and padding to adjust spacing between list items:</div>
        <Code language="css" style={materialDark} showLineNumbers>{`ul {
  margin: 20px;
  padding: 10px;
}
li {
  margin-bottom: 10px;
}`}</Code>

        <div className="subHeader">Example: Styled List</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<ul class="custom-list">
  <li>Custom Item 1</li>
  <li>Custom Item 2</li>
  <li>Custom Item 3</li>
</ul>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`ul.custom-list {
  list-style-type: circle;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
}
ul.custom-list li {
  margin-bottom: 8px;
  padding-left: 15px;
  text-indent: -15px; /* Align marker and text */
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use custom markers for unique designs.</li>
          <li>Combine padding and margins for consistent spacing.</li>
          <li>Test marker visibility and alignment across devices.</li>
        </ul>

        <Bottom back="/css/linksandbuttons" next="/css/formsstyling" />
      </div>
    </div>
  );
};

export default CSSListsStyling;
