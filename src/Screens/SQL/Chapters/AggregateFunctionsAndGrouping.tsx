import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AggregateFunctionsGrouping = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Aggregate Functions and Grouping</div>
        <div className="description">
          SQL provides aggregate functions to perform calculations on a group of rows and return a single result. The `GROUP BY` clause is used to group rows that have the same
          values in specified columns, while `HAVING` filters grouped results.
        </div>

        <div className="subHeader">1. GROUP BY Clause</div>
        <div className="description">The `GROUP BY` clause is used with aggregate functions to group records. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1;`}</Code>
        <div className="description">Example: Count the number of employees in each department:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT department, COUNT(*) AS total_employees
FROM employees
GROUP BY department;`}</Code>

        <div className="subHeader">2. Common Aggregate Functions with GROUP BY</div>
        <div className="description">Aggregate functions used with `GROUP BY` include:</div>
        <ul className="list">
          <li>
            <b>COUNT:</b> Counts rows in a group.
          </li>
          <li>
            <b>SUM:</b> Calculates the total sum of a column.
          </li>
          <li>
            <b>AVG:</b> Computes the average value in a column.
          </li>
          <li>
            <b>MIN:</b> Finds the smallest value in a group.
          </li>
          <li>
            <b>MAX:</b> Finds the largest value in a group.
          </li>
        </ul>
        <div className="description">Example: Calculate the average salary per department:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT department, AVG(salary) AS average_salary
FROM employees
GROUP BY department;`}</Code>

        <div className="subHeader">3. Filtering Groups with HAVING</div>
        <div className="description">The `HAVING` clause filters grouped records, similar to `WHERE`, but is used with aggregate functions. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1
HAVING condition;`}</Code>
        <div className="description">Example: Retrieve departments where the average salary is greater than 60,000:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT department, AVG(salary) AS average_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 60000;`}</Code>

        <div className="subHeader">4. GROUP BY with Multiple Columns</div>
        <div className="description">Multiple columns can be used in `GROUP BY` to create hierarchical groupings. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT department, job_title, COUNT(*) AS total_employees
FROM employees
GROUP BY department, job_title;`}</Code>
        <div className="description">This groups employees first by department and then by job title.</div>

        <div className="subHeader">5. GROUP BY with ORDER BY</div>
        <div className="description">The results of `GROUP BY` can be sorted using `ORDER BY`. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT department, COUNT(*) AS total_employees
FROM employees
GROUP BY department
ORDER BY total_employees DESC;`}</Code>
        <div className="description">This sorts departments based on the number of employees in descending order.</div>

        <div className="subHeader">6. GROUP BY vs. DISTINCT</div>
        <div className="description">The `DISTINCT` keyword is used to retrieve unique values, while `GROUP BY` is used for aggregation. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT DISTINCT department FROM employees; -- Retrieves unique departments`}</Code>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT department, COUNT(*) FROM employees GROUP BY department; -- Counts employees per department`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use `GROUP BY` when working with aggregate functions.</li>
          <li>Always use `HAVING` instead of `WHERE` when filtering aggregated data.</li>
          <li>Be mindful of performance when using `GROUP BY` on large datasets.</li>
          <li>Ensure that all non-aggregated columns in `SELECT` are included in `GROUP BY`.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>`GROUP BY` groups records and applies aggregate functions.</li>
          <li>Aggregate functions like `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX` summarize data.</li>
          <li>`HAVING` filters grouped results based on conditions.</li>
          <li>Sorting grouped results with `ORDER BY` improves readability.</li>
        </ul>

        <Bottom back="/sql/subqueries" next="/sql/indexing" />
      </div>
    </div>
  );
};

export default AggregateFunctionsGrouping;
