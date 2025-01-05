import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLHeadingsParagraphs = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Headings and Paragraphs</div>
        <div className="description">
          Headings and paragraphs are fundamental elements for structuring and organizing content in HTML. Headings range from <b>&lt;h1&gt;</b> to <b>&lt;h6&gt;</b>, while
          paragraphs are created using the <b>&lt;p&gt;</b> tag.
        </div>

        <div className="subHeader">Headings in HTML</div>
        <div className="description">
          HTML provides six levels of headings, from <b>&lt;h1&gt;</b> (the largest and most important) to <b>&lt;h6&gt;</b> (the smallest). These are used to define the hierarchy
          of content on a webpage.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>
<h4>Subsection Heading</h4>
<h5>Small Heading</h5>
<h6>Smallest Heading</h6>`}</Code>
        <div className="description">
          <b>Note:</b> Use headings logically to create a clear structure for your content. Avoid skipping levels (e.g., using <b>&lt;h3&gt;</b> before <b>&lt;h2&gt;</b>).
        </div>

        <div className="subHeader">Paragraphs in HTML</div>
        <div className="description">
          Paragraphs are created using the <b>&lt;p&gt;</b> tag and are used to organize text into readable blocks.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<p>This is a paragraph. It contains some text about a topic.</p>
<p>This is another paragraph. Paragraphs help separate content for better readability.</p>`}</Code>

        <div className="subHeader">Combining Headings and Paragraphs</div>
        <div className="description">Headings and paragraphs are often used together to create well-structured content. Here’s an example:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<h1>Welcome to My Blog</h1>
<p>This blog contains articles about web development, technology, and more.</p>

<h2>Introduction to HTML</h2>
<p>HTML is the backbone of web development. It helps structure the content on webpages.</p>

<h3>Why Learn HTML?</h3>
<p>Learning HTML is essential for creating websites and understanding the basics of web development.</p>`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use <b>&lt;h1&gt;</b> only once per page for the main title or heading.
          </li>
          <li>
            Use appropriate heading levels (<b>&lt;h2&gt;</b>, <b>&lt;h3&gt;</b>, etc.) to create a logical content hierarchy.
          </li>
          <li>Keep paragraphs concise and focused to improve readability.</li>
        </ul>

        <Bottom back="/html/basicstructure" next="/html/lists" />
      </div>
    </div>
  );
};

export default HTMLHeadingsParagraphs;
