import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AsyncAwait = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Async/Await</div>
        <div className="description">
          The <b>async</b> and <b>await</b> keywords provide a simpler and more readable way to work with promises in JavaScript. They allow you to write asynchronous code that
          appears synchronous, making it easier to read and maintain.
        </div>

        <div className="subHeader">
          What is <b>async</b>?
        </div>
        <div className="description">
          The <b>async</b> keyword is used to declare an asynchronous function. An async function always returns a promise. If the function returns a value, the promise is resolved
          with that value. If the function throws an error, the promise is rejected with that error.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`async function example() {
  return "Hello, World!";
}

example().then((message) => console.log(message)); // Logs: "Hello, World!"`}</Code>

        <div className="subHeader">
          What is <b>await</b>?
        </div>
        <div className="description">
          The <b>await</b> keyword is used to pause the execution of an async function until a promise is resolved or rejected. This allows you to work with the resolved value as
          if it were a synchronous operation.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

fetchData();`}</Code>

        <div className="subHeader">Using Try/Catch for Error Handling</div>
        <div className="description">
          To handle errors in an async function, use a <b>try/catch</b> block. This allows you to catch and handle any errors that occur while awaiting a promise.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataWithErrorHandling();`}</Code>

        <div className="subHeader">Waiting for Multiple Promises</div>
        <div className="description">
          You can use <b>await</b> with <b>Promise.all()</b> to wait for multiple promises to resolve simultaneously. This is useful for performing multiple asynchronous operations
          in parallel.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`async function fetchMultipleData() {
  try {
    const [post, user] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json()),
      fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => res.json()),
    ]);
    console.log("Post:", post);
    console.log("User:", user);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchMultipleData();`}</Code>

        <div className="subHeader">
          Top-Level <b>await</b> (ES2022)
        </div>
        <div className="description">
          In modern JavaScript (ES2022 and beyond), <b>await</b> can be used at the top level in modules, which means you don't need to wrap it in an <b>async</b> function.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const data = await response.json();
console.log(data);`}</Code>

        <div className="subHeader">Best Practices for Using Async/Await</div>
        <ul className="list">
          <li>
            <b>Use Try/Catch for Error Handling</b>: Always use <b>try/catch</b> to handle errors and avoid unhandled promise rejections.
          </li>
          <li>
            <b>Parallelize Independent Operations</b>: Use <b>Promise.all()</b> when awaiting multiple independent promises to run them in parallel.
          </li>
          <li>
            <b>Keep Async Functions Simple</b>: Avoid writing overly complex async functions; split them into smaller functions if needed.
          </li>
          <li>
            <b>Optimize Sequential Awaits</b>: Avoid sequential <b>await</b> calls when possible; use <b>Promise.all()</b> to run them concurrently.
          </li>
        </ul>

        <Bottom back="/javascript/promisesandfetchapi" next="/javascript/errorhandling" />
      </div>
    </div>
  );
};

export default AsyncAwait;
