import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLFormsAdvanced = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Forms Advanced</div>
        <div className="description">
          HTML5 introduced new input types and validation attributes that make forms more user-friendly and improve data accuracy. This chapter covers advanced form controls and
          built-in validation features.
        </div>

        <div className="subHeader">New Input Types</div>
        <div className="description">HTML5 offers a variety of new input types tailored for specific kinds of data. Here are some commonly used ones:</div>
        <ul className="list">
          <li>
            <b>email:</b> Accepts a valid email address.
          </li>
          <li>
            <b>url:</b> Accepts a valid URL.
          </li>
          <li>
            <b>date:</b> Displays a date picker.
          </li>
          <li>
            <b>number:</b> Accepts numeric input, with optional minimum, maximum, and step values.
          </li>
          <li>
            <b>range:</b> Displays a slider for numeric input within a specified range.
          </li>
          <li>
            <b>color:</b> Displays a color picker.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="example@example.com" required>

  <label for="date">Date:</label>
  <input type="date" id="date" name="date" required>

  <label for="range">Select a Range:</label>
  <input type="range" id="range" name="range" min="0" max="100">

  <label for="color">Choose a Color:</label>
  <input type="color" id="color" name="color">
</form>`}</Code>

        <div className="subHeader">Form Validation Attributes</div>
        <div className="description">
          HTML5 provides built-in attributes to validate user input. These attributes ensure data integrity and reduce the need for JavaScript-based validation.
        </div>
        <ul className="list">
          <li>
            <b>required:</b> Ensures the field cannot be left empty.
          </li>
          <li>
            <b>min</b> and <b>max:</b> Specify minimum and maximum values for numeric inputs.
          </li>
          <li>
            <b>maxlength:</b> Limits the maximum number of characters.
          </li>
          <li>
            <b>pattern:</b> Defines a regular expression that the input must match.
          </li>
          <li>
            <b>step:</b> Specifies the increment for numeric inputs.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<form>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" minlength="8" required>

  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="18" max="100" required>

  <label for="website">Website:</label>
  <input type="url" id="website" name="website" pattern="https://.*" placeholder="https://example.com" required>
</form>`}</Code>

        <div className="subHeader">
          Using the <b>novalidate</b> Attribute
        </div>
        <div className="description">
          If you want to disable the browser’s automatic validation, use the <b>novalidate</b> attribute in the <b>&lt;form&gt;</b> tag:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<form action="/submit" method="POST" novalidate>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <button type="submit">Submit</button>
</form>`}</Code>

        <div className="subHeader">Datalist for Autocomplete</div>
        <div className="description">
          The <b>&lt;datalist&gt;</b> element provides autocomplete options for an input field:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<form>
  <label for="browser">Favorite Browser:</label>
  <input list="browsers" id="browser" name="browser">
  <datalist id="browsers">
    <option value="Google Chrome">
    <option value="Mozilla Firefox">
    <option value="Safari">
    <option value="Microsoft Edge">
  </datalist>
</form>`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use appropriate input types to enhance user experience and reduce errors.</li>
          <li>Combine HTML validation attributes with JavaScript for robust validation.</li>
          <li>Provide clear error messages when validation fails.</li>
          <li>Ensure form fields are accessible and labeled properly.</li>
        </ul>

        <Bottom back="/html/media-elements" next="/html/data-tables" />
      </div>
    </div>
  );
};

export default HTMLFormsAdvanced;
