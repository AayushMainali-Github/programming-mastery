import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSTransitionsAndAnimations = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Transitions and Animations</div>
        <div className="description">
          Transitions and animations bring interactivity and visual appeal to your website. Transitions create smooth effects when properties change, while animations define
          keyframes for more complex and dynamic movements.
        </div>

        <div className="subHeader">CSS Transitions</div>
        <div className="description">
          Transitions allow changes in CSS properties to occur gradually over a specified duration. They are triggered by state changes such as <b>:hover</b>, <b>:focus</b>, or
          JavaScript events.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Basic syntax */
element {
  transition: property duration timing-function delay;
}

/* Example */
button {
  background-color: #007bff;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #0056b3;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<button>Hover me</button>`}</Code>

        <div className="subSubHeader">Common Transition Properties</div>
        <ul className="list">
          <li>
            <b>transition-property:</b> Specifies the property to transition (e.g., <b>background-color</b>).
          </li>
          <li>
            <b>transition-duration:</b> Duration of the transition (e.g., <b>0.5s</b>).
          </li>
          <li>
            <b>transition-timing-function:</b> Defines the speed curve (e.g., <b>ease</b>, <b>linear</b>, <b>ease-in</b>, <b>ease-out</b>, <b>cubic-bezier()</b>).
          </li>
          <li>
            <b>transition-delay:</b> Adds a delay before the transition starts (e.g., <b>0.2s</b>).
          </li>
        </ul>

        <div className="subHeader">CSS Animations</div>
        <div className="description">
          Animations allow you to create more complex effects by defining keyframes. Use the <b>@keyframes</b> rule to specify the animation's behavior at different points.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Basic syntax */
@keyframes animation-name {
  0% {
    /* Starting styles */
  }
  100% {
    /* Ending styles */
  }
}

element {
  animation: animation-name duration timing-function delay iteration-count direction fill-mode;
}

/* Example */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
div {
  animation: slideIn 1s ease-out forwards;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<div>Animated Content</div>`}</Code>

        <div className="subSubHeader">Common Animation Properties</div>
        <ul className="list">
          <li>
            <b>animation-name:</b> Name of the keyframes to apply.
          </li>
          <li>
            <b>animation-duration:</b> Duration of the animation (e.g., <b>2s</b>).
          </li>
          <li>
            <b>animation-timing-function:</b> Speed curve of the animation (e.g., <b>ease</b>, <b>linear</b>).
          </li>
          <li>
            <b>animation-delay:</b> Time before the animation starts (e.g., <b>1s</b>).
          </li>
          <li>
            <b>animation-iteration-count:</b> Number of times the animation runs (e.g., <b>infinite</b>, <b>1</b>).
          </li>
          <li>
            <b>animation-direction:</b> Direction of the animation (e.g., <b>normal</b>, <b>reverse</b>, <b>alternate</b>).
          </li>
          <li>
            <b>animation-fill-mode:</b> Defines the state of the element when the animation is not playing (e.g., <b>forwards</b>, <b>backwards</b>, <b>both</b>).
          </li>
        </ul>

        <div className="subHeader">Combining Transitions and Animations</div>
        <div className="description">
          Transitions and animations can be combined for enhanced effects. For example, use transitions for hover states and animations for loading effects.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`button {
  background-color: #007bff;
  transition: background-color 0.3s ease;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<button>Pulsing Button</button>`}</Code>

        <div className="subHeader">Example: Smooth and Dynamic Effects</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="box"></div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Transition for hover */
.box {
  width: 100px;
  height: 100px;
  background-color: #007bff;
  transition: transform 0.5s ease, background-color 0.5s ease;
}
.box:hover {
  transform: rotate(45deg);
  background-color: #ff5733;
}

/* Animation */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
.box {
  animation: bounce 1s infinite;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use transitions for simple effects like hover or focus states.</li>
          <li>Use animations for more complex movements requiring keyframes.</li>
          <li>Keep durations short for better user experience (e.g., 0.2–0.5 seconds for transitions).</li>
          <li>Avoid excessive animations that may distract users or impact performance.</li>
        </ul>

        <Bottom back="/css/css-variables" next="/css/css-transformations" />
      </div>
    </div>
  );
};

export default CSSTransitionsAndAnimations;
