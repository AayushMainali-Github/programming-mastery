import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AsyncProgrammingBasics = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Asynchronous Programming Basics</div>
        <div className="description">
          Asynchronous programming is a cornerstone of Node.js, allowing non-blocking operations for handling I/O-intensive tasks efficiently. This chapter introduces the
          fundamentals of asynchronous programming, including callbacks, Promises, and `async/await`.
        </div>

        <div className="subHeader">What is Asynchronous Programming?</div>
        <div className="description">
          Asynchronous programming allows operations to execute without blocking the main thread, enabling multiple tasks to run concurrently. This is particularly important in
          Node.js for handling file I/O, database queries, and HTTP requests.
        </div>

        <div className="subHeader">1. Callbacks</div>
        <div className="description">A callback is a function passed as an argument to another function, which is then executed after an asynchronous operation completes.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const fs = require('fs');

// Reading a file using a callback
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});`}</Code>
        <div className="description">Callbacks can lead to "callback hell" when nested, making code difficult to read and maintain.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`asyncOperation1(() => {
  asyncOperation2(() => {
    asyncOperation3(() => {
      console.log('Nested callbacks!');
    });
  });
});`}</Code>

        <div className="subHeader">2. Promises</div>
        <div className="description">Promises provide a cleaner way to handle asynchronous operations, allowing you to chain actions and handle errors more gracefully.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const fs = require('fs').promises;

// Reading a file using Promises
fs.readFile('example.txt', 'utf8')
  .then((data) => {
    console.log('File content:', data);
  })
  .catch((err) => {
    console.error('Error reading file:', err);
  });`}</Code>
        <div className="description">A Promise has three states:</div>
        <ul className="list">
          <li>
            <b>Pending:</b> Initial state, operation not completed.
          </li>
          <li>
            <b>Fulfilled:</b> Operation completed successfully.
          </li>
          <li>
            <b>Rejected:</b> Operation failed.
          </li>
        </ul>

        <div className="subHeader">3. async/await</div>
        <div className="description">The `async/await` syntax is built on top of Promises and provides a more synchronous-like structure for writing asynchronous code.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const fs = require('fs').promises;

async function readFileAsync() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileAsync();`}</Code>
        <div className="description">With `async/await`, you avoid chaining `.then` and `.catch`, resulting in cleaner and more readable code.</div>

        <div className="subHeader">Choosing the Right Approach</div>
        <ul className="list">
          <li>
            Use <b>callbacks</b> for simple tasks or when working with legacy code.
          </li>
          <li>
            Use <b>Promises</b> for more readable asynchronous flows.
          </li>
          <li>
            Use <b>async/await</b> for modern, clean, and maintainable code.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always handle errors properly to avoid application crashes.</li>
          <li>Prefer `async/await` for new projects for better readability.</li>
          <li>Use libraries like `util.promisify` to convert callback-based functions to Promises.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Asynchronous programming is essential for non-blocking operations in Node.js.</li>
          <li>Callbacks, Promises, and `async/await` are the primary tools for handling asynchronous tasks.</li>
          <li>Choose the appropriate approach based on your project requirements and complexity.</li>
        </ul>

        <Bottom back="/nodejs/routing-in-nodejs" next="/nodejs/working-with-databases" />
      </div>
    </div>
  );
};

export default AsyncProgrammingBasics;
