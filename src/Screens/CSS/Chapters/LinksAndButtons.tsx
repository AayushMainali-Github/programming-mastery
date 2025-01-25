import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSLinksAndButtons = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Links and Buttons Styling</div>
        <div className="description">
          Links and buttons are essential elements of any web page. Styling these elements improves usability, accessibility, and visual appeal. CSS provides pseudo-classes like
          <b>:hover</b>, <b>:active</b>, and <b>:focus</b> to style their interactive states.
        </div>

        <div className="subHeader">Basic Link Styling</div>
        <div className="description">
          Links are styled using the <b>&lt;a&gt;</b> tag. You can use pseudo-classes to customize their states: <b>:link</b>, <b>:visited</b>, <b>:hover</b>, and <b>:active</b>.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`a {
  color: blue;          /* Default link color */
  text-decoration: none; /* Remove underline */
}
a:hover {
  color: red;           /* Change color on hover */
}
a:active {
  color: green;         /* Change color when clicked */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<a href="#">Click Me</a>`}</Code>

        <div className="subHeader">Button Styling</div>
        <div className="description">
          Buttons can be styled with various properties like <b>background-color</b>, <b>border</b>, and <b>padding</b>. Adding pseudo-classes enhances interactivity.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`button {
  background-color: lightblue;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: blue; /* Change background on hover */
}
button:active {
  background-color: darkblue; /* Change background when clicked */
}
button:focus {
  outline: 2px solid orange; /* Highlight button when focused */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<button>Click Me</button>`}</Code>

        <div className="subHeader">Interactive States</div>
        <div className="description">CSS pseudo-classes provide ways to style elements in different states:</div>
        <ul className="list">
          <li>
            <b>:hover</b>: Triggered when the mouse hovers over an element.
          </li>
          <li>
            <b>:active</b>: Triggered when the element is clicked.
          </li>
          <li>
            <b>:focus</b>: Triggered when the element is focused (e.g., via keyboard navigation).
          </li>
        </ul>

        <div className="subHeader">Example: Styled Links and Buttons</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<a href="#" class="link">Styled Link</a>
<button class="btn">Styled Button</button>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`a.link {
  color: navy;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}
a.link:hover {
  color: orange;
}

button.btn {
  background-color: teal;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
button.btn:hover {
  background-color: darkcyan;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use <b>hover</b> effects to provide visual feedback to users.
          </li>
          <li>
            Ensure <b>focus</b> styles are prominent for better accessibility.
          </li>
          <li>
            Use <b>transition</b> effects for smooth state changes.
          </li>
          <li>Avoid removing focus outlines unless replaced with a visually distinct alternative.</li>
        </ul>

        <Bottom back="/css/css-units" next="/css/lists-styling" />
      </div>
    </div>
  );
};

export default CSSLinksAndButtons;
