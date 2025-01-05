import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLMediaElements = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Media Elements</div>
        <div className="description">
          Media elements in HTML allow embedding audio and video content directly into webpages. The <b>&lt;audio&gt;</b> and <b>&lt;video&gt;</b> tags provide a seamless way to
          include multimedia, with controls for playback.
        </div>

        <div className="subHeader">
          Embedding Audio with <b>&lt;audio&gt;</b>
        </div>
        <div className="description">
          The <b>&lt;audio&gt;</b> tag is used to embed audio files. It supports attributes like <b>controls</b> for playback controls, and <b>src</b> or nested{" "}
          <b>&lt;source&gt;</b> tags to specify the audio file.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>`}</Code>
        <div className="description">
          <b>Attributes:</b>
          <ul className="list">
            <li>
              <b>controls:</b> Adds play, pause, and volume controls.
            </li>
            <li>
              <b>autoplay:</b> Starts playing the audio automatically.
            </li>
            <li>
              <b>loop:</b> Plays the audio in a loop.
            </li>
            <li>
              <b>muted:</b> Starts the audio in a muted state.
            </li>
          </ul>
        </div>

        <div className="subHeader">
          Embedding Video with <b>&lt;video&gt;</b>
        </div>
        <div className="description">
          The <b>&lt;video&gt;</b> tag is used to embed video files. Like the <b>&lt;audio&gt;</b> tag, it supports attributes and nested <b>&lt;source&gt;</b> elements.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
  Your browser does not support the video element.
</video>`}</Code>
        <div className="description">
          <b>Attributes:</b>
          <ul className="list">
            <li>
              <b>controls:</b> Adds playback controls.
            </li>
            <li>
              <b>autoplay:</b> Starts playing the video automatically.
            </li>
            <li>
              <b>loop:</b> Plays the video in a loop.
            </li>
            <li>
              <b>muted:</b> Starts the video in a muted state.
            </li>
            <li>
              <b>poster:</b> Specifies an image to be shown while the video is loading or until the user plays it.
            </li>
          </ul>
        </div>

        <div className="subHeader">Fallback Content</div>
        <div className="description">
          Fallback content can be provided within the <b>&lt;audio&gt;</b> or <b>&lt;video&gt;</b> tags to display a message or alternative link for unsupported browsers:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
  Your browser does not support the video element.
  <a href="video.mp4">Download the video</a>
</video>`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use multiple formats for better browser compatibility (e.g., MP4, OGG, WebM).</li>
          <li>Always include fallback content for older browsers.</li>
          <li>
            Use the <b>controls</b> attribute to improve usability.
          </li>
          <li>Optimize audio and video files for faster loading times.</li>
          <li>Avoid autoplay for videos with sound to prevent disrupting the user experience.</li>
        </ul>

        <Bottom back="/html/html5elements" next="/html/accessibility" />
      </div>
    </div>
  );
};

export default HTMLMediaElements;
