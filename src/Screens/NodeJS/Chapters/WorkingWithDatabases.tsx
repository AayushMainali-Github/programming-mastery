import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const WorkingWithDatabases = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Working with Databases</div>
        <div className="description">
          Node.js can interact with various databases like MongoDB and MySQL to perform CRUD (Create, Read, Update, Delete) operations. This chapter explains how to connect Node.js
          to these databases and demonstrates CRUD operations for each.
        </div>

        <div className="subHeader">Connecting to MongoDB</div>
        <div className="description">MongoDB is a NoSQL database that stores data in a JSON-like format. Use the `mongoose` library for easier interaction with MongoDB.</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm install mongoose`}</Code>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Define a schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

// CRUD Operations
// Create
const createUser = async () => {
  const user = new User({ name: 'John Doe', email: 'john@example.com', age: 30 });
  await user.save();
  console.log('User created:', user);
};

// Read
const getUsers = async () => {
  const users = await User.find();
  console.log('Users:', users);
};

// Update
const updateUser = async (id) => {
  const user = await User.findByIdAndUpdate(id, { age: 35 }, { new: true });
  console.log('User updated:', user);
};

// Delete
const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  console.log('User deleted');
};

// Call these functions as needed
createUser();
getUsers();`}</Code>

        <div className="subHeader">Connecting to MySQL</div>
        <div className="description">MySQL is a popular relational database. Use the `mysql2` library for connecting Node.js to MySQL.</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm install mysql2`}</Code>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const mysql = require('mysql2');

// Create a connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydatabase',
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// CRUD Operations
// Create
connection.query(
  'INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
  ['Jane Doe', 'jane@example.com', 28],
  (err, results) => {
    if (err) console.error('Insert error:', err);
    else console.log('User created:', results);
  }
);

// Read
connection.query('SELECT * FROM users', (err, results) => {
  if (err) console.error('Select error:', err);
  else console.log('Users:', results);
});

// Update
connection.query(
  'UPDATE users SET age = ? WHERE id = ?',
  [32, 1],
  (err, results) => {
    if (err) console.error('Update error:', err);
    else console.log('User updated:', results);
  }
);

// Delete
connection.query('DELETE FROM users WHERE id = ?', [1], (err, results) => {
  if (err) console.error('Delete error:', err);
  else console.log('User deleted:', results);
});`}</Code>

        <div className="subHeader">Choosing the Right Database</div>
        <div className="description">Consider the following when choosing between MongoDB and MySQL:</div>
        <ul className="list">
          <li>
            <b>MongoDB:</b> Best for unstructured or semi-structured data, scalable NoSQL database.
          </li>
          <li>
            <b>MySQL:</b> Ideal for structured data and relational operations.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use environment variables to store sensitive information like database credentials.</li>
          <li>Use ORM libraries like `mongoose` (for MongoDB) or `Sequelize` (for MySQL) to simplify database operations.</li>
          <li>Always handle connection errors and implement retry logic for production systems.</li>
          <li>Validate data before saving to the database to ensure consistency and security.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>MongoDB and MySQL are popular databases that integrate well with Node.js.</li>
          <li>`mongoose` and `mysql2` libraries simplify working with these databases.</li>
          <li>CRUD operations are the foundation of database interactions in web applications.</li>
        </ul>

        <Bottom back="/nodejs/restful-apis" next="/nodejs/authentication-and-authorization" />
      </div>
    </div>
  );
};

export default WorkingWithDatabases;
