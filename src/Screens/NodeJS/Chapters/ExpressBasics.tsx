import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ExpressBasics = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Express.js Basics</div>
        <div className="description">
          Express.js is a popular Node.js framework used for building web servers and APIs. It simplifies routing, middleware, and request handling, making server-side development
          faster and more efficient.
        </div>

        <div className="subHeader">What is Express.js?</div>
        <div className="description">
          Express.js is a lightweight and flexible web application framework built on top of Node.js. It provides robust features for creating APIs, handling routes, and
          integrating middleware.
        </div>

        <div className="subHeader">Installing Express.js</div>
        <div className="description">To use Express.js in your project, you need to install it via npm. Run the following command in your project directory:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm install express`}</Code>

        <div className="subHeader">Setting Up Your First Express Application</div>
        <div className="description">Follow these steps to set up a basic Express.js application:</div>
        <ol className="list">
          <li>
            Create a new file called <b>app.js</b> and add the following code:
            <Code language="javascript" style={materialDark} showLineNumbers>{`// Import Express
const express = require('express');
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});`}</Code>
          </li>
          <li>
            Run the application using:
            <Code language="bash" style={materialDark} showLineNumbers>{`node app.js`}</Code>
          </li>
          <li>
            Visit <b>http://localhost:3000/</b> in your browser to see the response "Hello, World!"
          </li>
        </ol>

        <div className="subHeader">Defining Routes</div>
        <div className="description">Express makes it easy to define routes for handling different HTTP methods (GET, POST, PUT, DELETE). For example:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Define routes for different HTTP methods
app.get('/about', (req, res) => {
  res.send('About Us');
});

app.post('/submit', (req, res) => {
  res.send('Form submitted');
});

app.put('/update', (req, res) => {
  res.send('Data updated');
});

app.delete('/delete', (req, res) => {
  res.send('Data deleted');
});`}</Code>

        <div className="subHeader">Using Middleware</div>
        <div className="description">
          Middleware in Express.js are functions that execute during the lifecycle of a request. They can be used for tasks like logging, authentication, and parsing request
          bodies.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// A simple middleware function
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next(); // Pass control to the next middleware or route handler
});`}</Code>

        <div className="subHeader">Serving Static Files</div>
        <div className="description">Use the built-in `express.static` middleware to serve static files like images, CSS, and JavaScript.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Serve static files from the 'public' directory
app.use(express.static('public'));`}</Code>
        <div className="description">
          Place your static files (e.g., <b>style.css</b>, <b>script.js</b>) in the <b>public</b> directory, and they will be accessible at <b>http://localhost:3000/style.css</b>.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Organize your routes into separate files for better maintainability.</li>
          <li>Use middleware like `express.json()` to parse incoming JSON requests.</li>
          <li>Handle errors gracefully using custom error-handling middleware.</li>
          <li>Use environment variables (e.g., with `dotenv`) for sensitive data like API keys.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Express.js simplifies building web servers and APIs with Node.js.</li>
          <li>Routes allow you to handle specific paths and HTTP methods.</li>
          <li>Middleware enables you to extend functionality and handle requests more efficiently.</li>
        </ul>

        <Bottom back="/nodejs/streams-and-buffers" next="/nodejs/middleware-in-express" />
      </div>
    </div>
  );
};

export default ExpressBasics;
