import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const WindowFunctions = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Window Functions</div>
        <div className="description">
          Window functions in SQL allow for advanced analytics by performing calculations across a specific "window" of rows. Unlike aggregate functions, window functions retain
          individual row details while applying computations.
        </div>

        <div className="subHeader">What are Window Functions?</div>
        <div className="description">
          Window functions operate over a defined subset of rows (a "window") rather than the entire dataset. They use the `OVER()` clause to specify how rows are grouped and
          ordered within the window.
        </div>

        <div className="subHeader">Syntax of a Window Function</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column_name, 
       window_function() OVER (
           PARTITION BY column_name 
           ORDER BY column_name
       ) AS computed_value
FROM table_name;`}</Code>

        <div className="subHeader">Using PARTITION BY</div>
        <div className="description">The `PARTITION BY` clause divides the result set into partitions where the function is applied. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT employee_id, department, salary,
       AVG(salary) OVER (PARTITION BY department) AS avg_department_salary
FROM employees;`}</Code>
        <div className="description">This query calculates the average salary within each department while displaying individual salaries.</div>

        <div className="subHeader">Using ORDER BY in Window Functions</div>
        <div className="description">The `ORDER BY` clause within `OVER()` defines the order of rows within each partition. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT employee_id, department, salary,
       RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank_in_department
FROM employees;`}</Code>
        <div className="description">This query ranks employees by salary within each department.</div>

        <div className="subHeader">Ranking Functions</div>
        <div className="description">Ranking functions assign a rank to each row based on the `ORDER BY` clause.</div>
        <ul className="list">
          <li>
            <b>RANK():</b> Assigns a unique rank but skips ranks for ties.
          </li>
          <li>
            <b>DENSE_RANK():</b> Assigns a unique rank without skipping values.
          </li>
          <li>
            <b>ROW_NUMBER():</b> Assigns a unique row number, even for duplicate values.
          </li>
        </ul>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT employee_id, salary,
       RANK() OVER (ORDER BY salary DESC) AS rank,
       DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank,
       ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num
FROM employees;`}</Code>

        <div className="subHeader">Aggregating with Window Functions</div>
        <div className="description">Window functions support aggregate calculations without collapsing rows. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT employee_id, department, salary,
       SUM(salary) OVER (PARTITION BY department) AS total_salary
FROM employees;`}</Code>
        <div className="description">This query calculates the total salary per department while retaining individual employee details.</div>

        <div className="subHeader">Moving Averages with Window Functions</div>
        <div className="description">Window functions can compute rolling averages using `ROWS BETWEEN`. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT employee_id, salary,
       AVG(salary) OVER (ORDER BY employee_id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg
FROM employees;`}</Code>

        <div className="subHeader">Advantages of Window Functions</div>
        <ul className="list">
          <li>
            <b>Preserves Individual Rows:</b> Unlike `GROUP BY`, window functions retain all rows.
          </li>
          <li>
            <b>Supports Advanced Analytics:</b> Enables ranking, moving averages, and cumulative totals.
          </li>
          <li>
            <b>Optimized Performance:</b> Reduces the need for complex self-joins and subqueries.
          </li>
        </ul>

        <div className="subHeader">Limitations of Window Functions</div>
        <ul className="list">
          <li>
            <b>Performance Impact:</b> Window functions can slow down queries for large datasets.
          </li>
          <li>
            <b>Not Supported in All Databases:</b> Some older SQL databases do not support window functions.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use `PARTITION BY` carefully to avoid unnecessary calculations.</li>
          <li>Leverage ranking functions for performance optimization.</li>
          <li>Use `ROWS BETWEEN` for precise windowing in rolling calculations.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Window functions allow advanced row-wise analytics while preserving row data.</li>
          <li>`PARTITION BY` defines the scope of calculations.</li>
          <li>`ORDER BY` determines row processing order.</li>
          <li>Ranking functions like `RANK()`, `DENSE_RANK()`, and `ROW_NUMBER()` help sort data efficiently.</li>
        </ul>

        <Bottom back="/sql/import-export-data" next="/sql/common-table-expressions" />
      </div>
    </div>
  );
};

export default WindowFunctions;
