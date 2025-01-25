import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const NodeJsTesting = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Testing in Node.js</div>
        <div className="description">
          Testing ensures your Node.js applications function correctly and helps catch errors early. This chapter covers writing unit and integration tests using popular testing
          frameworks like Jest and Mocha.
        </div>

        <div className="subHeader">What is Testing?</div>
        <div className="description">Testing involves evaluating your code to ensure it behaves as expected:</div>
        <ul className="list">
          <li>
            <b>Unit Testing:</b> Tests individual functions or components in isolation.
          </li>
          <li>
            <b>Integration Testing:</b> Tests the interaction between multiple components.
          </li>
        </ul>

        <div className="subHeader">Setting Up Jest</div>
        <div className="description">Jest is a popular testing framework for Node.js. Install it with:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm install --save-dev jest`}</Code>
        <div className="description">Add a test script in your `package.json`:</div>
        <Code language="json" style={materialDark} showLineNumbers>{`"scripts": {
  "test": "jest"
}`}</Code>

        <div className="subHeader">Writing Unit Tests with Jest</div>
        <div className="description">Create a file named `math.js`:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };`}</Code>
        <div className="description">Create a test file `math.test.js`:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// math.test.js
const { add, subtract } = require('./math');

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
});`}</Code>
        <div className="description">Run the tests using:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm test`}</Code>

        <div className="subHeader">Setting Up Mocha and Chai</div>
        <div className="description">Mocha is another testing framework, often paired with Chai for assertions. Install both with:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm install --save-dev mocha chai`}</Code>
        <div className="description">Add a test script in your `package.json`:</div>
        <Code language="json" style={materialDark} showLineNumbers>{`"scripts": {
  "test": "mocha"
}`}</Code>

        <div className="subHeader">Writing Tests with Mocha and Chai</div>
        <div className="description">Create the same `math.js` file as before and write a test file `math.test.js`:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// math.test.js
const { expect } = require('chai');
const { add, subtract } = require('./math');

describe('Math functions', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('should subtract two numbers', () => {
    expect(subtract(5, 3)).to.equal(2);
  });
});`}</Code>
        <div className="description">Run the tests using:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm test`}</Code>

        <div className="subHeader">Writing Integration Tests</div>
        <div className="description">Integration tests ensure multiple components work together. Example:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// server.js
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports = app;`}</Code>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// server.test.js
const request = require('supertest');
const app = require('./server');

describe('GET /hello', () => {
  it('should return a greeting message', async () => {
    const response = await request(app).get('/hello');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello, World!');
  });
});`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Write tests for critical functionality to ensure application stability.</li>
          <li>Use mocking for dependencies in unit tests to isolate functionality.</li>
          <li>Run tests automatically in CI/CD pipelines to catch issues early.</li>
          <li>Organize tests into unit, integration, and end-to-end categories.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Testing frameworks like Jest and Mocha simplify writing unit and integration tests.</li>
          <li>Unit tests validate individual components, while integration tests ensure interactions between components work as expected.</li>
          <li>Consistent testing practices improve code quality and application reliability.</li>
        </ul>

        <Bottom back="/nodejs/file-uploads" next="/nodejs/deployment" />
      </div>
    </div>
  );
};

export default NodeJsTesting;
