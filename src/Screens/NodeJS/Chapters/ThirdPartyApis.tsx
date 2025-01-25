import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ThirdPartyApis = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Node.js and Third-Party APIs</div>
        <div className="description">
          Node.js makes it easy to consume third-party APIs by making HTTP requests. In this chapter, we’ll learn how to interact with external APIs using libraries like `axios`
          and the built-in `http` module.
        </div>

        <div className="subHeader">What is an API?</div>
        <div className="description">An API (Application Programming Interface) allows applications to communicate with each other. For example:</div>
        <ul className="list">
          <li>Fetching weather data from a weather API.</li>
          <li>Posting data to a payment gateway.</li>
          <li>Consuming social media APIs like Twitter or GitHub.</li>
        </ul>

        <div className="subHeader">Using the `axios` Library</div>
        <div className="description">`axios` is a popular library for making HTTP requests. Install it using:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm install axios`}</Code>
        <div className="description">Example: Fetching data from a public API:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const axios = require('axios');

// Fetch data from a third-party API
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('Data fetched:', response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });`}</Code>

        <div className="subHeader">Using the Built-in `http` Module</div>
        <div className="description">Node.js’s `http` module can also be used to make HTTP requests. Example:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const https = require('https');

// Fetch data from a third-party API
https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
  let data = '';

  // Collect chunks of data
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Parse and display data when the response ends
  res.on('end', () => {
    console.log('Data fetched:', JSON.parse(data));
  });
}).on('error', (err) => {
  console.error('Error fetching data:', err.message);
});`}</Code>

        <div className="subHeader">Posting Data to an API</div>
        <div className="description">You can also send data to an API using POST requests. Example with `axios`:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const axios = require('axios');

// Post data to a third-party API
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'My New Post',
  body: 'This is the content of my post.',
  userId: 1,
})
  .then(response => {
    console.log('Data posted:', response.data);
  })
  .catch(error => {
    console.error('Error posting data:', error.message);
  });`}</Code>

        <div className="subHeader">Error Handling</div>
        <div className="description">Always handle errors properly when making HTTP requests to external APIs:</div>
        <ul className="list">
          <li>Check the HTTP status code in the response.</li>
          <li>Handle network errors using `catch` blocks or `on('error')` handlers.</li>
          <li>Implement retries for transient errors using libraries like `axios-retry`.</li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use environment variables to store sensitive API keys.</li>
          <li>Throttle requests to avoid hitting API rate limits.</li>
          <li>Cache API responses to reduce unnecessary calls and improve performance.</li>
          <li>Validate API responses to ensure they meet your application’s requirements.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Node.js makes it easy to interact with third-party APIs using libraries like `axios` or the built-in `http` module.</li>
          <li>Always handle errors and implement retries to ensure application reliability.</li>
          <li>Follow best practices like securing API keys and caching responses for optimal performance.</li>
        </ul>

        <Bottom back="/nodejs/real-time-communication-with-socketio" next="/nodejs/unit-and-integration-testing" />
      </div>
    </div>
  );
};

export default ThirdPartyApis;
