import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLGlobalAttributes = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Global Attributes</div>
        <div className="description">
          Global attributes in HTML are universal attributes that can be applied to almost any HTML element. These attributes provide additional functionality and control over the
          behavior and appearance of elements.
        </div>

        <div className="subHeader">Common Global Attributes</div>
        <div className="description">Below are some commonly used global attributes and their purposes:</div>
        <ul className="list">
          <li>
            <b>contenteditable:</b> Makes an element editable by the user.
          </li>
          <li>
            <b>draggable:</b> Specifies whether an element can be dragged.
          </li>
          <li>
            <b>hidden:</b> Hides the element from view.
          </li>
          <li>
            <b>tabindex:</b> Controls the tab order of elements for keyboard navigation.
          </li>
          <li>
            <b>title:</b> Provides a tooltip when the user hovers over the element.
          </li>
        </ul>

        <div className="subHeader">
          Using <b>contenteditable</b>
        </div>
        <div className="description">
          The <b>contenteditable</b> attribute allows users to edit the text within an element:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div contenteditable="true">
  You can edit this text directly in the browser!
</div>`}</Code>

        <div className="subHeader">
          Using <b>draggable</b>
        </div>
        <div className="description">
          The <b>draggable</b> attribute allows elements to be dragged using the mouse:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<img src="image.jpg" alt="Draggable Image" draggable="true">`}</Code>

        <div className="subHeader">
          Using <b>hidden</b>
        </div>
        <div className="description">
          The <b>hidden</b> attribute hides an element from the page but keeps it in the DOM:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<p hidden>This paragraph is hidden but still part of the DOM.</p>`}</Code>

        <div className="subHeader">
          Using <b>tabindex</b>
        </div>
        <div className="description">
          The <b>tabindex</b> attribute specifies the tab order of elements for keyboard navigation. A positive value sets a custom order, 0 includes the element in the default
          order, and -1 removes the element from the tab order.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<button tabindex="2">Button 1</button>
<button tabindex="1">Button 2</button>
<button tabindex="3">Button 3</button>`}</Code>
        <div className="description">
          In the above example, <b>Button 2</b> will be focused first, followed by <b>Button 1</b> and then <b>Button 3</b>.
        </div>

        <div className="subHeader">
          Using <b>title</b>
        </div>
        <div className="description">
          The <b>title</b> attribute adds a tooltip to an element:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<p title="This is a tooltip!">Hover over this text to see the tooltip.</p>`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use <b>contenteditable</b> sparingly and validate user input to prevent security issues.
          </li>
          <li>
            Avoid overusing <b>hidden</b> for managing visibility; consider CSS alternatives like <b>display: none;</b>.
          </li>
          <li>
            Use <b>tabindex</b> judiciously to improve accessibility for keyboard users.
          </li>
          <li>
            Always include meaningful text in <b>title</b> attributes for better user experience and accessibility.
          </li>
        </ul>

        <Bottom back="/html/iframe-embedding" next="/html/html-entities" />
      </div>
    </div>
  );
};

export default HTMLGlobalAttributes;
