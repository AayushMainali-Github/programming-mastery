import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const WebAPIsOverview = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Web APIs Overview</div>
        <div className="description">
          Web APIs are interfaces provided by the browser or environment that allow you to interact with various parts of the web and perform complex operations. They make it
          possible to do things like manipulate the DOM, fetch data from a server, store data locally, and much more.
        </div>

        <div className="subHeader">Common Web APIs</div>
        <ul className="list">
          <li>
            <b>DOM (Document Object Model) API</b>: Allows you to manipulate and interact with HTML and XML documents.
          </li>
          <li>
            <b>Fetch API</b>: Enables fetching resources across the network.
          </li>
          <li>
            <b>Geolocation API</b>: Provides the user's location.
          </li>
          <li>
            <b>Canvas API</b>: Used for drawing graphics and animations.
          </li>
          <li>
            <b>Web Storage API</b>: Includes local storage and session storage for data persistence.
          </li>
          <li>
            <b>Notifications API</b>: Allows web pages to send notifications.
          </li>
          <li>
            <b>WebSockets API</b>: Facilitates real-time communication between the client and server.
          </li>
        </ul>

        <div className="subHeader">Using the Fetch API</div>
        <div className="description">
          The Fetch API is one of the most commonly used Web APIs. It allows you to make network requests similar to <b>XMLHttpRequest</b> but with a more modern and flexible
          syntax.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));`}</Code>

        <div className="subHeader">Geolocation API</div>
        <div className="description">The Geolocation API allows web applications to access the user's geographical location, with their consent.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
    },
    (error) => {
      console.error("Error getting location:", error.message);
    }
  );
} else {
  console.error("Geolocation is not supported by this browser.");
}`}</Code>

        <div className="subHeader">Notifications API</div>
        <div className="description">The Notifications API allows web pages to send notifications that appear outside the browser window.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`if (Notification.permission === "granted") {
  new Notification("Hello! This is a notification.");
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification("You have allowed notifications!");
    }
  });
}`}</Code>

        <div className="subHeader">Web Storage API</div>
        <div className="description">
          The Web Storage API allows you to store data in the browser using <b>localStorage</b> and <b>sessionStorage</b>. Refer to the "Local Storage and Session Storage" chapter
          for more details.
        </div>

        <div className="subHeader">Canvas API</div>
        <div className="description">
          The Canvas API provides a way to draw graphics and animations directly on an HTML5 canvas element. This is useful for creating dynamic, visual content such as charts,
          games, and data visualizations.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);`}</Code>

        <div className="subHeader">Best Practices When Using Web APIs</div>
        <ul className="list">
          <li>
            <b>Check for Browser Compatibility</b>: Not all APIs are supported by every browser. Use feature detection or tools like <b>caniuse.com</b> to check compatibility.
          </li>
          <li>
            <b>Request User Permissions</b>: Some APIs, like Geolocation and Notifications, require user permission. Ensure that you handle permission denials gracefully.
          </li>
          <li>
            <b>Handle Errors Gracefully</b>: Always implement error handling to provide a better user experience.
          </li>
          <li>
            <b>Use APIs Responsibly</b>: Be mindful of the user's privacy and security when using APIs that access sensitive data.
          </li>
        </ul>

        <Bottom back="/javascript/localstorage" next="/javascript" />
      </div>
    </div>
  );
};

export default WebAPIsOverview;
