import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSPositioning = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Positioning</div>
        <div className="description">
          CSS positioning allows you to control the placement of elements on a webpage. In this chapter, you’ll learn about the different types of positioning: static, relative,
          absolute, fixed, and sticky.
        </div>

        <div className="subHeader">1. Static Positioning (Default)</div>
        <div className="description">By default, all elements are positioned statically. This means they appear in the natural flow of the document.</div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  position: static; /* Default value */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div>Static positioned element</div>`}</Code>

        <div className="subHeader">2. Relative Positioning</div>
        <div className="description">
          A relatively positioned element is positioned relative to its original position in the normal document flow. You can adjust its position using <b>top</b>, <b>right</b>,{" "}
          <b>bottom</b>, and <b>left</b>.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  position: relative;
  top: 20px; /* Moves the element 20px down from its original position */
  left: 10px; /* Moves the element 10px to the right */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div>Relatively positioned element</div>`}</Code>

        <div className="subHeader">3. Absolute Positioning</div>
        <div className="description">
          An absolutely positioned element is removed from the normal document flow and is positioned relative to its nearest positioned ancestor (<b>relative</b>, <b>absolute</b>,
          or <b>fixed</b>). If no positioned ancestor exists, it is positioned relative to the <b>&lt;html&gt;</b> element.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  position: absolute;
  top: 50px; /* 50px from the top of the nearest positioned ancestor */
  right: 20px; /* 20px from the right of the nearest positioned ancestor */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div style="position: relative;">
  <div style="position: absolute;">Absolutely positioned element</div>
</div>`}</Code>

        <div className="subHeader">4. Fixed Positioning</div>
        <div className="description">A fixed element is removed from the document flow and positioned relative to the viewport. It does not move when the page is scrolled.</div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  position: fixed;
  top: 10px; /* 10px from the top of the viewport */
  left: 0; /* Aligned to the left edge of the viewport */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div>Fixed positioned element</div>`}</Code>

        <div className="subHeader">5. Sticky Positioning</div>
        <div className="description">
          A sticky element toggles between relative and fixed positioning based on the scroll position. It acts as relative until it reaches a defined scroll position, then it
          becomes fixed.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`div {
  position: sticky;
  top: 0; /* Sticks to the top of the viewport when scrolling */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div>Sticky positioned element</div>`}</Code>

        <div className="subHeader">Comparison of Positioning Types</div>
        <div className="description">Here’s a quick summary of how each positioning type behaves:</div>
        <ul className="list">
          <li>
            <b>Static:</b> Default positioning; elements follow the normal flow.
          </li>
          <li>
            <b>Relative:</b> Positioned relative to its original location in the flow.
          </li>
          <li>
            <b>Absolute:</b> Positioned relative to the nearest positioned ancestor.
          </li>
          <li>
            <b>Fixed:</b> Positioned relative to the viewport and remains in place during scrolling.
          </li>
          <li>
            <b>Sticky:</b> Acts as relative until a certain scroll position, then behaves as fixed.
          </li>
        </ul>

        <div className="subHeader">Example: Combining Different Positioning Types</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div style="position: relative; height: 200px; background: lightgray;">
  <div style="position: absolute; top: 50px; left: 50px; background: lightblue;">
    Absolutely Positioned
  </div>
</div>
<div style="position: fixed; top: 10px; right: 10px; background: lightgreen;">
  Fixed Positioned
</div>
<div style="position: sticky; top: 0; background: yellow;">
  Sticky Positioned
</div>`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use <b>relative</b> positioning to nudge elements without removing them from the document flow.
          </li>
          <li>
            Use <b>absolute</b> positioning for overlay elements or elements requiring precise placement.
          </li>
          <li>
            Use <b>fixed</b> positioning for sticky headers or navigation bars.
          </li>
          <li>
            Use <b>sticky</b> positioning for headers or elements that should remain visible during scrolling.
          </li>
        </ul>

        <Bottom back="/css/box-model" next="/css/flexbox-basics" />
      </div>
    </div>
  );
};

export default CSSPositioning;
