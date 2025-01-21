import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLIntroduction = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Introduction to HTML</div>
        <div className="description">
          HTML, or <b>HyperText Markup Language</b>, is the standard language for creating webpages. It forms the backbone of the web by defining the structure and content of
          webpages.
        </div>

        <div className="subHeader">What is HTML?</div>
        <div className="description">
          HTML is a <b>markup language</b> used to structure and present content on the web. It uses <b>tags</b> to organize elements such as text, images, links, and other media.
        </div>

        <div className="subHeader">History of HTML</div>
        <div className="description">
          HTML was created by <b>Tim Berners-Lee</b> in 1991. Since its inception, HTML has undergone significant evolution:
        </div>
        <ul className="list">
          <li>
            <b>1993</b>: HTML 1.0 - The first official release, with limited features.
          </li>
          <li>
            <b>1997</b>: HTML 4.0 - Introduced multimedia support and styling elements.
          </li>
          <li>
            <b>2014</b>: HTML5 - The current version, offering enhanced multimedia, APIs, and semantic elements.
          </li>
        </ul>

        <div className="subHeader">Basic Syntax of HTML</div>
        <div className="description">
          HTML documents are structured using elements enclosed in angle brackets <b>&lt;&gt;</b>. Most elements have an opening tag and a closing tag:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<tagname>Content goes here</tagname>`}</Code>
        <div className="description">
          The opening tag defines the start of the element, and the closing tag, prefixed with a <b>/</b>, marks its end.
        </div>

        <div className="subHeader">Example of a Simple HTML Document</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This is a simple HTML document.</p>
  </body>
</html>`}</Code>

        <div className="subHeader">Explanation of the Code</div>
        <ul className="list">
          <li>
            <b>&lt;!DOCTYPE html&gt;</b>: Declares the document as HTML5.
          </li>
          <li>
            <b>&lt;html&gt;</b>: The root element containing all other elements.
          </li>
          <li>
            <b>&lt;head&gt;</b>: Holds metadata, such as the title and links to external resources.
          </li>
          <li>
            <b>&lt;body&gt;</b>: Contains the visible content of the webpage.
          </li>
        </ul>

        <div className="subHeader">Why Learn HTML?</div>
        <div className="description">HTML is the foundation of web development. Learning HTML is essential because:</div>
        <ul className="list">
          <li>It structures content on the web.</li>
          <li>It enables integration with CSS for styling and JavaScript for interactivity.</li>
          <li>It forms the basis for web design and development.</li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Always declare <b>&lt;!DOCTYPE html&gt;</b> to ensure compatibility with modern browsers.
          </li>
          <li>Use semantic tags for better accessibility and SEO.</li>
          <li>Organize your code with proper indentation for readability.</li>
        </ul>

        <Bottom back="/html" next="/html/basic-document-structure" />
      </div>
    </div>
  );
};

export default HTMLIntroduction;
