import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DomManipulation = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">DOM Manipulation</div>
        <div className="description">
          The Document Object Model (DOM) is the representation of the structure of a webpage in the form of a tree. Each element in the HTML is considered a node in this tree. DOM
          traversal refers to the process of navigating through the nodes of this tree to select and manipulate elements. JavaScript provides several methods for DOM traversal and
          manipulation, allowing developers to interact dynamically with the structure, style, and content of web pages.
        </div>

        <div className="subHeader">Selecting Elements</div>
        <div className="description">
          To begin DOM manipulation, you first need to select the element(s) you want to interact with. JavaScript offers several methods for selecting elements:
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Selecting a single element by ID
const header = document.getElementById("header");

// Selecting multiple elements by class name
const buttons = document.getElementsByClassName("btn");

// Selecting multiple elements by tag name
const divs = document.getElementsByTagName("div");

// Selecting elements using querySelector (single element)
const firstParagraph = document.querySelector("p");

// Selecting multiple elements using querySelectorAll
const paragraphs = document.querySelectorAll("p");`}</Code>

        <div className="subHeader">Traversing the DOM</div>
        <div className="description">
          Once you have selected an element, you may need to move through its neighboring nodes or parent/child elements. JavaScript provides methods to traverse the DOM, allowing
          you to access related elements based on their position in the DOM tree.
        </div>

        <div className="description">Here are the most common traversal methods:</div>
        <ul className="list">
          <li>
            <b>parentNode</b>: Selects the parent of the current node.
          </li>
          <li>
            <b>childNodes</b>: Returns all child nodes of the current node, including text nodes.
          </li>
          <li>
            <b>firstChild</b>: Selects the first child node of the current element.
          </li>
          <li>
            <b>lastChild</b>: Selects the last child node of the current element.
          </li>
          <li>
            <b>nextSibling</b>: Selects the next sibling node of the current element.
          </li>
          <li>
            <b>previousSibling</b>: Selects the previous sibling node of the current element.
          </li>
          <li>
            <b>children</b>: Returns only the child elements (ignoring text nodes).
          </li>
          <li>
            <b>firstElementChild</b>: Selects the first child element (ignoring text nodes).
          </li>
          <li>
            <b>lastElementChild</b>: Selects the last child element (ignoring text nodes).
          </li>
          <li>
            <b>nextElementSibling</b>: Selects the next sibling element (ignoring text nodes).
          </li>
          <li>
            <b>previousElementSibling</b>: Selects the previous sibling element (ignoring text nodes).
          </li>
        </ul>

        <Code language="javascript" style={materialDark} showLineNumbers>{`const parent = document.querySelector(".child").parentNode;
const firstChild = document.querySelector(".parent").firstElementChild;
const nextSibling = document.querySelector(".item").nextElementSibling;`}</Code>

        <div className="subHeader">Creating and Inserting Elements</div>
        <div className="description">
          JavaScript also allows you to create new elements and insert them into the DOM. This can be useful when dynamically adding content based on user interactions or data
          fetching.
        </div>
        <div className="description">The most common methods for creating and inserting elements are:</div>
        <ul className="list">
          <li>
            <b>createElement(tag)</b>: Creates a new element of the specified tag.
          </li>
          <li>
            <b>appendChild()</b>: Appends a new child element to a specified parent element.
          </li>
          <li>
            <b>insertBefore()</b>: Inserts a new element before a specified existing element.
          </li>
          <li>
            <b>removeChild()</b>: Removes a child element from a parent element.
          </li>
        </ul>

        <Code language="javascript" style={materialDark} showLineNumbers>{`// Create a new paragraph element
const newParagraph = document.createElement("p");

// Add some text to the new paragraph
newParagraph.textContent = "This is a new paragraph.";

// Append the new paragraph to a div element
const container = document.getElementById("container");
container.appendChild(newParagraph);

// Insert the new paragraph before another element
const referenceNode = document.getElementById("reference");
container.insertBefore(newParagraph, referenceNode);

// Remove the paragraph from the DOM
container.removeChild(newParagraph);`}</Code>

        <div className="subHeader">Modifying Element Attributes</div>
        <div className="description">
          You can modify the attributes of an existing element, such as its class, id, style, and more. This allows you to change how elements behave or appear on the page.
        </div>
        <ul className="list">
          <li>
            <b>setAttribute(attr, value)</b>: Sets the value of an attribute for an element.
          </li>
          <li>
            <b>getAttribute(attr)</b>: Retrieves the value of a specified attribute.
          </li>
          <li>
            <b>removeAttribute(attr)</b>: Removes a specified attribute from an element.
          </li>
          <li>
            <b>classList.add()</b>: Adds a class to an element's class list.
          </li>
          <li>
            <b>classList.remove()</b>: Removes a class from an element's class list.
          </li>
          <li>
            <b>classList.toggle()</b>: Toggles a class on or off for an element.
          </li>
        </ul>

        <Code language="javascript" style={materialDark} showLineNumbers>{`// Modify attributes
const button = document.getElementById("myButton");
button.setAttribute("disabled", true);  // Disable the button
console.log(button.getAttribute("id")); // Output: myButton

// Modify classes
button.classList.add("active"); // Add 'active' class
button.classList.remove("inactive"); // Remove 'inactive' class

// Toggle class
button.classList.toggle("highlight");`}</Code>

        <div className="subHeader">Modifying Content</div>
        <div className="description">
          Changing the content of an element is another common DOM manipulation technique. You can modify the inner text, HTML, or even replace an element entirely.
        </div>
        <ul className="list">
          <li>
            <b>textContent</b>: Modifies the text content of an element.
          </li>
          <li>
            <b>innerHTML</b>: Modifies the HTML content of an element.
          </li>
          <li>
            <b>outerHTML</b>: Replaces the element itself with new HTML.
          </li>
        </ul>

        <Code language="javascript" style={materialDark} showLineNumbers>{`// Modify content
const paragraph = document.getElementById("text");
paragraph.textContent = "Updated text";  // Change text content
paragraph.innerHTML = "<strong>Updated</strong> text";  // Change HTML content
paragraph.outerHTML = "<p>Completely new paragraph</p>";  // Replace element`}</Code>

        <div className="subHeader">Event Listeners for DOM Manipulation</div>
        <div className="description">
          To make your web pages interactive, you can attach event listeners to DOM elements. Event listeners allow you to execute a function when a specific event occurs (e.g., a
          button click or a keypress).
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Add an event listener to a button
const btn = document.getElementById("myButton");
btn.addEventListener("click", function() {
    alert("Button clicked!");
});

// Remove an event listener
btn.removeEventListener("click", function() {
    alert("Button clicked!");
});`}</Code>

        <div className="subHeader">Best Practices for DOM Manipulation</div>
        <ul className="list">
          <li>
            <b>Minimize DOM Access</b>: Accessing the DOM can be costly in terms of performance. Try to minimize the number of times you access or manipulate the DOM.
          </li>
          <li>
            <b>Use Efficient Selectors</b>: When selecting elements, use IDs or classes over tag names or complex selectors for better performance.
          </li>
          <li>
            <b>Batch DOM Updates</b>: When possible, batch DOM updates to avoid triggering multiple reflows and repaints.
          </li>
          <li>
            <b>Cache DOM References</b>: If you are working with an element multiple times, store its reference in a variable to avoid repeatedly querying the DOM.
          </li>
        </ul>

        <Bottom back="/javascript/events" next="/javascript/cssmanipulation" />
      </div>
    </div>
  );
};

export default DomManipulation;
