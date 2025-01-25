import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BasicFiltering = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Basic Filtering</div>
        <div className="description">
          Filtering is an essential part of working with SQL queries. The `WHERE` clause is used to filter rows based on conditions, and logical operators like `AND`, `OR`, and
          `NOT` help refine these conditions. This chapter covers the basics of filtering in SQL.
        </div>

        <div className="subHeader">The WHERE Clause</div>
        <div className="description">The `WHERE` clause filters rows based on a specified condition. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table_name
WHERE condition;`}</Code>
        <div className="description">Example: Retrieve employees with a salary greater than 50,000:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, salary
FROM employees
WHERE salary > 50000;`}</Code>

        <div className="subHeader">Using AND Operator</div>
        <div className="description">The `AND` operator combines multiple conditions, and all conditions must be true for a row to be included. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2;`}</Code>
        <div className="description">Example: Retrieve employees in the HR department with a salary greater than 50,000:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, department, salary
FROM employees
WHERE department = 'HR' AND salary > 50000;`}</Code>

        <div className="subHeader">Using OR Operator</div>
        <div className="description">The `OR` operator combines conditions, and at least one condition must be true for a row to be included. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2;`}</Code>
        <div className="description">Example: Retrieve employees in either the HR or Sales departments:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, department
FROM employees
WHERE department = 'HR' OR department = 'Sales';`}</Code>

        <div className="subHeader">Using NOT Operator</div>
        <div className="description">The `NOT` operator negates a condition, returning rows where the condition is false. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;`}</Code>
        <div className="description">Example: Retrieve employees who are not in the IT department:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, department
FROM employees
WHERE NOT department = 'IT';`}</Code>

        <div className="subHeader">Combining AND, OR, and NOT</div>
        <div className="description">
          Logical operators can be combined to create complex filtering conditions. Use parentheses to group conditions and control precedence. Example:
        </div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, department, salary
FROM employees
WHERE (department = 'HR' OR department = 'Sales') 
  AND salary > 60000
  AND NOT last_name = 'Doe';`}</Code>
        <div className="description">
          This query retrieves employees in the HR or Sales departments with a salary greater than 60,000, excluding those with the last name "Doe."
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use parentheses to group conditions and clarify precedence when combining `AND`, `OR`, and `NOT`.</li>
          <li>Test your filters with small datasets before running them on large tables.</li>
          <li>Avoid overly complex conditions that may reduce query readability and performance.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>The `WHERE` clause filters rows based on specified conditions.</li>
          <li>Logical operators `AND`, `OR`, and `NOT` allow for advanced filtering.</li>
          <li>Parentheses help control the precedence of conditions and ensure correct query results.</li>
          <li>Testing and simplifying conditions improves query performance and readability.</li>
        </ul>

        <Bottom back="/sql/deleting-data" next="/sql/sorting-data" />
      </div>
    </div>
  );
};

export default BasicFiltering;
