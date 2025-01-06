import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSAdvancedSelectors = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Advanced Selectors</div>
        <div className="description">
          Advanced selectors, including pseudo-classes and pseudo-elements, offer powerful ways to target and style elements based on their state, position, or specific parts of
          content. These selectors enhance the flexibility and efficiency of CSS.
        </div>

        <div className="subHeader">Pseudo-classes</div>
        <div className="description">
          Pseudo-classes define the state of an element or target elements based on specific conditions, such as hover states or the position in the DOM.
        </div>
        <ul className="list">
          <li>
            <b>:hover:</b> Targets an element when the mouse hovers over it.
          </li>
          <li>
            <b>:focus:</b> Targets an element when it gains focus (e.g., input fields).
          </li>
          <li>
            <b>:nth-child(n):</b> Targets elements based on their position among siblings.
          </li>
          <li>
            <b>:first-child:</b> Targets the first child of a parent.
          </li>
          <li>
            <b>:last-child:</b> Targets the last child of a parent.
          </li>
          <li>
            <b>:not(selector):</b> Excludes elements matching a specific selector.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Example: Pseudo-classes */
button:hover {
  background-color: lightblue;
}
input:focus {
  border: 2px solid #007bff;
}
li:nth-child(2) {
  color: red;
}
li:not(:last-child) {
  margin-bottom: 10px;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`}</Code>

        <div className="subHeader">Pseudo-elements</div>
        <div className="description">Pseudo-elements target specific parts of an element, such as the first line, first letter, or content before or after the element.</div>
        <ul className="list">
          <li>
            <b>::before:</b> Inserts content before the element.
          </li>
          <li>
            <b>::after:</b> Inserts content after the element.
          </li>
          <li>
            <b>::first-line:</b> Styles the first line of text within an element.
          </li>
          <li>
            <b>::first-letter:</b> Styles the first letter of an element.
          </li>
          <li>
            <b>::placeholder:</b> Styles the placeholder text of an input field.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Example: Pseudo-elements */
p::before {
  content: "Note: ";
  font-weight: bold;
  color: red;
}
p::after {
  content: " (End)";
  font-style: italic;
  color: gray;
}
p::first-line {
  font-size: 18px;
  font-weight: bold;
}
p::first-letter {
  font-size: 24px;
  color: #007bff;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<p>
  This is a paragraph with pseudo-elements applied.
</p>`}</Code>

        <div className="subHeader">Combining Pseudo-classes and Pseudo-elements</div>
        <div className="description">You can combine pseudo-classes and pseudo-elements for advanced targeting and styling.</div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Example: Combined usage */
a:hover::before {
  content: "➡ ";
  color: orange;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<a href="#">Hover over me</a>`}</Code>

        <div className="subHeader">Practical Use Cases</div>
        <div className="description">Here are some common scenarios where pseudo-classes and pseudo-elements are useful:</div>
        <ul className="list">
          <li>
            Highlighting links on hover with <b>:hover</b>.
          </li>
          <li>
            Styling form input placeholders with <b>::placeholder</b>.
          </li>
          <li>
            Adding custom markers to lists using <b>::before</b> or <b>::after</b>.
          </li>
          <li>
            Creating drop caps in text using <b>::first-letter</b>.
          </li>
        </ul>

        <div className="subHeader">Example: Advanced Styling</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`ul li {
  position: relative;
}
ul li::before {
  content: "•";
  position: absolute;
  left: -20px;
  color: #007bff;
}
ul li:nth-child(odd) {
  background-color: #f9f9f9;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use pseudo-classes to improve interactivity and accessibility.</li>
          <li>Combine pseudo-elements with content for decorative purposes.</li>
          <li>Test pseudo-class behavior across browsers for consistency.</li>
          <li>Keep styles readable and organized when using advanced selectors.</li>
        </ul>

        <Bottom back="/css/mediaqueries" next="/css/cssvariables" />
      </div>
    </div>
  );
};

export default CSSAdvancedSelectors;
