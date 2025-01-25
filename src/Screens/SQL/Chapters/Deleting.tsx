import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DeletingData = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Deleting Data</div>
        <div className="description">
          The `DELETE` statement is used to remove records from a table in SQL. This chapter explains how to delete specific rows, multiple rows, and all rows using the `DELETE`
          statement, along with best practices.
        </div>

        <div className="subHeader">Basic Syntax</div>
        <div className="description">The basic syntax for the `DELETE` statement is:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DELETE FROM table_name
WHERE condition;`}</Code>
        <div className="description">
          - <b>`table_name`:</b> The table from which data is to be deleted.
          <br />- <b>`condition`:</b> Specifies which rows to delete. Omitting it will delete all rows (use with caution).
        </div>

        <div className="subHeader">Example: Deleting a Specific Row</div>
        <div className="description">To delete an employee with `employee_id` 1 from the `employees` table:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DELETE FROM employees
WHERE employee_id = 1;`}</Code>
        <div className="description">This removes the row where `employee_id` equals 1.</div>

        <div className="subHeader">Deleting Multiple Rows</div>
        <div className="description">To delete multiple rows, modify the `WHERE` condition. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DELETE FROM employees
WHERE department = 'HR';`}</Code>
        <div className="description">This removes all employees in the "HR" department.</div>

        <div className="subHeader">Deleting All Rows</div>
        <div className="description">To delete all rows in a table, omit the `WHERE` clause. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DELETE FROM employees;`}</Code>
        <div className="description">
          <b>Important:</b> This deletes all rows in the `employees` table but keeps the table structure intact.
        </div>

        <div className="subHeader">Deleting Data with Subqueries</div>
        <div className="description">Use subqueries in the `WHERE` clause to delete data dynamically. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DELETE FROM employees
WHERE department_id IN (
  SELECT department_id
  FROM departments
  WHERE department_name = 'Obsolete'
);`}</Code>
        <div className="description">This deletes employees belonging to departments marked as "Obsolete."</div>

        <div className="subHeader">Difference Between DELETE and TRUNCATE</div>
        <div className="description">
          - <b>`DELETE`:</b> Removes specific rows based on a condition. Can be rolled back if wrapped in a transaction.
          <br />- <b>`TRUNCATE`:</b> Removes all rows from a table but cannot be rolled back. Faster than `DELETE`.
        </div>
        <Code language="sql" style={materialDark} showLineNumbers>{`TRUNCATE TABLE employees;`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always use a `WHERE` clause to avoid accidental deletion of all rows.</li>
          <li>Test your `WHERE` condition with a `SELECT` query before executing the `DELETE` statement.</li>
          <li>Back up your database before performing bulk deletions.</li>
          <li>Use `TRUNCATE` instead of `DELETE` when you need to clear all rows quickly.</li>
          <li>Combine deletions with transactions (`BEGIN`, `COMMIT`, `ROLLBACK`) for better control.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>The `DELETE` statement removes rows from a table based on a condition.</li>
          <li>Omitting the `WHERE` clause deletes all rows in the table (use cautiously).</li>
          <li>`DELETE` is for selective deletions, while `TRUNCATE` is for clearing all rows.</li>
          <li>Best practices, such as testing and backups, help prevent data loss.</li>
        </ul>

        <Bottom back="/sql/updating-data" next="/sql/basic-filtering" />
      </div>
    </div>
  );
};

export default DeletingData;
