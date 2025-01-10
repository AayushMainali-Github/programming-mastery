import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const FileSystemOperations = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">File System Operations</div>
        <div className="description">
          The `fs` (File System) module in Node.js provides functionality to interact with the file system. You can use it to read, write, delete, and perform other file-related
          operations. In this chapter, we’ll explore these capabilities with practical examples.
        </div>

        <div className="subHeader">Importing the `fs` Module</div>
        <div className="description">The `fs` module is a built-in Node.js module, so you don’t need to install it. Import it using:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const fs = require('fs');`}</Code>

        <div className="subHeader">Reading Files</div>
        <div className="description">Use the `fs.readFile` method to read files asynchronously:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});`}</Code>
        <div className="description">For synchronous file reading, use `fs.readFileSync`:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}`}</Code>

        <div className="subHeader">Writing Files</div>
        <div className="description">Use `fs.writeFile` to write data to a file asynchronously. If the file doesn’t exist, it will be created:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File written successfully.');
});`}</Code>
        <div className="description">For synchronous file writing, use `fs.writeFileSync`:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`try {
  fs.writeFileSync('output.txt', 'Synchronous write to Node.js file.');
  console.log('File written successfully.');
} catch (err) {
  console.error('Error writing to file:', err);
}`}</Code>

        <div className="subHeader">Appending to Files</div>
        <div className="description">Use `fs.appendFile` to add data to an existing file without overwriting it:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`fs.appendFile('output.txt', '\\nAppended text.', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Data appended successfully.');
});`}</Code>

        <div className="subHeader">Deleting Files</div>
        <div className="description">Use `fs.unlink` to delete a file asynchronously:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`fs.unlink('output.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully.');
});`}</Code>
        <div className="description">For synchronous file deletion, use `fs.unlinkSync`:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`try {
  fs.unlinkSync('output.txt');
  console.log('File deleted successfully.');
} catch (err) {
  console.error('Error deleting file:', err);
}`}</Code>

        <div className="subHeader">Checking File Existence</div>
        <div className="description">Use `fs.existsSync` to check if a file exists:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`if (fs.existsSync('example.txt')) {
  console.log('File exists.');
} else {
  console.log('File does not exist.');
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always handle errors when working with the file system to avoid crashes.</li>
          <li>Use asynchronous methods for better performance in I/O-heavy applications.</li>
          <li>Check file existence before performing operations like reading or deleting.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>The `fs` module provides powerful methods for file operations in Node.js.</li>
          <li>Use `fs.readFile`, `fs.writeFile`, and `fs.unlink` for common tasks like reading, writing, and deleting files.</li>
          <li>Prefer asynchronous methods for scalable applications, and handle errors gracefully.</li>
        </ul>

        <Bottom back="/nodejs/working-with-npm" next="/nodejs/http-server-basics" />
      </div>
    </div>
  );
};

export default FileSystemOperations;
