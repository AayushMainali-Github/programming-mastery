import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const JoinsBasics = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Joins Basics</div>
        <div className="description">
          SQL joins are used to combine data from two or more tables based on a related column. This chapter introduces the most common types of joins: `INNER JOIN`, `LEFT JOIN`,
          `RIGHT JOIN`, and `FULL OUTER JOIN`.
        </div>

        <div className="subHeader">1. INNER JOIN</div>
        <div className="description">The `INNER JOIN` retrieves records with matching values in both tables. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;`}</Code>
        <div className="description">Example: Combine employees and departments to display employee names and their department names:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT employees.first_name, employees.last_name, departments.department_name
FROM employees
INNER JOIN departments
ON employees.department_id = departments.department_id;`}</Code>

        <div className="subHeader">2. LEFT JOIN</div>
        <div className="description">
          The `LEFT JOIN` retrieves all records from the left table and the matched records from the right table. Non-matching records in the right table are returned as `NULL`.
          Syntax:
        </div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;`}</Code>
        <div className="description">Example: Display all employees and their department names, even if the employee is not assigned to a department:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT employees.first_name, employees.last_name, departments.department_name
FROM employees
LEFT JOIN departments
ON employees.department_id = departments.department_id;`}</Code>

        <div className="subHeader">3. RIGHT JOIN</div>
        <div className="description">
          The `RIGHT JOIN` retrieves all records from the right table and the matched records from the left table. Non-matching records in the left table are returned as `NULL`.
          Syntax:
        </div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;`}</Code>
        <div className="description">Example: Display all departments and their employees, even if no employees are assigned to a department:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT departments.department_name, employees.first_name, employees.last_name
FROM employees
RIGHT JOIN departments
ON employees.department_id = departments.department_id;`}</Code>

        <div className="subHeader">4. FULL OUTER JOIN</div>
        <div className="description">The `FULL OUTER JOIN` retrieves all records from both tables. Non-matching records in either table are returned as `NULL`. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name;`}</Code>
        <div className="description">Example: Display all employees and departments, including those without matches:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT employees.first_name, employees.last_name, departments.department_name
FROM employees
FULL OUTER JOIN departments
ON employees.department_id = departments.department_id;`}</Code>

        <div className="subHeader">Visualizing Joins</div>
        <div className="description">Here's how the different types of joins work:</div>
        <ul className="list">
          <li>
            <b>INNER JOIN:</b> Intersection of two tables (matching records only).
          </li>
          <li>
            <b>LEFT JOIN:</b> All records from the left table, with matches from the right table (non-matching right table rows are `NULL`).
          </li>
          <li>
            <b>RIGHT JOIN:</b> All records from the right table, with matches from the left table (non-matching left table rows are `NULL`).
          </li>
          <li>
            <b>FULL OUTER JOIN:</b> All records from both tables, with `NULL` where no match exists.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use `INNER JOIN` when you only need matching records.</li>
          <li>Use `LEFT JOIN` or `RIGHT JOIN` for cases where one table might not have matching records.</li>
          <li>Be cautious with `FULL OUTER JOIN` on large datasets, as it can produce large result sets.</li>
          <li>Always specify the join condition explicitly (`ON table1.column = table2.column`).</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Joins combine data from two or more tables based on related columns.</li>
          <li>`INNER JOIN` retrieves matching rows from both tables.</li>
          <li>`LEFT JOIN` retrieves all rows from the left table, including unmatched rows.</li>
          <li>`RIGHT JOIN` retrieves all rows from the right table, including unmatched rows.</li>
          <li>`FULL OUTER JOIN` retrieves all rows from both tables, with `NULL` for unmatched rows.</li>
        </ul>

        <Bottom back="/sql/sql-functions" next="/sql/advanced-filtering" />
      </div>
    </div>
  );
};

export default JoinsBasics;
