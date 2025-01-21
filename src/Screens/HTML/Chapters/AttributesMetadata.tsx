import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLAttributesMetadata = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Attributes and Metadata</div>
        <div className="description">
          Attributes in HTML provide additional information about elements, while metadata offers information about the webpage itself. Understanding attributes and metadata is
          essential for building structured and functional webpages.
        </div>

        <div className="subHeader">HTML Attributes</div>
        <div className="description">
          Attributes are key-value pairs that provide extra information about an element. They are always written inside the opening tag. Common attributes include:
        </div>
        <ul className="list">
          <li>
            <b>id:</b> Provides a unique identifier for an element, used for styling or JavaScript interactions.
          </li>
          <li>
            <b>class:</b> Assigns a class name to an element, enabling group styling or JavaScript manipulation.
          </li>
          <li>
            <b>title:</b> Adds a tooltip that appears when hovering over the element.
          </li>
          <li>
            <b>style:</b> Allows inline CSS styling for an element.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<p id="intro" class="highlight" title="This is a tooltip">Hello, World!</p>`}</Code>

        <div className="subHeader">Global Attributes</div>
        <div className="description">Some attributes can be applied to almost any HTML element, such as:</div>
        <ul className="list">
          <li>
            <b>id:</b> Identifies a unique element.
          </li>
          <li>
            <b>class:</b> Groups multiple elements under a shared name.
          </li>
          <li>
            <b>data-*</b>: Custom attributes for storing additional data.
          </li>
          <li>
            <b>hidden:</b> Hides the element from view.
          </li>
          <li>
            <b>tabindex:</b> Specifies the tab order of an element.
          </li>
        </ul>

        <div className="subHeader">Metadata in HTML</div>
        <div className="description">
          Metadata provides information about the webpage and is placed within the <b>&lt;head&gt;</b> element. Common metadata elements include:
        </div>
        <ul className="list">
          <li>
            <b>&lt;meta&gt;:</b> Defines metadata such as character encoding, viewport settings, or keywords for SEO.
          </li>
          <li>
            <b>&lt;title&gt;:</b> Specifies the title of the webpage, displayed on the browser tab.
          </li>
          <li>
            <b>&lt;link&gt;:</b> Links external resources, such as stylesheets or icons.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<head>
  <title>My Webpage</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn about HTML attributes and metadata.">
  <link rel="stylesheet" href="styles.css">
</head>`}</Code>

        <div className="subHeader">
          Using <b>id</b> and <b>class</b>
        </div>
        <div className="description">
          The <b>id</b> attribute is used to uniquely identify an element, while the <b>class</b> attribute groups elements together for styling or scripting:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div id="main-content" class="content">
  <p class="highlight">This paragraph is highlighted.</p>
  <p>This paragraph is normal.</p>
</div>`}</Code>

        <div className="subHeader">Custom Data Attributes</div>
        <div className="description">
          HTML5 introduced <b>data-*</b> attributes, which allow embedding custom data into elements. These attributes can be accessed via JavaScript:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div id="user" data-user-id="12345" data-role="admin">User Info</div>`}</Code>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Accessing data attributes in JavaScript
const user = document.getElementById("user");
console.log(user.dataset.userId); // Output: 12345
console.log(user.dataset.role); // Output: admin`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use meaningful <b>id</b> and <b>class</b> names for easier maintenance.
          </li>
          <li>Minimize inline styles (use CSS files instead).</li>
          <li>Use metadata to optimize your webpage for SEO and accessibility.</li>
          <li>
            Avoid using <b>id</b> for multiple elements (it must be unique).
          </li>
        </ul>

        <Bottom back="/html/semantic-elements" next="/html/html5-elements" />
      </div>
    </div>
  );
};

export default HTMLAttributesMetadata;
