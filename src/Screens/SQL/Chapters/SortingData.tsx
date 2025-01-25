import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SortingData = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Sorting Data</div>
        <div className="description">
          The `ORDER BY` clause in SQL is used to sort query results based on one or more columns. This chapter explains how to use `ORDER BY` to organize data in ascending or
          descending order.
        </div>

        <div className="subHeader">Basic Syntax</div>
        <div className="description">The basic syntax for `ORDER BY` is:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table_name
ORDER BY column_name [ASC | DESC];`}</Code>
        <div className="description">
          - <b>`ASC`:</b> Sorts in ascending order (default).
          <br />- <b>`DESC`:</b> Sorts in descending order.
        </div>

        <div className="subHeader">Example: Sorting in Ascending Order</div>
        <div className="description">To sort employees by their first names in ascending order:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, salary
FROM employees
ORDER BY first_name ASC;`}</Code>

        <div className="subHeader">Example: Sorting in Descending Order</div>
        <div className="description">To sort employees by their salaries in descending order:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, salary
FROM employees
ORDER BY salary DESC;`}</Code>

        <div className="subHeader">Sorting by Multiple Columns</div>
        <div className="description">You can sort by multiple columns by listing them in the `ORDER BY` clause. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, department, salary
FROM employees
ORDER BY department ASC, salary DESC;`}</Code>
        <div className="description">
          This query sorts employees by department in ascending order. Within each department, employees are further sorted by salary in descending order.
        </div>

        <div className="subHeader">Sorting with Aliases</div>
        <div className="description">When using calculated columns or aliases, you can sort by the alias. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, salary, salary * 12 AS annual_salary
FROM employees
ORDER BY annual_salary DESC;`}</Code>
        <div className="description">This sorts employees by their annual salary, which is calculated as `salary * 12`.</div>

        <div className="subHeader">Sorting with NULL Values</div>
        <div className="description">By default, `NULL` values are sorted as the lowest values in ascending order and highest in descending order. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, salary
FROM employees
ORDER BY salary ASC;`}</Code>
        <div className="description">To customize the sorting of `NULL` values, use database-specific syntax such as:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, salary
FROM employees
ORDER BY salary ASC NULLS LAST;`}</Code>
        <div className="description">This places `NULL` values at the end when sorting in ascending order.</div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use explicit `ASC` or `DESC` for clarity, even though `ASC` is the default.</li>
          <li>Sort by indexed columns for better performance when working with large datasets.</li>
          <li>Use aliases for calculated columns to simplify your queries.</li>
          <li>Be cautious with `NULL` values and ensure sorting aligns with your requirements.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>The `ORDER BY` clause organizes query results based on one or more columns.</li>
          <li>Default sorting is in ascending order (`ASC`). Use `DESC` for descending order.</li>
          <li>Multiple columns can be used for hierarchical sorting.</li>
          <li>Sorting `NULL` values may require additional handling depending on the database system.</li>
        </ul>

        <Bottom back="/sql/basic-filtering" next="/sql/sql-functions" />
      </div>
    </div>
  );
};

export default SortingData;
