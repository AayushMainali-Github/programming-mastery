import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const StreamsAndBuffers = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Streams and Buffers</div>
        <div className="description">
          Streams and Buffers in Node.js provide efficient ways to read and write large amounts of data, such as files, network requests, or any I/O operation. In this chapter,
          we’ll explore how to use Streams and Buffers for handling data efficiently.
        </div>

        <div className="subHeader">What are Streams?</div>
        <div className="description">
          A Stream in Node.js is an abstract interface for working with streaming data. Streams process data in chunks, making them memory-efficient for large datasets.
        </div>
        <ul className="list">
          <li>
            <b>Readable Streams:</b> Used for reading data, e.g., reading from a file.
          </li>
          <li>
            <b>Writable Streams:</b> Used for writing data, e.g., writing to a file.
          </li>
          <li>
            <b>Duplex Streams:</b> Can read and write data, e.g., network sockets.
          </li>
          <li>
            <b>Transform Streams:</b> Modify or transform data as it passes through.
          </li>
        </ul>

        <div className="subHeader">Reading Data with Readable Streams</div>
        <div className="description">Use readable streams to read large files efficiently:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('largefile.txt', { encoding: 'utf8' });

// Listen for 'data' events to read chunks
readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

// Handle errors
readableStream.on('error', (err) => {
  console.error('Error:', err);
});

// Detect end of stream
readableStream.on('end', () => {
  console.log('Stream reading completed.');
});`}</Code>

        <div className="subHeader">Writing Data with Writable Streams</div>
        <div className="description">Use writable streams to write data in chunks:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const fs = require('fs');

// Create a writable stream
const writableStream = fs.createWriteStream('output.txt');

// Write chunks of data
writableStream.write('Hello, ');
writableStream.write('World!');
writableStream.end(); // Signal end of writing

// Handle events
writableStream.on('finish', () => {
  console.log('Stream writing completed.');
});

writableStream.on('error', (err) => {
  console.error('Error:', err);
});`}</Code>

        <div className="subHeader">Piping Streams</div>
        <div className="description">The `pipe` method connects a readable stream to a writable stream, allowing data to flow seamlessly between them.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const fs = require('fs');

// Pipe a readable stream to a writable stream
const readableStream = fs.createReadStream('largefile.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);

readableStream.on('end', () => {
  console.log('Data piping completed.');
});`}</Code>

        <div className="subHeader">What are Buffers?</div>
        <div className="description">
          A Buffer is a temporary storage area for binary data. It is useful when working with raw binary streams of data, such as reading from or writing to files or network
          streams.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Create a buffer
const buffer = Buffer.from('Hello, World!');

// Access buffer data
console.log(buffer.toString()); // Outputs: Hello, World!
console.log(buffer.length);    // Outputs: 13 (number of bytes)

// Modify buffer data
buffer[0] = 72; // ASCII code for 'H'
console.log(buffer.toString()); // Outputs: Hello, World!`}</Code>

        <div className="subHeader">Combining Streams and Buffers</div>
        <div className="description">Streams and Buffers can work together to handle data efficiently. For example, you can process binary files using Buffers in a stream:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('image.jpg');

// Handle binary data with Buffers
readableStream.on('data', (chunk) => {
  console.log('Received buffer:', chunk);
});`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use streams for large datasets to minimize memory usage.</li>
          <li>Always handle errors with `.on('error', callback)` to avoid crashes.</li>
          <li>Use `pipe()` for simpler and more readable code when connecting streams.</li>
          <li>Work with Buffers when dealing with binary or raw data.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Streams process data in chunks, making them memory-efficient for large datasets.</li>
          <li>Buffers handle raw binary data and are essential for low-level I/O operations.</li>
          <li>Using `pipe()` simplifies the flow of data between readable and writable streams.</li>
        </ul>

        <Bottom back="/nodejs/asynchronous-programming-basics" next="/nodejs/expressjs-basics" />
      </div>
    </div>
  );
};

export default StreamsAndBuffers;
