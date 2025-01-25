import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSSpecificityAndInheritance = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">CSS Specificity and Inheritance</div>
        <div className="description">
          CSS specificity and inheritance determine how styles are applied and prioritized when multiple rules target the same element. Understanding these concepts ensures
          consistent and predictable styling.
        </div>

        <div className="subHeader">What is Specificity?</div>
        <div className="description">
          Specificity is a scoring system that determines which CSS rule is applied when multiple rules target the same element. It is calculated based on the types of selectors
          used.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Example with conflicting rules */
div {
  color: blue; /* Less specific */
}
#unique {
  color: red; /* More specific */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div id="unique">This text will be red.</div>`}</Code>

        <div className="subHeader">Specificity Calculation</div>
        <div className="description">Specificity is calculated as a score based on the following:</div>
        <ul className="list">
          <li>
            <b>Inline styles:</b> 1,000 points.
          </li>
          <li>
            <b>ID selectors:</b> 100 points each.
          </li>
          <li>
            <b>Class, pseudo-class, and attribute selectors:</b> 10 points each.
          </li>
          <li>
            <b>Type selectors:</b> 1 point each.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Specificity scores */
h1 {                /* 1 */
  color: blue;
}
.class {           /* 10 */
  color: green;
}
#id {              /* 100 */
  color: red;
}
style="color: black;" /* 1,000 */`}</Code>

        <div className="subHeader">Inheritance</div>
        <div className="description">
          Some CSS properties, like <b>color</b> and <b>font-family</b>, are inherited by child elements. Non-inherited properties, like <b>margin</b> and <b>border</b>, must be
          explicitly set.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Example: Inherited property */
body {
  color: blue; /* Inherited by child elements */
}
p {
  font-size: 16px; /* Not inherited */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<body>
  <p>This text will be blue due to inheritance.</p>
</body>`}</Code>

        <div className="subHeader">Overriding Inheritance</div>
        <div className="description">
          Use the <b>inherit</b>, <b>initial</b>, or <b>unset</b> keywords to override inherited or default styles.
        </div>
        <ul className="list">
          <li>
            <b>inherit:</b> Forces a property to inherit from its parent.
          </li>
          <li>
            <b>initial:</b> Resets a property to its default browser value.
          </li>
          <li>
            <b>unset:</b> Acts as <b>inherit</b> for inheritable properties and <b>initial</b> for non-inheritable ones.
          </li>
        </ul>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Override inheritance */
p {
  color: inherit; /* Inherits color from parent */
  margin: initial; /* Resets to default margin */
}`}</Code>

        <div className="subHeader">The !important Rule</div>
        <div className="description">
          The <b>!important</b> rule overrides normal specificity and inheritance rules, ensuring a style is always applied. Use it sparingly to avoid conflicts.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Example */
div {
  color: blue !important; /* Overrides other rules */
}
#id {
  color: red; /* Ignored due to !important */
}`}</Code>

        <div className="subHeader">Example: Specificity and Inheritance in Action</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div id="parent">
  <p class="child">This text will be green.</p>
</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Styles */
#parent {
  color: blue;
}
.child {
  color: green;
}
p {
  color: red;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Keep specificity low by using class selectors instead of IDs when possible.</li>
          <li>
            Avoid overusing <b>!important</b> to maintain code clarity and manageability.
          </li>
          <li>Organize CSS rules hierarchically to reduce conflicts and improve readability.</li>
          <li>Use inheritance wisely to avoid redundant styles.</li>
        </ul>

        <Bottom back="/css/custom-fonts-and-typography" next="/css/shadow-effects" />
      </div>
    </div>
  );
};

export default CSSSpecificityAndInheritance;
