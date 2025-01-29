import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AdvancedFiltering = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Advanced Filtering</div>
        <div className="description">
          SQL provides advanced filtering techniques to refine query results. This chapter covers `IN`, `BETWEEN`, `LIKE`, and wildcards for pattern matching.
        </div>

        <div className="subHeader">1. Using IN</div>
        <div className="description">The `IN` operator filters records that match any value in a given list. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table_name
WHERE column_name IN (value1, value2, ...);`}</Code>
        <div className="description">Example: Retrieve employees who work in either the HR or Sales department:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, department
FROM employees
WHERE department IN ('HR', 'Sales');`}</Code>

        <div className="subHeader">2. Using BETWEEN</div>
        <div className="description">The `BETWEEN` operator filters values within a specified range (inclusive). Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table_name
WHERE column_name BETWEEN value1 AND value2;`}</Code>
        <div className="description">Example: Retrieve employees with salaries between 50,000 and 80,000:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, salary
FROM employees
WHERE salary BETWEEN 50000 AND 80000;`}</Code>
        <div className="description">Example: Retrieve employees hired between January 1, 2020, and December 31, 2023:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, hire_date
FROM employees
WHERE hire_date BETWEEN '2020-01-01' AND '2023-12-31';`}</Code>

        <div className="subHeader">3. Using LIKE and Wildcards</div>
        <div className="description">The `LIKE` operator is used for pattern matching. It is often used with wildcards:</div>
        <ul className="list">
          <li>
            <b>`%` (percent sign):</b> Matches zero or more characters.
          </li>
          <li>
            <b>`_` (underscore):</b> Matches exactly one character.
          </li>
        </ul>
        <div className="description">Example: Retrieve employees whose first names start with "J":</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name
FROM employees
WHERE first_name LIKE 'J%';`}</Code>
        <div className="description">Example: Retrieve employees whose first names contain "an":</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name
FROM employees
WHERE first_name LIKE '%an%';`}</Code>
        <div className="description">Example: Retrieve employees whose first name is exactly 4 characters long and starts with "A":</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name
FROM employees
WHERE first_name LIKE 'A___';`}</Code>

        <div className="subHeader">4. Combining IN, BETWEEN, and LIKE</div>
        <div className="description">Advanced filtering techniques can be combined for more refined queries. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, department, salary
FROM employees
WHERE department IN ('HR', 'Sales')
  AND salary BETWEEN 50000 AND 90000
  AND first_name LIKE 'J%';`}</Code>
        <div className="description">This retrieves employees in the HR or Sales department, with salaries between 50,000 and 90,000, whose first name starts with "J".</div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use `IN` for multiple specific values instead of multiple `OR` conditions.</li>
          <li>Use `BETWEEN` for numeric and date ranges.</li>
          <li>Use `LIKE` for flexible pattern matching but avoid excessive wildcards for performance reasons.</li>
          <li>Always validate pattern searches on a sample dataset before running them on large tables.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>The `IN` operator filters results based on a list of values.</li>
          <li>The `BETWEEN` operator filters values within a specified range.</li>
          <li>The `LIKE` operator with wildcards enables flexible pattern matching.</li>
          <li>Combining these filtering techniques allows for more precise queries.</li>
        </ul>

        <Bottom back="/sql/joins-basics" next="/sql/subqueries" />
      </div>
    </div>
  );
};

export default AdvancedFiltering;
