import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SelectingData = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Selecting Data</div>
        <div className="description">
          The `SELECT` statement is one of the most commonly used SQL commands. It retrieves data from a database table. In this chapter, we'll explore how to use `SELECT` and
          filter results using the `WHERE` clause.
        </div>

        <div className="subHeader">Basic SELECT Statement</div>
        <div className="description">The `SELECT` statement retrieves all or specific columns from a table. Basic syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table_name;`}</Code>
        <div className="description">Example: Retrieve all columns from the `employees` table:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT * 
FROM employees;`}</Code>

        <div className="subHeader">Selecting Specific Columns</div>
        <div className="description">To retrieve specific columns, list their names in the query:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, salary
FROM employees;`}</Code>

        <div className="subHeader">Using the WHERE Clause</div>
        <div className="description">The `WHERE` clause filters data based on conditions. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table_name
WHERE condition;`}</Code>
        <div className="description">Example: Retrieve employees with a salary greater than 50,000:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, salary
FROM employees
WHERE salary > 50000;`}</Code>

        <div className="subHeader">Using Comparison Operators</div>
        <div className="description">The `WHERE` clause supports comparison operators for filtering:</div>
        <ul className="list">
          <li>
            <b>=</b>: Equal to
          </li>
          <li>
            <b>!=</b> or <b>{`<>`}</b>: Not equal to
          </li>
          <li>
            <b>&gt;</b>: Greater than
          </li>
          <li>
            <b>&lt;</b>: Less than
          </li>
          <li>
            <b>&gt;=</b>: Greater than or equal to
          </li>
          <li>
            <b>&lt;=</b>: Less than or equal to
          </li>
        </ul>
        <div className="description">Example: Retrieve employees hired after 2025-01-01:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, hire_date
FROM employees
WHERE hire_date > '2025-01-01';`}</Code>

        <div className="subHeader">Combining Conditions with AND/OR</div>
        <div className="description">Combine multiple conditions using `AND` or `OR`:</div>
        <ul className="list">
          <li>
            <b>AND:</b> All conditions must be true.
          </li>
          <li>
            <b>OR:</b> At least one condition must be true.
          </li>
        </ul>
        <div className="description">Example: Retrieve employees in the HR or Sales departments with a salary greater than 60,000:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, department, salary
FROM employees
WHERE (department = 'HR' OR department = 'Sales') 
  AND salary > 60000;`}</Code>

        <div className="subHeader">Using Wildcards with LIKE</div>
        <div className="description">The `LIKE` operator is used for pattern matching. Wildcards:</div>
        <ul className="list">
          <li>
            <b>%</b>: Matches zero or more characters.
          </li>
          <li>
            <b>_</b>: Matches a single character.
          </li>
        </ul>
        <div className="description">Example: Retrieve employees whose first name starts with 'J':</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name
FROM employees
WHERE first_name LIKE 'J%';`}</Code>

        <div className="subHeader">Filtering with IN</div>
        <div className="description">The `IN` operator checks if a value matches any value in a list:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, department
FROM employees
WHERE department IN ('HR', 'Sales', 'IT');`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use `SELECT *` sparingly; specify columns to retrieve only the data you need.</li>
          <li>Test your `WHERE` clause on small datasets before applying it to large tables.</li>
          <li>Combine filters logically to narrow down results effectively.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>The `SELECT` statement retrieves data from tables.</li>
          <li>The `WHERE` clause filters results based on specific conditions.</li>
          <li>Comparison operators, `AND`, `OR`, `LIKE`, and `IN` provide flexible filtering options.</li>
          <li>Writing efficient queries improves performance and readability.</li>
        </ul>

        <Bottom back="/sql/inserting-data" next="/sql/updating-data" />
      </div>
    </div>
  );
};

export default SelectingData;
