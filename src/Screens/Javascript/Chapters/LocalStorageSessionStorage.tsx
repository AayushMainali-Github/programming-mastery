import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const LocalStorageSessionStorage = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Local Storage and Session Storage</div>
        <div className="description">
          Web storage APIs, such as <b>Local Storage</b> and <b>Session Storage</b>, allow you to store key-value pairs in a user's browser. These APIs are useful for storing data
          persistently or temporarily between page reloads or sessions.
        </div>

        <div className="subHeader">What is Local Storage?</div>
        <div className="description">
          <b>Local Storage</b> is a type of web storage that allows you to save data with no expiration date. The data stored in local storage is available even after the browser
          is closed and reopened.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Storing data
localStorage.setItem("username", "JohnDoe");

// Retrieving data
const username = localStorage.getItem("username");
console.log(username); // Outputs: JohnDoe

// Removing data
localStorage.removeItem("username");

// Clearing all data
localStorage.clear();`}</Code>

        <div className="subHeader">What is Session Storage?</div>
        <div className="description">
          <b>Session Storage</b> is similar to local storage but stores data only for the duration of the page session. Once the page or browser is closed, the data is deleted.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Storing data
sessionStorage.setItem("sessionID", "12345");

// Retrieving data
const sessionID = sessionStorage.getItem("sessionID");
console.log(sessionID); // Outputs: 12345

// Removing data
sessionStorage.removeItem("sessionID");

// Clearing all data
sessionStorage.clear();`}</Code>

        <div className="subHeader">Data Types and JSON</div>
        <div className="description">
          Both local storage and session storage store data as strings. To store more complex data types, you need to use <b>JSON.stringify()</b> when saving and
          <b>JSON.parse()</b> when retrieving.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Storing an object
const user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieving the object
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Outputs: John`}</Code>

        <div className="subHeader">Checking for Storage Support</div>
        <div className="description">Before using web storage, it's good practice to check if the browser supports it.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`if (typeof(Storage) !== "undefined") {
  console.log("Web storage supported.");
} else {
  console.error("Web storage not supported.");
}`}</Code>

        <div className="subHeader">Use Cases for Local and Session Storage</div>
        <ul className="list">
          <li>
            <b>User Preferences</b>: Save user settings such as theme preferences or language selections.
          </li>
          <li>
            <b>Form Data</b>: Temporarily save form data so users don’t lose their input when navigating away from a page.
          </li>
          <li>
            <b>Shopping Carts</b>: Store items in a cart until the user completes their purchase.
          </li>
          <li>
            <b>Session Management</b>: Store temporary user session data without using cookies.
          </li>
        </ul>

        <div className="subHeader">Security Considerations</div>
        <div className="description">
          While web storage is a convenient way to store data, it is not secure for storing sensitive data such as passwords or authentication tokens. Always be cautious with the
          type of data stored and consider using more secure methods for sensitive information.
        </div>

        <Bottom back="/javascript/modulesandimports" next="/javascript/webapisoverview" />
      </div>
    </div>
  );
};

export default LocalStorageSessionStorage;
