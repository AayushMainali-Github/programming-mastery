import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTML5Elements = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">HTML5 Elements</div>
        <div className="description">
          HTML5 introduced new semantic elements that enhance the structure and clarity of a webpage. These elements make it easier to write meaningful and accessible HTML,
          improving SEO and user experience.
        </div>

        <div className="subHeader">HTML5-Specific Elements</div>
        <div className="description">Below are some key HTML5 elements with their purposes:</div>
        <ul className="list">
          <li>
            <b>&lt;main&gt;</b>: Represents the main content of the document. It should only be used once per page and excludes headers, footers, and sidebars.
          </li>
          <li>
            <b>&lt;nav&gt;</b>: Defines a section for navigation links, such as a menu or table of contents.
          </li>
          <li>
            <b>&lt;figure&gt;</b>: Represents self-contained content, such as an image, illustration, or diagram.
          </li>
          <li>
            <b>&lt;figcaption&gt;</b>: Provides a caption or description for content inside a <b>&lt;figure&gt;</b>.
          </li>
        </ul>

        <div className="subHeader">
          Using the <b>&lt;main&gt;</b> Element
        </div>
        <div className="description">
          The <b>&lt;main&gt;</b> element encapsulates the primary content of the webpage:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<main>
  <h1>Welcome to My Blog</h1>
  <p>This blog is about web development and programming.</p>
</main>`}</Code>

        <div className="subHeader">
          Creating Navigation with <b>&lt;nav&gt;</b>
        </div>
        <div className="description">
          The <b>&lt;nav&gt;</b> element is used to group navigation links:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>`}</Code>

        <div className="subHeader">
          Using <b>&lt;figure&gt;</b> and <b>&lt;figcaption&gt;</b>
        </div>
        <div className="description">
          The <b>&lt;figure&gt;</b> element groups related media (e.g., images) along with their caption using the <b>&lt;figcaption&gt;</b> element:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<figure>
  <img src="image.jpg" alt="A beautiful scenery">
  <figcaption>A breathtaking view of the mountains.</figcaption>
</figure>`}</Code>

        <div className="subHeader">Combining HTML5 Elements</div>
        <div className="description">HTML5 elements can be combined to create a structured layout:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!DOCTYPE html>
<html>
  <body>
    <header>
      <h1>My Website</h1>
    </header>
    
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <main>
      <section>
        <h2>About Us</h2>
        <p>We provide web development services.</p>
      </section>
      
      <figure>
        <img src="team.jpg" alt="Our team">
        <figcaption>Our amazing team at work.</figcaption>
      </figure>
    </main>

    <footer>
      <p>&copy; 2025 My Website</p>
    </footer>
  </body>
</html>`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use <b>&lt;main&gt;</b> for the main content and ensure it appears only once per page.
          </li>
          <li>
            Group navigation links in a <b>&lt;nav&gt;</b> element to improve accessibility.
          </li>
          <li>
            Use <b>&lt;figure&gt;</b> and <b>&lt;figcaption&gt;</b> to associate media with descriptive captions.
          </li>
          <li>Combine HTML5 elements to create a clear and meaningful document structure.</li>
        </ul>

        <Bottom back="/html/attributes-and-metadata" next="/html/media-elements" />
      </div>
    </div>
  );
};

export default HTML5Elements;
