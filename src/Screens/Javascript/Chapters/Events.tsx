import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Events = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Events</div>

        <div className="description">
          <b>Events</b> in JavaScript allow you to make web pages interactive by responding to user actions like clicks, key presses, or mouse movements. Events are actions or
          occurrences that happen in the browser, which can be detected and handled by event listeners.
        </div>

        <div className="subHeader">What Are Events?</div>
        <div className="description">
          Events are signals that something has happened in a web page. When an event is triggered, JavaScript can listen to it and run code in response. This is crucial for
          creating dynamic, interactive web applications. Examples include:
          <ul className="list">
            <li>
              <b>A user clicking a button.</b>
            </li>
            <li>
              <b>Typing text into a form field.</b>
            </li>
            <li>
              <b>Hovering over an element with the mouse.</b>
            </li>
          </ul>
        </div>

        <div className="subHeader">Common Event Types</div>
        <div className="description">
          Some of the most commonly used event types in JavaScript are:
          <ul className="list">
            <li>
              <b>Click</b>: Triggered when a user clicks on an element.
            </li>
            <li>
              <b>Mouseover/Mouseout</b>: Triggered when a user hovers the mouse over or moves the mouse away from an element.
            </li>
            <li>
              <b>Keydown/Keyup</b>: Triggered when a key is pressed or released on the keyboard.
            </li>
            <li>
              <b>Submit</b>: Triggered when a form is submitted.
            </li>
            <li>
              <b>Focus/Blur</b>: Triggered when an element (e.g., an input field) gains or loses focus.
            </li>
          </ul>
        </div>

        <div className="subHeader">Adding Event Listeners</div>
        <div className="description">
          To make an element respond to events, you use an <b>event listener</b>. This function is called whenever the specified event occurs. You can add event listeners using the{" "}
          <b>addEventListener()</b> method.
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`// Selecting the button element
const button = document.querySelector("button");

// Adding a click event listener
button.addEventListener("click", function() {
  alert("Button was clicked!");
});

// You can also define the event handler separately
function handleClick() {
  console.log("Button clicked!");
}

button.addEventListener("click", handleClick);
`}
        </Code>

        <div className="subHeader">Removing Event Listeners</div>
        <div className="description">
          You can remove an event listener using the <b>removeEventListener()</b> method. It's important to pass the same function reference that was used when adding the listener.
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`// Removing an event listener
button.removeEventListener("click", handleClick);
`}
        </Code>

        <div className="subHeader">The Event Object</div>
        <div className="description">
          When an event occurs, the browser passes an <b>event object</b> to the event listener. This object contains details about the event, such as the type of event, the target
          element, and the coordinates of a mouse click.
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`button.addEventListener("click", function(event) {
  console.log(event.type);  // Output: "click"
  console.log(event.target); // Output: <button> element
  console.log(event.clientX, event.clientY); // Output: Coordinates of the click
});`}
        </Code>

        <div className="subHeader">Preventing Default Behavior</div>
        <div className="description">
          Some events have default behaviors (e.g., a form submission reloads the page). You can use the <b>event.preventDefault()</b> method to prevent the default behavior.
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`// Preventing form submission
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Form submission prevented!");
});
`}
        </Code>

        <div className="subHeader">Event Propagation (Bubbling and Capturing)</div>
        <div className="description">
          Events in JavaScript follow a model known as <b>event propagation</b>, which defines how events flow through the DOM tree. There are two main phases:
          <ul className="list">
            <li>
              <b>Capturing phase</b>: The event travels down the DOM tree from the document root to the target element.
            </li>
            <li>
              <b>Bubbling phase</b>: After reaching the target, the event "bubbles" back up the DOM tree.
            </li>
          </ul>
          By default, most events propagate in the <b>bubbling phase</b>, but you can control this behavior using <b>event.stopPropagation()</b>.
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`// Example of event bubbling
const outerDiv = document.querySelector(".outer");
const innerDiv = document.querySelector(".inner");

outerDiv.addEventListener("click", function() {
  alert("Outer div clicked!");
});

innerDiv.addEventListener("click", function(event) {
  alert("Inner div clicked!");
  event.stopPropagation(); // Stops the event from reaching the outer div
});
`}
        </Code>

        <div className="subHeader">Delegating Events</div>
        <div className="description">
          <b>Event delegation</b> is a technique that allows you to handle events for multiple child elements by attaching a single event listener to a parent element. It works
          because of event bubbling. This is useful for handling events in dynamic content or large lists of items.
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`// Event delegation example
const list = document.querySelector("ul");

// Adding a single event listener to the parent 'ul'
list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    alert(\`List item \${event.target.textContent} clicked!\`);
  }
});
`}
        </Code>

        <div className="subHeader">Keyboard Events</div>
        <div className="description">
          <b>Keyboard events</b> are triggered when the user interacts with the keyboard. The most commonly used keyboard events are:
          <ul className="list">
            <li>
              <b>keydown</b>: Fired when a key is pressed down.
            </li>
            <li>
              <b>keyup</b>: Fired when a key is released.
            </li>
          </ul>
          The event object provides the <b>keyCode</b> or <b>key</b> property to determine which key was pressed.
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`document.addEventListener("keydown", function(event) {
  console.log(\`Key pressed: \${event.key}\`);
});

document.addEventListener("keyup", function(event) {
  console.log(\`Key released: \${event.key}\`);
});
`}
        </Code>

        <div className="subHeader">Mouse Events</div>
        <div className="description">
          <b>Mouse events</b> are fired when the user interacts with the mouse. Some common mouse events are:
          <ul className="list">
            <li>
              <b>click</b>: Triggered when an element is clicked.
            </li>
            <li>
              <b>dblclick</b>: Triggered on a double-click.
            </li>
            <li>
              <b>mousemove</b>: Triggered when the mouse moves over an element.
            </li>
            <li>
              <b>mouseenter</b> and <b>mouseleave</b>: Triggered when the mouse enters or leaves an element, respectively.
            </li>
          </ul>
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`// Example of mousemove event
const box = document.querySelector(".box");

box.addEventListener("mousemove", function(event) {
  console.log(\`Mouse at: \${event.clientX}, \${event.clientY}\`);
});
`}
        </Code>

        <div className="subHeader">Touch Events (For Mobile Devices)</div>
        <div className="description">
          <b>Touch events</b> are specific to mobile devices and are fired when a user interacts with a touchscreen. Some common touch events are:
          <ul className="list">
            <li>
              <b>touchstart</b>: Triggered when a finger touches the screen.
            </li>
            <li>
              <b>touchmove</b>: Triggered when a finger moves across the screen.
            </li>
            <li>
              <b>touchend</b>: Triggered when a finger leaves the screen.
            </li>
          </ul>
          The event object includes properties such as <b>touches</b>, <b>targetTouches</b>, and <b>changedTouches</b>, which provide information about the touch points.
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`// Example of touchstart event
const touchArea = document.querySelector(".touch-area");

touchArea.addEventListener("touchstart", function(event) {
  console.log("Touch start at: ", event.touches[0].clientX, event.touches[0].clientY);
});
`}
        </Code>

        <Bottom back="/javascript/objects" next="/javascript/dommanipulation" />
      </div>
    </div>
  );
};

export default Events;
