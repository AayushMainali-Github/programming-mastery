import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSFrameworks = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">CSS Frameworks</div>
        <div className="description">
          CSS frameworks simplify web development by providing pre-defined classes and components for styling and layout. Bootstrap and Tailwind CSS are two popular frameworks that
          cater to different development needs.
        </div>

        <div className="subHeader">What is a CSS Framework?</div>
        <div className="description">
          A CSS framework is a library of pre-written CSS code that helps developers quickly design responsive and visually consistent web pages. Frameworks often include utilities
          for grids, typography, components, and more.
        </div>

        <div className="subHeader">Introduction to Bootstrap</div>
        <div className="description">
          Bootstrap is a widely-used CSS framework developed by Twitter. It provides a comprehensive grid system, responsive utilities, and pre-styled components.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!-- Include Bootstrap -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
  rel="stylesheet"
>

<!-- Example: Grid Layout -->
<div class="container">
  <div class="row">
    <div class="col-md-4">Column 1</div>
    <div class="col-md-4">Column 2</div>
    <div class="col-md-4">Column 3</div>
  </div>
</div>`}</Code>

        <div className="subSubHeader">Bootstrap Features</div>
        <ul className="list">
          <li>
            <b>Grid System:</b> A 12-column responsive layout system.
          </li>
          <li>
            <b>Pre-styled Components:</b> Buttons, cards, modals, navbars, and more.
          </li>
          <li>
            <b>Responsive Utilities:</b> Easily hide/show elements based on screen size.
          </li>
          <li>
            <b>Customizable:</b> Override default styles with your own CSS or SCSS.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<!-- Example: Pre-styled button -->
<button class="btn btn-primary">Click Me</button>`}</Code>

        <div className="subHeader">Introduction to Tailwind CSS</div>
        <div className="description">
          Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for styling. It emphasizes flexibility and customization.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!-- Include Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Example: Styled Div -->
<div class="flex items-center justify-center h-screen bg-gray-100">
  <div class="p-4 bg-white shadow-lg rounded-lg">
    <h1 class="text-xl font-bold text-gray-800">Hello, Tailwind!</h1>
    <p class="text-gray-600">This is a Tailwind-styled component.</p>
  </div>
</div>`}</Code>

        <div className="subSubHeader">Tailwind CSS Features</div>
        <ul className="list">
          <li>
            <b>Utility Classes:</b> Provides granular control over styling (e.g., <b>text-center</b>, <b>bg-blue-500</b>).
          </li>
          <li>
            <b>Responsive Design:</b> Built-in support for media queries using breakpoints like <b>sm</b>, <b>md</b>, and <b>lg</b>.
          </li>
          <li>
            <b>Customization:</b> Easily extend or modify styles using the Tailwind configuration file.
          </li>
          <li>
            <b>Performance:</b> Generates only the necessary CSS classes for smaller file sizes in production.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<!-- Example: Utility classes for a responsive card -->
<div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  <img class="w-full h-48 object-cover" src="image.jpg" alt="Image">
  <div class="p-4">
    <h1 class="text-xl font-bold">Responsive Card</h1>
    <p class="mt-2 text-gray-600">This card uses Tailwind's utility classes.</p>
  </div>
</div>`}</Code>

        <div className="subHeader">Comparison: Bootstrap vs Tailwind CSS</div>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Bootstrap</th>
              <th>Tailwind CSS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Approach</td>
              <td>Component-based</td>
              <td>Utility-first</td>
            </tr>
            <tr>
              <td>Customization</td>
              <td>Moderate</td>
              <td>Highly customizable</td>
            </tr>
            <tr>
              <td>Learning Curve</td>
              <td>Beginner-friendly</td>
              <td>Steeper for new users</td>
            </tr>
            <tr>
              <td>Pre-styled Components</td>
              <td>Comprehensive</td>
              <td>Minimal (requires building components)</td>
            </tr>
          </tbody>
        </table>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use <b>Bootstrap</b> for quick setups and predefined components.
          </li>
          <li>
            Choose <b>Tailwind CSS</b> for greater control and custom designs.
          </li>
          <li>Combine frameworks with custom CSS for unique designs.</li>
          <li>Minimize unused classes in production to optimize performance.</li>
        </ul>

        <Bottom back="/css/clippingandmasking" next="/css/summary" />
      </div>
    </div>
  );
};

export default CSSFrameworks;
