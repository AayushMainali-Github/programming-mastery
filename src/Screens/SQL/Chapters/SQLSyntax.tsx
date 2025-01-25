import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SQLSyntax = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">SQL Syntax</div>
        <div className="description">
          SQL (Structured Query Language) has a standard syntax that allows users to interact with relational databases. This chapter introduces the basic structure, keywords, and
          conventions of SQL.
        </div>

        <div className="subHeader">Basic SQL Structure</div>
        <div className="description">An SQL statement generally consists of the following components:</div>
        <ul className="list">
          <li>
            <b>Keywords:</b> Commands or instructions (e.g., `SELECT`, `INSERT`, `WHERE`).
          </li>
          <li>
            <b>Identifiers:</b> Names of database objects like tables or columns.
          </li>
          <li>
            <b>Clauses:</b> Conditions or modifiers (e.g., `WHERE`, `ORDER BY`).
          </li>
          <li>
            <b>Expressions:</b> Combinations of values, columns, and operators.
          </li>
        </ul>
        <div className="description">Example SQL Query:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name
FROM employees
WHERE department = 'HR'
ORDER BY last_name ASC;`}</Code>

        <div className="subHeader">Common SQL Keywords</div>
        <div className="description">SQL includes a wide range of keywords. Here are some of the most commonly used:</div>
        <ul className="list">
          <li>
            <b>SELECT:</b> Retrieves data from a database.
          </li>
          <li>
            <b>FROM:</b> Specifies the table to query.
          </li>
          <li>
            <b>WHERE:</b> Filters results based on conditions.
          </li>
          <li>
            <b>INSERT INTO:</b> Adds new records to a table.
          </li>
          <li>
            <b>UPDATE:</b> Modifies existing records.
          </li>
          <li>
            <b>DELETE:</b> Removes records from a table.
          </li>
          <li>
            <b>ORDER BY:</b> Sorts query results by specified columns.
          </li>
          <li>
            <b>GROUP BY:</b> Groups rows with similar values for aggregate functions.
          </li>
          <li>
            <b>JOIN:</b> Combines rows from two or more tables based on a related column.
          </li>
        </ul>

        <div className="subHeader">SQL Conventions</div>
        <div className="description">Following conventions helps maintain consistency and readability:</div>
        <ul className="list">
          <li>
            <b>Keywords:</b> Write in uppercase (e.g., `SELECT`, `FROM`).
          </li>
          <li>
            <b>Indentation:</b> Use proper indentation to format queries for better readability.
          </li>
          <li>
            <b>Comments:</b> Add comments to explain complex queries:
            <Code language="sql" style={materialDark} showLineNumbers>{`-- This is a single-line comment
/*
  This is a
  multi-line comment
*/`}</Code>
          </li>
        </ul>

        <div className="subHeader">SQL Statement Types</div>
        <div className="description">SQL is divided into different types of statements:</div>
        <ul className="list">
          <li>
            <b>Data Query Language (DQL):</b> Used to query data (e.g., `SELECT`).
          </li>
          <li>
            <b>Data Definition Language (DDL):</b> Defines and modifies database structures (e.g., `CREATE`, `ALTER`, `DROP`).
          </li>
          <li>
            <b>Data Manipulation Language (DML):</b> Manipulates data in tables (e.g., `INSERT`, `UPDATE`, `DELETE`).
          </li>
          <li>
            <b>Data Control Language (DCL):</b> Controls access to data (e.g., `GRANT`, `REVOKE`).
          </li>
        </ul>

        <div className="subHeader">Best Practices for Writing SQL</div>
        <ul className="list">
          <li>Use proper indentation and line breaks for readability.</li>
          <li>Avoid using `SELECT *`; specify the required columns explicitly.</li>
          <li>Use aliases to shorten table or column names for clarity (e.g., `emp AS e`).</li>
          <li>Filter data early in the query to improve performance.</li>
          <li>Test queries on sample datasets before applying them to production data.</li>
        </ul>

        <div className="subHeader">Example Query Explained</div>
        <div className="description">Let’s break down the following query:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, salary
FROM employees
WHERE salary > 50000
ORDER BY salary DESC;`}</Code>
        <ul className="list">
          <li>
            <b>SELECT:</b> Specifies the columns to retrieve (`first_name`, `last_name`, `salary`).
          </li>
          <li>
            <b>FROM:</b> Indicates the source table (`employees`).
          </li>
          <li>
            <b>WHERE:</b> Filters rows where `salary &gt; 50000`.
          </li>
          <li>
            <b>ORDER BY:</b> Sorts results by `salary` in descending order.
          </li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>SQL statements consist of keywords, clauses, and expressions.</li>
          <li>Following conventions like uppercase keywords and indentation improves readability.</li>
          <li>Understanding the basic structure of SQL queries is essential for working with databases.</li>
        </ul>

        <Bottom back="/sql/database-basics" next="/sql/data-types" />
      </div>
    </div>
  );
};

export default SQLSyntax;
