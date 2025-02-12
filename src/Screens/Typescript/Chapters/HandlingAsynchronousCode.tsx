import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HandlingAsyncCode = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Handling Asynchronous Code</div>
        <div className="description">
          Asynchronous programming in TypeScript is primarily handled with Promises and the async/await syntax. This approach allows you to write asynchronous code that is both
          easier to read and maintain. In this chapter, we'll explore how to define and work with <code>Promise&lt;T&gt;</code> types, use async/await for handling asynchronous
          operations, and implement error handling using try/catch blocks.
        </div>

        <div className="subHeader">Understanding Promises in TypeScript</div>
        <div className="description">
          A Promise represents a value that may be available now, later, or never. In TypeScript, you can define a Promise with a specific type using <code>Promise&lt;T&gt;</code>.
          Below is an example of a function that returns a Promise that resolves with a string.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`function fetchData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
      if (url) {
        resolve(\`Data fetched from \${url}\`);
      } else {
        reject(new Error("Invalid URL provided"));
      }
    }, 2000);
  });
}

// Example usage:
fetchData("https://api.example.com")
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error.message));`}</Code>

        <div className="subHeader">Using async/await for Cleaner Asynchronous Code</div>
        <div className="description">
          The async/await syntax builds on Promises to allow writing asynchronous code in a more synchronous manner. It simplifies error handling and code readability. Here’s an
          example of an async function that waits for data:
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`async function getData(url: string): Promise<void> {
  try {
    const data = await fetchData(url);
    console.log("Async/Await Data:", data);
  } catch (error) {
    console.error("Async/Await Error:", error.message);
  }
}

getData("https://api.example.com");`}</Code>

        <div className="subHeader">Error Handling with try/catch</div>
        <div className="description">
          Wrapping asynchronous calls in a try/catch block allows you to gracefully handle errors. This is especially useful when using async/await.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`async function processData(url: string): Promise<void> {
  try {
    // Await the asynchronous operation
    const data = await fetchData(url);
    console.log("Processed Data:", data);
  } catch (error) {
    // Handle errors here
    console.error("Failed to process data:", error.message);
  }
}

processData(""); // Calling with an empty URL to trigger an error`}</Code>

        <div className="subHeader">Practical Example: Fetching and Processing Data</div>
        <div className="description">Below is a more comprehensive example that fetches data, processes it, and handles errors using async/await.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Define a function that simulates fetching data
function simulateFetch(query: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (query) {
        resolve(\`Results for query: "\${query}"\`);
      } else {
        reject(new Error("Query cannot be empty"));
      }
    }, 1500);
  });
}

// Async function that uses the simulateFetch function
async function searchDatabase(query: string): Promise<void> {
  try {
    const results = await simulateFetch(query);
    console.log("Search Results:", results);
  } catch (error) {
    console.error("Search Error:", error.message);
  }
}

// Trigger the search with a valid query and an empty query to see error handling
searchDatabase("TypeScript");
searchDatabase("");`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use async/await to simplify asynchronous code and improve readability.</li>
          <li>Always wrap async operations in try/catch blocks to handle errors gracefully.</li>
          <li>
            Type your Promise returns with <code>Promise&lt;T&gt;</code> for better type safety.
          </li>
          <li>Prefer async/await over then/catch chains for complex asynchronous workflows.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>
            Promises represent asynchronous operations and are typed as <code>Promise&lt;T&gt;</code> in TypeScript.
          </li>
          <li>async/await simplifies asynchronous code, making it more readable and maintainable.</li>
          <li>Error handling in async functions is achieved using try/catch blocks.</li>
          <li>Well-typed asynchronous code helps catch errors at compile time, reducing runtime issues.</li>
        </ul>

        <Bottom back="/typescript/advanced-function-types" next="/typescript/modules-and-namespaces" />
      </div>
    </div>
  );
};

export default HandlingAsyncCode;
