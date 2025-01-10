import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const WorkingWithNpm = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Working with npm</div>
        <div className="description">
          The Node Package Manager (npm) is a powerful tool for managing dependencies in Node.js projects. It allows developers to install, update, and manage packages with ease,
          enhancing productivity and streamlining project workflows.
        </div>

        <div className="subHeader">What is npm?</div>
        <div className="description">
          npm is the default package manager for Node.js. It provides access to thousands of open-source libraries and tools that can be easily integrated into your projects. With
          npm, you can:
        </div>
        <ul className="list">
          <li>Install libraries and frameworks.</li>
          <li>Update dependencies to the latest versions.</li>
          <li>Manage project-specific and global packages.</li>
          <li>Run custom scripts and commands.</li>
        </ul>

        <div className="subHeader">Initializing a Node.js Project</div>
        <div className="description">
          To start using npm in your project, initialize a Node.js project by creating a <b>package.json</b> file:
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm init -y`}</Code>
        <div className="description">
          This command creates a default <b>package.json</b> file with the necessary metadata for your project.
        </div>

        <div className="subHeader">Installing Packages</div>
        <div className="description">You can install packages locally (for a specific project) or globally (available system-wide):</div>
        <ul className="list">
          <li>
            <b>Install a local package:</b>
            <Code language="bash" style={materialDark} showLineNumbers>{`npm install <package-name>`}</Code>
            Example:
            <Code language="bash" style={materialDark} showLineNumbers>{`npm install express`}</Code>
          </li>
          <li>
            <b>Install a global package:</b>
            <Code language="bash" style={materialDark} showLineNumbers>{`npm install -g <package-name>`}</Code>
            Example:
            <Code language="bash" style={materialDark} showLineNumbers>{`npm install -g nodemon`}</Code>
          </li>
        </ul>

        <div className="subHeader">Managing Dependencies</div>
        <ul className="list">
          <li>
            <b>Update a package:</b>
            <Code language="bash" style={materialDark} showLineNumbers>{`npm update <package-name>`}</Code>
          </li>
          <li>
            <b>Uninstall a package:</b>
            <Code language="bash" style={materialDark} showLineNumbers>{`npm uninstall <package-name>`}</Code>
          </li>
          <li>
            <b>Check for outdated packages:</b>
            <Code language="bash" style={materialDark} showLineNumbers>{`npm outdated`}</Code>
          </li>
        </ul>

        <div className="subHeader">Using npm Scripts</div>
        <div className="description">
          npm allows you to define custom scripts in the <b>package.json</b> file. These scripts can be run using the `npm run` command.
        </div>
        <Code language="json" style={materialDark} showLineNumbers>{`{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}`}</Code>
        <div className="description">
          Run the scripts using:
          <Code language="bash" style={materialDark} showLineNumbers>{`npm run start
npm run dev`}</Code>
        </div>

        <div className="subHeader">Key Files in npm</div>
        <ul className="list">
          <li>
            <b>package.json:</b> Contains metadata about the project, dependencies, and scripts.
          </li>
          <li>
            <b>package-lock.json:</b> Ensures consistent dependency versions across environments.
          </li>
          <li>
            <b>node_modules:</b> A directory where installed packages are stored.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Always use <b>npm init</b> to create a package.json file for your projects.
          </li>
          <li>Use semantic versioning (e.g., `^1.0.0`, `~1.0.0`) to manage package updates.</li>
          <li>
            Regularly check for outdated dependencies using <b>npm outdated</b>.
          </li>
          <li>
            Use <b>package-lock.json</b> to ensure consistent dependency versions.
          </li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>npm simplifies dependency management for Node.js projects.</li>
          <li>Install, update, or remove packages easily with npm commands.</li>
          <li>Use npm scripts to streamline development workflows.</li>
        </ul>

        <Bottom back="/nodejs/core-modules" next="/nodejs/asynchronous-programming-basics" />
      </div>
    </div>
  );
};

export default WorkingWithNpm;
