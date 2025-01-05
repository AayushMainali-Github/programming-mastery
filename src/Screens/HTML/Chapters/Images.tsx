import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLImages = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Images</div>
        <div className="description">
          Images are an essential part of web content, enhancing visual appeal and communication. In HTML, the <b>&lt;img&gt;</b> tag is used to embed images into a webpage.
        </div>

        <div className="subHeader">
          Basic Syntax of the <b>&lt;img&gt;</b> Tag
        </div>
        <div className="description">
          The <b>&lt;img&gt;</b> tag is a self-closing tag that requires at least the <b>src</b> attribute to specify the image source and the <b>alt</b> attribute for alternative
          text.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<img src="image.jpg" alt="Description of the image">`}</Code>

        <div className="subHeader">
          Attributes of the <b>&lt;img&gt;</b> Tag
        </div>
        <ul className="list">
          <li>
            <b>src</b>: Specifies the path to the image file (absolute or relative).
          </li>
          <li>
            <b>alt</b>: Provides alternative text for the image, which is displayed if the image cannot be loaded or read by screen readers for accessibility.
          </li>
          <li>
            <b>width</b> and <b>height</b>: Define the dimensions of the image in pixels or percentages.
          </li>
          <li>
            <b>title</b>: Adds a tooltip that appears when the user hovers over the image.
          </li>
        </ul>

        <div className="subHeader">Example: Embedding an Image</div>
        <Code
          language="html"
          style={materialDark}
          showLineNumbers
        >{`<img src="https://via.placeholder.com/150" alt="Placeholder Image" width="150" height="150" title="Hover text">`}</Code>
        <div className="description">
          <b>Output:</b> Displays an image with the specified dimensions and a tooltip when hovered over.
        </div>

        <div className="subHeader">Relative and Absolute Paths</div>
        <ul className="list">
          <li>
            <b>Relative Path:</b> Specifies the location of the image relative to the HTML file:
            <Code language="html" style={materialDark}>{`<img src="images/photo.jpg" alt="Photo">`}</Code>
          </li>
          <li>
            <b>Absolute Path:</b> Specifies the complete URL of the image:
            <Code language="html" style={materialDark}>{`<img src="https://www.example.com/images/photo.jpg" alt="Photo">`}</Code>
          </li>
        </ul>

        <div className="subHeader">Adding Images as Links</div>
        <div className="description">
          Images can also be used as clickable links by wrapping the <b>&lt;img&gt;</b> tag inside an <b>&lt;a&gt;</b> tag:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<a href="https://www.example.com">
  <img src="logo.png" alt="Company Logo">
</a>`}</Code>
        <div className="description">
          <b>Output:</b> Clicking the image navigates to <b>https://www.example.com</b>.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Always include the <b>alt</b> attribute to improve accessibility and SEO.
          </li>
          <li>
            Use optimized image formats (e.g., <b>.jpg</b>, <b>.png</b>, <b>.webp</b>) to reduce loading times.
          </li>
          <li>Specify dimensions (width and height) to avoid layout shifts during page load.</li>
          <li>Use meaningful file names and paths for easier maintenance.</li>
        </ul>

        <Bottom back="/html/linksanchors" next="/html/tables" />
      </div>
    </div>
  );
};

export default HTMLImages;
