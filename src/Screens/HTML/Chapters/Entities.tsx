import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLEntities = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">HTML Entities</div>
        <div className="description">
          HTML entities are used to display reserved or special characters in HTML that might otherwise be interpreted as code. Entities ensure that characters like <b>&lt;</b>,{" "}
          <b>&gt;</b>, and <b>&amp;</b> appear correctly on the webpage.
        </div>

        <div className="subHeader">What Are HTML Entities?</div>
        <div className="description">
          An HTML entity starts with an ampersand (<b>&amp;</b>) and ends with a semicolon (<b>;</b>). It represents a reserved or special character. For example:
        </div>
        <ul className="list">
          <li>
            <b>&amp;lt;</b>: Displays the less-than symbol (<b>&lt;</b>).
          </li>
          <li>
            <b>&amp;gt;</b>: Displays the greater-than symbol (<b>&gt;</b>).
          </li>
          <li>
            <b>&amp;amp;</b>: Displays the ampersand symbol (<b>&amp;</b>).
          </li>
        </ul>

        <div className="subHeader">Commonly Used Entities</div>
        <div className="description">Here’s a list of frequently used HTML entities:</div>
        <ul className="list">
          <li>
            <b>&amp;lt;</b>: <b>&lt;</b> (less than)
          </li>
          <li>
            <b>&amp;gt;</b>: <b>&gt;</b> (greater than)
          </li>
          <li>
            <b>&amp;amp;</b>: <b>&amp;</b> (ampersand)
          </li>
          <li>
            <b>&amp;quot;</b>: <b>&quot;</b> (double quote)
          </li>
          <li>
            <b>&amp;apos;</b>: <b>&apos;</b> (single quote, not universally supported)
          </li>
          <li>
            <b>&amp;nbsp;</b>: Non-breaking space
          </li>
        </ul>

        <div className="subHeader">Displaying Reserved Characters</div>
        <div className="description">
          Reserved characters like <b>&lt;</b>, <b>&gt;</b>, and <b>&amp;</b> are part of the HTML syntax. To display these characters as text, use their corresponding entities:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<p>&lt;div&gt;This is a div element&lt;/div&gt;</p>`}</Code>
        <div className="description">The above code will render as:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div>This is a div element</div>`}</Code>

        <div className="subHeader">Non-Breaking Space (&amp;nbsp;)</div>
        <div className="description">
          The <b>&amp;nbsp;</b> entity creates a non-breaking space, which prevents text from breaking into a new line:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<p>Text&nbsp;with&nbsp;non-breaking&nbsp;spaces.</p>`}</Code>
        <div className="description">
          This will render as: <b>Text&nbsp;with&nbsp;non-breaking&nbsp;spaces.</b>
        </div>

        <div className="subHeader">Displaying Unicode Characters</div>
        <div className="description">HTML entities can also be used to display Unicode characters, such as symbols or emojis:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<p>&#169; 2025 Your Company</p> <!-- © -->
<p>&#128512; Welcome to our site!</p> <!-- 😀 -->`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use entities for reserved characters to ensure proper rendering.</li>
          <li>
            Use <b>&amp;nbsp;</b> sparingly to control spacing; prefer CSS for layout adjustments.
          </li>
          <li>For special symbols or emojis, use Unicode entities for better compatibility.</li>
        </ul>

        <Bottom back="/html/globalattributes" next="/html/formsadvanced" />
      </div>
    </div>
  );
};

export default HTMLEntities;
