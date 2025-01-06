import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSVariables = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">CSS Variables</div>
        <div className="description">
          CSS variables, also known as custom properties, allow you to store reusable values in a central location. This makes it easier to manage and update styles across your
          entire project.
        </div>

        <div className="subHeader">What are CSS Variables?</div>
        <div className="description">
          CSS variables are defined using the <b>--</b> prefix and accessed with the <b>var()</b> function. They provide a way to reuse values like colors, fonts, and spacing
          throughout your styles.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Define a CSS variable */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size: 16px;
}

/* Use the variable */
button {
  background-color: var(--primary-color);
  font-size: var(--font-size);
}`}</Code>

        <div className="subHeader">Defining CSS Variables</div>
        <div className="description">
          CSS variables are typically defined in the <b>:root</b> selector to make them globally available. You can also define variables inside specific selectors for localized
          usage.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Global variables */
:root {
  --primary-bg: #f8f9fa;
  --text-color: #212529;
}

/* Local variables */
.card {
  --card-padding: 20px;
}
.card {
  padding: var(--card-padding);
  background-color: var(--primary-bg);
  color: var(--text-color);
}`}</Code>

        <div className="subHeader">Using CSS Variables</div>
        <div className="description">
          Use the <b>var()</b> function to reference variables. You can also specify a fallback value if the variable is not defined.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Example with fallback */
button {
  background-color: var(--primary-color, #000); /* Default to #000 if --primary-color is not set */
}`}</Code>

        <div className="subHeader">Benefits of CSS Variables</div>
        <ul className="list">
          <li>Improved maintainability by centralizing commonly used values.</li>
          <li>Ease of updates by changing the variable definition in one place.</li>
          <li>Dynamic styling with JavaScript, as variables can be updated at runtime.</li>
        </ul>

        <div className="subHeader">Example: Theming with CSS Variables</div>
        <div className="description">CSS variables are excellent for creating themes that can be easily switched or updated:</div>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Define light and dark themes */
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}
[data-theme="dark"] {
  --bg-color: #000000;
  --text-color: #ffffff;
}

/* Apply the theme */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<body data-theme="dark">
  <h1>Welcome to the Dark Theme</h1>
</body>`}</Code>

        <div className="subHeader">Manipulating CSS Variables with JavaScript</div>
        <div className="description">
          You can dynamically update CSS variables using JavaScript by modifying the <b>style</b> property of the root element.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`/* Change the primary color dynamically */
document.documentElement.style.setProperty('--primary-color', '#ff5733');`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Define global variables in the <b>:root</b> selector for consistency.
          </li>
          <li>Use meaningful names for variables to make your styles self-explanatory.</li>
          <li>Group related variables together for better organization.</li>
          <li>Combine CSS variables with JavaScript for dynamic styling, such as theming or animations.</li>
        </ul>

        <div className="subHeader">Example: CSS Variables in Action</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<div class="theme-container">
  <button class="theme-toggle">Switch Theme</button>
</div>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`/* Define themes */
:root {
  --primary-bg: #ffffff;
  --primary-text: #000000;
}
[data-theme="dark"] {
  --primary-bg: #000000;
  --primary-text: #ffffff;
}
body {
  background-color: var(--primary-bg);
  color: var(--primary-text);
}
button {
  background-color: var(--primary-text);
  color: var(--primary-bg);
}`}</Code>
        <Code language="javascript" style={materialDark} showLineNumbers>{`/* JavaScript to toggle themes */
const toggleButton = document.querySelector('.theme-toggle');
toggleButton.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  document.body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
});`}</Code>

        <Bottom back="/css/advancedselectors" next="/css/transitionsandanimations" />
      </div>
    </div>
  );
};

export default CSSVariables;
