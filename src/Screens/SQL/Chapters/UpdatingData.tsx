import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const UpdatingData = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Updating Data</div>
        <div className="description">
          The `UPDATE` statement is used to modify existing records in a table. This chapter covers how to update single and multiple rows, along with best practices.
        </div>

        <div className="subHeader">Basic Syntax</div>
        <div className="description">The `UPDATE` statement follows this syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;`}</Code>
        <div className="description">
          - <b>`table_name`:</b> The table containing the records to update. <br />- <b>`SET`:</b> Specifies the columns and their new values. <br />- <b>`WHERE`:</b> Filters which
          rows to update (omit carefully, as it updates all rows).
        </div>

        <div className="subHeader">Example: Updating a Single Row</div>
        <div className="description">Update the salary of an employee with `employee_id` 1 in the `employees` table:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`UPDATE employees
SET salary = 55000
WHERE employee_id = 1;`}</Code>

        <div className="subHeader">Updating Multiple Rows</div>
        <div className="description">You can update multiple rows by modifying the condition in the `WHERE` clause. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`UPDATE employees
SET department = 'HR'
WHERE department = 'Human Resources';`}</Code>
        <div className="description">This updates all employees in the "Human Resources" department to "HR."</div>

        <div className="subHeader">Updating Multiple Columns</div>
        <div className="description">To update multiple columns, list them in the `SET` clause:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`UPDATE employees
SET first_name = 'John', last_name = 'Smith', salary = 60000
WHERE employee_id = 2;`}</Code>
        <div className="description">This updates the first name, last name, and salary of the employee with `employee_id` 2.</div>

        <div className="subHeader">Updating All Rows</div>
        <div className="description">Omitting the `WHERE` clause updates all rows in the table. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`UPDATE employees
SET salary = salary * 1.10;`}</Code>
        <div className="description">
          This increases the salary of all employees by 10%. <b>Use caution when omitting the `WHERE` clause.</b>
        </div>

        <div className="subHeader">Using Subqueries in UPDATE</div>
        <div className="description">Subqueries can be used to set values dynamically. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`UPDATE employees
SET department = (
  SELECT department_name
  FROM departments
  WHERE department_id = employees.department_id
)
WHERE department_id IS NOT NULL;`}</Code>
        <div className="description">This updates the `department` column in the `employees` table based on the `departments` table.</div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always use a `WHERE` clause to avoid unintentional updates to all rows.</li>
          <li>Test the `WHERE` condition with a `SELECT` statement before running the `UPDATE` statement.</li>
          <li>Back up your database before making significant updates.</li>
          <li>Use transactions (`BEGIN`, `COMMIT`, `ROLLBACK`) for large updates to ensure data consistency.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>The `UPDATE` statement modifies existing records in a table.</li>
          <li>Use the `WHERE` clause to specify which rows to update.</li>
          <li>Multiple columns and rows can be updated in a single query.</li>
          <li>Always test and validate queries to avoid unintentional changes.</li>
        </ul>

        <Bottom back="/sql/selecting-data" next="/sql/deleting-data" />
      </div>
    </div>
  );
};

export default UpdatingData;
