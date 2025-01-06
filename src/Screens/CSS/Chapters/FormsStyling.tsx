import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSFormsStyling = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Forms Styling</div>
        <div className="description">
          Forms are essential for user input and interaction. CSS allows you to customize form elements like inputs, checkboxes, radio buttons, and buttons to match the design of
          your website.
        </div>

        <div className="subHeader">Styling Text Inputs</div>
        <div className="description">
          Text inputs are styled using properties like <b>border</b>, <b>padding</b>, <b>font-size</b>, and <b>background-color</b>. Use the <b>:focus</b> pseudo-class for active
          states.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
input[type="text"]:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<label for="name">Name:</label>
<input type="text" id="name" name="name" placeholder="Enter your name">`}</Code>

        <div className="subHeader">Styling Checkboxes and Radio Buttons</div>
        <div className="description">
          Checkboxes and radio buttons can be styled with the <b>:checked</b> pseudo-class. Use custom images or shapes for a modern look.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`input[type="checkbox"], input[type="radio"] {
  margin-right: 10px;
}
input[type="checkbox"]:checked {
  accent-color: #007bff;
}
input[type="radio"]:checked {
  accent-color: #28a745;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<label>
  <input type="checkbox" name="subscribe"> Subscribe to newsletter
</label>
<label>
  <input type="radio" name="gender" value="male"> Male
</label>
<label>
  <input type="radio" name="gender" value="female"> Female
</label>`}</Code>

        <div className="subHeader">Styling Buttons</div>
        <div className="description">
          Buttons can be styled with properties like <b>background-color</b>, <b>border-radius</b>, and <b>box-shadow</b>. Use hover and active states for better interactivity.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #0056b3;
}
button:active {
  background-color: #004085;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<button type="submit">Submit</button>`}</Code>

        <div className="subHeader">Styling Select Menus</div>
        <div className="description">
          Select menus can be styled similarly to inputs. Use <b>appearance: none;</b> for custom dropdown arrows.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 16px;
  appearance: none; /* Removes the default dropdown arrow */
}
select:focus {
  border-color: #007bff;
  outline: none;
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<label for="country">Country:</label>
<select id="country" name="country">
  <option value="usa">United States</option>
  <option value="canada">Canada</option>
  <option value="australia">Australia</option>
</select>`}</Code>

        <div className="subHeader">Styling Textareas</div>
        <div className="description">
          Textareas can be styled similarly to inputs. Adjust their height using the <b>rows</b> attribute or the <b>height</b> CSS property.
        </div>
        <Code language="css" style={materialDark} showLineNumbers>{`textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical; /* Allows vertical resizing only */
}`}</Code>
        <Code language="html" style={materialDark} showLineNumbers>{`<label for="message">Message:</label>
<textarea id="message" name="message" rows="5" placeholder="Write your message here"></textarea>`}</Code>

        <div className="subHeader">Example: Fully Styled Form</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" placeholder="Enter your username">

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" placeholder="Enter your password">

  <label>
    <input type="checkbox" name="remember"> Remember Me
  </label>

  <button type="submit">Login</button>
</form>`}</Code>
        <Code language="css" style={materialDark} showLineNumbers>{`form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
form input, form button {
  margin-bottom: 15px;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use <b>focus</b> styles for accessibility and better user experience.
          </li>
          <li>Style inputs and buttons consistently across the form.</li>
          <li>Test the form on different devices and browsers for compatibility.</li>
          <li>
            Use <b>transition</b> effects for smoother interactions.
          </li>
        </ul>

        <Bottom back="/css/listsstyling" next="/css/mediaqueries" />
      </div>
    </div>
  );
};

export default CSSFormsStyling;
