import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLARIAAttributes = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">ARIA Attributes</div>
        <div className="description">
          ARIA (Accessible Rich Internet Applications) attributes enhance the accessibility of web content for users who rely on assistive technologies, such as screen readers.
          These attributes provide additional context and help make interactive elements more usable.
        </div>

        <div className="subHeader">What Are ARIA Attributes?</div>
        <div className="description">
          ARIA attributes are special attributes that improve the accessibility of HTML elements. They are particularly useful for dynamic or custom components like modals,
          sliders, or tooltips that may not be natively supported by assistive technologies.
        </div>

        <div className="subHeader">Common ARIA Attributes</div>
        <ul className="list">
          <li>
            <b>aria-label:</b> Provides a label for an element, often used for buttons or links without visible text.
          </li>
          <li>
            <b>aria-labelledby:</b> Refers to the ID of another element that labels the current element.
          </li>
          <li>
            <b>aria-hidden:</b> Hides an element from screen readers.
          </li>
          <li>
            <b>aria-expanded:</b> Indicates whether a collapsible element is expanded or collapsed.
          </li>
          <li>
            <b>aria-live:</b> Specifies how screen readers should announce dynamic content changes.
          </li>
        </ul>

        <div className="subHeader">
          Using <b>aria-label</b> for Accessibility
        </div>
        <div className="description">
          The <b>aria-label</b> attribute provides a descriptive label for an element. It’s useful when the element lacks visible text.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<button aria-label="Close">X</button>`}</Code>

        <div className="subHeader">
          Using <b>aria-labelledby</b>
        </div>
        <div className="description">
          The <b>aria-labelledby</b> attribute links an element to another element that acts as its label:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<h1 id="title">Welcome</h1>
<p aria-labelledby="title">This paragraph is labeled by the heading above.</p>`}</Code>

        <div className="subHeader">
          Using <b>aria-hidden</b>
        </div>
        <div className="description">
          The <b>aria-hidden</b> attribute hides an element from screen readers without affecting its visibility on the page:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div aria-hidden="true">
  This content is hidden from screen readers.
</div>`}</Code>

        <div className="subHeader">
          Using <b>aria-expanded</b>
        </div>
        <div className="description">
          The <b>aria-expanded</b> attribute indicates the state of collapsible elements:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<button aria-expanded="false">Toggle Menu</button>
<div id="menu" hidden>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</div>`}</Code>

        <div className="subHeader">
          Using <b>aria-live</b> for Dynamic Content
        </div>
        <div className="description">
          The <b>aria-live</b> attribute specifies how screen readers should handle updates to dynamic content. Common values include:
        </div>
        <ul className="list">
          <li>
            <b>off:</b> Updates are not announced.
          </li>
          <li>
            <b>polite:</b> Updates are announced after the user completes their current action.
          </li>
          <li>
            <b>assertive:</b> Updates are announced immediately.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<div aria-live="polite">
  Dynamic content will be announced politely.
</div>`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use ARIA attributes only when native HTML elements cannot achieve the desired accessibility.</li>
          <li>Ensure ARIA attributes are used correctly; improper use can confuse assistive technologies.</li>
          <li>Test your webpage with screen readers to verify the effectiveness of ARIA attributes.</li>
        </ul>

        <Bottom back="/html/entities" next="/html/formsadvanced" />
      </div>
    </div>
  );
};

export default HTMLARIAAttributes;
