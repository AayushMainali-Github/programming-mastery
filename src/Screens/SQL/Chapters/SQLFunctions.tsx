import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SQLFunctions = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">SQL Functions</div>
        <div className="description">
          SQL provides aggregate functions to perform calculations on a set of rows and return a single value. This chapter introduces commonly used aggregate functions such as
          `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`.
        </div>

        <div className="subHeader">1. COUNT</div>
        <div className="description">The `COUNT` function returns the number of rows that match a condition. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT COUNT(column_name)
FROM table_name
WHERE condition;`}</Code>
        <div className="description">Example: Count the number of employees in the `employees` table:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT COUNT(*) AS total_employees
FROM employees;`}</Code>

        <div className="subHeader">2. SUM</div>
        <div className="description">The `SUM` function calculates the total of a numeric column. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT SUM(column_name)
FROM table_name
WHERE condition;`}</Code>
        <div className="description">Example: Calculate the total salary of all employees:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT SUM(salary) AS total_salary
FROM employees;`}</Code>

        <div className="subHeader">3. AVG</div>
        <div className="description">The `AVG` function calculates the average of a numeric column. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT AVG(column_name)
FROM table_name
WHERE condition;`}</Code>
        <div className="description">Example: Find the average salary of employees in the `Sales` department:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT AVG(salary) AS average_salary
FROM employees
WHERE department = 'Sales';`}</Code>

        <div className="subHeader">4. MIN</div>
        <div className="description">The `MIN` function returns the smallest value in a column. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT MIN(column_name)
FROM table_name
WHERE condition;`}</Code>
        <div className="description">Example: Find the lowest salary in the company:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT MIN(salary) AS lowest_salary
FROM employees;`}</Code>

        <div className="subHeader">5. MAX</div>
        <div className="description">The `MAX` function returns the largest value in a column. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT MAX(column_name)
FROM table_name
WHERE condition;`}</Code>
        <div className="description">Example: Find the highest salary in the company:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT MAX(salary) AS highest_salary
FROM employees;`}</Code>

        <div className="subHeader">Combining Aggregate Functions</div>
        <div className="description">You can combine multiple aggregate functions in a single query. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT COUNT(*) AS total_employees,
       SUM(salary) AS total_salary,
       AVG(salary) AS average_salary,
       MIN(salary) AS lowest_salary,
       MAX(salary) AS highest_salary
FROM employees;`}</Code>
        <div className="description">This query provides a comprehensive overview of employee salaries.</div>

        <div className="subHeader">Using GROUP BY with Aggregate Functions</div>
        <div className="description">Aggregate functions can be used with the `GROUP BY` clause to calculate results for each group. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT department, COUNT(*) AS total_employees, AVG(salary) AS average_salary
FROM employees
GROUP BY department;`}</Code>
        <div className="description">This groups employees by department and calculates the total number of employees and the average salary for each department.</div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use meaningful aliases (`AS`) to make results easier to understand.</li>
          <li>Test aggregate queries on smaller datasets to verify correctness.</li>
          <li>When combining aggregate functions with `GROUP BY`, ensure the grouped columns are correctly defined.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Aggregate functions like `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX` summarize data in useful ways.</li>
          <li>These functions can be combined in a single query for detailed insights.</li>
          <li>Pair aggregate functions with `GROUP BY` for grouped calculations.</li>
          <li>Best practices help ensure efficient and accurate results when using aggregate functions.</li>
        </ul>

        <Bottom back="/sql/sorting-data" next="/sql/joins-basics" />
      </div>
    </div>
  );
};

export default SQLFunctions;
