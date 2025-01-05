import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLIframeEmbedding = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Iframe Embedding</div>
        <div className="description">
          The <b>&lt;iframe&gt;</b> tag in HTML is used to embed external content such as other web pages, videos, or maps within a webpage. It acts as a container for the embedded
          content, allowing seamless integration.
        </div>

        <div className="subHeader">Basic Syntax</div>
        <div className="description">
          The <b>&lt;iframe&gt;</b> tag requires a <b>src</b> attribute to specify the URL of the content to embed:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<iframe src="https://www.example.com" width="600" height="400"></iframe>`}</Code>
        <div className="description">
          This embeds the webpage from <b>https://www.example.com</b> with a width of 600 pixels and height of 400 pixels.
          <b>Attributes:</b>
          <ul className="list">
            <li>
              <b>src:</b> Specifies the URL of the embedded content.
            </li>
            <li>
              <b>width:</b> Defines the width of the iframe in pixels or percentage.
            </li>
            <li>
              <b>height:</b> Defines the height of the iframe in pixels or percentage.
            </li>
            <li>
              <b>title:</b> Provides a title for accessibility and SEO purposes.
            </li>
          </ul>
        </div>

        <div className="subHeader">Adding a Border</div>
        <div className="description">To add a border around the iframe, you can use inline styles or external CSS:</div>
        <Code
          language="html"
          style={materialDark}
          showLineNumbers
        >{`<iframe src="https://www.example.com" width="600" height="400" style="border: 2px solid black;"></iframe>`}</Code>

        <div className="subHeader">Embedding YouTube Videos</div>
        <div className="description">
          You can embed YouTube videos using <b>&lt;iframe&gt;</b> with the video URL. For example:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>`}</Code>
        <div className="description">This embeds a YouTube video with playback controls and fullscreen support.</div>

        <div className="subHeader">Restricting Interaction</div>
        <div className="description">
          Use the <b>sandbox</b> attribute to restrict actions within the iframe. This enhances security by limiting the capabilities of the embedded content:
        </div>
        <Code
          language="html"
          style={materialDark}
          showLineNumbers
        >{`<iframe src="https://www.example.com" width="600" height="400" sandbox="allow-scripts allow-same-origin"></iframe>`}</Code>
        <div className="description">
          <b>Explanation:</b>
          <ul className="list">
            <li>
              <b>allow-scripts:</b> Allows JavaScript execution inside the iframe.
            </li>
            <li>
              <b>allow-same-origin:</b> Permits same-origin requests within the iframe.
            </li>
            <li>
              <b>allow-popups:</b> Enables popup windows from the iframe.
            </li>
          </ul>
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Always use the <b>title</b> attribute for better accessibility.
          </li>
          <li>
            Restrict iframe functionality with the <b>sandbox</b> attribute to prevent malicious activities.
          </li>
          <li>
            Set <b>allowfullscreen</b> for media content to enhance the user experience.
          </li>
          <li>Use responsive designs to ensure iframe content fits across different devices.</li>
        </ul>

        <Bottom back="/html/datatable" next="/html/formsadvanced" />
      </div>
    </div>
  );
};

export default HTMLIframeEmbedding;
