import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { Link } from "react-router-dom";

const NodeEnvironmentSetup = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Environment Setup</div>
        <div className="description">
          Setting up the environment for Node.js involves installing Node.js and npm, configuring a code editor, and testing your setup to ensure everything works correctly.
        </div>

        <div className="subHeader">Step 1: Downloading Node.js</div>
        <div className="description">
          Go to the official Node.js website at{" "}
          <Link className="link" to="https://nodejs.org/en/">
            nodejs.org
          </Link>{" "}
          and download the LTS (Long Term Support) version for your operating system. This version is recommended for most users.
        </div>

        <div className="subHeader">Step 2: Installing Node.js</div>
        <div className="description">Once downloaded, run the installer and follow these steps:</div>
        <ul className="list">
          <li>
            On Windows, check the box to <b>"Add to PATH"</b> during installation.
          </li>
          <li>On macOS and Linux, follow the installer prompts to complete the setup.</li>
        </ul>

        <div className="subHeader">Step 3: Verifying Installation</div>
        <div className="description">Open your terminal or command prompt and verify that Node.js and npm are installed by typing:</div>
        <ul className="list">
          <li>
            To check Node.js version:
            <Code language="bash" className="code-block">{`node --version`}</Code>
          </li>
          <li>
            To check npm version:
            <Code language="bash" className="code-block">{`npm --version`}</Code>
          </li>
        </ul>
        <div className="description">If installed correctly, these commands will return the version numbers of Node.js and npm.</div>

        <div className="subHeader">Step 4: Setting Up a Code Editor</div>
        <div className="description">A good code editor or integrated development environment (IDE) enhances productivity. Some popular options include:</div>
        <ul className="list">
          <li>
            <b>Visual Studio Code (VS Code):</b> A lightweight, powerful code editor. Download it from{" "}
            <Link className="link" to="https://code.visualstudio.com/">
              Visual Studio Code
            </Link>
            .
          </li>
          <li>
            <b>WebStorm:</b> A full-featured IDE for JavaScript and Node.js development. Download it from{" "}
            <Link className="link" to="https://www.jetbrains.com/webstorm/">
              WebStorm
            </Link>
            .
          </li>
        </ul>

        <div className="subHeader">Step 5: Creating Your First Node.js Application</div>
        <div className="description">Test your environment by creating a simple "Hello, World!" application:</div>
        <Code language="bash" className="code-block">{`mkdir my-first-node-app
cd my-first-node-app
npm init -y`}</Code>
        <div className="description">
          This creates a new directory and initializes a Node.js project with a <b>package.json</b> file.
        </div>
        <Code language="bash" className="code-block">{`touch index.js`}</Code>
        <div className="description">
          Open <b>index.js</b> in your editor and add the following code:
        </div>
        <Code language="javascript" className="code-block">{`console.log("Hello, World!");`}</Code>
        <div className="description">Run the application in your terminal using:</div>
        <Code language="bash" className="code-block">{`node index.js`}</Code>
        <div className="description">You should see "Hello, World!" printed in your terminal.</div>

        <div className="subHeader">Step 6: Installing Additional Packages</div>
        <div className="description">
          Node.js uses npm (Node Package Manager) for installing libraries and frameworks. For example, to install the popular <b>express</b> framework, run:
        </div>
        <Code language="bash" className="code-block">{`npm install express`}</Code>
        <div className="description">
          This will add Express to your project and update the <b>package.json</b> file.
        </div>

        <Bottom back="/nodejs/introduction" next="/nodejs/nodejs-fundamentals" />
      </div>
    </div>
  );
};

export default NodeEnvironmentSetup;
