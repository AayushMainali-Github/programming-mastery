import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLSemanticElements = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Semantic Elements</div>
        <div className="description">
          Semantic elements in HTML provide meaningful structure to a webpage by clearly defining the role of different sections. These elements improve accessibility and make
          webpages easier to understand for developers and search engines.
        </div>

        <div className="subHeader">What are Semantic Elements?</div>
        <div className="description">
          Semantic elements are tags that clearly describe their content. Examples include <b>&lt;header&gt;</b>, <b>&lt;footer&gt;</b>, <b>&lt;article&gt;</b>,{" "}
          <b>&lt;section&gt;</b>, and <b>&lt;aside&gt;</b>. In contrast, non-semantic elements like <b>&lt;div&gt;</b> and <b>&lt;span&gt;</b> do not convey any meaning.
        </div>

        <div className="subHeader">Common Semantic Elements</div>

        <div className="description">Below are some commonly used semantic elements with their purposes:</div>

        <ul className="list">
          <li>
            <b>&lt;header&gt;</b>: Defines the header of a webpage or a section. It often contains the title, logo, or navigation links.
          </li>
          <li>
            <b>&lt;footer&gt;</b>: Defines the footer of a webpage or a section. It often contains copyright information, links, or contact details.
          </li>
          <li>
            <b>&lt;article&gt;</b>: Represents a self-contained piece of content, such as a blog post or news article.
          </li>
          <li>
            <b>&lt;section&gt;</b>: Defines a thematic grouping of content, often with a heading.
          </li>
          <li>
            <b>&lt;aside&gt;</b>: Represents content that is tangentially related to the main content, such as a sidebar or an advertisement.
          </li>
        </ul>

        <div className="subHeader">Example: Semantic Elements</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!DOCTYPE html>
<html>
  <body>
    <header>
      <h1>My Blog</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
    
    <section>
      <h2>Welcome</h2>
      <p>This is the main content of the webpage.</p>
    </section>

    <aside>
      <h3>Related Links</h3>
      <ul>
        <li><a href="#link1">Link 1</a></li>
        <li><a href="#link2">Link 2</a></li>
      </ul>
    </aside>

    <article>
      <h2>Blog Post Title</h2>
      <p>This is a blog post with meaningful content.</p>
    </article>

    <footer>
      <p>&copy; 2025 My Website</p>
    </footer>
  </body>
</html>`}</Code>

        <div className="subHeader">Benefits of Semantic Elements</div>
        <ul className="list">
          <li>
            <b>Improved Accessibility:</b> Screen readers and assistive technologies can better interpret semantic elements, improving the experience for users with disabilities.
          </li>
          <li>
            <b>SEO Optimization:</b> Search engines use semantic tags to understand webpage content, improving search rankings.
          </li>
          <li>
            <b>Code Clarity:</b> Semantic elements make the structure of a webpage easier to read and maintain.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use semantic elements wherever applicable instead of <b>&lt;div&gt;</b> or <b>&lt;span&gt;</b>.
          </li>
          <li>Ensure proper nesting and avoid overuse of semantic elements for non-related purposes.</li>
          <li>Combine semantic tags with appropriate CSS classes for better styling and structure.</li>
        </ul>

        <Bottom back="/html/forms" next="/html/iframes" />
      </div>
    </div>
  );
};

export default HTMLSemanticElements;
