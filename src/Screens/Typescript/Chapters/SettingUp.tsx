import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SetupTypeScript = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Setting Up TypeScript</div>
        <div className="description">
          To start using TypeScript, you need to install it, configure your environment, and compile TypeScript files into JavaScript. This chapter will guide you through the
          installation, configuration, and basic usage of TypeScript.
        </div>

        <div className="subHeader">Installing TypeScript</div>
        <div className="description">TypeScript can be installed globally or on a per-project basis using npm (Node Package Manager).</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Install TypeScript globally
npm install -g typescript

# Verify the installation
tsc --version`}</Code>
        <div className="description">If you want to install TypeScript for a specific project, run:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Install TypeScript locally
npm install --save-dev typescript`}</Code>

        <div className="subHeader">Creating a TypeScript Project</div>
        <div className="description">To initialize a TypeScript project, use the following command to generate a `tsconfig.json` file:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`tsc --init`}</Code>
        <div className="description">This command creates a `tsconfig.json` file, which allows you to configure TypeScript settings for your project.</div>

        <div className="subHeader">Configuring tsconfig.json</div>
        <div className="description">The `tsconfig.json` file contains settings that control how TypeScript compiles the code. A basic configuration looks like this:</div>
        <Code language="json" style={materialDark} showLineNumbers>{`{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}`}</Code>
        <div className="description">
          Key settings:
          <ul className="list">
            <li>
              <b>`target`:</b> Specifies the ECMAScript version (ES6, ES2020, etc.).
            </li>
            <li>
              <b>`module`:</b> Defines module system (`CommonJS`, `ES6`, etc.).
            </li>
            <li>
              <b>`strict`:</b> Enables strict type checking.
            </li>
            <li>
              <b>`outDir`:</b> Specifies where compiled JavaScript files are stored.
            </li>
            <li>
              <b>`rootDir`:</b> Specifies the location of TypeScript files.
            </li>
          </ul>
        </div>

        <div className="subHeader">Writing and Compiling TypeScript Code</div>
        <div className="description">Create a simple TypeScript file (`index.ts`) inside the `src` directory:</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// index.ts
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("TypeScript"));`}</Code>

        <div className="subHeader">Compiling TypeScript Files</div>
        <div className="description">Compile the TypeScript file using the following command:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`tsc`}</Code>
        <div className="description">The compiled JavaScript file (`index.js`) will be placed in the `dist` directory if `outDir` is set in `tsconfig.json`.</div>

        <div className="subHeader">Running Compiled JavaScript</div>
        <div className="description">The generated JavaScript file can be executed using Node.js:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`node dist/index.js`}</Code>

        <div className="subHeader">Using TypeScript with Visual Studio Code</div>
        <div className="description">
          VS Code provides built-in TypeScript support with features like IntelliSense and inline type checking. To enable automatic compilation, install the **TypeScript
          Compiler** extension or use the watch mode:
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`tsc --watch`}</Code>

        <div className="subHeader">Setting Up TypeScript in a Node.js Project</div>
        <div className="description">For a Node.js project, initialize a `package.json` file and install dependencies:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm init -y
npm install --save-dev typescript @types/node`}</Code>
        <div className="description">Update `tsconfig.json` for Node.js compatibility:</div>
        <Code language="json" style={materialDark} showLineNumbers>{`{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}`}</Code>

        <div className="subHeader">Setting Up TypeScript in a React Project</div>
        <div className="description">To create a React app with TypeScript, use the following command:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npx create-react-app my-app --template typescript`}</Code>

        <div className="subHeader">Advantages of Using TypeScript</div>
        <ul className="list">
          <li>
            <b>Code Safety:</b> Detects errors at compile time instead of runtime.
          </li>
          <li>
            <b>Better IDE Support:</b> Provides IntelliSense, auto-completion, and refactoring tools.
          </li>
          <li>
            <b>Improved Maintainability:</b> Encourages better structuring of large projects.
          </li>
        </ul>

        <div className="subHeader">Limitations of TypeScript</div>
        <ul className="list">
          <li>
            <b>Requires Compilation:</b> TypeScript code must be converted to JavaScript before execution.
          </li>
          <li>
            <b>Initial Setup Overhead:</b> Configuration files and strict typing can add complexity.
          </li>
          <li>
            <b>Learning Curve:</b> Developers must learn TypeScript syntax and its type system.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use TypeScript’s `strict` mode for better error detection.</li>
          <li>Organize code using modular architecture (`src/`, `dist/`).</li>
          <li>Enable `noImplicitAny` to enforce explicit type annotations.</li>
          <li>Use `.d.ts` declaration files when integrating JavaScript libraries.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>TypeScript requires installation via npm and is configured using `tsconfig.json`.</li>
          <li>TypeScript files (`.ts`) must be compiled into JavaScript (`.js`) using `tsc`.</li>
          <li>It integrates well with IDEs like Visual Studio Code and can be used in Node.js and React projects.</li>
          <li>Setting up TypeScript properly ensures better code quality and maintainability.</li>
        </ul>

        <Bottom back="/typescript/introduction" next="/typescript/basic-types" />
      </div>
    </div>
  );
};

export default SetupTypeScript;
