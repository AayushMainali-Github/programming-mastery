import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLBasicStructure = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Basic Document Structure</div>
        <div className="description">
          Every HTML document follows a specific structure that defines how content is organized on the web. This chapter explains the key elements of an HTML document:{" "}
          <b>&lt;html&gt;</b>, <b>&lt;head&gt;</b>, and <b>&lt;body&gt;</b>.
        </div>

        <div className="subHeader">Structure of an HTML Document</div>
        <div className="description">Below is the basic structure of a simple HTML document:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This is the content of the webpage.</p>
  </body>
</html>`}</Code>

        <div className="subHeader">Key Elements Explained</div>
        <ul className="list">
          <li>
            <b>&lt;!DOCTYPE html&gt;</b>: Declares the document as an HTML5 document. It ensures the webpage is rendered correctly in modern browsers.
          </li>
          <li>
            <b>&lt;html&gt;</b>: The root element that contains all other elements of the HTML document.
          </li>
          <li>
            <b>&lt;head&gt;</b>: Contains metadata about the document, such as the title, character set, and links to external resources.
          </li>
          <li>
            <b>&lt;body&gt;</b>: Contains the main content of the webpage that is visible to users.
          </li>
        </ul>

        <div className="subHeader">
          Metadata in the <b>&lt;head&gt;</b> Section
        </div>
        <div className="description">
          The <b>&lt;head&gt;</b> section includes metadata and other elements that do not appear directly on the webpage. Here are some common tags used in the <b>&lt;head&gt;</b>
          :
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<head>
  <title>Page Title</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`}</Code>
        <ul className="list">
          <li>
            <b>&lt;title&gt;</b>: Specifies the title of the webpage, displayed on the browser tab.
          </li>
          <li>
            <b>&lt;meta&gt;</b>: Defines metadata such as character encoding and viewport settings for responsive design.
          </li>
        </ul>

        <div className="subHeader">
          Content in the <b>&lt;body&gt;</b> Section
        </div>
        <div className="description">
          The <b>&lt;body&gt;</b> section contains the visible content of the webpage, such as headings, paragraphs, images, and links. Example:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<body>
  <h1>Welcome to My Page</h1>
  <p>This is a sample paragraph.</p>
</body>`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Always include <b>&lt;!DOCTYPE html&gt;</b> to ensure proper rendering of the webpage.
          </li>
          <li>Organize your code with proper indentation for better readability.</li>
          <li>Use semantic tags wherever possible to improve accessibility and SEO.</li>
        </ul>

        <Bottom back="/html/introduction-to-html" next="/html/headings-and-paragraphs" />
      </div>
    </div>
  );
};

export default HTMLBasicStructure;
