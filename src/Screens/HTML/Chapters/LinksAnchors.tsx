import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLLinksAnchors = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Links and Anchors</div>
        <div className="description">
          Links are a fundamental part of the web, allowing navigation between different webpages or sections within a page. In HTML, links are created using the <b>&lt;a&gt;</b>{" "}
          (anchor) tag.
        </div>

        <div className="subHeader">Creating Basic Hyperlinks</div>
        <div className="description">
          A hyperlink is created using the <b>&lt;a&gt;</b> tag with the <b>href</b> attribute, which specifies the URL of the destination.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<a href="https://www.example.com">Visit Example</a>`}</Code>
        <div className="description">
          <b>Output:</b> The text "Visit Example" becomes a clickable link that redirects the user to <b>https://www.example.com</b>.
        </div>

        <div className="subHeader">Opening Links in a New Tab</div>
        <div className="description">
          To open a link in a new tab, use the <b>target="_blank"</b> attribute:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<a href="https://www.example.com" target="_blank">Visit Example in a New Tab</a>`}</Code>

        <div className="subHeader">Linking to Other Sections (Anchors)</div>
        <div className="description">
          You can create links to specific sections of the same page or another page using anchors. Anchors are created with an <b>id</b> attribute on the target element and an{" "}
          <b>href</b> value that matches the id.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<h1 id="section1">Section 1</h1>
<p>This is the content of Section 1.</p>

<a href="#section1">Go to Section 1</a>`}</Code>
        <div className="description">
          <b>Output:</b> Clicking "Go to Section 1" will scroll to the element with <b>id="section1"</b>.
        </div>

        <div className="subHeader">Linking to an Email Address</div>
        <div className="description">
          To create a link that opens an email client, use the <b>mailto:</b> protocol in the <b>href</b> attribute:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<a href="mailto:someone@example.com">Email Us</a>`}</Code>
        <div className="description">
          <b>Output:</b> Clicking "Email Us" will open the default email client to send a message to <b>someone@example.com</b>.
        </div>

        <div className="subHeader">Relative and Absolute Links</div>
        <ul className="list">
          <li>
            <b>Absolute Links:</b> Specify the full URL, including the protocol (e.g., <b>https://</b>):
            <Code language="html" style={materialDark}>{`<a href="https://www.example.com">Visit Example</a>`}</Code>
          </li>
          <li>
            <b>Relative Links:</b> Point to a resource relative to the current page, such as another file in the same directory:
            <Code language="html" style={materialDark}>{`<a href="about.html">About Us</a>`}</Code>
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use descriptive link text (e.g., "Learn more about HTML" instead of "Click here").</li>
          <li>Always test links to ensure they work correctly and lead to the intended destination.</li>
          <li>
            Use <b>target="_blank"</b> sparingly to avoid unexpected user experiences.
          </li>
        </ul>

        <Bottom back="/html/lists" next="/html/images" />
      </div>
    </div>
  );
};

export default HTMLLinksAnchors;
