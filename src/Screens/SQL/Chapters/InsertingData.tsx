import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const InsertingData = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Inserting Data</div>
        <div className="description">
          The `INSERT INTO` statement is used to add records to a table in SQL. This chapter covers the syntax, examples, and variations of the `INSERT` statement.
        </div>

        <div className="subHeader">Basic Syntax</div>
        <div className="description">The basic syntax for the `INSERT INTO` statement is:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);`}</Code>
        <div className="description">
          - <b>`table_name`:</b> The name of the table where data is being inserted.
          <br />- <b>`column1, column2`:</b> The columns in the table that will receive the values.
          <br />- <b>`value1, value2`:</b> The data to be inserted into the corresponding columns.
        </div>

        <div className="subHeader">Example: Inserting a Single Row</div>
        <div className="description">Suppose we have a table called `employees`:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  hire_date DATE,
  salary DECIMAL(10, 2)
);`}</Code>
        <div className="description">To insert a single record into the `employees` table:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`INSERT INTO employees (employee_id, first_name, last_name, hire_date, salary)
VALUES (1, 'John', 'Doe', '2025-01-01', 50000.00);`}</Code>

        <div className="subHeader">Inserting Multiple Rows</div>
        <div className="description">You can insert multiple rows in a single query by providing multiple sets of values:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`INSERT INTO employees (employee_id, first_name, last_name, hire_date, salary)
VALUES 
  (2, 'Jane', 'Smith', '2025-02-01', 60000.00),
  (3, 'Alice', 'Johnson', '2025-03-01', 70000.00),
  (4, 'Bob', 'Brown', '2025-04-01', 55000.00);`}</Code>

        <div className="subHeader">Inserting Data into Specific Columns</div>
        <div className="description">If some columns can accept default values or allow `NULL`, you can omit them in the `INSERT` statement:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`INSERT INTO employees (employee_id, first_name, last_name)
VALUES (5, 'Chris', 'Taylor');`}</Code>
        <div className="description">In this case, the `hire_date` and `salary` columns will use their default values or remain `NULL`.</div>

        <div className="subHeader">Inserting Data Without Specifying Columns</div>
        <div className="description">If you want to insert data into all columns, you can omit the column list:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`INSERT INTO employees
VALUES (6, 'Emma', 'Wilson', '2025-05-01', 60000.00);`}</Code>
        <div className="description">
          <b>Note:</b> The values must match the table's column order exactly.
        </div>

        <div className="subHeader">Inserting Data with a Subquery</div>
        <div className="description">You can insert data into a table using the results of a query from another table:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`INSERT INTO archived_employees (employee_id, first_name, last_name, hire_date, salary)
SELECT employee_id, first_name, last_name, hire_date, salary
FROM employees
WHERE salary > 60000;`}</Code>
        <div className="description">This inserts all employees with a salary greater than 60,000 into the `archived_employees` table.</div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always specify the column names in the `INSERT` statement for clarity and to avoid errors.</li>
          <li>Ensure the values match the data type of the corresponding columns.</li>
          <li>Validate data before inserting it to prevent duplicate or invalid records.</li>
          <li>Use transactions (`BEGIN`, `COMMIT`, `ROLLBACK`) for bulk inserts to ensure consistency.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>The `INSERT INTO` statement is used to add records to a table.</li>
          <li>Data can be inserted into specific columns or all columns of a table.</li>
          <li>Subqueries can be used to insert data based on existing data in another table.</li>
          <li>Following best practices ensures data integrity and minimizes errors during inserts.</li>
        </ul>

        <Bottom back="/sql/creating-databases-and-tables" next="/sql/selecting-data" />
      </div>
    </div>
  );
};

export default InsertingData;
