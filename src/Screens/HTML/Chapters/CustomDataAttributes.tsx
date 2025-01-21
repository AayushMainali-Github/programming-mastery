import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLCustomDataAttributes = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Custom Data Attributes</div>
        <div className="description">
          Custom data attributes allow you to embed custom metadata into HTML elements. These attributes start with <b>data-</b> and are useful for storing extra information that
          can be accessed via JavaScript.
        </div>

        <div className="subHeader">Syntax for Custom Data Attributes</div>
        <div className="description">
          Custom data attributes are added to an element using the <b>data-</b> prefix followed by a custom name. For example:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div data-user-id="123" data-role="admin">
  Welcome, Admin!
</div>`}</Code>

        <div className="subHeader">Accessing Custom Data Attributes in JavaScript</div>
        <div className="description">
          You can access the custom data attributes of an element using the <b>dataset</b> property in JavaScript:
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Select the element
const userDiv = document.querySelector('div');

// Access custom data attributes
const userId = userDiv.dataset.userId; // "123"
const role = userDiv.dataset.role; // "admin"

console.log(userId, role);`}</Code>

        <div className="subHeader">Modifying Data Attributes in JavaScript</div>
        <div className="description">You can also modify custom data attributes dynamically using JavaScript:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Modify data attributes
userDiv.dataset.role = 'editor';
console.log(userDiv.dataset.role); // "editor"

// Add a new data attribute
userDiv.dataset.newAttribute = 'newValue';
console.log(userDiv.dataset.newAttribute); // "newValue"`}</Code>

        <div className="subHeader">Use Cases for Custom Data Attributes</div>
        <ul className="list">
          <li>
            <b>Storing metadata:</b> Embed additional data into HTML elements for use in scripts.
          </li>
          <li>
            <b>Dynamic behavior:</b> Enable or modify functionality based on attribute values.
          </li>
          <li>
            <b>Lightweight configuration:</b> Pass simple configuration settings without relying on external files.
          </li>
        </ul>

        <div className="subHeader">Example: Data-Driven Button Actions</div>
        <div className="description">Here’s an example where buttons have custom data attributes to perform different actions:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<button data-action="save">Save</button>
<button data-action="delete">Delete</button>`}</Code>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Add event listeners to buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    console.log(\`Button action: \${action}\`);
    // Perform action based on data-action value
    if (action === 'save') {
      console.log('Saving...');
    } else if (action === 'delete') {
      console.log('Deleting...');
    }
  });
});`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use meaningful names for custom attributes to make them easy to understand.</li>
          <li>Avoid using custom data attributes for storing sensitive data.</li>
          <li>Keep data attributes lightweight to ensure fast rendering and performance.</li>
          <li>Prefer custom data attributes over embedding inline JavaScript for dynamic behavior.</li>
        </ul>

        <Bottom back="/html/anchor-targets" next="/html/best-practices" />
      </div>
    </div>
  );
};

export default HTMLCustomDataAttributes;
