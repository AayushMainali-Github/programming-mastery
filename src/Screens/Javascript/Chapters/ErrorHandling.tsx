import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ErrorHandling = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Error Handling</div>
        <div className="description">
          Error handling is a critical aspect of writing reliable JavaScript code. Proper error handling ensures that your program can respond gracefully to unexpected issues and
          prevent complete application crashes.
        </div>

        <div className="subHeader">
          The <b>try/catch</b> Statement
        </div>
        <div className="description">
          The <b>try/catch</b> statement lets you handle errors gracefully. Code within the <b>try</b> block is executed, and if an error occurs, the control is passed to the
          <b>catch</b> block.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`try {
  // Code that might throw an error
  const result = riskyOperation();
  console.log("Operation successful:", result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
}`}</Code>

        <div className="subHeader">Throwing Custom Errors</div>
        <div className="description">
          You can throw your own errors using the <b>throw</b> keyword. This is useful when you want to signal an error based on specific conditions in your code.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18 or older to access this site.");
  }
  return "Access granted";
}

try {
  const accessMessage = checkAge(16);
  console.log(accessMessage);
} catch (error) {
  console.error("Access denied:", error.message);
}`}</Code>

        <div className="subHeader">
          Using <b>finally</b>
        </div>
        <div className="description">
          The <b>finally</b> block runs after the <b>try</b> and <b>catch</b> blocks, regardless of whether an error was thrown. This is useful for cleaning up resources or running
          code that should always execute.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`try {
  console.log("Starting operation...");
  throw new Error("An error occurred");
} catch (error) {
  console.error("Error caught:", error.message);
} finally {
  console.log("Operation completed.");
}`}</Code>

        <div className="subHeader">Error Object Properties</div>
        <div className="description">
          The error object passed to the <b>catch</b> block has properties that provide information about the error:
        </div>
        <ul className="list">
          <li>
            <b>message</b>: A human-readable description of the error.
          </li>
          <li>
            <b>name</b>: The type of error (e.g., <b>TypeError</b>, <b>ReferenceError</b>).
          </li>
          <li>
            <b>stack</b>: A string containing the stack trace, which is useful for debugging.
          </li>
        </ul>
        <Code language="javascript" style={materialDark} showLineNumbers>{`try {
  // Intentional reference error
  nonExistentFunction();
} catch (error) {
  console.error("Error name:", error.name);
  console.error("Error message:", error.message);
  console.error("Stack trace:", error.stack);
}`}</Code>

        <div className="subHeader">Promise Error Handling</div>
        <div className="description">
          When working with promises, you can use <b>.catch()</b> to handle errors. This ensures that if a promise is rejected, you can respond appropriately.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`fetch("https://invalid-url.com")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .catch((error) => {
    console.error("Fetch error:", error.message);
  });`}</Code>

        <div className="subHeader">Error Handling with Async/Await</div>
        <div className="description">
          When using <b>async/await</b>, errors can be caught using a <b>try/catch</b> block. This provides a synchronous-like way to handle asynchronous errors.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`async function fetchData() {
  try {
    const response = await fetch("https://invalid-url.com");
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchData();`}</Code>

        <div className="subHeader">Best Practices for Error Handling</div>
        <ul className="list">
          <li>
            <b>Handle Known Error Cases</b>: Anticipate and handle specific errors (e.g., network errors, validation errors).
          </li>
          <li>
            <b>Provide Meaningful Messages</b>: Throw custom errors with clear messages that help in debugging.
          </li>
          <li>
            <b>Avoid Silent Failures</b>: Always log or handle errors to prevent silent failures.
          </li>
          <li>
            <b>
              Use <b>finally</b> for Cleanup
            </b>
            : Use the <b>finally</b> block to clean up resources or reset states.
          </li>
          <li>
            <b>Centralize Error Logging</b>: Consider using a global error handler or logging service for consistent error tracking.
          </li>
        </ul>

        <Bottom back="/javascript/asyncawait" next="/javascript/modulesandimports" />
      </div>
    </div>
  );
};

export default ErrorHandling;
