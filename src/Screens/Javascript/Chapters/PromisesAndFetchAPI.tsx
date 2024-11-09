import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const PromisesAndFetchAPI = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Promises and Fetch API</div>
        <div className="description">
          Promises provide a way to handle asynchronous operations in JavaScript. The Fetch API is a modern interface that allows you to make network requests similar to
          XMLHttpRequest (XHR) but with a more powerful and flexible feature set based on promises.
        </div>

        <div className="subHeader">What is a Promise?</div>
        <div className="description">A promise represents a value that may be available now, or in the future, or never. It has three states:</div>
        <ul className="list">
          <li>
            <b>Pending</b>: The initial state of the promise, neither fulfilled nor rejected.
          </li>
          <li>
            <b>Fulfilled</b>: The operation completed successfully.
          </li>
          <li>
            <b>Rejected</b>: The operation failed.
          </li>
        </ul>

        <Code language="javascript" style={materialDark} showLineNumbers>{`const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed.");
    }
  }, 1000);
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });`}</Code>

        <div className="subHeader">Using the Fetch API</div>
        <div className="description">
          The Fetch API provides an easy way to fetch resources asynchronously across the network. It returns a promise that resolves to the response of the request.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();  // Parse the JSON from the response
  })
  .then((data) => {
    console.log(data);  // Handle the data from the API
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });`}</Code>

        <div className="subHeader">Handling Fetch Errors</div>
        <div className="description">
          Fetch will only reject a promise if the request itself fails (e.g., a network issue). To catch HTTP errors, you need to manually check the <b>response.ok</b> property.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Post:", data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });`}</Code>

        <div className="subHeader">Async/Await with Fetch</div>
        <div className="description">
          Using <b>async/await</b> with fetch can make your code more readable and easier to understand. It allows you to write asynchronous code that looks synchronous.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`async function fetchPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    const data = await response.json();
    console.log("Post:", data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchPost();`}</Code>

        <div className="subHeader">Sending Data with Fetch (POST Request)</div>
        <div className="description">
          The Fetch API also supports sending data to a server using POST, PUT, DELETE, etc. To send data, you need to add a configuration object to your fetch call.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST", // HTTP method
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // Data to be sent
  });

  if (!response.ok) {
    throw new Error(\`HTTP error! Status: \${response.status}\`);
  }
  
  return response.json(); // Parse and return JSON response
}

// Example usage:
postData("https://jsonplaceholder.typicode.com/posts", {
  title: "foo",
  body: "bar",
  userId: 1,
})
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch POST error:", error));`}</Code>

        <div className="subHeader">Best Practices for Promises and Fetch</div>
        <ul className="list">
          <li>
            <b>Always Handle Errors</b>: Ensure you handle errors using <b>.catch()</b> for promises or <b>try/catch</b> for async/await.
          </li>
          <li>
            <b>Check Response Status</b>: Always check <b>response.ok</b> to handle HTTP errors properly.
          </li>
          <li>
            <b>Use Headers Appropriately</b>: Set headers as needed, such as <b>Content-Type</b> for JSON requests.
          </li>
          <li>
            <b>Keep Promises Chain Simple</b>: Use async/await for complex chains to maintain readability.
          </li>
        </ul>

        <Bottom back="/javascript/asynchronousprogramming" next="/javascript/asyncawait" />
      </div>
    </div>
  );
};

export default PromisesAndFetchAPI;
