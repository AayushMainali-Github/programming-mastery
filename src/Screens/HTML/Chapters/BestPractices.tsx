import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLBestPractices = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Best Practices</div>
        <div className="description">
          Writing clean, semantic, and accessible HTML is crucial for creating maintainable, readable, and user-friendly web pages. This chapter highlights key best practices to
          follow when working with HTML.
        </div>

        <div className="subHeader">1. Use Semantic HTML</div>
        <div className="description">Semantic HTML improves readability, accessibility, and search engine optimization. Use elements according to their intended purposes:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!-- Correct -->
<header>Website Header</header>
<main>Main Content Area</main>
<footer>Footer Information</footer>

<!-- Incorrect -->
<div class="header">Website Header</div>
<div class="main">Main Content Area</div>
<div class="footer">Footer Information</div>`}</Code>

        <div className="subHeader">2. Use Meaningful and Unique IDs and Classes</div>
        <div className="description">
          Avoid generic names like <b>div1</b> or <b>class1</b>. Instead, use descriptive and unique identifiers:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div id="user-profile" class="profile-card">
  <h2>User Name</h2>
  <p>Profile description...</p>
</div>`}</Code>

        <div className="subHeader">3. Ensure Accessibility</div>
        <div className="description">Accessibility ensures your content is usable for people with disabilities. Follow these practices:</div>
        <ul className="list">
          <li>
            Use <b>alt</b> attributes for images.
          </li>
          <li>
            Provide labels for form inputs using <b>&lt;label&gt;</b>.
          </li>
          <li>
            Ensure keyboard navigability using proper <b>tabindex</b> values.
          </li>
          <li>Test with screen readers to verify accessibility.</li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<img src="image.jpg" alt="Descriptive text about the image">
<label for="email">Email Address:</label>
<input type="email" id="email" name="email">`}</Code>

        <div className="subHeader">4. Avoid Inline Styles and Scripts</div>
        <div className="description">Separate structure (HTML), presentation (CSS), and behavior (JavaScript) to improve maintainability:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!-- Avoid -->
<div style="color: red;">This is a warning.</div>

<!-- Preferred -->
<div class="warning">This is a warning.</div>

<!-- CSS -->
<style>
  .warning {
    color: red;
  }
</style>`}</Code>

        <div className="subHeader">5. Use Comments to Explain Complex Code</div>
        <div className="description">Comments make your code easier to understand for yourself and others:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!-- This section contains the user profile information -->
<section id="profile">
  <h2>User Profile</h2>
  <p>Details about the user...</p>
</section>`}</Code>

        <div className="subHeader">6. Keep Your Code Organized</div>
        <div className="description">Indent nested elements consistently and use line breaks to improve readability:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`}</Code>

        <div className="subHeader">7. Validate Your HTML</div>
        <div className="description">
          Use tools like the{" "}
          <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer">
            W3C Validator
          </a>{" "}
          to check for syntax errors and ensure your HTML meets web standards.
        </div>

        <div className="subHeader">8. Optimize for Performance</div>
        <ul className="list">
          <li>Minimize the use of unnecessary HTML elements.</li>
          <li>Use external resources (e.g., stylesheets, scripts) efficiently.</li>
          <li>Lazy load images and multimedia for faster page load times.</li>
        </ul>

        <div className="subHeader">9. Test Across Browsers and Devices</div>
        <div className="description">Ensure your webpage looks and behaves correctly on different browsers and screen sizes.</div>

        <div className="subHeader">10. Keep Accessibility in Mind</div>
        <ul className="list">
          <li>Test your page with screen readers.</li>
          <li>Check color contrast ratios.</li>
          <li>Ensure all interactive elements are keyboard accessible.</li>
        </ul>

        <Bottom back="/html/custom-data-attributes" next="/html/html-file-organization" />
      </div>
    </div>
  );
};

export default HTMLBestPractices;
