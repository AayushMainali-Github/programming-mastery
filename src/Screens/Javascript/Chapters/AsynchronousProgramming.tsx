import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AsynchronousProgramming = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Asynchronous Programming</div>
        <div className="description">
          Asynchronous programming is an essential part of JavaScript, allowing code to be executed without blocking the main thread. This is especially useful when working with
          operations that take time, such as network requests or timers. Asynchronous code helps ensure that your web application remains responsive and performant.
        </div>

        <div className="subHeader">The Event Loop</div>
        <div className="description">
          The event loop is what allows JavaScript to perform non-blocking operations despite being single-threaded. It continuously checks the call stack and the message queue,
          executing code, collecting and processing events, and executing queued sub-tasks.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Output:
// Start
// End
// This runs after 2 seconds`}</Code>

        <div className="subHeader">Callbacks</div>
        <div className="description">
          Callbacks are functions passed as arguments to other functions and are executed after the completion of an operation. They are one of the most basic ways of handling
          asynchronous code in JavaScript.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

fetchData(() => {
  console.log("Callback executed");
});

// Output:
// Data fetched
// Callback executed`}</Code>

        <div className="subHeader">Promises</div>
        <div className="description">
          Promises provide a cleaner way to work with asynchronous operations. A promise represents an operation that hasn't completed yet but is expected to in the future. It can
          be in one of three states: <b>pending</b>, <b>fulfilled</b>, or <b>rejected</b>.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;  // Simulating a success scenario
    if (success) {
      resolve("Data fetched successfully");
    } else {
      reject("Error fetching data");
    }
  }, 1000);
});

fetchData
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Output (if successful):
// Data fetched successfully`}</Code>

        <div className="subHeader">Chaining Promises</div>
        <div className="description">
          Promises can be chained to handle multiple asynchronous operations sequentially. This helps avoid "callback hell" and makes the code more readable.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`fetchData
  .then((message) => {
    console.log(message);
    return new Promise((resolve) => setTimeout(() => resolve("Next operation"), 1000));
  })
  .then((nextMessage) => {
    console.log(nextMessage);
  })
  .catch((error) => {
    console.error(error);
  });

// Output:
// Data fetched successfully
// Next operation`}</Code>

        <div className="subHeader">Async/Await</div>
        <div className="description">
          The <b>async</b> and <b>await</b> keywords make working with promises simpler. An <b>async</b> function always returns a promise, and <b>await</b> pauses the execution of
          the function until the promise is resolved or rejected.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`async function fetchData() {
  try {
    const data = await new Promise((resolve) =>
      setTimeout(() => resolve("Data fetched successfully"), 1000)
    );
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();

// Output:
// Data fetched successfully`}</Code>

        <div className="subHeader">Handling Multiple Promises</div>
        <div className="description">
          JavaScript provides methods such as <b>Promise.all()</b> and <b>Promise.race()</b> to handle multiple promises at once.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const promise1 = new Promise((resolve) => setTimeout(() => resolve("First"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Third"), 1500));

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("All promises resolved:", values);
  })
  .catch((error) => {
    console.error("One of the promises failed:", error);
  });

// Output after 2 seconds:
// All promises resolved: ["First", "Third", "Second"]`}</Code>

        <div className="subHeader">Best Practices for Asynchronous Code</div>
        <ul className="list">
          <li>
            <b>Avoid Callback Hell</b>: Use promises or async/await instead of nested callbacks for better readability and maintainability.
          </li>
          <li>
            <b>Handle Errors Gracefully</b>: Always handle errors in promises and async functions using <b>.catch()</b> or <b>try/catch</b>.
          </li>
          <li>
            <b>Use Promises for Parallel Operations</b>: For operations that don't depend on each other, use <b>Promise.all()</b> to run them in parallel for better performance.
          </li>
          <li>
            <b>Keep Async Functions Simple</b>: Avoid overly complex async functions to maintain readability.
          </li>
        </ul>

        <Bottom back="/javascript/formhandling" next="/javascript/promisesandfetchapi" />
      </div>
    </div>
  );
};

export default AsynchronousProgramming;
