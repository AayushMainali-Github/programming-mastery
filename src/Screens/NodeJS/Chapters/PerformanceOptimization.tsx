import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const PerformanceOptimization = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Performance Optimization</div>
        <div className="description">
          Performance optimization ensures your Node.js applications run efficiently under heavy loads. This chapter focuses on two key techniques: caching and load balancing.
        </div>

        <div className="subHeader">What is Caching?</div>
        <div className="description">
          Caching stores frequently accessed data in memory for faster retrieval, reducing the load on your application and database. Popular tools for caching include Redis and
          in-memory caching mechanisms.
        </div>

        <div className="subHeader">Implementing Caching with Redis</div>
        <div className="description">Redis is an in-memory data store that is widely used for caching. To use Redis with Node.js:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Install Redis and the Redis client library
npm install redis`}</Code>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const redis = require('redis');
const client = redis.createClient();

// Connect to Redis
client.on('connect', () => {
  console.log('Connected to Redis');
});

// Caching example
const fetchData = async (key) => {
  client.get(key, (err, data) => {
    if (err) throw err;

    if (data) {
      console.log('Cache hit:', data);
    } else {
      const fetchedData = 'Fetched from source'; // Simulate data fetching
      client.set(key, fetchedData, 'EX', 3600); // Cache data for 1 hour
      console.log('Cache miss. Data stored in cache:', fetchedData);
    }
  });
};

fetchData('exampleKey');`}</Code>

        <div className="subHeader">Using In-Memory Caching</div>
        <div className="description">For small-scale applications, in-memory caching using a JavaScript object is simple and effective:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const cache = {};

const fetchData = (key) => {
  if (cache[key]) {
    console.log('Cache hit:', cache[key]);
  } else {
    const fetchedData = 'Fetched from source'; // Simulate data fetching
    cache[key] = fetchedData;
    console.log('Cache miss. Data stored in cache:', fetchedData);
  }
};

fetchData('exampleKey');`}</Code>

        <div className="subHeader">What is Load Balancing?</div>
        <div className="description">
          Load balancing distributes incoming traffic across multiple servers to prevent any single server from becoming a bottleneck. Load balancers ensure high availability and
          better application performance.
        </div>

        <div className="subHeader">Load Balancing with Node.js</div>
        <div className="description">
          Node.js applications can use tools like Nginx or PM2 to enable load balancing. Here’s how to set up a cluster using Node.js’s built-in `cluster` module:
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;

  console.log(\`Master process is running on PID: \${process.pid}\`);
  
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Log when workers exit
  cluster.on('exit', (worker) => {
    console.log(\`Worker \${worker.process.pid} exited. Starting a new worker...\`);
    cluster.fork();
  });
} else {
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    res.send(\`Response from worker \${process.pid}\`);
  });

  app.listen(3000, () => {
    console.log(\`Worker process running on PID: \${process.pid}\`);
  });
}`}</Code>

        <div className="subHeader">Best Practices for Optimization</div>
        <ul className="list">
          <li>Cache frequently accessed data to reduce database queries.</li>
          <li>Use a Content Delivery Network (CDN) for serving static assets.</li>
          <li>Enable Gzip compression to reduce payload size for responses.</li>
          <li>Optimize database queries and use indexes for better performance.</li>
          <li>Implement rate-limiting to prevent overloading the server.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Caching reduces load on the server by storing frequently accessed data.</li>
          <li>Redis is a powerful tool for implementing caching in Node.js applications.</li>
          <li>Load balancing ensures better distribution of traffic and high availability.</li>
          <li>Use clustering or external load balancers to scale Node.js applications.</li>
        </ul>

        <Bottom back="/nodejs/security-best-practices" next="/nodejs/advanced-topics" />
      </div>
    </div>
  );
};

export default PerformanceOptimization;
