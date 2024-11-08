import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CssManipulation = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">CSS Manipulation</div>
        <div className="description">
          CSS manipulation allows you to change the styling of your web page dynamically using JavaScript. By modifying styles through JavaScript, you can create interactive and
          dynamic user interfaces, adjusting the appearance of elements in response to user actions or other events. JavaScript offers several ways to interact with CSS, including
          changing individual styles, adding or removing classes, and manipulating entire stylesheets.
        </div>

        <div className="subHeader">Inline Style Manipulation</div>
        <div className="description">
          One of the simplest ways to manipulate CSS with JavaScript is by directly modifying the inline styles of an element. This can be done using the `style` property of a DOM
          element.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Changing the background color of an element
const box = document.getElementById("box");
box.style.backgroundColor = "blue";

// Changing the width of an element
box.style.width = "200px";

// Changing multiple styles
box.style.cssText = "background-color: green; width: 300px; height: 100px;";`}</Code>

        <div className="subHeader">Manipulating CSS Classes</div>
        <div className="description">
          A more efficient way to manipulate styles is by adding, removing, or toggling CSS classes using the `classList` property. This allows you to define styles in your CSS
          file and then apply or remove them dynamically via JavaScript.
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>{`// Adding a class
const element = document.getElementById("element");
element.classList.add("highlight");

// Removing a class
element.classList.remove("highlight");

// Toggling a class (adds it if not present, removes it if present)
element.classList.toggle("active");

// Checking if an element has a class
if (element.classList.contains("active")) {
    console.log("The element is active!");
}`}</Code>

        <div className="subHeader">Modifying CSS Variables (Custom Properties)</div>
        <div className="description">
          CSS variables (also known as custom properties) can be modified with JavaScript, allowing you to dynamically adjust values that are used throughout your stylesheet. This
          is particularly useful for themes, where you may want to change colors or other properties globally.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Set a CSS variable
document.documentElement.style.setProperty("--main-color", "blue");

// Get the value of a CSS variable
const mainColor = getComputedStyle(document.documentElement).getPropertyValue("--main-color");
console.log(mainColor);  // Output: blue`}</Code>

        <div className="subHeader">getComputedStyle Method</div>
        <div className="description">
          The `getComputedStyle` method allows you to access the final computed styles of an element, which are the actual styles applied after resolving all CSS rules, media
          queries, and other factors.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Get the computed style of an element
const box = document.getElementById("box");
const styles = getComputedStyle(box);
console.log(styles.backgroundColor);  // Output: rgb(0, 0, 255) (if background is blue)`}</Code>

        <div className="subHeader">Dynamic Stylesheets</div>
        <div className="description">
          In addition to manipulating individual elements, you can also dynamically create and modify entire stylesheets with JavaScript. This is useful when you need to generate
          styles on the fly or apply global changes across your web page.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Create a new stylesheet
const style = document.createElement("style");
style.textContent = ".dynamicClass { background-color: yellow; font-size: 20px; }";
document.head.appendChild(style);

// Apply the dynamically created class to an element
const dynamicElement = document.getElementById("dynamicElement");
dynamicElement.classList.add("dynamicClass");`}</Code>

        <div className="subHeader">Changing Styles Based on User Interaction</div>
        <div className="description">
          A common use case for CSS manipulation is changing the appearance of elements in response to user interaction, such as clicks, hover effects, or form input changes. Event
          listeners allow you to trigger style changes dynamically.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Change background color on click
const button = document.getElementById("changeColorButton");
button.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

// Change text color when hovering over an element
const hoverElement = document.getElementById("hoverElement");
hoverElement.addEventListener("mouseover", function() {
    hoverElement.style.color = "red";
});
hoverElement.addEventListener("mouseout", function() {
    hoverElement.style.color = "";
});`}</Code>

        <div className="subHeader">Animation and Transitions with JavaScript</div>
        <div className="description">
          While animations and transitions are typically defined in CSS, JavaScript can trigger or control these effects. You can use JavaScript to dynamically add or remove
          classes that contain CSS animation rules, or directly modify properties to control transitions.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Trigger a CSS transition on button click
const animateButton = document.getElementById("animateButton");
animateButton.addEventListener("click", function() {
    const box = document.getElementById("box");
    box.style.transition = "width 2s";
    box.style.width = "300px";  // This will trigger a smooth transition
});

// Trigger a CSS animation by adding a class
animateButton.addEventListener("click", function() {
    box.classList.add("animate");
});`}</Code>

        <div className="subHeader">Best Practices for CSS Manipulation with JavaScript</div>
        <ul className="list">
          <li>
            <b>Separation of Concerns</b>: Try to keep your styling in CSS and use JavaScript to control behavior. Manipulating styles directly with JavaScript should be used
            sparingly.
          </li>
          <li>
            <b>Use Classes for Complex Styling</b>: For larger changes, use `classList` to toggle classes instead of directly manipulating many individual styles.
          </li>
          <li>
            <b>Minimize Reflows and Repaints</b>: Repeatedly modifying styles can cause performance issues. Try to batch changes together to minimize reflows and repaints.
          </li>
          <li>
            <b>Cache Style Values</b>: If you're accessing the same style property multiple times, store it in a variable to avoid repeatedly querying the DOM.
          </li>
        </ul>

        <Bottom back="/javascript/dommanipulation" next="/javascript/responsivewebdesign" />
      </div>
    </div>
  );
};

export default CssManipulation;
