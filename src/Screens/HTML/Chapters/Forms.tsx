import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLForms = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Forms</div>
        <div className="description">
          Forms in HTML allow users to input data and submit it to a server for processing. They are created using the <b>&lt;form&gt;</b> element and include a variety of input
          controls like <b>&lt;input&gt;</b>, <b>&lt;textarea&gt;</b>, <b>&lt;button&gt;</b>, <b>&lt;select&gt;</b>, and <b>&lt;option&gt;</b>.
        </div>

        <div className="subHeader">Basic Structure of a Form</div>
        <div className="description">
          The <b>&lt;form&gt;</b> element acts as a container for all form controls. Here's an example:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" placeholder="Enter your name">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="Enter your email">

  <button type="submit">Submit</button>
</form>`}</Code>

        <div className="subHeader">Form Attributes</div>
        <ul className="list">
          <li>
            <b>action:</b> Specifies the URL where the form data will be sent.
          </li>
          <li>
            <b>method:</b> Defines how the form data will be sent (e.g., <b>GET</b> or <b>POST</b>).
          </li>
          <li>
            <b>id:</b> Provides a unique identifier for the form.
          </li>
        </ul>

        <div className="subHeader">Input Types</div>
        <div className="description">
          The <b>&lt;input&gt;</b> element is the most versatile form control, offering various types to collect data. Here are some common input types:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<form>
  <label for="text">Text Input:</label>
  <input type="text" id="text" name="text">

  <label for="password">Password:</label>
  <input type="password" id="password" name="password">

  <label for="number">Number:</label>
  <input type="number" id="number" name="number">

  <label for="date">Date:</label>
  <input type="date" id="date" name="date">
</form>`}</Code>

        <div className="subHeader">Textarea for Multi-line Input</div>
        <div className="description">
          Use the <b>&lt;textarea&gt;</b> element to collect multi-line text input:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<form>
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" cols="50" placeholder="Enter your message"></textarea>
</form>`}</Code>

        <div className="subHeader">Dropdown Menus</div>
        <div className="description">
          Use the <b>&lt;select&gt;</b> and <b>&lt;option&gt;</b> elements to create dropdown menus:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<form>
  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
  </select>
</form>`}</Code>

        <div className="subHeader">Buttons</div>
        <div className="description">
          The <b>&lt;button&gt;</b> element is used to submit forms or trigger custom actions:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<form>
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>`}</Code>

        <div className="subHeader">Form Validation</div>
        <div className="description">
          HTML5 introduces built-in validation attributes like <b>required</b>, <b>minlength</b>, <b>maxlength</b>, and <b>pattern</b> to ensure proper user input:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required minlength="3" maxlength="15">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
</form>`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always use labels with inputs for better accessibility.</li>
          <li>Use appropriate input types for specific data to improve user experience.</li>
          <li>Validate user input on both the client and server side for security.</li>
        </ul>

        <Bottom back="/html/tables" next="/html/semantic-elements" />
      </div>
    </div>
  );
};

export default HTMLForms;
