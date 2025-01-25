import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DatabaseBasics = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Database Basics</div>
        <div className="description">
          Databases are an integral part of modern applications. In this chapter, we’ll cover the foundational concepts of databases, tables, rows, and columns.
        </div>

        <div className="subHeader">What is a Database?</div>
        <div className="description">
          A database is an organized collection of data that can be stored, managed, and retrieved electronically. It allows users to efficiently store and access information.
          Common types of databases include:
        </div>
        <ul className="list">
          <li>
            <b>Relational Databases:</b> Use tables to store data (e.g., MySQL, PostgreSQL).
          </li>
          <li>
            <b>NoSQL Databases:</b> Use flexible structures like JSON or key-value pairs (e.g., MongoDB).
          </li>
          <li>
            <b>In-Memory Databases:</b> Store data in memory for fast access (e.g., Redis).
          </li>
        </ul>

        <div className="subHeader">Tables</div>
        <div className="description">A table is a collection of related data organized into rows and columns. Each table represents a single entity or concept.</div>
        <div className="description">
          Example: A table named <b>employees</b> might look like this:
        </div>
        <Code language="plaintext" style={materialDark} showLineNumbers>{`+----+------------+-----------+--------+
| ID | First Name | Last Name | Salary |
+----+------------+-----------+--------+
|  1 | John       | Doe       | 50000  |
|  2 | Jane       | Smith     | 60000  |
|  3 | Alice      | Johnson   | 70000  |
+----+------------+-----------+--------+`}</Code>

        <div className="subHeader">Rows</div>
        <div className="description">Rows (or records) represent individual entries in a table. Each row contains data for one specific instance of the entity.</div>
        <div className="description">
          Example: In the <b>employees</b> table, the first row represents an employee with the following details:
        </div>
        <ul className="list">
          <li>
            <b>ID:</b> 1
          </li>
          <li>
            <b>First Name:</b> John
          </li>
          <li>
            <b>Last Name:</b> Doe
          </li>
          <li>
            <b>Salary:</b> 50000
          </li>
        </ul>

        <div className="subHeader">Columns</div>
        <div className="description">Columns define the structure of the data stored in a table. Each column has a name and a specific data type.</div>
        <div className="description">
          Example: In the <b>employees</b> table, columns include:
        </div>
        <ul className="list">
          <li>
            <b>ID:</b> An integer representing the employee's unique identifier.
          </li>
          <li>
            <b>First Name:</b> A string for the employee's first name.
          </li>
          <li>
            <b>Last Name:</b> A string for the employee's last name.
          </li>
          <li>
            <b>Salary:</b> A number representing the employee's salary.
          </li>
        </ul>

        <div className="subHeader">Primary Components of a Table</div>
        <ul className="list">
          <li>
            <b>Rows:</b> Hold individual records or data entries.
          </li>
          <li>
            <b>Columns:</b> Define attributes or properties of the data.
          </li>
          <li>
            <b>Primary Key:</b> A unique identifier for each row (e.g., the <b>ID</b> column).
          </li>
          <li>
            <b>Foreign Key:</b> A reference to a column in another table to establish relationships.
          </li>
        </ul>

        <div className="subHeader">How Tables Work Together</div>
        <div className="description">In relational databases, tables can be connected using keys to model relationships between entities. For example:</div>
        <ul className="list">
          <li>
            A table <b>departments</b> could store department details.
          </li>
          <li>
            The <b>employees</b> table might include a column <b>department_id</b> that links each employee to their department.
          </li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Databases organize and store data in a structured way.</li>
          <li>Tables contain rows (records) and columns (fields) to represent data.</li>
          <li>Primary and foreign keys link tables and ensure data consistency.</li>
          <li>Understanding these basics is essential for working with SQL effectively.</li>
        </ul>

        <Bottom back="/sql/introduction-to-sql" next="/sql/sql-syntax" />
      </div>
    </div>
  );
};

export default DatabaseBasics;
