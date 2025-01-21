import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLAnchorTargets = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Anchor Targets</div>
        <div className="description">
          The <b>&lt;a&gt;</b> (anchor) tag is used to create hyperlinks. The <b>target</b> attribute specifies how and where to display the linked URL. Additionally, anchors can
          link to specific sections of a page for improved navigation.
        </div>

        <div className="subHeader">
          Using the <b>target</b> Attribute
        </div>
        <div className="description">
          The <b>target</b> attribute determines where the hyperlink will open. Common values include:
        </div>
        <ul className="list">
          <li>
            <b>_self:</b> Default. Opens the link in the same tab or window.
          </li>
          <li>
            <b>_blank:</b> Opens the link in a new tab or window.
          </li>
          <li>
            <b>_parent:</b> Opens the link in the parent frame, if the page is inside an iframe.
          </li>
          <li>
            <b>_top:</b> Opens the link in the full body of the window, breaking out of any frames.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<!-- Opens link in the same tab -->
<a href="https://www.example.com" target="_self">Visit Example</a>

<!-- Opens link in a new tab -->
<a href="https://www.example.com" target="_blank">Visit Example</a>`}</Code>

        <div className="subHeader">Linking to Specific Sections</div>
        <div className="description">
          You can use the <b>id</b> attribute to create anchor points within a page and link to them. This is useful for navigation or referencing specific content.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!-- Create an anchor point -->
<h2 id="about">About Us</h2>
<p>We are a leading company in web development.</p>

<!-- Link to the anchor point -->
<a href="#about">Go to About Us</a>`}</Code>
        <div className="description">
          When the link is clicked, the page will scroll to the element with the <b>id="about"</b>.
        </div>

        <div className="subHeader">Combining External Links and Anchor Points</div>
        <div className="description">You can also combine URLs with anchor points to navigate to specific sections on another page:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<a href="https://www.example.com#contact">Visit Contact Section</a>`}</Code>

        <div className="subHeader">
          Best Practices for <b>target="_blank"</b>
        </div>
        <div className="description">
          When using <b>target="_blank"</b>, consider adding the <b>rel="noopener noreferrer"</b> attribute to prevent security risks and improve performance:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Visit Example</a>`}</Code>
        <div className="description">
          <ul className="list">
            <li>
              <b>noopener:</b> Prevents the new page from accessing the <b>window.opener</b> property, improving security.
            </li>
            <li>
              <b>noreferrer:</b> Ensures no referrer information is passed to the target URL.
            </li>
          </ul>
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use descriptive anchor text to make links accessible and user-friendly.</li>
          <li>
            Avoid overusing <b>target="_blank"</b>, as it can disrupt user experience by opening too many tabs.
          </li>
          <li>
            Ensure anchor points (<b>id</b> attributes) are unique and descriptive.
          </li>
          <li>
            Use <b>rel="noopener noreferrer"</b> with <b>target="_blank"</b> for security and performance.
          </li>
        </ul>

        <Bottom back="/html/aria-attributes" next="/html/custom-data-attributes" />
      </div>
    </div>
  );
};

export default HTMLAnchorTargets;
